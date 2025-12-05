# AchievementsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBadgesApiV1BadgesGet**](AchievementsApi.md#getbadgesapiv1badgesget) | **GET** /api/v1/badges/ | Get Badges |



## getBadgesApiV1BadgesGet

> Array&lt;Badge&gt; getBadgesApiV1BadgesGet(badgeType)

Get Badges

Получить список достижений пользователя

### Example

```ts
import {
  Configuration,
  AchievementsApi,
} from '';
import type { GetBadgesApiV1BadgesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AchievementsApi(config);

  const body = {
    // string | Фильтр по типу достижения (optional)
    badgeType: badgeType_example,
  } satisfies GetBadgesApiV1BadgesGetRequest;

  try {
    const data = await api.getBadgesApiV1BadgesGet(body);
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
| **badgeType** | `string` | Фильтр по типу достижения | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Badge&gt;**](Badge.md)

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

