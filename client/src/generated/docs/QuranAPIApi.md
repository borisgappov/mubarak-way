# QuranAPIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminClearCacheApiV1QuranAdminClearCachePost**](QuranAPIApi.md#adminclearcacheapiv1quranadminclearcachepost) | **POST** /api/v1/quran/admin/clear-cache | Admin Clear Cache |
| [**adminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGet**](QuranAPIApi.md#adminelasticsearchstatsapiv1quranadminelasticsearchstatsget) | **GET** /api/v1/quran/admin/elasticsearch/stats | Admin Elasticsearch Stats |
| [**adminHealthApiV1QuranAdminHealthGet**](QuranAPIApi.md#adminhealthapiv1quranadminhealthget) | **GET** /api/v1/quran/admin/health | Admin Health |
| [**adminSearchApiV1QuranAdminSearchGet**](QuranAPIApi.md#adminsearchapiv1quranadminsearchget) | **GET** /api/v1/quran/admin/search | Admin Search |
| [**adminStatsApiV1QuranAdminStatsGet**](QuranAPIApi.md#adminstatsapiv1quranadminstatsget) | **GET** /api/v1/quran/admin/stats | Admin Stats |
| [**adminStatusApiV1QuranAdminStatusGet**](QuranAPIApi.md#adminstatusapiv1quranadminstatusget) | **GET** /api/v1/quran/admin/status | Admin Status |
| [**clearCacheApiV1QuranAdminCacheClearPost**](QuranAPIApi.md#clearcacheapiv1quranadmincacheclearpost) | **POST** /api/v1/quran/admin/cache/clear | Clear Cache |
| [**crossPlatformSearchApiV1QuranSearchCrossPlatformGet**](QuranAPIApi.md#crossplatformsearchapiv1quransearchcrossplatformget) | **GET** /api/v1/quran/search/cross-platform | Cross Platform Search |
| [**getAudioFileApiV1QuranAudioFilenameGet**](QuranAPIApi.md#getaudiofileapiv1quranaudiofilenameget) | **GET** /api/v1/quran/audio/{filename} | Get Audio File |
| [**getAudioUrlApiV1QuranVersesSurahIdVerseIdAudioGet**](QuranAPIApi.md#getaudiourlapiv1quranversessurahidverseidaudioget) | **GET** /api/v1/quran/verses/{surah_id}/{verse_id}/audio | Get Audio Url |
| [**getCacheStatsApiV1QuranAdminCacheStatsGet**](QuranAPIApi.md#getcachestatsapiv1quranadmincachestatsget) | **GET** /api/v1/quran/admin/cache/stats | Get Cache Stats |
| [**getJuzApiV1QuranJuzJuzNumberGet**](QuranAPIApi.md#getjuzapiv1quranjuzjuznumberget) | **GET** /api/v1/quran/juz/{juz_number} | Get Juz |
| [**getJuzsApiV1QuranJuzsGet**](QuranAPIApi.md#getjuzsapiv1quranjuzsget) | **GET** /api/v1/quran/juzs | Get Juzs |
| [**getRecitersApiV1QuranRecitersGet**](QuranAPIApi.md#getrecitersapiv1quranrecitersget) | **GET** /api/v1/quran/reciters | Get Reciters |
| [**getSurahApiV1QuranSurahsSurahIdGet**](QuranAPIApi.md#getsurahapiv1quransurahssurahidget) | **GET** /api/v1/quran/surahs/{surah_id} | Get Surah |
| [**getSurahsApiV1QuranSurahsGet**](QuranAPIApi.md#getsurahsapiv1quransurahsget) | **GET** /api/v1/quran/surahs | Get Surahs |
| [**getTafsirApiV1QuranVersesSurahIdVerseIdTafsirGet**](QuranAPIApi.md#gettafsirapiv1quranversessurahidverseidtafsirget) | **GET** /api/v1/quran/verses/{surah_id}/{verse_id}/tafsir | Get Tafsir |
| [**getVerseApiV1QuranVersesSurahIdVerseIdGet**](QuranAPIApi.md#getverseapiv1quranversessurahidverseidget) | **GET** /api/v1/quran/verses/{surah_id}/{verse_id} | Get Verse |
| [**getVersesApiV1QuranSurahsSurahIdVersesGet**](QuranAPIApi.md#getversesapiv1quransurahssurahidversesget) | **GET** /api/v1/quran/surahs/{surah_id}/verses | Get Verses |
| [**searchApiV1QuranSearchGet**](QuranAPIApi.md#searchapiv1quransearchget) | **GET** /api/v1/quran/search | Search |
| [**semanticSearchApiV1QuranSearchSemanticGet**](QuranAPIApi.md#semanticsearchapiv1quransearchsemanticget) | **GET** /api/v1/quran/search/semantic | Semantic Search |



## adminClearCacheApiV1QuranAdminClearCachePost

> any adminClearCacheApiV1QuranAdminClearCachePost()

Admin Clear Cache

Очистить кэш Quran API

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { AdminClearCacheApiV1QuranAdminClearCachePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.adminClearCacheApiV1QuranAdminClearCachePost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGet

> any adminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGet()

Admin Elasticsearch Stats

Получить статистику Elasticsearch

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { AdminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.adminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminHealthApiV1QuranAdminHealthGet

> any adminHealthApiV1QuranAdminHealthGet()

Admin Health

Проверка здоровья Quran API

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { AdminHealthApiV1QuranAdminHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.adminHealthApiV1QuranAdminHealthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminSearchApiV1QuranAdminSearchGet

> any adminSearchApiV1QuranAdminSearchGet(query, limit)

Admin Search

Тестовый поиск для админ-панели

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { AdminSearchApiV1QuranAdminSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string
    query: query_example,
    // number (optional)
    limit: 56,
  } satisfies AdminSearchApiV1QuranAdminSearchGetRequest;

  try {
    const data = await api.adminSearchApiV1QuranAdminSearchGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **query** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminStatsApiV1QuranAdminStatsGet

> any adminStatsApiV1QuranAdminStatsGet()

Admin Stats

Получить статистику Quran API

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { AdminStatsApiV1QuranAdminStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.adminStatsApiV1QuranAdminStatsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## adminStatusApiV1QuranAdminStatusGet

> any adminStatusApiV1QuranAdminStatusGet()

Admin Status

Получить статус всех компонентов Quran API

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { AdminStatusApiV1QuranAdminStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.adminStatusApiV1QuranAdminStatusGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clearCacheApiV1QuranAdminCacheClearPost

> any clearCacheApiV1QuranAdminCacheClearPost(pattern)

Clear Cache

Очистить кэш

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { ClearCacheApiV1QuranAdminCacheClearPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | Паттерн для очистки (optional)
    pattern: pattern_example,
  } satisfies ClearCacheApiV1QuranAdminCacheClearPostRequest;

  try {
    const data = await api.clearCacheApiV1QuranAdminCacheClearPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pattern** | `string` | Паттерн для очистки | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## crossPlatformSearchApiV1QuranSearchCrossPlatformGet

> { [key: string]: Array&lt;{ [key: string]: any; }&gt;; } crossPlatformSearchApiV1QuranSearchCrossPlatformGet(q, language, limit)

Cross Platform Search

Перекрестный поиск по всем источникам

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { CrossPlatformSearchApiV1QuranSearchCrossPlatformGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | Поисковый запрос
    q: q_example,
    // string | Язык поиска (optional)
    language: language_example,
    // number | Количество результатов (optional)
    limit: 56,
  } satisfies CrossPlatformSearchApiV1QuranSearchCrossPlatformGetRequest;

  try {
    const data = await api.crossPlatformSearchApiV1QuranSearchCrossPlatformGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | `string` | Поисковый запрос | [Defaults to `undefined`] |
| **language** | `string` | Язык поиска | [Optional] [Defaults to `&#39;en&#39;`] |
| **limit** | `number` | Количество результатов | [Optional] [Defaults to `20`] |

### Return type

**{ [key: string]: Array<{ [key: string]: any; }>; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAudioFileApiV1QuranAudioFilenameGet

> any getAudioFileApiV1QuranAudioFilenameGet(filename)

Get Audio File

Получить локальный аудио файл аята с автоматическим скачиванием

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetAudioFileApiV1QuranAudioFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string
    filename: filename_example,
  } satisfies GetAudioFileApiV1QuranAudioFilenameGetRequest;

  try {
    const data = await api.getAudioFileApiV1QuranAudioFilenameGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filename** | `string` |  | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAudioUrlApiV1QuranVersesSurahIdVerseIdAudioGet

> any getAudioUrlApiV1QuranVersesSurahIdVerseIdAudioGet(surahId, verseId, reciterId)

Get Audio Url

Получить URL аудио файла

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetAudioUrlApiV1QuranVersesSurahIdVerseIdAudioGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | ID суры
    surahId: surahId_example,
    // string | ID аята
    verseId: verseId_example,
    // string | ID чтеца (optional)
    reciterId: reciterId_example,
  } satisfies GetAudioUrlApiV1QuranVersesSurahIdVerseIdAudioGetRequest;

  try {
    const data = await api.getAudioUrlApiV1QuranVersesSurahIdVerseIdAudioGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **surahId** | `string` | ID суры | [Defaults to `undefined`] |
| **verseId** | `string` | ID аята | [Defaults to `undefined`] |
| **reciterId** | `string` | ID чтеца | [Optional] [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCacheStatsApiV1QuranAdminCacheStatsGet

> any getCacheStatsApiV1QuranAdminCacheStatsGet()

Get Cache Stats

Получить статистику кэша

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetCacheStatsApiV1QuranAdminCacheStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.getCacheStatsApiV1QuranAdminCacheStatsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJuzApiV1QuranJuzJuzNumberGet

> { [key: string]: any; } getJuzApiV1QuranJuzJuzNumberGet(juzNumber, language, edition)

Get Juz

Получить конкретный джуз

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetJuzApiV1QuranJuzJuzNumberGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // number | Номер джуза (1-30)
    juzNumber: 56,
    // string | Язык ответа (optional)
    language: language_example,
    // string | Издание Корана (optional)
    edition: edition_example,
  } satisfies GetJuzApiV1QuranJuzJuzNumberGetRequest;

  try {
    const data = await api.getJuzApiV1QuranJuzJuzNumberGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **juzNumber** | `number` | Номер джуза (1-30) | [Defaults to `undefined`] |
| **language** | `string` | Язык ответа | [Optional] [Defaults to `&#39;en&#39;`] |
| **edition** | `string` | Издание Корана | [Optional] [Defaults to `&#39;quran-uthmani&#39;`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getJuzsApiV1QuranJuzsGet

> Array&lt;{ [key: string]: any; }&gt; getJuzsApiV1QuranJuzsGet(language)

Get Juzs

Получить список всех джузов (1-30)

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetJuzsApiV1QuranJuzsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | Язык ответа (optional)
    language: language_example,
  } satisfies GetJuzsApiV1QuranJuzsGetRequest;

  try {
    const data = await api.getJuzsApiV1QuranJuzsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **language** | `string` | Язык ответа | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

**Array<{ [key: string]: any; }>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRecitersApiV1QuranRecitersGet

> Array&lt;ReciterResponse&gt; getRecitersApiV1QuranRecitersGet()

Get Reciters

Получить список чтецов

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetRecitersApiV1QuranRecitersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  try {
    const data = await api.getRecitersApiV1QuranRecitersGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ReciterResponse&gt;**](ReciterResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSurahApiV1QuranSurahsSurahIdGet

> SurahResponse getSurahApiV1QuranSurahsSurahIdGet(surahId, language)

Get Surah

Получить информацию о суре

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetSurahApiV1QuranSurahsSurahIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | ID суры
    surahId: surahId_example,
    // string | Язык ответа (optional)
    language: language_example,
  } satisfies GetSurahApiV1QuranSurahsSurahIdGetRequest;

  try {
    const data = await api.getSurahApiV1QuranSurahsSurahIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **surahId** | `string` | ID суры | [Defaults to `undefined`] |
| **language** | `string` | Язык ответа | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

[**SurahResponse**](SurahResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSurahsApiV1QuranSurahsGet

> Array&lt;SurahResponse&gt; getSurahsApiV1QuranSurahsGet(language)

Get Surahs

Получить список сур

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetSurahsApiV1QuranSurahsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | Язык ответа (optional)
    language: language_example,
  } satisfies GetSurahsApiV1QuranSurahsGetRequest;

  try {
    const data = await api.getSurahsApiV1QuranSurahsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **language** | `string` | Язык ответа | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

[**Array&lt;SurahResponse&gt;**](SurahResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTafsirApiV1QuranVersesSurahIdVerseIdTafsirGet

> any getTafsirApiV1QuranVersesSurahIdVerseIdTafsirGet(surahId, verseId, language)

Get Tafsir

Получить тафсир для аята

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetTafsirApiV1QuranVersesSurahIdVerseIdTafsirGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | ID суры
    surahId: surahId_example,
    // string | ID аята
    verseId: verseId_example,
    // string | Язык тафсира (optional)
    language: language_example,
  } satisfies GetTafsirApiV1QuranVersesSurahIdVerseIdTafsirGetRequest;

  try {
    const data = await api.getTafsirApiV1QuranVersesSurahIdVerseIdTafsirGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **surahId** | `string` | ID суры | [Defaults to `undefined`] |
| **verseId** | `string` | ID аята | [Defaults to `undefined`] |
| **language** | `string` | Язык тафсира | [Optional] [Defaults to `&#39;ru&#39;`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVerseApiV1QuranVersesSurahIdVerseIdGet

> VerseResponse getVerseApiV1QuranVersesSurahIdVerseIdGet(surahId, verseId, language)

Get Verse

Получить конкретный аят

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetVerseApiV1QuranVersesSurahIdVerseIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | ID суры
    surahId: surahId_example,
    // string | ID аята
    verseId: verseId_example,
    // string | Язык ответа (optional)
    language: language_example,
  } satisfies GetVerseApiV1QuranVersesSurahIdVerseIdGetRequest;

  try {
    const data = await api.getVerseApiV1QuranVersesSurahIdVerseIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **surahId** | `string` | ID суры | [Defaults to `undefined`] |
| **verseId** | `string` | ID аята | [Defaults to `undefined`] |
| **language** | `string` | Язык ответа | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

[**VerseResponse**](VerseResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVersesApiV1QuranSurahsSurahIdVersesGet

> Array&lt;VerseResponse&gt; getVersesApiV1QuranSurahsSurahIdVersesGet(surahId, language, translationId)

Get Verses

Получить аяты суры

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { GetVersesApiV1QuranSurahsSurahIdVersesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | ID суры
    surahId: surahId_example,
    // string | Язык ответа (optional)
    language: language_example,
    // number | ID перевода (optional)
    translationId: 56,
  } satisfies GetVersesApiV1QuranSurahsSurahIdVersesGetRequest;

  try {
    const data = await api.getVersesApiV1QuranSurahsSurahIdVersesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **surahId** | `string` | ID суры | [Defaults to `undefined`] |
| **language** | `string` | Язык ответа | [Optional] [Defaults to `&#39;en&#39;`] |
| **translationId** | `number` | ID перевода | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;VerseResponse&gt;**](VerseResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchApiV1QuranSearchGet

> SearchResponse searchApiV1QuranSearchGet(q, language, limit)

Search

Поиск по тексту

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { SearchApiV1QuranSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | Поисковый запрос
    q: q_example,
    // string | Язык поиска (optional)
    language: language_example,
    // number | Количество результатов (optional)
    limit: 56,
  } satisfies SearchApiV1QuranSearchGetRequest;

  try {
    const data = await api.searchApiV1QuranSearchGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | `string` | Поисковый запрос | [Defaults to `undefined`] |
| **language** | `string` | Язык поиска | [Optional] [Defaults to `&#39;en&#39;`] |
| **limit** | `number` | Количество результатов | [Optional] [Defaults to `20`] |

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## semanticSearchApiV1QuranSearchSemanticGet

> SearchResponse semanticSearchApiV1QuranSearchSemanticGet(q, language, limit)

Semantic Search

Семантический поиск

### Example

```ts
import {
  Configuration,
  QuranAPIApi,
} from '';
import type { SemanticSearchApiV1QuranSearchSemanticGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuranAPIApi(config);

  const body = {
    // string | Поисковый запрос
    q: q_example,
    // string | Язык поиска (optional)
    language: language_example,
    // number | Количество результатов (optional)
    limit: 56,
  } satisfies SemanticSearchApiV1QuranSearchSemanticGetRequest;

  try {
    const data = await api.semanticSearchApiV1QuranSearchSemanticGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | `string` | Поисковый запрос | [Defaults to `undefined`] |
| **language** | `string` | Язык поиска | [Optional] [Defaults to `&#39;en&#39;`] |
| **limit** | `number` | Количество результатов | [Optional] [Defaults to `20`] |

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

