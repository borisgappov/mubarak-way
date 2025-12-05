# AuthApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTestTokenApiV1AuthTestTokenPost**](AuthApi.md#gettesttokenapiv1authtesttokenpost) | **POST** /api/v1/auth/test-token | Get Test Token |
| [**telegramLoginApiV1AuthTelegramLoginPost**](AuthApi.md#telegramloginapiv1authtelegramloginpost) | **POST** /api/v1/auth/telegram-login | Telegram Login |



## getTestTokenApiV1AuthTestTokenPost

> AuthResponse getTestTokenApiV1AuthTestTokenPost()

Get Test Token

Получить тестовый токен для разработки и тестирования API  ВНИМАНИЕ: Доступен только в режиме разработки!  Returns:     Authentication response with test JWT token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { GetTestTokenApiV1AuthTestTokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.getTestTokenApiV1AuthTestTokenPost();
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

[**AuthResponse**](AuthResponse.md)

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


## telegramLoginApiV1AuthTelegramLoginPost

> AuthResponse telegramLoginApiV1AuthTelegramLoginPost(telegramLoginRequest)

Telegram Login

Authenticate user via Telegram WebApp  Args:     request: FastAPI request object     login_data: Telegram login data      Returns:     Authentication response with JWT token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { TelegramLoginApiV1AuthTelegramLoginPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthApi(config);

  const body = {
    // TelegramLoginRequest
    telegramLoginRequest: ...,
  } satisfies TelegramLoginApiV1AuthTelegramLoginPostRequest;

  try {
    const data = await api.telegramLoginApiV1AuthTelegramLoginPost(body);
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
| **telegramLoginRequest** | [TelegramLoginRequest](TelegramLoginRequest.md) |  | |

### Return type

[**AuthResponse**](AuthResponse.md)

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

