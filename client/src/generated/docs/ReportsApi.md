# ReportsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDailyReportApiV1ReportsDailyPost**](ReportsApi.md#createdailyreportapiv1reportsdailypost) | **POST** /api/v1/reports/daily | Create Daily Report |
| [**deleteDailyReportApiV1ReportsDailyDateDelete**](ReportsApi.md#deletedailyreportapiv1reportsdailydatedelete) | **DELETE** /api/v1/reports/daily/{date} | Delete Daily Report |
| [**getActivityHistoryApiV1ReportsHistoryGet**](ReportsApi.md#getactivityhistoryapiv1reportshistoryget) | **GET** /api/v1/reports/history | Get Activity History |
| [**getDailyReportApiV1ReportsDailyGet**](ReportsApi.md#getdailyreportapiv1reportsdailyget) | **GET** /api/v1/reports/daily | Get Daily Report |
| [**getMonthlyReportApiV1ReportsMonthlyGet**](ReportsApi.md#getmonthlyreportapiv1reportsmonthlyget) | **GET** /api/v1/reports/monthly | Get Monthly Report |
| [**getRawDataReportApiV1ReportsRawGet**](ReportsApi.md#getrawdatareportapiv1reportsrawget) | **GET** /api/v1/reports/raw | Get Raw Data Report |
| [**getUserStreaksApiV1ReportsStreaksGet**](ReportsApi.md#getuserstreaksapiv1reportsstreaksget) | **GET** /api/v1/reports/streaks | Get User Streaks |
| [**getUserSummaryApiV1ReportsSummaryGet**](ReportsApi.md#getusersummaryapiv1reportssummaryget) | **GET** /api/v1/reports/summary | Get User Summary |
| [**updateDailyReportApiV1ReportsDailyDatePut**](ReportsApi.md#updatedailyreportapiv1reportsdailydateput) | **PUT** /api/v1/reports/daily/{date} | Update Daily Report |



## createDailyReportApiV1ReportsDailyPost

> DailyReport createDailyReportApiV1ReportsDailyPost(dailyReport)

Create Daily Report

Создать ежедневный отчет

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { CreateDailyReportApiV1ReportsDailyPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // DailyReport
    dailyReport: ...,
  } satisfies CreateDailyReportApiV1ReportsDailyPostRequest;

  try {
    const data = await api.createDailyReportApiV1ReportsDailyPost(body);
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
| **dailyReport** | [DailyReport](DailyReport.md) |  | |

### Return type

[**DailyReport**](DailyReport.md)

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


## deleteDailyReportApiV1ReportsDailyDateDelete

> any deleteDailyReportApiV1ReportsDailyDateDelete(date)

Delete Daily Report

Удалить ежедневный отчет

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { DeleteDailyReportApiV1ReportsDailyDateDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string
    date: date_example,
  } satisfies DeleteDailyReportApiV1ReportsDailyDateDeleteRequest;

  try {
    const data = await api.deleteDailyReportApiV1ReportsDailyDateDelete(body);
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
| **date** | `string` |  | [Defaults to `undefined`] |

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


## getActivityHistoryApiV1ReportsHistoryGet

> any getActivityHistoryApiV1ReportsHistoryGet(days)

Get Activity History

Получить историю активности за последние N дней

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { GetActivityHistoryApiV1ReportsHistoryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // number | Количество дней (optional)
    days: 56,
  } satisfies GetActivityHistoryApiV1ReportsHistoryGetRequest;

  try {
    const data = await api.getActivityHistoryApiV1ReportsHistoryGet(body);
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
| **days** | `number` | Количество дней | [Optional] [Defaults to `30`] |

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


## getDailyReportApiV1ReportsDailyGet

> any getDailyReportApiV1ReportsDailyGet()

Get Daily Report

Получить дневную статистику за сегодня

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { GetDailyReportApiV1ReportsDailyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  try {
    const data = await api.getDailyReportApiV1ReportsDailyGet();
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


## getMonthlyReportApiV1ReportsMonthlyGet

> MonthlyReport getMonthlyReportApiV1ReportsMonthlyGet(month, tz)

Get Monthly Report

Get monthly report

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { GetMonthlyReportApiV1ReportsMonthlyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | Month (YYYY-MM)
    month: month_example,
    // string | Timezone (IANA format) (optional)
    tz: tz_example,
  } satisfies GetMonthlyReportApiV1ReportsMonthlyGetRequest;

  try {
    const data = await api.getMonthlyReportApiV1ReportsMonthlyGet(body);
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
| **month** | `string` | Month (YYYY-MM) | [Defaults to `undefined`] |
| **tz** | `string` | Timezone (IANA format) | [Optional] [Defaults to `&#39;UTC&#39;`] |

### Return type

[**MonthlyReport**](MonthlyReport.md)

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


## getRawDataReportApiV1ReportsRawGet

> RawDataReport getRawDataReportApiV1ReportsRawGet(startDate, endDate, tz, format)

Get Raw Data Report

Get raw data report

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { GetRawDataReportApiV1ReportsRawGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | Start date (YYYY-MM-DD)
    startDate: startDate_example,
    // string | End date (YYYY-MM-DD)
    endDate: endDate_example,
    // string | Timezone (IANA format) (optional)
    tz: tz_example,
    // string | Export format (optional)
    format: format_example,
  } satisfies GetRawDataReportApiV1ReportsRawGetRequest;

  try {
    const data = await api.getRawDataReportApiV1ReportsRawGet(body);
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
| **startDate** | `string` | Start date (YYYY-MM-DD) | [Defaults to `undefined`] |
| **endDate** | `string` | End date (YYYY-MM-DD) | [Defaults to `undefined`] |
| **tz** | `string` | Timezone (IANA format) | [Optional] [Defaults to `&#39;UTC&#39;`] |
| **format** | `string` | Export format | [Optional] [Defaults to `&#39;json&#39;`] |

### Return type

[**RawDataReport**](RawDataReport.md)

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


## getUserStreaksApiV1ReportsStreaksGet

> any getUserStreaksApiV1ReportsStreaksGet()

Get User Streaks

Получить все серии дней подряд пользователя

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { GetUserStreaksApiV1ReportsStreaksGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  try {
    const data = await api.getUserStreaksApiV1ReportsStreaksGet();
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


## getUserSummaryApiV1ReportsSummaryGet

> any getUserSummaryApiV1ReportsSummaryGet()

Get User Summary

Получить общую статистику пользователя

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { GetUserSummaryApiV1ReportsSummaryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  try {
    const data = await api.getUserSummaryApiV1ReportsSummaryGet();
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


## updateDailyReportApiV1ReportsDailyDatePut

> DailyReport updateDailyReportApiV1ReportsDailyDatePut(date, dailyReport)

Update Daily Report

Обновить ежедневный отчет

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from '';
import type { UpdateDailyReportApiV1ReportsDailyDatePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string
    date: date_example,
    // DailyReport
    dailyReport: ...,
  } satisfies UpdateDailyReportApiV1ReportsDailyDatePutRequest;

  try {
    const data = await api.updateDailyReportApiV1ReportsDailyDatePut(body);
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
| **date** | `string` |  | [Defaults to `undefined`] |
| **dailyReport** | [DailyReport](DailyReport.md) |  | |

### Return type

[**DailyReport**](DailyReport.md)

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

