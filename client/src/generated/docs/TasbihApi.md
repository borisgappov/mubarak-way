# TasbihApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTasbihEventApiV1TasbihEventsPost**](TasbihApi.md#createtasbiheventapiv1tasbiheventspost) | **POST** /api/v1/tasbih/events | Create Tasbih Event |
| [**createTasbihSessionApiV1TasbihSessionsPost**](TasbihApi.md#createtasbihsessionapiv1tasbihsessionspost) | **POST** /api/v1/tasbih/sessions | Создать новую сессию тасбиха |
| [**deleteTasbihEventApiV1TasbihEventsEventIdDelete**](TasbihApi.md#deletetasbiheventapiv1tasbiheventseventiddelete) | **DELETE** /api/v1/tasbih/events/{event_id} | Delete Tasbih Event |
| [**deleteTasbihSessionApiV1TasbihSessionsSessionIdDelete**](TasbihApi.md#deletetasbihsessionapiv1tasbihsessionssessioniddelete) | **DELETE** /api/v1/tasbih/sessions/{session_id} | Delete Tasbih Session |
| [**endTasbihSessionApiV1TasbihSessionsSessionIdEndPatch**](TasbihApi.md#endtasbihsessionapiv1tasbihsessionssessionidendpatch) | **PATCH** /api/v1/tasbih/sessions/{session_id}/end | End Tasbih Session |
| [**getTasbihDeeplinkApiV1TasbihDeeplinkGet**](TasbihApi.md#gettasbihdeeplinkapiv1tasbihdeeplinkget) | **GET** /api/v1/tasbih/deeplink | Get Tasbih Deeplink |
| [**getTasbihEventApiV1TasbihEventsEventIdGet**](TasbihApi.md#gettasbiheventapiv1tasbiheventseventidget) | **GET** /api/v1/tasbih/events/{event_id} | Get Tasbih Event |
| [**getTasbihEventsApiV1TasbihEventsGet**](TasbihApi.md#gettasbiheventsapiv1tasbiheventsget) | **GET** /api/v1/tasbih/events | Get Tasbih Events |
| [**getTasbihPicksApiV1TasbihPicksGet**](TasbihApi.md#gettasbihpicksapiv1tasbihpicksget) | **GET** /api/v1/tasbih/picks | Get Tasbih Picks |
| [**getTasbihSessionApiV1TasbihSessionsSessionIdGet**](TasbihApi.md#gettasbihsessionapiv1tasbihsessionssessionidget) | **GET** /api/v1/tasbih/sessions/{session_id} | Get Tasbih Session |
| [**getTasbihSessionsApiV1TasbihSessionsGet**](TasbihApi.md#gettasbihsessionsapiv1tasbihsessionsget) | **GET** /api/v1/tasbih/sessions | Get Tasbih Sessions |
| [**getTasbihStateApiV1TasbihStateGet**](TasbihApi.md#gettasbihstateapiv1tasbihstateget) | **GET** /api/v1/tasbih/state | Get Tasbih State |
| [**updateTasbihEventApiV1TasbihEventsEventIdPut**](TasbihApi.md#updatetasbiheventapiv1tasbiheventseventidput) | **PUT** /api/v1/tasbih/events/{event_id} | Update Tasbih Event |
| [**updateTasbihSessionApiV1TasbihSessionsSessionIdPut**](TasbihApi.md#updatetasbihsessionapiv1tasbihsessionssessionidput) | **PUT** /api/v1/tasbih/sessions/{session_id} | Update Tasbih Session |



## createTasbihEventApiV1TasbihEventsPost

> TasbihEvent createTasbihEventApiV1TasbihEventsPost(tasbihEventCreate, offlineId)

Create Tasbih Event

Создать событие тасбиха (идемпотентно)

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { CreateTasbihEventApiV1TasbihEventsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // TasbihEventCreate
    tasbihEventCreate: ...,
    // string (optional)
    offlineId: offlineId_example,
  } satisfies CreateTasbihEventApiV1TasbihEventsPostRequest;

  try {
    const data = await api.createTasbihEventApiV1TasbihEventsPost(body);
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
| **tasbihEventCreate** | [TasbihEventCreate](TasbihEventCreate.md) |  | |
| **offlineId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**TasbihEvent**](TasbihEvent.md)

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


## createTasbihSessionApiV1TasbihSessionsPost

> TasbihSession createTasbihSessionApiV1TasbihSessionsPost(tasbihSessionCreate)

Создать новую сессию тасбиха

Создает новую активную сессию тасбиха для пользователя.          **Параметры:**     - &#x60;itemId&#x60;: UUID элемента из каталога (азкар, сура и т.д.)     - &#x60;goalId&#x60;: (опционально) UUID связанной цели для автоматического отслеживания прогресса          Сессия начинается с valueStart &#x3D; 0 и valueCurrent &#x3D; 0.

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { CreateTasbihSessionApiV1TasbihSessionsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // TasbihSessionCreate
    tasbihSessionCreate: ...,
  } satisfies CreateTasbihSessionApiV1TasbihSessionsPostRequest;

  try {
    const data = await api.createTasbihSessionApiV1TasbihSessionsPost(body);
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
| **tasbihSessionCreate** | [TasbihSessionCreate](TasbihSessionCreate.md) |  | |

### Return type

[**TasbihSession**](TasbihSession.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Сессия успешно создана |  -  |
| **400** | Неверный формат данных |  -  |
| **401** | Неавторизован - требуется JWT токен |  -  |
| **422** | Ошибка валидации данных |  -  |
| **500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteTasbihEventApiV1TasbihEventsEventIdDelete

> any deleteTasbihEventApiV1TasbihEventsEventIdDelete(eventId)

Delete Tasbih Event

Удалить событие тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { DeleteTasbihEventApiV1TasbihEventsEventIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    eventId: eventId_example,
  } satisfies DeleteTasbihEventApiV1TasbihEventsEventIdDeleteRequest;

  try {
    const data = await api.deleteTasbihEventApiV1TasbihEventsEventIdDelete(body);
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
| **eventId** | `string` |  | [Defaults to `undefined`] |

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


## deleteTasbihSessionApiV1TasbihSessionsSessionIdDelete

> any deleteTasbihSessionApiV1TasbihSessionsSessionIdDelete(sessionId)

Delete Tasbih Session

Удалить сессию тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { DeleteTasbihSessionApiV1TasbihSessionsSessionIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies DeleteTasbihSessionApiV1TasbihSessionsSessionIdDeleteRequest;

  try {
    const data = await api.deleteTasbihSessionApiV1TasbihSessionsSessionIdDelete(body);
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


## endTasbihSessionApiV1TasbihSessionsSessionIdEndPatch

> TasbihSession endTasbihSessionApiV1TasbihSessionsSessionIdEndPatch(sessionId)

End Tasbih Session

End tasbih session

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { EndTasbihSessionApiV1TasbihSessionsSessionIdEndPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies EndTasbihSessionApiV1TasbihSessionsSessionIdEndPatchRequest;

  try {
    const data = await api.endTasbihSessionApiV1TasbihSessionsSessionIdEndPatch(body);
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

[**TasbihSession**](TasbihSession.md)

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


## getTasbihDeeplinkApiV1TasbihDeeplinkGet

> DeeplinkResponse getTasbihDeeplinkApiV1TasbihDeeplinkGet(itemId)

Get Tasbih Deeplink

Get tasbih deeplink

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihDeeplinkApiV1TasbihDeeplinkGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    itemId: itemId_example,
  } satisfies GetTasbihDeeplinkApiV1TasbihDeeplinkGetRequest;

  try {
    const data = await api.getTasbihDeeplinkApiV1TasbihDeeplinkGet(body);
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
| **itemId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeeplinkResponse**](DeeplinkResponse.md)

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


## getTasbihEventApiV1TasbihEventsEventIdGet

> TasbihEvent getTasbihEventApiV1TasbihEventsEventIdGet(eventId)

Get Tasbih Event

Получить конкретное событие тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihEventApiV1TasbihEventsEventIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    eventId: eventId_example,
  } satisfies GetTasbihEventApiV1TasbihEventsEventIdGetRequest;

  try {
    const data = await api.getTasbihEventApiV1TasbihEventsEventIdGet(body);
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
| **eventId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TasbihEvent**](TasbihEvent.md)

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


## getTasbihEventsApiV1TasbihEventsGet

> Array&lt;TasbihEvent&gt; getTasbihEventsApiV1TasbihEventsGet(sessionId, limit, offset)

Get Tasbih Events

Получить список событий тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihEventsApiV1TasbihEventsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string (optional)
    sessionId: sessionId_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetTasbihEventsApiV1TasbihEventsGetRequest;

  try {
    const data = await api.getTasbihEventsApiV1TasbihEventsGet(body);
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
| **sessionId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**Array&lt;TasbihEvent&gt;**](TasbihEvent.md)

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


## getTasbihPicksApiV1TasbihPicksGet

> Array&lt;TasbihPick&gt; getTasbihPicksApiV1TasbihPicksGet()

Get Tasbih Picks

Get tasbih picks

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihPicksApiV1TasbihPicksGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  try {
    const data = await api.getTasbihPicksApiV1TasbihPicksGet();
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

[**Array&lt;TasbihPick&gt;**](TasbihPick.md)

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


## getTasbihSessionApiV1TasbihSessionsSessionIdGet

> TasbihSession getTasbihSessionApiV1TasbihSessionsSessionIdGet(sessionId)

Get Tasbih Session

Получить конкретную сессию тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihSessionApiV1TasbihSessionsSessionIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies GetTasbihSessionApiV1TasbihSessionsSessionIdGetRequest;

  try {
    const data = await api.getTasbihSessionApiV1TasbihSessionsSessionIdGet(body);
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

[**TasbihSession**](TasbihSession.md)

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


## getTasbihSessionsApiV1TasbihSessionsGet

> Array&lt;TasbihSession&gt; getTasbihSessionsApiV1TasbihSessionsGet(limit, offset, activeOnly)

Get Tasbih Sessions

Получить список сессий тасбиха пользователя

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihSessionsApiV1TasbihSessionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
    // boolean (optional)
    activeOnly: true,
  } satisfies GetTasbihSessionsApiV1TasbihSessionsGetRequest;

  try {
    const data = await api.getTasbihSessionsApiV1TasbihSessionsGet(body);
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
| **activeOnly** | `boolean` |  | [Optional] [Defaults to `false`] |

### Return type

[**Array&lt;TasbihSession&gt;**](TasbihSession.md)

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


## getTasbihStateApiV1TasbihStateGet

> TasbihState getTasbihStateApiV1TasbihStateGet()

Get Tasbih State

Get current tasbih state

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { GetTasbihStateApiV1TasbihStateGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  try {
    const data = await api.getTasbihStateApiV1TasbihStateGet();
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

[**TasbihState**](TasbihState.md)

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


## updateTasbihEventApiV1TasbihEventsEventIdPut

> TasbihEvent updateTasbihEventApiV1TasbihEventsEventIdPut(eventId, tasbihEventCreate)

Update Tasbih Event

Обновить событие тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { UpdateTasbihEventApiV1TasbihEventsEventIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    eventId: eventId_example,
    // TasbihEventCreate
    tasbihEventCreate: ...,
  } satisfies UpdateTasbihEventApiV1TasbihEventsEventIdPutRequest;

  try {
    const data = await api.updateTasbihEventApiV1TasbihEventsEventIdPut(body);
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
| **eventId** | `string` |  | [Defaults to `undefined`] |
| **tasbihEventCreate** | [TasbihEventCreate](TasbihEventCreate.md) |  | |

### Return type

[**TasbihEvent**](TasbihEvent.md)

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


## updateTasbihSessionApiV1TasbihSessionsSessionIdPut

> TasbihSession updateTasbihSessionApiV1TasbihSessionsSessionIdPut(sessionId, tasbihSessionCreate)

Update Tasbih Session

Обновить сессию тасбиха

### Example

```ts
import {
  Configuration,
  TasbihApi,
} from '';
import type { UpdateTasbihSessionApiV1TasbihSessionsSessionIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TasbihApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
    // TasbihSessionCreate
    tasbihSessionCreate: ...,
  } satisfies UpdateTasbihSessionApiV1TasbihSessionsSessionIdPutRequest;

  try {
    const data = await api.updateTasbihSessionApiV1TasbihSessionsSessionIdPut(body);
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
| **tasbihSessionCreate** | [TasbihSessionCreate](TasbihSessionCreate.md) |  | |

### Return type

[**TasbihSession**](TasbihSession.md)

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

