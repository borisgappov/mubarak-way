# TelemetryApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clientEventApiV1TelemetryClientEventPost**](TelemetryApi.md#clienteventapiv1telemetryclienteventpost) | **POST** /api/v1/telemetry/client-event | Client Event |
| [**clientEventApiV1TelemetryClientEventPost_0**](TelemetryApi.md#clienteventapiv1telemetryclienteventpost_0) | **POST** /api/v1/telemetry/client-event | Client Event |



## clientEventApiV1TelemetryClientEventPost

> clientEventApiV1TelemetryClientEventPost(requestBody)

Client Event

Принимает неблокирующие клиентские события (UI ошибки, пустые результаты и т.д.) Не хранит в БД, только логирует. Возвращает 204.

### Example

```ts
import {
  Configuration,
  TelemetryApi,
} from '';
import type { ClientEventApiV1TelemetryClientEventPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TelemetryApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies ClientEventApiV1TelemetryClientEventPostRequest;

  try {
    const data = await api.clientEventApiV1TelemetryClientEventPost(body);
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

`void` (Empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## clientEventApiV1TelemetryClientEventPost_0

> clientEventApiV1TelemetryClientEventPost_0(requestBody)

Client Event

Принимает неблокирующие клиентские события (UI ошибки, пустые результаты и т.д.) Не хранит в БД, только логирует. Возвращает 204.

### Example

```ts
import {
  Configuration,
  TelemetryApi,
} from '';
import type { ClientEventApiV1TelemetryClientEventPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TelemetryApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies ClientEventApiV1TelemetryClientEventPost0Request;

  try {
    const data = await api.clientEventApiV1TelemetryClientEventPost_0(body);
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

`void` (Empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

