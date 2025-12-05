# KnowledgeApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createEntryApiV1KnowledgeEntriesPost**](KnowledgeApi.md#createentryapiv1knowledgeentriespost) | **POST** /api/v1/knowledge/entries | Create Entry |
| [**createExampleApiV1KnowledgeExamplesPost**](KnowledgeApi.md#createexampleapiv1knowledgeexamplespost) | **POST** /api/v1/knowledge/examples | Create Example |
| [**createMediaApiV1KnowledgeMediaPost**](KnowledgeApi.md#createmediaapiv1knowledgemediapost) | **POST** /api/v1/knowledge/media | Create Media |
| [**createSourceApiV1KnowledgeSourcesPost**](KnowledgeApi.md#createsourceapiv1knowledgesourcespost) | **POST** /api/v1/knowledge/sources | Create Source |
| [**createTranslationApiV1KnowledgeTranslationsPost**](KnowledgeApi.md#createtranslationapiv1knowledgetranslationspost) | **POST** /api/v1/knowledge/translations | Create Translation |
| [**deleteEntryApiV1KnowledgeEntriesEntryIdDelete**](KnowledgeApi.md#deleteentryapiv1knowledgeentriesentryiddelete) | **DELETE** /api/v1/knowledge/entries/{entry_id} | Delete Entry |
| [**getCategoryStatsApiV1KnowledgeStatsCategoriesGet**](KnowledgeApi.md#getcategorystatsapiv1knowledgestatscategoriesget) | **GET** /api/v1/knowledge/stats/categories | Get Category Stats |
| [**getContextKnowledgeApiV1KnowledgeContextContextTypeContextIdGet**](KnowledgeApi.md#getcontextknowledgeapiv1knowledgecontextcontexttypecontextidget) | **GET** /api/v1/knowledge/context/{context_type}/{context_id} | Get Context Knowledge |
| [**getDifficultyStatsApiV1KnowledgeStatsDifficultyGet**](KnowledgeApi.md#getdifficultystatsapiv1knowledgestatsdifficultyget) | **GET** /api/v1/knowledge/stats/difficulty | Get Difficulty Stats |
| [**getEntriesApiV1KnowledgeEntriesGet**](KnowledgeApi.md#getentriesapiv1knowledgeentriesget) | **GET** /api/v1/knowledge/entries | Get Entries |
| [**getEntriesByCategoryApiV1KnowledgeEntriesCategoryCategoryGet**](KnowledgeApi.md#getentriesbycategoryapiv1knowledgeentriescategorycategoryget) | **GET** /api/v1/knowledge/entries/category/{category} | Get Entries By Category |
| [**getEntriesByDifficultyApiV1KnowledgeEntriesDifficultyDifficultyLevelGet**](KnowledgeApi.md#getentriesbydifficultyapiv1knowledgeentriesdifficultydifficultylevelget) | **GET** /api/v1/knowledge/entries/difficulty/{difficulty_level} | Get Entries By Difficulty |
| [**getEntriesByImportanceApiV1KnowledgeEntriesImportanceMinImportanceGet**](KnowledgeApi.md#getentriesbyimportanceapiv1knowledgeentriesimportanceminimportanceget) | **GET** /api/v1/knowledge/entries/importance/{min_importance} | Get Entries By Importance |
| [**getEntriesByTypeApiV1KnowledgeEntriesTypeEntryTypeGet**](KnowledgeApi.md#getentriesbytypeapiv1knowledgeentriestypeentrytypeget) | **GET** /api/v1/knowledge/entries/type/{entry_type} | Get Entries By Type |
| [**getEntryApiV1KnowledgeEntriesEntryIdGet**](KnowledgeApi.md#getentryapiv1knowledgeentriesentryidget) | **GET** /api/v1/knowledge/entries/{entry_id} | Get Entry |
| [**getEntryByArabicTermApiV1KnowledgeEntriesByTermTermArabicGet**](KnowledgeApi.md#getentrybyarabictermapiv1knowledgeentriesbytermtermarabicget) | **GET** /api/v1/knowledge/entries/by-term/{term_arabic} | Get Entry By Arabic Term |
| [**getEntryByTransliterationApiV1KnowledgeEntriesByTransliterationTransliterationGet**](KnowledgeApi.md#getentrybytransliterationapiv1knowledgeentriesbytransliterationtransliterationget) | **GET** /api/v1/knowledge/entries/by-transliteration/{transliteration} | Get Entry By Transliteration |
| [**getEntryFullInfoApiV1KnowledgeEntriesEntryIdFullGet**](KnowledgeApi.md#getentryfullinfoapiv1knowledgeentriesentryidfullget) | **GET** /api/v1/knowledge/entries/{entry_id}/full | Get Entry Full Info |
| [**getExamplesByEntryApiV1KnowledgeEntriesEntryIdExamplesGet**](KnowledgeApi.md#getexamplesbyentryapiv1knowledgeentriesentryidexamplesget) | **GET** /api/v1/knowledge/entries/{entry_id}/examples | Get Examples By Entry |
| [**getMediaByEntryApiV1KnowledgeEntriesEntryIdMediaGet**](KnowledgeApi.md#getmediabyentryapiv1knowledgeentriesentryidmediaget) | **GET** /api/v1/knowledge/entries/{entry_id}/media | Get Media By Entry |
| [**getMediaByTypeApiV1KnowledgeEntriesEntryIdMediaMediaTypeGet**](KnowledgeApi.md#getmediabytypeapiv1knowledgeentriesentryidmediamediatypeget) | **GET** /api/v1/knowledge/entries/{entry_id}/media/{media_type} | Get Media By Type |
| [**getRandomEntryApiV1KnowledgeEntriesRandomGet**](KnowledgeApi.md#getrandomentryapiv1knowledgeentriesrandomget) | **GET** /api/v1/knowledge/entries/random | Get Random Entry |
| [**getSourcesByEntryApiV1KnowledgeEntriesEntryIdSourcesGet**](KnowledgeApi.md#getsourcesbyentryapiv1knowledgeentriesentryidsourcesget) | **GET** /api/v1/knowledge/entries/{entry_id}/sources | Get Sources By Entry |
| [**getSourcesByTypeApiV1KnowledgeEntriesEntryIdSourcesSourceTypeGet**](KnowledgeApi.md#getsourcesbytypeapiv1knowledgeentriesentryidsourcessourcetypeget) | **GET** /api/v1/knowledge/entries/{entry_id}/sources/{source_type} | Get Sources By Type |
| [**getTotalCountApiV1KnowledgeStatsTotalGet**](KnowledgeApi.md#gettotalcountapiv1knowledgestatstotalget) | **GET** /api/v1/knowledge/stats/total | Get Total Count |
| [**getTranslationByLanguageApiV1KnowledgeEntriesEntryIdTranslationsLanguageGet**](KnowledgeApi.md#gettranslationbylanguageapiv1knowledgeentriesentryidtranslationslanguageget) | **GET** /api/v1/knowledge/entries/{entry_id}/translations/{language} | Get Translation By Language |
| [**getTranslationsByEntryApiV1KnowledgeEntriesEntryIdTranslationsGet**](KnowledgeApi.md#gettranslationsbyentryapiv1knowledgeentriesentryidtranslationsget) | **GET** /api/v1/knowledge/entries/{entry_id}/translations | Get Translations By Entry |
| [**getTypeStatsApiV1KnowledgeStatsTypesGet**](KnowledgeApi.md#gettypestatsapiv1knowledgestatstypesget) | **GET** /api/v1/knowledge/stats/types | Get Type Stats |
| [**healthCheckApiV1KnowledgeHealthGet**](KnowledgeApi.md#healthcheckapiv1knowledgehealthget) | **GET** /api/v1/knowledge/health | Health Check |
| [**searchEntriesApiV1KnowledgeSearchGet**](KnowledgeApi.md#searchentriesapiv1knowledgesearchget) | **GET** /api/v1/knowledge/search | Search Entries |
| [**searchEntriesPostApiV1KnowledgeSearchPost**](KnowledgeApi.md#searchentriespostapiv1knowledgesearchpost) | **POST** /api/v1/knowledge/search | Search Entries Post |
| [**semanticSearchApiV1KnowledgeSearchSemanticPost**](KnowledgeApi.md#semanticsearchapiv1knowledgesearchsemanticpost) | **POST** /api/v1/knowledge/search/semantic | Semantic Search |
| [**suggestTermsApiV1KnowledgeSuggestGet**](KnowledgeApi.md#suggesttermsapiv1knowledgesuggestget) | **GET** /api/v1/knowledge/suggest | Suggest Terms |
| [**updateEntryApiV1KnowledgeEntriesEntryIdPut**](KnowledgeApi.md#updateentryapiv1knowledgeentriesentryidput) | **PUT** /api/v1/knowledge/entries/{entry_id} | Update Entry |
| [**updateExampleApiV1KnowledgeExamplesExampleIdPut**](KnowledgeApi.md#updateexampleapiv1knowledgeexamplesexampleidput) | **PUT** /api/v1/knowledge/examples/{example_id} | Update Example |
| [**updateMediaApiV1KnowledgeMediaMediaIdPut**](KnowledgeApi.md#updatemediaapiv1knowledgemediamediaidput) | **PUT** /api/v1/knowledge/media/{media_id} | Update Media |
| [**updateSourceApiV1KnowledgeSourcesSourceIdPut**](KnowledgeApi.md#updatesourceapiv1knowledgesourcessourceidput) | **PUT** /api/v1/knowledge/sources/{source_id} | Update Source |
| [**updateTranslationApiV1KnowledgeTranslationsTranslationIdPut**](KnowledgeApi.md#updatetranslationapiv1knowledgetranslationstranslationidput) | **PUT** /api/v1/knowledge/translations/{translation_id} | Update Translation |



## createEntryApiV1KnowledgeEntriesPost

> any createEntryApiV1KnowledgeEntriesPost(requestBody)

Create Entry

Создать новую запись (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { CreateEntryApiV1KnowledgeEntriesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateEntryApiV1KnowledgeEntriesPostRequest;

  try {
    const data = await api.createEntryApiV1KnowledgeEntriesPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createExampleApiV1KnowledgeExamplesPost

> any createExampleApiV1KnowledgeExamplesPost(requestBody)

Create Example

Создать новый пример (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { CreateExampleApiV1KnowledgeExamplesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateExampleApiV1KnowledgeExamplesPostRequest;

  try {
    const data = await api.createExampleApiV1KnowledgeExamplesPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createMediaApiV1KnowledgeMediaPost

> any createMediaApiV1KnowledgeMediaPost(requestBody)

Create Media

Создать новую медиа запись (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { CreateMediaApiV1KnowledgeMediaPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateMediaApiV1KnowledgeMediaPostRequest;

  try {
    const data = await api.createMediaApiV1KnowledgeMediaPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSourceApiV1KnowledgeSourcesPost

> any createSourceApiV1KnowledgeSourcesPost(requestBody)

Create Source

Создать новый источник (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { CreateSourceApiV1KnowledgeSourcesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateSourceApiV1KnowledgeSourcesPostRequest;

  try {
    const data = await api.createSourceApiV1KnowledgeSourcesPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createTranslationApiV1KnowledgeTranslationsPost

> any createTranslationApiV1KnowledgeTranslationsPost(requestBody)

Create Translation

Создать новый перевод (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { CreateTranslationApiV1KnowledgeTranslationsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateTranslationApiV1KnowledgeTranslationsPostRequest;

  try {
    const data = await api.createTranslationApiV1KnowledgeTranslationsPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteEntryApiV1KnowledgeEntriesEntryIdDelete

> any deleteEntryApiV1KnowledgeEntriesEntryIdDelete(entryId)

Delete Entry

Удалить запись (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { DeleteEntryApiV1KnowledgeEntriesEntryIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteEntryApiV1KnowledgeEntriesEntryIdDeleteRequest;

  try {
    const data = await api.deleteEntryApiV1KnowledgeEntriesEntryIdDelete(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getCategoryStatsApiV1KnowledgeStatsCategoriesGet

> any getCategoryStatsApiV1KnowledgeStatsCategoriesGet()

Get Category Stats

Получить статистику по категориям

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetCategoryStatsApiV1KnowledgeStatsCategoriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  try {
    const data = await api.getCategoryStatsApiV1KnowledgeStatsCategoriesGet();
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


## getContextKnowledgeApiV1KnowledgeContextContextTypeContextIdGet

> any getContextKnowledgeApiV1KnowledgeContextContextTypeContextIdGet(contextType, contextId)

Get Context Knowledge

Получить знания для контекста

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetContextKnowledgeApiV1KnowledgeContextContextTypeContextIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    contextType: contextType_example,
    // string
    contextId: contextId_example,
  } satisfies GetContextKnowledgeApiV1KnowledgeContextContextTypeContextIdGetRequest;

  try {
    const data = await api.getContextKnowledgeApiV1KnowledgeContextContextTypeContextIdGet(body);
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
| **contextType** | `string` |  | [Defaults to `undefined`] |
| **contextId** | `string` |  | [Defaults to `undefined`] |

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


## getDifficultyStatsApiV1KnowledgeStatsDifficultyGet

> any getDifficultyStatsApiV1KnowledgeStatsDifficultyGet()

Get Difficulty Stats

Получить статистику по сложности

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetDifficultyStatsApiV1KnowledgeStatsDifficultyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  try {
    const data = await api.getDifficultyStatsApiV1KnowledgeStatsDifficultyGet();
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


## getEntriesApiV1KnowledgeEntriesGet

> any getEntriesApiV1KnowledgeEntriesGet(entryType, category, difficultyLevel, isActive, limit, offset)

Get Entries

Получить список записей базы знаний

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntriesApiV1KnowledgeEntriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string (optional)
    entryType: entryType_example,
    // string (optional)
    category: category_example,
    // string (optional)
    difficultyLevel: difficultyLevel_example,
    // boolean (optional)
    isActive: true,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetEntriesApiV1KnowledgeEntriesGetRequest;

  try {
    const data = await api.getEntriesApiV1KnowledgeEntriesGet(body);
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
| **entryType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **difficultyLevel** | `string` |  | [Optional] [Defaults to `undefined`] |
| **isActive** | `boolean` |  | [Optional] [Defaults to `true`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

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


## getEntriesByCategoryApiV1KnowledgeEntriesCategoryCategoryGet

> any getEntriesByCategoryApiV1KnowledgeEntriesCategoryCategoryGet(category, limit)

Get Entries By Category

Получить записи по категории

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntriesByCategoryApiV1KnowledgeEntriesCategoryCategoryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    category: category_example,
    // number (optional)
    limit: 56,
  } satisfies GetEntriesByCategoryApiV1KnowledgeEntriesCategoryCategoryGetRequest;

  try {
    const data = await api.getEntriesByCategoryApiV1KnowledgeEntriesCategoryCategoryGet(body);
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
| **category** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getEntriesByDifficultyApiV1KnowledgeEntriesDifficultyDifficultyLevelGet

> any getEntriesByDifficultyApiV1KnowledgeEntriesDifficultyDifficultyLevelGet(difficultyLevel, limit)

Get Entries By Difficulty

Получить записи по уровню сложности

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntriesByDifficultyApiV1KnowledgeEntriesDifficultyDifficultyLevelGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    difficultyLevel: difficultyLevel_example,
    // number (optional)
    limit: 56,
  } satisfies GetEntriesByDifficultyApiV1KnowledgeEntriesDifficultyDifficultyLevelGetRequest;

  try {
    const data = await api.getEntriesByDifficultyApiV1KnowledgeEntriesDifficultyDifficultyLevelGet(body);
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
| **difficultyLevel** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getEntriesByImportanceApiV1KnowledgeEntriesImportanceMinImportanceGet

> any getEntriesByImportanceApiV1KnowledgeEntriesImportanceMinImportanceGet(minImportance, limit)

Get Entries By Importance

Получить записи по важности

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntriesByImportanceApiV1KnowledgeEntriesImportanceMinImportanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // number
    minImportance: 56,
    // number (optional)
    limit: 56,
  } satisfies GetEntriesByImportanceApiV1KnowledgeEntriesImportanceMinImportanceGetRequest;

  try {
    const data = await api.getEntriesByImportanceApiV1KnowledgeEntriesImportanceMinImportanceGet(body);
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
| **minImportance** | `number` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getEntriesByTypeApiV1KnowledgeEntriesTypeEntryTypeGet

> any getEntriesByTypeApiV1KnowledgeEntriesTypeEntryTypeGet(entryType, limit)

Get Entries By Type

Получить записи по типу

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntriesByTypeApiV1KnowledgeEntriesTypeEntryTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryType: entryType_example,
    // number (optional)
    limit: 56,
  } satisfies GetEntriesByTypeApiV1KnowledgeEntriesTypeEntryTypeGetRequest;

  try {
    const data = await api.getEntriesByTypeApiV1KnowledgeEntriesTypeEntryTypeGet(body);
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
| **entryType** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getEntryApiV1KnowledgeEntriesEntryIdGet

> any getEntryApiV1KnowledgeEntriesEntryIdGet(entryId)

Get Entry

Получить запись по ID

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntryApiV1KnowledgeEntriesEntryIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetEntryApiV1KnowledgeEntriesEntryIdGetRequest;

  try {
    const data = await api.getEntryApiV1KnowledgeEntriesEntryIdGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getEntryByArabicTermApiV1KnowledgeEntriesByTermTermArabicGet

> any getEntryByArabicTermApiV1KnowledgeEntriesByTermTermArabicGet(termArabic)

Get Entry By Arabic Term

Получить запись по арабскому термину

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntryByArabicTermApiV1KnowledgeEntriesByTermTermArabicGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    termArabic: termArabic_example,
  } satisfies GetEntryByArabicTermApiV1KnowledgeEntriesByTermTermArabicGetRequest;

  try {
    const data = await api.getEntryByArabicTermApiV1KnowledgeEntriesByTermTermArabicGet(body);
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
| **termArabic** | `string` |  | [Defaults to `undefined`] |

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


## getEntryByTransliterationApiV1KnowledgeEntriesByTransliterationTransliterationGet

> any getEntryByTransliterationApiV1KnowledgeEntriesByTransliterationTransliterationGet(transliteration)

Get Entry By Transliteration

Получить запись по транслитерации

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntryByTransliterationApiV1KnowledgeEntriesByTransliterationTransliterationGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    transliteration: transliteration_example,
  } satisfies GetEntryByTransliterationApiV1KnowledgeEntriesByTransliterationTransliterationGetRequest;

  try {
    const data = await api.getEntryByTransliterationApiV1KnowledgeEntriesByTransliterationTransliterationGet(body);
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
| **transliteration** | `string` |  | [Defaults to `undefined`] |

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


## getEntryFullInfoApiV1KnowledgeEntriesEntryIdFullGet

> any getEntryFullInfoApiV1KnowledgeEntriesEntryIdFullGet(entryId)

Get Entry Full Info

Получить полную информацию о записи со всеми связанными данными

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetEntryFullInfoApiV1KnowledgeEntriesEntryIdFullGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetEntryFullInfoApiV1KnowledgeEntriesEntryIdFullGetRequest;

  try {
    const data = await api.getEntryFullInfoApiV1KnowledgeEntriesEntryIdFullGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getExamplesByEntryApiV1KnowledgeEntriesEntryIdExamplesGet

> any getExamplesByEntryApiV1KnowledgeEntriesEntryIdExamplesGet(entryId)

Get Examples By Entry

Получить примеры для записи

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetExamplesByEntryApiV1KnowledgeEntriesEntryIdExamplesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetExamplesByEntryApiV1KnowledgeEntriesEntryIdExamplesGetRequest;

  try {
    const data = await api.getExamplesByEntryApiV1KnowledgeEntriesEntryIdExamplesGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getMediaByEntryApiV1KnowledgeEntriesEntryIdMediaGet

> any getMediaByEntryApiV1KnowledgeEntriesEntryIdMediaGet(entryId)

Get Media By Entry

Получить медиа файлы для записи

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetMediaByEntryApiV1KnowledgeEntriesEntryIdMediaGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetMediaByEntryApiV1KnowledgeEntriesEntryIdMediaGetRequest;

  try {
    const data = await api.getMediaByEntryApiV1KnowledgeEntriesEntryIdMediaGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getMediaByTypeApiV1KnowledgeEntriesEntryIdMediaMediaTypeGet

> any getMediaByTypeApiV1KnowledgeEntriesEntryIdMediaMediaTypeGet(entryId, mediaType)

Get Media By Type

Получить медиа файлы определенного типа

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetMediaByTypeApiV1KnowledgeEntriesEntryIdMediaMediaTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    mediaType: mediaType_example,
  } satisfies GetMediaByTypeApiV1KnowledgeEntriesEntryIdMediaMediaTypeGetRequest;

  try {
    const data = await api.getMediaByTypeApiV1KnowledgeEntriesEntryIdMediaMediaTypeGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |
| **mediaType** | `string` |  | [Defaults to `undefined`] |

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


## getRandomEntryApiV1KnowledgeEntriesRandomGet

> any getRandomEntryApiV1KnowledgeEntriesRandomGet(category, entryType)

Get Random Entry

Получить случайную запись

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetRandomEntryApiV1KnowledgeEntriesRandomGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string (optional)
    category: category_example,
    // string (optional)
    entryType: entryType_example,
  } satisfies GetRandomEntryApiV1KnowledgeEntriesRandomGetRequest;

  try {
    const data = await api.getRandomEntryApiV1KnowledgeEntriesRandomGet(body);
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
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **entryType** | `string` |  | [Optional] [Defaults to `undefined`] |

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


## getSourcesByEntryApiV1KnowledgeEntriesEntryIdSourcesGet

> any getSourcesByEntryApiV1KnowledgeEntriesEntryIdSourcesGet(entryId)

Get Sources By Entry

Получить источники для записи

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetSourcesByEntryApiV1KnowledgeEntriesEntryIdSourcesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetSourcesByEntryApiV1KnowledgeEntriesEntryIdSourcesGetRequest;

  try {
    const data = await api.getSourcesByEntryApiV1KnowledgeEntriesEntryIdSourcesGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getSourcesByTypeApiV1KnowledgeEntriesEntryIdSourcesSourceTypeGet

> any getSourcesByTypeApiV1KnowledgeEntriesEntryIdSourcesSourceTypeGet(entryId, sourceType)

Get Sources By Type

Получить источники определенного типа

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetSourcesByTypeApiV1KnowledgeEntriesEntryIdSourcesSourceTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    sourceType: sourceType_example,
  } satisfies GetSourcesByTypeApiV1KnowledgeEntriesEntryIdSourcesSourceTypeGetRequest;

  try {
    const data = await api.getSourcesByTypeApiV1KnowledgeEntriesEntryIdSourcesSourceTypeGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |
| **sourceType** | `string` |  | [Defaults to `undefined`] |

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


## getTotalCountApiV1KnowledgeStatsTotalGet

> any getTotalCountApiV1KnowledgeStatsTotalGet()

Get Total Count

Получить общее количество активных записей

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetTotalCountApiV1KnowledgeStatsTotalGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  try {
    const data = await api.getTotalCountApiV1KnowledgeStatsTotalGet();
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


## getTranslationByLanguageApiV1KnowledgeEntriesEntryIdTranslationsLanguageGet

> any getTranslationByLanguageApiV1KnowledgeEntriesEntryIdTranslationsLanguageGet(entryId, language)

Get Translation By Language

Получить перевод на конкретном языке

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetTranslationByLanguageApiV1KnowledgeEntriesEntryIdTranslationsLanguageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    language: language_example,
  } satisfies GetTranslationByLanguageApiV1KnowledgeEntriesEntryIdTranslationsLanguageGetRequest;

  try {
    const data = await api.getTranslationByLanguageApiV1KnowledgeEntriesEntryIdTranslationsLanguageGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |
| **language** | `string` |  | [Defaults to `undefined`] |

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


## getTranslationsByEntryApiV1KnowledgeEntriesEntryIdTranslationsGet

> any getTranslationsByEntryApiV1KnowledgeEntriesEntryIdTranslationsGet(entryId)

Get Translations By Entry

Получить переводы для записи

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetTranslationsByEntryApiV1KnowledgeEntriesEntryIdTranslationsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetTranslationsByEntryApiV1KnowledgeEntriesEntryIdTranslationsGetRequest;

  try {
    const data = await api.getTranslationsByEntryApiV1KnowledgeEntriesEntryIdTranslationsGet(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |

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


## getTypeStatsApiV1KnowledgeStatsTypesGet

> any getTypeStatsApiV1KnowledgeStatsTypesGet()

Get Type Stats

Получить статистику по типам

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { GetTypeStatsApiV1KnowledgeStatsTypesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  try {
    const data = await api.getTypeStatsApiV1KnowledgeStatsTypesGet();
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


## healthCheckApiV1KnowledgeHealthGet

> any healthCheckApiV1KnowledgeHealthGet()

Health Check

Проверка здоровья API

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { HealthCheckApiV1KnowledgeHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  try {
    const data = await api.healthCheckApiV1KnowledgeHealthGet();
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


## searchEntriesApiV1KnowledgeSearchGet

> any searchEntriesApiV1KnowledgeSearchGet(q, category, entryType, limit)

Search Entries

Поиск записей по тексту

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { SearchEntriesApiV1KnowledgeSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string | Поисковый запрос
    q: q_example,
    // string (optional)
    category: category_example,
    // string (optional)
    entryType: entryType_example,
    // number (optional)
    limit: 56,
  } satisfies SearchEntriesApiV1KnowledgeSearchGetRequest;

  try {
    const data = await api.searchEntriesApiV1KnowledgeSearchGet(body);
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
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **entryType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

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


## searchEntriesPostApiV1KnowledgeSearchPost

> any searchEntriesPostApiV1KnowledgeSearchPost(requestBody)

Search Entries Post

Поиск записей по тексту (POST для поддержки кириллицы)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { SearchEntriesPostApiV1KnowledgeSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies SearchEntriesPostApiV1KnowledgeSearchPostRequest;

  try {
    const data = await api.searchEntriesPostApiV1KnowledgeSearchPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## semanticSearchApiV1KnowledgeSearchSemanticPost

> any semanticSearchApiV1KnowledgeSearchSemanticPost(query, category, limit)

Semantic Search

Семантический поиск (заглушка для будущей реализации)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { SemanticSearchApiV1KnowledgeSearchSemanticPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    query: query_example,
    // string (optional)
    category: category_example,
    // number (optional)
    limit: 56,
  } satisfies SemanticSearchApiV1KnowledgeSearchSemanticPostRequest;

  try {
    const data = await api.semanticSearchApiV1KnowledgeSearchSemanticPost(body);
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
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
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


## suggestTermsApiV1KnowledgeSuggestGet

> any suggestTermsApiV1KnowledgeSuggestGet(q, limit)

Suggest Terms

Автоподсказки для текста на основе поиска терминов

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { SuggestTermsApiV1KnowledgeSuggestGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string | Текст для анализа
    q: q_example,
    // number (optional)
    limit: 56,
  } satisfies SuggestTermsApiV1KnowledgeSuggestGetRequest;

  try {
    const data = await api.suggestTermsApiV1KnowledgeSuggestGet(body);
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
| **q** | `string` | Текст для анализа | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `5`] |

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


## updateEntryApiV1KnowledgeEntriesEntryIdPut

> any updateEntryApiV1KnowledgeEntriesEntryIdPut(entryId, requestBody)

Update Entry

Обновить запись (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { UpdateEntryApiV1KnowledgeEntriesEntryIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    entryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateEntryApiV1KnowledgeEntriesEntryIdPutRequest;

  try {
    const data = await api.updateEntryApiV1KnowledgeEntriesEntryIdPut(body);
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
| **entryId** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateExampleApiV1KnowledgeExamplesExampleIdPut

> any updateExampleApiV1KnowledgeExamplesExampleIdPut(exampleId, requestBody)

Update Example

Обновить пример (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { UpdateExampleApiV1KnowledgeExamplesExampleIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    exampleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateExampleApiV1KnowledgeExamplesExampleIdPutRequest;

  try {
    const data = await api.updateExampleApiV1KnowledgeExamplesExampleIdPut(body);
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
| **exampleId** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMediaApiV1KnowledgeMediaMediaIdPut

> any updateMediaApiV1KnowledgeMediaMediaIdPut(mediaId, requestBody)

Update Media

Обновить медиа запись (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { UpdateMediaApiV1KnowledgeMediaMediaIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    mediaId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateMediaApiV1KnowledgeMediaMediaIdPutRequest;

  try {
    const data = await api.updateMediaApiV1KnowledgeMediaMediaIdPut(body);
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
| **mediaId** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSourceApiV1KnowledgeSourcesSourceIdPut

> any updateSourceApiV1KnowledgeSourcesSourceIdPut(sourceId, requestBody)

Update Source

Обновить источник (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { UpdateSourceApiV1KnowledgeSourcesSourceIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    sourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateSourceApiV1KnowledgeSourcesSourceIdPutRequest;

  try {
    const data = await api.updateSourceApiV1KnowledgeSourcesSourceIdPut(body);
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
| **sourceId** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateTranslationApiV1KnowledgeTranslationsTranslationIdPut

> any updateTranslationApiV1KnowledgeTranslationsTranslationIdPut(translationId, requestBody)

Update Translation

Обновить перевод (только для админов)

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '';
import type { UpdateTranslationApiV1KnowledgeTranslationsTranslationIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeApi(config);

  const body = {
    // string
    translationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateTranslationApiV1KnowledgeTranslationsTranslationIdPutRequest;

  try {
    const data = await api.updateTranslationApiV1KnowledgeTranslationsTranslationIdPut(body);
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
| **translationId** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

