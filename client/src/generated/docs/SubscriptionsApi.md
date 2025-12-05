# SubscriptionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelSubscriptionApiV1SubscriptionsDelete**](SubscriptionsApi.md#cancelsubscriptionapiv1subscriptionsdelete) | **DELETE** /api/v1/subscriptions/ | Cancel Subscription |
| [**createCheckoutSessionApiV1SubscriptionsCheckoutPost**](SubscriptionsApi.md#createcheckoutsessionapiv1subscriptionscheckoutpost) | **POST** /api/v1/subscriptions/checkout | Create Checkout Session |
| [**getCurrentSubscriptionApiV1SubscriptionsMeGet**](SubscriptionsApi.md#getcurrentsubscriptionapiv1subscriptionsmeget) | **GET** /api/v1/subscriptions/me | Get Current Subscription |
| [**getSubscriptionsApiV1SubscriptionsGet**](SubscriptionsApi.md#getsubscriptionsapiv1subscriptionsget) | **GET** /api/v1/subscriptions/ | Get Subscriptions |
| [**handleWebhookApiV1SubscriptionsWebhookPost**](SubscriptionsApi.md#handlewebhookapiv1subscriptionswebhookpost) | **POST** /api/v1/subscriptions/webhook | Handle Webhook |
| [**updateSubscriptionApiV1SubscriptionsPut**](SubscriptionsApi.md#updatesubscriptionapiv1subscriptionsput) | **PUT** /api/v1/subscriptions/ | Update Subscription |



## cancelSubscriptionApiV1SubscriptionsDelete

> any cancelSubscriptionApiV1SubscriptionsDelete()

Cancel Subscription

Отменить подписку

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '';
import type { CancelSubscriptionApiV1SubscriptionsDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  try {
    const data = await api.cancelSubscriptionApiV1SubscriptionsDelete();
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


## createCheckoutSessionApiV1SubscriptionsCheckoutPost

> CheckoutResponse createCheckoutSessionApiV1SubscriptionsCheckoutPost(checkoutRequest)

Create Checkout Session

Create subscription checkout session

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '';
import type { CreateCheckoutSessionApiV1SubscriptionsCheckoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  const body = {
    // CheckoutRequest
    checkoutRequest: ...,
  } satisfies CreateCheckoutSessionApiV1SubscriptionsCheckoutPostRequest;

  try {
    const data = await api.createCheckoutSessionApiV1SubscriptionsCheckoutPost(body);
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
| **checkoutRequest** | [CheckoutRequest](CheckoutRequest.md) |  | |

### Return type

[**CheckoutResponse**](CheckoutResponse.md)

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


## getCurrentSubscriptionApiV1SubscriptionsMeGet

> any getCurrentSubscriptionApiV1SubscriptionsMeGet()

Get Current Subscription

Get current user subscription

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '';
import type { GetCurrentSubscriptionApiV1SubscriptionsMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  try {
    const data = await api.getCurrentSubscriptionApiV1SubscriptionsMeGet();
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


## getSubscriptionsApiV1SubscriptionsGet

> any getSubscriptionsApiV1SubscriptionsGet(limit, offset, status)

Get Subscriptions

Получить список подписок пользователя

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '';
import type { GetSubscriptionsApiV1SubscriptionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
    // string (optional)
    status: status_example,
  } satisfies GetSubscriptionsApiV1SubscriptionsGetRequest;

  try {
    const data = await api.getSubscriptionsApiV1SubscriptionsGet(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |

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


## handleWebhookApiV1SubscriptionsWebhookPost

> any handleWebhookApiV1SubscriptionsWebhookPost(webhookRequest)

Handle Webhook

Handle subscription webhook

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '';
import type { HandleWebhookApiV1SubscriptionsWebhookPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  const body = {
    // WebhookRequest
    webhookRequest: ...,
  } satisfies HandleWebhookApiV1SubscriptionsWebhookPostRequest;

  try {
    const data = await api.handleWebhookApiV1SubscriptionsWebhookPost(body);
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
| **webhookRequest** | [WebhookRequest](WebhookRequest.md) |  | |

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


## updateSubscriptionApiV1SubscriptionsPut

> Subscription updateSubscriptionApiV1SubscriptionsPut(subscription)

Update Subscription

Обновить подписку

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '';
import type { UpdateSubscriptionApiV1SubscriptionsPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SubscriptionsApi(config);

  const body = {
    // Subscription
    subscription: ...,
  } satisfies UpdateSubscriptionApiV1SubscriptionsPutRequest;

  try {
    const data = await api.updateSubscriptionApiV1SubscriptionsPut(body);
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
| **subscription** | [Subscription](Subscription.md) |  | |

### Return type

[**Subscription**](Subscription.md)

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

