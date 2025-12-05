import https from 'https';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OPENAPI_URL = 'https://bot.e-replika.ru/openapi.json';
const OUTPUT_DIR = join(__dirname, '../src/generated');
const TEMP_SPEC_FILE = join(__dirname, '../openapi-filtered.json');

// Функция для скачивания файла
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

// Маппинг кириллических тегов на латинские для правильной генерации API классов
const TAG_MAPPING = {
  'Цели': 'Goals',
  'Тасбих': 'Tasbih',
  'Азкары': 'Azkar',
  'Аутентификация': 'Auth',
  'Пользователи': 'Users',
  'Подписки': 'Subscriptions',
  'Каталог': 'Catalog',
  'Библиотека': 'Library',
  'Отчеты': 'Reports',
  'Уведомления': 'Notifications',
  'Привычки': 'Habits',
  'Достижения': 'Achievements',
  'Дуа': 'Duas',
  'Салаваты': 'Salawat',
  'Калима': 'Kalima',
  'Уроки арабского': 'ArabicLessons',
};

// Функция для замены кириллических тегов на латинские
function normalizeTags(spec) {
  if (spec.paths) {
    Object.keys(spec.paths).forEach(path => {
      Object.values(spec.paths[path]).forEach(method => {
        if (method.tags && Array.isArray(method.tags)) {
          method.tags = method.tags.map(tag => {
            const normalizedTag = TAG_MAPPING[tag] || tag;
            if (normalizedTag !== tag) {
              console.log(`Normalizing tag: "${tag}" -> "${normalizedTag}"`);
            }
            return normalizedTag;
          });
        }
      });
    });
  }
  
  // Также обновляем теги в секции tags
  if (spec.tags && Array.isArray(spec.tags)) {
    spec.tags = spec.tags.map(tag => {
      if (typeof tag === 'string') {
        const normalizedTag = TAG_MAPPING[tag] || tag;
        return normalizedTag;
      } else if (tag && tag.name) {
        const normalizedName = TAG_MAPPING[tag.name] || tag.name;
        return { ...tag, name: normalizedName };
      }
      return tag;
    });
  }
}

// Функция для фильтрации спецификации
function filterOpenAPISpec(inputPath, outputPath) {
  const spec = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  
  // Нормализуем теги (заменяем кириллицу на латиницу)
  console.log('Normalizing tags (replacing Cyrillic with Latin)...');
  normalizeTags(spec);
  
  // Удаляем эндпоинты text-analysis
  if (spec.paths) {
    Object.keys(spec.paths).forEach(path => {
      if (path.includes('/text-analysis')) {
        console.log(`Removing endpoint: ${path}`);
        delete spec.paths[path];
      }
    });
  }
  
  // Удаляем компоненты, связанные с text-analysis, если они есть
  if (spec.components && spec.components.schemas) {
    Object.keys(spec.components.schemas).forEach(schemaName => {
      if (schemaName.toLowerCase().includes('textanalysis') || 
          schemaName.toLowerCase().includes('text-analysis')) {
        console.log(`Removing schema: ${schemaName}`);
        delete spec.components.schemas[schemaName];
      }
    });
  }
  
  // Удаляем теги text-analysis
  if (spec.tags) {
    spec.tags = spec.tags.filter(tag => {
      const tagName = typeof tag === 'string' ? tag : (tag?.name || '');
      return !tagName.toLowerCase().includes('text-analysis');
    });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(spec, null, 2), 'utf8');
  console.log(`Filtered OpenAPI spec saved to: ${outputPath}`);
}

// Основная функция
async function main() {
  try {
    console.log('Downloading OpenAPI specification...');
    await downloadFile(OPENAPI_URL, TEMP_SPEC_FILE);
    
    console.log('Filtering and normalizing OpenAPI specification...');
    filterOpenAPISpec(TEMP_SPEC_FILE, TEMP_SPEC_FILE);
    
    console.log('Generating API client...');
    // Экранируем пути для Windows
    const escapedSpecFile = TEMP_SPEC_FILE.replace(/\\/g, '/');
    const escapedOutputDir = OUTPUT_DIR.replace(/\\/g, '/');
    const command = `openapi-generator-cli generate -i "${escapedSpecFile}" -g typescript-fetch -o "${escapedOutputDir}" --additional-properties=typescriptThreePlus=true,supportsES6=true,withInterfaces=true,enumPropertyNaming=original`;
    
    execSync(command, { stdio: 'inherit', shell: true });
    
    console.log('Cleaning up temporary file...');
    fs.unlinkSync(TEMP_SPEC_FILE);
    
    console.log('✅ API client generated successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    // Удаляем временный файл в случае ошибки
    if (fs.existsSync(TEMP_SPEC_FILE)) {
      fs.unlinkSync(TEMP_SPEC_FILE);
    }
    process.exit(1);
  }
}

main();

