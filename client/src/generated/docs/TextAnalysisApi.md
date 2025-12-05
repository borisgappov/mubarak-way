# TextAnalysisApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost) | **GET** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_0**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_0) | **GET** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_1**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_1) | **PUT** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_2**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_2) | **PUT** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_3**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_3) | **POST** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_4**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_4) | **POST** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_5**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_5) | **DELETE** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |
| [**proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_6**](TextAnalysisApi.md#proxytextanalysisrequestsapiv1textanalysispathpost_6) | **DELETE** /api/v1/text-analysis/{path} | Proxy Text Analysis Requests |



## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPostRequest;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_0

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_0(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost0Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_0(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_1

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_1(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost1Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost1Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_1(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_2

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_2(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost2Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_2(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_3

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_3(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost3Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost3Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_3(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_4

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_4(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost4Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost4Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_4(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_5

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_5(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost5Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost5Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_5(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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


## proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_6

> any proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_6(path)

Proxy Text Analysis Requests

Проксирование запросов к Storage Core для анализа текста  Поддерживаемые endpoint\&#39;ы: - POST /analyze - анализ текста - POST /annotate - создание аннотаций - GET /explain/{term_id} - объяснение термина - POST /batch-analyze - массовый анализ - GET /suggest - автодополнение - GET /health - проверка здоровья - GET /stats - статистика

### Example

```ts
import {
  Configuration,
  TextAnalysisApi,
} from '';
import type { ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost6Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TextAnalysisApi(config);

  const body = {
    // string
    path: path_example,
  } satisfies ProxyTextAnalysisRequestsApiV1TextAnalysisPathPost6Request;

  try {
    const data = await api.proxyTextAnalysisRequestsApiV1TextAnalysisPathPost_6(body);
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
| **path** | `string` |  | [Defaults to `undefined`] |

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

