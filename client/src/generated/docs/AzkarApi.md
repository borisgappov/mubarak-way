# AzkarApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteAzkarSessionApiV1AzkarSessionsSessionIdDelete**](AzkarApi.md#deleteazkarsessionapiv1azkarsessionssessioniddelete) | **DELETE** /api/v1/azkar/sessions/{session_id} | Delete Azkar Session |
| [**getAzkarSessionApiV1AzkarSessionsSessionIdGet**](AzkarApi.md#getazkarsessionapiv1azkarsessionssessionidget) | **GET** /api/v1/azkar/sessions/{session_id} | Get Azkar Session |
| [**getAzkarSessionsApiV1AzkarSessionsGet**](AzkarApi.md#getazkarsessionsapiv1azkarsessionsget) | **GET** /api/v1/azkar/sessions | Get Azkar Sessions |
| [**getNextAzkarSuggestionApiV1AzkarNextSuggestionGet**](AzkarApi.md#getnextazkarsuggestionapiv1azkarnextsuggestionget) | **GET** /api/v1/azkar/next-suggestion | Get Next Azkar Suggestion |
| [**getTodaysAzkarApiV1AzkarTodayGet**](AzkarApi.md#gettodaysazkarapiv1azkartodayget) | **GET** /api/v1/azkar/today | Get Todays Azkar |
| [**startAzkarSessionApiV1AzkarStartPost**](AzkarApi.md#startazkarsessionapiv1azkarstartpost) | **POST** /api/v1/azkar/start | Start Azkar Session |
| [**updateAzkarProgressApiV1AzkarProgressPost**](AzkarApi.md#updateazkarprogressapiv1azkarprogresspost) | **POST** /api/v1/azkar/progress | Update Azkar Progress |
| [**updateAzkarSessionApiV1AzkarSessionsSessionIdPut**](AzkarApi.md#updateazkarsessionapiv1azkarsessionssessionidput) | **PUT** /api/v1/azkar/sessions/{session_id} | Update Azkar Session |



## deleteAzkarSessionApiV1AzkarSessionsSessionIdDelete

> any deleteAzkarSessionApiV1AzkarSessionsSessionIdDelete(sessionId)

Delete Azkar Session

Удалить сессию азкара

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { DeleteAzkarSessionApiV1AzkarSessionsSessionIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies DeleteAzkarSessionApiV1AzkarSessionsSessionIdDeleteRequest;

  try {
    const data = await api.deleteAzkarSessionApiV1AzkarSessionsSessionIdDelete(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

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


## getAzkarSessionApiV1AzkarSessionsSessionIdGet

> AzkarSession getAzkarSessionApiV1AzkarSessionsSessionIdGet(sessionId)

Get Azkar Session

Получить конкретную сессию азкара

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { GetAzkarSessionApiV1AzkarSessionsSessionIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies GetAzkarSessionApiV1AzkarSessionsSessionIdGetRequest;

  try {
    const data = await api.getAzkarSessionApiV1AzkarSessionsSessionIdGet(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AzkarSession**](AzkarSession.md)

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


## getAzkarSessionsApiV1AzkarSessionsGet

> Array&lt;AzkarSession&gt; getAzkarSessionsApiV1AzkarSessionsGet(limit, offset, segmentId)

Get Azkar Sessions

Получить список сессий азкара пользователя

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { GetAzkarSessionsApiV1AzkarSessionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
    // string (optional)
    segmentId: segmentId_example,
  } satisfies GetAzkarSessionsApiV1AzkarSessionsGetRequest;

  try {
    const data = await api.getAzkarSessionsApiV1AzkarSessionsGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |
| **segmentId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;AzkarSession&gt;**](AzkarSession.md)

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


## getNextAzkarSuggestionApiV1AzkarNextSuggestionGet

> AzkarSuggestion getNextAzkarSuggestionApiV1AzkarNextSuggestionGet()

Get Next Azkar Suggestion

Get next azkar suggestion

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { GetNextAzkarSuggestionApiV1AzkarNextSuggestionGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  try {
    const data = await api.getNextAzkarSuggestionApiV1AzkarNextSuggestionGet();
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

[**AzkarSuggestion**](AzkarSuggestion.md)

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


## getTodaysAzkarApiV1AzkarTodayGet

> AzkarToday getTodaysAzkarApiV1AzkarTodayGet()

Get Todays Azkar

Get today\&#39;s azkar

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { GetTodaysAzkarApiV1AzkarTodayGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  try {
    const data = await api.getTodaysAzkarApiV1AzkarTodayGet();
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

[**AzkarToday**](AzkarToday.md)

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


## startAzkarSessionApiV1AzkarStartPost

> AzkarSession startAzkarSessionApiV1AzkarStartPost(azkarSessionCreate)

Start Azkar Session

Start azkar session

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { StartAzkarSessionApiV1AzkarStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  const body = {
    // AzkarSessionCreate
    azkarSessionCreate: ...,
  } satisfies StartAzkarSessionApiV1AzkarStartPostRequest;

  try {
    const data = await api.startAzkarSessionApiV1AzkarStartPost(body);
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
| **azkarSessionCreate** | [AzkarSessionCreate](AzkarSessionCreate.md) |  | |

### Return type

[**AzkarSession**](AzkarSession.md)

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


## updateAzkarProgressApiV1AzkarProgressPost

> AzkarSession updateAzkarProgressApiV1AzkarProgressPost(azkarProgressUpdate)

Update Azkar Progress

Update azkar progress

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { UpdateAzkarProgressApiV1AzkarProgressPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  const body = {
    // AzkarProgressUpdate
    azkarProgressUpdate: ...,
  } satisfies UpdateAzkarProgressApiV1AzkarProgressPostRequest;

  try {
    const data = await api.updateAzkarProgressApiV1AzkarProgressPost(body);
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
| **azkarProgressUpdate** | [AzkarProgressUpdate](AzkarProgressUpdate.md) |  | |

### Return type

[**AzkarSession**](AzkarSession.md)

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


## updateAzkarSessionApiV1AzkarSessionsSessionIdPut

> AzkarSession updateAzkarSessionApiV1AzkarSessionsSessionIdPut(sessionId, azkarSessionCreate)

Update Azkar Session

Обновить сессию азкара

### Example

```ts
import {
  Configuration,
  AzkarApi,
} from '';
import type { UpdateAzkarSessionApiV1AzkarSessionsSessionIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AzkarApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
    // AzkarSessionCreate
    azkarSessionCreate: ...,
  } satisfies UpdateAzkarSessionApiV1AzkarSessionsSessionIdPutRequest;

  try {
    const data = await api.updateAzkarSessionApiV1AzkarSessionsSessionIdPut(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |
| **azkarSessionCreate** | [AzkarSessionCreate](AzkarSessionCreate.md) |  | |

### Return type

[**AzkarSession**](AzkarSession.md)

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

