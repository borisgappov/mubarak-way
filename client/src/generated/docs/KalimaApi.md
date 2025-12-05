# KalimaApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getKalimaApiV1KalimasKalimaNumberGet**](KalimaApi.md#getkalimaapiv1kalimaskalimanumberget) | **GET** /api/v1/kalimas/{kalima_number} | Get Kalima |
| [**getKalimasApiV1KalimasGet**](KalimaApi.md#getkalimasapiv1kalimasget) | **GET** /api/v1/kalimas/ | Get Kalimas |



## getKalimaApiV1KalimasKalimaNumberGet

> any getKalimaApiV1KalimasKalimaNumberGet(kalimaNumber)

Get Kalima

Получить конкретную калима по номеру (1-6)

### Example

```ts
import {
  Configuration,
  KalimaApi,
} from '';
import type { GetKalimaApiV1KalimasKalimaNumberGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KalimaApi(config);

  const body = {
    // number | Kalima number (1-6)
    kalimaNumber: 56,
  } satisfies GetKalimaApiV1KalimasKalimaNumberGetRequest;

  try {
    const data = await api.getKalimaApiV1KalimasKalimaNumberGet(body);
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
| **kalimaNumber** | `number` | Kalima number (1-6) | [Defaults to `undefined`] |

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


## getKalimasApiV1KalimasGet

> any getKalimasApiV1KalimasGet(limit, offset)

Get Kalimas

Получить все 6 калима с пагинацией

### Example

```ts
import {
  Configuration,
  KalimaApi,
} from '';
import type { GetKalimasApiV1KalimasGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KalimaApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetKalimasApiV1KalimasGetRequest;

  try {
    const data = await api.getKalimasApiV1KalimasGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

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

