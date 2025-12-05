# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminClearCacheApiV1AdminCacheClearPost**](DefaultApi.md#adminclearcacheapiv1admincacheclearpost) | **POST** /api/v1/admin/cache/clear | Admin Clear Cache |
| [**apiTestPageApiTestGet**](DefaultApi.md#apitestpageapitestget) | **GET** /api-test | Api Test Page |
| [**getVersionApiV1VersionGet**](DefaultApi.md#getversionapiv1versionget) | **GET** /api/v1/version | Get Version |
| [**healthCheckHealthGet**](DefaultApi.md#healthcheckhealthget) | **GET** /health | Health Check |
| [**invalidateModuleCacheApiV1AdminCacheInvalidateModulePost**](DefaultApi.md#invalidatemodulecacheapiv1admincacheinvalidatemodulepost) | **POST** /api/v1/admin/cache/invalidate/{module} | Invalidate Module Cache |
| [**livenessCheckHealthLiveGet**](DefaultApi.md#livenesscheckhealthliveget) | **GET** /health/live | Liveness Check |
| [**metricsMetricsGet**](DefaultApi.md#metricsmetricsget) | **GET** /metrics | Metrics |
| [**readinessCheckHealthReadyGet**](DefaultApi.md#readinesscheckhealthreadyget) | **GET** /health/ready | Readiness Check |
| [**rootGet**](DefaultApi.md#rootget) | **GET** / | Root |



## adminClearCacheApiV1AdminCacheClearPost

> any adminClearCacheApiV1AdminCacheClearPost(pattern)

Admin Clear Cache

Очистить кэш Gateway  Args:     pattern: Паттерн для очистки (например, \&quot;goals:*\&quot; для очистки кэша целей)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { AdminClearCacheApiV1AdminCacheClearPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string (optional)
    pattern: pattern_example,
  } satisfies AdminClearCacheApiV1AdminCacheClearPostRequest;

  try {
    const data = await api.adminClearCacheApiV1AdminCacheClearPost(body);
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
| **pattern** | `string` |  | [Optional] [Defaults to `undefined`] |

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


## apiTestPageApiTestGet

> any apiTestPageApiTestGet()

Api Test Page

Страница с инструкциями по тестированию API

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiTestPageApiTestGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.apiTestPageApiTestGet();
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


## getVersionApiV1VersionGet

> any getVersionApiV1VersionGet()

Get Version

Получить версию приложения (публичный эндпоинт)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetVersionApiV1VersionGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.getVersionApiV1VersionGet();
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


## healthCheckHealthGet

> any healthCheckHealthGet()

Health Check

Базовый health check

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { HealthCheckHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.healthCheckHealthGet();
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


## invalidateModuleCacheApiV1AdminCacheInvalidateModulePost

> any invalidateModuleCacheApiV1AdminCacheInvalidateModulePost(module)

Invalidate Module Cache

Инвалидировать кэш конкретного модуля

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { InvalidateModuleCacheApiV1AdminCacheInvalidateModulePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    module: module_example,
  } satisfies InvalidateModuleCacheApiV1AdminCacheInvalidateModulePostRequest;

  try {
    const data = await api.invalidateModuleCacheApiV1AdminCacheInvalidateModulePost(body);
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
| **module** | `string` |  | [Defaults to `undefined`] |

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


## livenessCheckHealthLiveGet

> any livenessCheckHealthLiveGet()

Liveness Check

Liveness probe для Kubernetes

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { LivenessCheckHealthLiveGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.livenessCheckHealthLiveGet();
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


## metricsMetricsGet

> any metricsMetricsGet()

Metrics

Эндпоинт метрик Prometheus

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { MetricsMetricsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.metricsMetricsGet();
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


## readinessCheckHealthReadyGet

> any readinessCheckHealthReadyGet()

Readiness Check

Readiness probe для Kubernetes

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ReadinessCheckHealthReadyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.readinessCheckHealthReadyGet();
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


## rootGet

> any rootGet()

Root

Корневой эндпоинт

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RootGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.rootGet();
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

