# NotificationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteNotificationScheduleApiV1NotifierSchedulesScheduleIdDelete**](NotificationsApi.md#deletenotificationscheduleapiv1notifierschedulesscheduleiddelete) | **DELETE** /api/v1/notifier/schedules/{schedule_id} | Delete Notification Schedule |
| [**getNotificationScheduleApiV1NotifierSchedulesScheduleIdGet**](NotificationsApi.md#getnotificationscheduleapiv1notifierschedulesscheduleidget) | **GET** /api/v1/notifier/schedules/{schedule_id} | Get Notification Schedule |
| [**getNotificationSchedulesApiV1NotifierSchedulesGet**](NotificationsApi.md#getnotificationschedulesapiv1notifierschedulesget) | **GET** /api/v1/notifier/schedules | Get Notification Schedules |
| [**scheduleNotificationApiV1NotifierSchedulePost**](NotificationsApi.md#schedulenotificationapiv1notifierschedulepost) | **POST** /api/v1/notifier/schedule | Schedule Notification |
| [**sendTelegramNotificationApiV1NotifierTelegramPost**](NotificationsApi.md#sendtelegramnotificationapiv1notifiertelegrampost) | **POST** /api/v1/notifier/telegram | Send Telegram Notification |
| [**updateNotificationScheduleApiV1NotifierSchedulesScheduleIdPut**](NotificationsApi.md#updatenotificationscheduleapiv1notifierschedulesscheduleidput) | **PUT** /api/v1/notifier/schedules/{schedule_id} | Update Notification Schedule |



## deleteNotificationScheduleApiV1NotifierSchedulesScheduleIdDelete

> any deleteNotificationScheduleApiV1NotifierSchedulesScheduleIdDelete(scheduleId)

Delete Notification Schedule

Удалить расписание уведомлений

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { DeleteNotificationScheduleApiV1NotifierSchedulesScheduleIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // string
    scheduleId: scheduleId_example,
  } satisfies DeleteNotificationScheduleApiV1NotifierSchedulesScheduleIdDeleteRequest;

  try {
    const data = await api.deleteNotificationScheduleApiV1NotifierSchedulesScheduleIdDelete(body);
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
| **scheduleId** | `string` |  | [Defaults to `undefined`] |

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


## getNotificationScheduleApiV1NotifierSchedulesScheduleIdGet

> NotificationSchedule getNotificationScheduleApiV1NotifierSchedulesScheduleIdGet(scheduleId)

Get Notification Schedule

Получить конкретное расписание уведомлений

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { GetNotificationScheduleApiV1NotifierSchedulesScheduleIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // string
    scheduleId: scheduleId_example,
  } satisfies GetNotificationScheduleApiV1NotifierSchedulesScheduleIdGetRequest;

  try {
    const data = await api.getNotificationScheduleApiV1NotifierSchedulesScheduleIdGet(body);
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
| **scheduleId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**NotificationSchedule**](NotificationSchedule.md)

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


## getNotificationSchedulesApiV1NotifierSchedulesGet

> Array&lt;NotificationSchedule&gt; getNotificationSchedulesApiV1NotifierSchedulesGet(limit, offset, type)

Get Notification Schedules

Получить список расписаний уведомлений пользователя

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { GetNotificationSchedulesApiV1NotifierSchedulesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
    // string (optional)
    type: type_example,
  } satisfies GetNotificationSchedulesApiV1NotifierSchedulesGetRequest;

  try {
    const data = await api.getNotificationSchedulesApiV1NotifierSchedulesGet(body);
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
| **type** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;NotificationSchedule&gt;**](NotificationSchedule.md)

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


## scheduleNotificationApiV1NotifierSchedulePost

> NotificationSchedule scheduleNotificationApiV1NotifierSchedulePost(notificationSchedule)

Schedule Notification

Schedule notification

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { ScheduleNotificationApiV1NotifierSchedulePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // NotificationSchedule
    notificationSchedule: ...,
  } satisfies ScheduleNotificationApiV1NotifierSchedulePostRequest;

  try {
    const data = await api.scheduleNotificationApiV1NotifierSchedulePost(body);
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
| **notificationSchedule** | [NotificationSchedule](NotificationSchedule.md) |  | |

### Return type

[**NotificationSchedule**](NotificationSchedule.md)

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


## sendTelegramNotificationApiV1NotifierTelegramPost

> NotificationResponse sendTelegramNotificationApiV1NotifierTelegramPost(telegramNotification)

Send Telegram Notification

Send Telegram notification

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { SendTelegramNotificationApiV1NotifierTelegramPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // TelegramNotification
    telegramNotification: ...,
  } satisfies SendTelegramNotificationApiV1NotifierTelegramPostRequest;

  try {
    const data = await api.sendTelegramNotificationApiV1NotifierTelegramPost(body);
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
| **telegramNotification** | [TelegramNotification](TelegramNotification.md) |  | |

### Return type

[**NotificationResponse**](NotificationResponse.md)

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


## updateNotificationScheduleApiV1NotifierSchedulesScheduleIdPut

> NotificationSchedule updateNotificationScheduleApiV1NotifierSchedulesScheduleIdPut(scheduleId, notificationSchedule)

Update Notification Schedule

Обновить расписание уведомлений

### Example

```ts
import {
  Configuration,
  NotificationsApi,
} from '';
import type { UpdateNotificationScheduleApiV1NotifierSchedulesScheduleIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NotificationsApi(config);

  const body = {
    // string
    scheduleId: scheduleId_example,
    // NotificationSchedule
    notificationSchedule: ...,
  } satisfies UpdateNotificationScheduleApiV1NotifierSchedulesScheduleIdPutRequest;

  try {
    const data = await api.updateNotificationScheduleApiV1NotifierSchedulesScheduleIdPut(body);
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
| **scheduleId** | `string` |  | [Defaults to `undefined`] |
| **notificationSchedule** | [NotificationSchedule](NotificationSchedule.md) |  | |

### Return type

[**NotificationSchedule**](NotificationSchedule.md)

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

