# AdminApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminClearCacheApiV1QuranAdminClearCachePost**](AdminApi.md#adminclearcacheapiv1quranadminclearcachepost) | **POST** /api/v1/quran/admin/clear-cache | Admin Clear Cache |
| [**adminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGet**](AdminApi.md#adminelasticsearchstatsapiv1quranadminelasticsearchstatsget) | **GET** /api/v1/quran/admin/elasticsearch/stats | Admin Elasticsearch Stats |
| [**adminHealthApiV1QuranAdminHealthGet**](AdminApi.md#adminhealthapiv1quranadminhealthget) | **GET** /api/v1/quran/admin/health | Admin Health |
| [**adminSearchApiV1QuranAdminSearchGet**](AdminApi.md#adminsearchapiv1quranadminsearchget) | **GET** /api/v1/quran/admin/search | Admin Search |
| [**adminStatsApiV1QuranAdminStatsGet**](AdminApi.md#adminstatsapiv1quranadminstatsget) | **GET** /api/v1/quran/admin/stats | Admin Stats |
| [**adminStatusApiV1QuranAdminStatusGet**](AdminApi.md#adminstatusapiv1quranadminstatusget) | **GET** /api/v1/quran/admin/status | Admin Status |



## adminClearCacheApiV1QuranAdminClearCachePost

> any adminClearCacheApiV1QuranAdminClearCachePost()

Admin Clear Cache

Очистить кэш Quran API

### Example

```ts
import {
  Configuration,
  AdminApi,
} from '';
import type { AdminClearCacheApiV1QuranAdminClearCachePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

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
  AdminApi,
} from '';
import type { AdminElasticsearchStatsApiV1QuranAdminElasticsearchStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

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
  AdminApi,
} from '';
import type { AdminHealthApiV1QuranAdminHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

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
  AdminApi,
} from '';
import type { AdminSearchApiV1QuranAdminSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

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
  AdminApi,
} from '';
import type { AdminStatsApiV1QuranAdminStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

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
  AdminApi,
} from '';
import type { AdminStatusApiV1QuranAdminStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AdminApi(config);

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

