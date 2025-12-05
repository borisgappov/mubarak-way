# AIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAiReportsApiV1AiReportsGet**](AIApi.md#getaireportsapiv1aireportsget) | **GET** /api/v1/ai-reports/ | Get Ai Reports |



## getAiReportsApiV1AiReportsGet

> Array&lt;AIReport&gt; getAiReportsApiV1AiReportsGet(limit)

Get Ai Reports

Получить список AI отчетов пользователя (до 10 шт)

### Example

```ts
import {
  Configuration,
  AIApi,
} from '';
import type { GetAiReportsApiV1AiReportsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AIApi(config);

  const body = {
    // number | Максимальное количество отчетов (optional)
    limit: 56,
  } satisfies GetAiReportsApiV1AiReportsGetRequest;

  try {
    const data = await api.getAiReportsApiV1AiReportsGet(body);
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
| **limit** | `number` | Максимальное количество отчетов | [Optional] [Defaults to `10`] |

### Return type

[**Array&lt;AIReport&gt;**](AIReport.md)

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

