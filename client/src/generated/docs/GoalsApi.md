# GoalsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**bindGoalApiV1GoalsBindPost**](GoalsApi.md#bindgoalapiv1goalsbindpost) | **POST** /api/v1/goals/bind | Bind Goal |
| [**createGoalApiV1GoalsPost**](GoalsApi.md#creategoalapiv1goalspost) | **POST** /api/v1/goals/ | Create Goal |
| [**deleteGoalApiV1GoalsGoalIdDelete**](GoalsApi.md#deletegoalapiv1goalsgoaliddelete) | **DELETE** /api/v1/goals/{goal_id} | Delete Goal |
| [**getGoalApiV1GoalsGoalIdGet**](GoalsApi.md#getgoalapiv1goalsgoalidget) | **GET** /api/v1/goals/{goal_id} | Get Goal |
| [**getGoalBindingsApiV1GoalsBindingsGet**](GoalsApi.md#getgoalbindingsapiv1goalsbindingsget) | **GET** /api/v1/goals/bindings | Get Goal Bindings |
| [**getGoalRecommendationsApiV1GoalsRecommendationGet**](GoalsApi.md#getgoalrecommendationsapiv1goalsrecommendationget) | **GET** /api/v1/goals/recommendation | Get Goal Recommendations |
| [**getGoalsApiV1GoalsGet**](GoalsApi.md#getgoalsapiv1goalsget) | **GET** /api/v1/goals/ | Получить список целей пользователя |
| [**markGoalCompletedApiV1GoalsGoalIdMarkPost**](GoalsApi.md#markgoalcompletedapiv1goalsgoalidmarkpost) | **POST** /api/v1/goals/{goal_id}/mark | Mark Goal Completed |
| [**patchGoalApiV1GoalsGoalIdPatch**](GoalsApi.md#patchgoalapiv1goalsgoalidpatch) | **PATCH** /api/v1/goals/{goal_id} | Patch Goal |
| [**updateGoalApiV1GoalsGoalIdPut**](GoalsApi.md#updategoalapiv1goalsgoalidput) | **PUT** /api/v1/goals/{goal_id} | Update Goal |



## bindGoalApiV1GoalsBindPost

> GoalBinding bindGoalApiV1GoalsBindPost(goalBindRequest)

Bind Goal

Bind goal to catalog item

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { BindGoalApiV1GoalsBindPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // GoalBindRequest
    goalBindRequest: ...,
  } satisfies BindGoalApiV1GoalsBindPostRequest;

  try {
    const data = await api.bindGoalApiV1GoalsBindPost(body);
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
| **goalBindRequest** | [GoalBindRequest](GoalBindRequest.md) |  | |

### Return type

[**GoalBinding**](GoalBinding.md)

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


## createGoalApiV1GoalsPost

> Goal createGoalApiV1GoalsPost(goalCreate)

Create Goal

Create new goal

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { CreateGoalApiV1GoalsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // GoalCreate
    goalCreate: ...,
  } satisfies CreateGoalApiV1GoalsPostRequest;

  try {
    const data = await api.createGoalApiV1GoalsPost(body);
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
| **goalCreate** | [GoalCreate](GoalCreate.md) |  | |

### Return type

[**Goal**](Goal.md)

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


## deleteGoalApiV1GoalsGoalIdDelete

> any deleteGoalApiV1GoalsGoalIdDelete(goalId)

Delete Goal

Удалить цель

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { DeleteGoalApiV1GoalsGoalIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // string | Goal UUID
    goalId: goalId_example,
  } satisfies DeleteGoalApiV1GoalsGoalIdDeleteRequest;

  try {
    const data = await api.deleteGoalApiV1GoalsGoalIdDelete(body);
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
| **goalId** | `string` | Goal UUID | [Defaults to `undefined`] |

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


## getGoalApiV1GoalsGoalIdGet

> Goal getGoalApiV1GoalsGoalIdGet(goalId)

Get Goal

Получить конкретную цель

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { GetGoalApiV1GoalsGoalIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // string | Goal UUID
    goalId: goalId_example,
  } satisfies GetGoalApiV1GoalsGoalIdGetRequest;

  try {
    const data = await api.getGoalApiV1GoalsGoalIdGet(body);
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
| **goalId** | `string` | Goal UUID | [Defaults to `undefined`] |

### Return type

[**Goal**](Goal.md)

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


## getGoalBindingsApiV1GoalsBindingsGet

> Array&lt;GoalBinding&gt; getGoalBindingsApiV1GoalsBindingsGet()

Get Goal Bindings

Get goal bindings

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { GetGoalBindingsApiV1GoalsBindingsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  try {
    const data = await api.getGoalBindingsApiV1GoalsBindingsGet();
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

[**Array&lt;GoalBinding&gt;**](GoalBinding.md)

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


## getGoalRecommendationsApiV1GoalsRecommendationGet

> any getGoalRecommendationsApiV1GoalsRecommendationGet()

Get Goal Recommendations

Get goal recommendations

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { GetGoalRecommendationsApiV1GoalsRecommendationGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  try {
    const data = await api.getGoalRecommendationsApiV1GoalsRecommendationGet();
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


## getGoalsApiV1GoalsGet

> Array&lt;Goal&gt; getGoalsApiV1GoalsGet(status, goalType, limit, offset)

Получить список целей пользователя

Возвращает список всех целей текущего пользователя с возможностью фильтрации.          **Фильтры:**     - &#x60;status&#x60;: активные (active), завершенные (completed), приостановленные (paused), отмененные (cancelled)     - &#x60;goalType&#x60;: ежедневные (daily), еженедельные (weekly), ежемесячные (monthly), пользовательские (custom)          **Параметры пагинации:**     - &#x60;limit&#x60;: количество результатов (по умолчанию 20)     - &#x60;offset&#x60;: смещение для пагинации (по умолчанию 0)

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { GetGoalsApiV1GoalsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // string (optional)
    status: status_example,
    // string (optional)
    goalType: goalType_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetGoalsApiV1GoalsGetRequest;

  try {
    const data = await api.getGoalsApiV1GoalsGet(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **goalType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**Array&lt;Goal&gt;**](Goal.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Список целей успешно получен |  -  |
| **401** | Неавторизован - требуется JWT токен |  -  |
| **422** | Validation Error |  -  |
| **500** | Внутренняя ошибка сервера |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## markGoalCompletedApiV1GoalsGoalIdMarkPost

> Goal markGoalCompletedApiV1GoalsGoalIdMarkPost(goalId)

Mark Goal Completed

Mark goal as completed

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { MarkGoalCompletedApiV1GoalsGoalIdMarkPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // string | Goal UUID
    goalId: goalId_example,
  } satisfies MarkGoalCompletedApiV1GoalsGoalIdMarkPostRequest;

  try {
    const data = await api.markGoalCompletedApiV1GoalsGoalIdMarkPost(body);
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
| **goalId** | `string` | Goal UUID | [Defaults to `undefined`] |

### Return type

[**Goal**](Goal.md)

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


## patchGoalApiV1GoalsGoalIdPatch

> Goal patchGoalApiV1GoalsGoalIdPatch(goalId, goalUpdate)

Patch Goal

Частично обновить цель (с автоматическим отслеживанием активности)

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { PatchGoalApiV1GoalsGoalIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // string | Goal UUID
    goalId: goalId_example,
    // GoalUpdate
    goalUpdate: ...,
  } satisfies PatchGoalApiV1GoalsGoalIdPatchRequest;

  try {
    const data = await api.patchGoalApiV1GoalsGoalIdPatch(body);
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
| **goalId** | `string` | Goal UUID | [Defaults to `undefined`] |
| **goalUpdate** | [GoalUpdate](GoalUpdate.md) |  | |

### Return type

[**Goal**](Goal.md)

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


## updateGoalApiV1GoalsGoalIdPut

> Goal updateGoalApiV1GoalsGoalIdPut(goalId, goalUpdate)

Update Goal

Обновить цель (полная замена с автоматическим отслеживанием активности)

### Example

```ts
import {
  Configuration,
  GoalsApi,
} from '';
import type { UpdateGoalApiV1GoalsGoalIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GoalsApi(config);

  const body = {
    // string | Goal UUID
    goalId: goalId_example,
    // GoalUpdate
    goalUpdate: ...,
  } satisfies UpdateGoalApiV1GoalsGoalIdPutRequest;

  try {
    const data = await api.updateGoalApiV1GoalsGoalIdPut(body);
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
| **goalId** | `string` | Goal UUID | [Defaults to `undefined`] |
| **goalUpdate** | [GoalUpdate](GoalUpdate.md) |  | |

### Return type

[**Goal**](Goal.md)

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

