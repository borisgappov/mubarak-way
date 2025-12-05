# UserTermsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addFavoriteApiV1UserTermsFavoritesTermIdPost**](UserTermsApi.md#addfavoriteapiv1usertermsfavoritestermidpost) | **POST** /api/v1/user-terms/favorites/{term_id} | Add Favorite |
| [**addViewApiV1UserTermsViewHistoryPost**](UserTermsApi.md#addviewapiv1usertermsviewhistorypost) | **POST** /api/v1/user-terms/view_history | Add View |
| [**checkFavoriteApiV1UserTermsFavoritesTermIdCheckGet**](UserTermsApi.md#checkfavoriteapiv1usertermsfavoritestermidcheckget) | **GET** /api/v1/user-terms/favorites/{term_id}/check | Check Favorite |
| [**clearViewHistoryApiV1UserTermsViewHistoryDelete**](UserTermsApi.md#clearviewhistoryapiv1usertermsviewhistorydelete) | **DELETE** /api/v1/user-terms/view_history | Clear View History |
| [**getFavoritesApiV1UserTermsFavoritesGet**](UserTermsApi.md#getfavoritesapiv1usertermsfavoritesget) | **GET** /api/v1/user-terms/favorites | Get Favorites |
| [**getFavoritesCountApiV1UserTermsFavoritesCountGet**](UserTermsApi.md#getfavoritescountapiv1usertermsfavoritescountget) | **GET** /api/v1/user-terms/favorites/count | Get Favorites Count |
| [**getMostViewedApiV1UserTermsViewHistoryMostViewedGet**](UserTermsApi.md#getmostviewedapiv1usertermsviewhistorymostviewedget) | **GET** /api/v1/user-terms/view_history/most_viewed | Get Most Viewed |
| [**getUserTermStatsApiV1UserTermsStatsGet**](UserTermsApi.md#getusertermstatsapiv1usertermsstatsget) | **GET** /api/v1/user-terms/stats | Get User Term Stats |
| [**getViewHistoryApiV1UserTermsViewHistoryGet**](UserTermsApi.md#getviewhistoryapiv1usertermsviewhistoryget) | **GET** /api/v1/user-terms/view_history | Get View History |
| [**getViewStatsApiV1UserTermsViewHistoryStatsGet**](UserTermsApi.md#getviewstatsapiv1usertermsviewhistorystatsget) | **GET** /api/v1/user-terms/view_history/stats | Get View Stats |
| [**healthCheckApiV1UserTermsHealthGet**](UserTermsApi.md#healthcheckapiv1usertermshealthget) | **GET** /api/v1/user-terms/health | Health Check |
| [**removeFavoriteApiV1UserTermsFavoritesTermIdDelete**](UserTermsApi.md#removefavoriteapiv1usertermsfavoritestermiddelete) | **DELETE** /api/v1/user-terms/favorites/{term_id} | Remove Favorite |



## addFavoriteApiV1UserTermsFavoritesTermIdPost

> any addFavoriteApiV1UserTermsFavoritesTermIdPost(termId)

Add Favorite

Добавить термин в избранное

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { AddFavoriteApiV1UserTermsFavoritesTermIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // string
    termId: termId_example,
  } satisfies AddFavoriteApiV1UserTermsFavoritesTermIdPostRequest;

  try {
    const data = await api.addFavoriteApiV1UserTermsFavoritesTermIdPost(body);
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
| **termId** | `string` |  | [Defaults to `undefined`] |

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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addViewApiV1UserTermsViewHistoryPost

> any addViewApiV1UserTermsViewHistoryPost(termId)

Add View

Записать просмотр термина

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { AddViewApiV1UserTermsViewHistoryPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // string
    termId: termId_example,
  } satisfies AddViewApiV1UserTermsViewHistoryPostRequest;

  try {
    const data = await api.addViewApiV1UserTermsViewHistoryPost(body);
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
| **termId** | `string` |  | [Defaults to `undefined`] |

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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkFavoriteApiV1UserTermsFavoritesTermIdCheckGet

> any checkFavoriteApiV1UserTermsFavoritesTermIdCheckGet(termId)

Check Favorite

Проверить, является ли термин избранным

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { CheckFavoriteApiV1UserTermsFavoritesTermIdCheckGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // string
    termId: termId_example,
  } satisfies CheckFavoriteApiV1UserTermsFavoritesTermIdCheckGetRequest;

  try {
    const data = await api.checkFavoriteApiV1UserTermsFavoritesTermIdCheckGet(body);
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
| **termId** | `string` |  | [Defaults to `undefined`] |

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


## clearViewHistoryApiV1UserTermsViewHistoryDelete

> any clearViewHistoryApiV1UserTermsViewHistoryDelete()

Clear View History

Очистить историю просмотров

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { ClearViewHistoryApiV1UserTermsViewHistoryDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  try {
    const data = await api.clearViewHistoryApiV1UserTermsViewHistoryDelete();
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


## getFavoritesApiV1UserTermsFavoritesGet

> any getFavoritesApiV1UserTermsFavoritesGet(limit, offset)

Get Favorites

Получить избранные термины пользователя

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { GetFavoritesApiV1UserTermsFavoritesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetFavoritesApiV1UserTermsFavoritesGetRequest;

  try {
    const data = await api.getFavoritesApiV1UserTermsFavoritesGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

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


## getFavoritesCountApiV1UserTermsFavoritesCountGet

> any getFavoritesCountApiV1UserTermsFavoritesCountGet()

Get Favorites Count

Получить количество избранных терминов

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { GetFavoritesCountApiV1UserTermsFavoritesCountGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  try {
    const data = await api.getFavoritesCountApiV1UserTermsFavoritesCountGet();
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


## getMostViewedApiV1UserTermsViewHistoryMostViewedGet

> any getMostViewedApiV1UserTermsViewHistoryMostViewedGet(limit)

Get Most Viewed

Получить наиболее просматриваемые термины

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { GetMostViewedApiV1UserTermsViewHistoryMostViewedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // number (optional)
    limit: 56,
  } satisfies GetMostViewedApiV1UserTermsViewHistoryMostViewedGetRequest;

  try {
    const data = await api.getMostViewedApiV1UserTermsViewHistoryMostViewedGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

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


## getUserTermStatsApiV1UserTermsStatsGet

> any getUserTermStatsApiV1UserTermsStatsGet()

Get User Term Stats

Получить общую статистику пользователя по терминам

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { GetUserTermStatsApiV1UserTermsStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  try {
    const data = await api.getUserTermStatsApiV1UserTermsStatsGet();
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


## getViewHistoryApiV1UserTermsViewHistoryGet

> any getViewHistoryApiV1UserTermsViewHistoryGet(limit, offset)

Get View History

Получить историю просмотров пользователя

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { GetViewHistoryApiV1UserTermsViewHistoryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetViewHistoryApiV1UserTermsViewHistoryGetRequest;

  try {
    const data = await api.getViewHistoryApiV1UserTermsViewHistoryGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

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


## getViewStatsApiV1UserTermsViewHistoryStatsGet

> any getViewStatsApiV1UserTermsViewHistoryStatsGet()

Get View Stats

Получить статистику просмотров

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { GetViewStatsApiV1UserTermsViewHistoryStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  try {
    const data = await api.getViewStatsApiV1UserTermsViewHistoryStatsGet();
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


## healthCheckApiV1UserTermsHealthGet

> any healthCheckApiV1UserTermsHealthGet()

Health Check

Проверка здоровья модуля

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { HealthCheckApiV1UserTermsHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  try {
    const data = await api.healthCheckApiV1UserTermsHealthGet();
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


## removeFavoriteApiV1UserTermsFavoritesTermIdDelete

> any removeFavoriteApiV1UserTermsFavoritesTermIdDelete(termId)

Remove Favorite

Удалить термин из избранного

### Example

```ts
import {
  Configuration,
  UserTermsApi,
} from '';
import type { RemoveFavoriteApiV1UserTermsFavoritesTermIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserTermsApi(config);

  const body = {
    // string
    termId: termId_example,
  } satisfies RemoveFavoriteApiV1UserTermsFavoritesTermIdDeleteRequest;

  try {
    const data = await api.removeFavoriteApiV1UserTermsFavoritesTermIdDelete(body);
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
| **termId** | `string` |  | [Defaults to `undefined`] |

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

