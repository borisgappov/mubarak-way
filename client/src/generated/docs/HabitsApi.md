# HabitsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeHabitApiV1HabitsHabitIdCompletePost**](HabitsApi.md#completehabitapiv1habitshabitidcompletepost) | **POST** /api/v1/habits/{habit_id}/complete | Complete Habit |
| [**createHabitApiV1HabitsPost**](HabitsApi.md#createhabitapiv1habitspost) | **POST** /api/v1/habits/ | Create Habit |
| [**deleteHabitApiV1HabitsHabitIdDelete**](HabitsApi.md#deletehabitapiv1habitshabitiddelete) | **DELETE** /api/v1/habits/{habit_id} | Delete Habit |
| [**getHabitsApiV1HabitsGet**](HabitsApi.md#gethabitsapiv1habitsget) | **GET** /api/v1/habits/ | Get Habits |
| [**updateHabitApiV1HabitsHabitIdPut**](HabitsApi.md#updatehabitapiv1habitshabitidput) | **PUT** /api/v1/habits/{habit_id} | Update Habit |



## completeHabitApiV1HabitsHabitIdCompletePost

> HabitLog completeHabitApiV1HabitsHabitIdCompletePost(habitId, dateLocal, notes)

Complete Habit

Отметить привычку как выполненную

### Example

```ts
import {
  Configuration,
  HabitsApi,
} from '';
import type { CompleteHabitApiV1HabitsHabitIdCompletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HabitsApi(config);

  const body = {
    // string | Habit UUID
    habitId: habitId_example,
    // string | Дата выполнения (YYYY-MM-DD), по умолчанию сегодня (optional)
    dateLocal: dateLocal_example,
    // string | Заметки (optional)
    notes: notes_example,
  } satisfies CompleteHabitApiV1HabitsHabitIdCompletePostRequest;

  try {
    const data = await api.completeHabitApiV1HabitsHabitIdCompletePost(body);
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
| **habitId** | `string` | Habit UUID | [Defaults to `undefined`] |
| **dateLocal** | `string` | Дата выполнения (YYYY-MM-DD), по умолчанию сегодня | [Optional] [Defaults to `undefined`] |
| **notes** | `string` | Заметки | [Optional] [Defaults to `undefined`] |

### Return type

[**HabitLog**](HabitLog.md)

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


## createHabitApiV1HabitsPost

> Habit createHabitApiV1HabitsPost(habitCreate)

Create Habit

Создать новую привычку

### Example

```ts
import {
  Configuration,
  HabitsApi,
} from '';
import type { CreateHabitApiV1HabitsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HabitsApi(config);

  const body = {
    // HabitCreate
    habitCreate: ...,
  } satisfies CreateHabitApiV1HabitsPostRequest;

  try {
    const data = await api.createHabitApiV1HabitsPost(body);
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
| **habitCreate** | [HabitCreate](HabitCreate.md) |  | |

### Return type

[**Habit**](Habit.md)

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


## deleteHabitApiV1HabitsHabitIdDelete

> any deleteHabitApiV1HabitsHabitIdDelete(habitId)

Delete Habit

Удалить привычку

### Example

```ts
import {
  Configuration,
  HabitsApi,
} from '';
import type { DeleteHabitApiV1HabitsHabitIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HabitsApi(config);

  const body = {
    // string | Habit UUID
    habitId: habitId_example,
  } satisfies DeleteHabitApiV1HabitsHabitIdDeleteRequest;

  try {
    const data = await api.deleteHabitApiV1HabitsHabitIdDelete(body);
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
| **habitId** | `string` | Habit UUID | [Defaults to `undefined`] |

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


## getHabitsApiV1HabitsGet

> Array&lt;Habit&gt; getHabitsApiV1HabitsGet(isActive)

Get Habits

Получить список привычек пользователя

### Example

```ts
import {
  Configuration,
  HabitsApi,
} from '';
import type { GetHabitsApiV1HabitsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HabitsApi(config);

  const body = {
    // boolean | Фильтр по активности (optional)
    isActive: true,
  } satisfies GetHabitsApiV1HabitsGetRequest;

  try {
    const data = await api.getHabitsApiV1HabitsGet(body);
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
| **isActive** | `boolean` | Фильтр по активности | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Habit&gt;**](Habit.md)

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


## updateHabitApiV1HabitsHabitIdPut

> Habit updateHabitApiV1HabitsHabitIdPut(habitId, habitUpdate)

Update Habit

Обновить привычку

### Example

```ts
import {
  Configuration,
  HabitsApi,
} from '';
import type { UpdateHabitApiV1HabitsHabitIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HabitsApi(config);

  const body = {
    // string | Habit UUID
    habitId: habitId_example,
    // HabitUpdate
    habitUpdate: ...,
  } satisfies UpdateHabitApiV1HabitsHabitIdPutRequest;

  try {
    const data = await api.updateHabitApiV1HabitsHabitIdPut(body);
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
| **habitId** | `string` | Habit UUID | [Defaults to `undefined`] |
| **habitUpdate** | [HabitUpdate](HabitUpdate.md) |  | |

### Return type

[**Habit**](Habit.md)

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

