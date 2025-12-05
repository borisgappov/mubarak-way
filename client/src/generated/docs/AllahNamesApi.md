# AllahNamesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAllahNameAudioApiV1AllahNamesAudioFilenameGet**](AllahNamesApi.md#getallahnameaudioapiv1allahnamesaudiofilenameget) | **GET** /api/v1/allah-names/audio/{filename} | Get Allah Name Audio |
| [**getAllahNameByIdApiV1AllahNamesContentIdGet**](AllahNamesApi.md#getallahnamebyidapiv1allahnamescontentidget) | **GET** /api/v1/allah-names/{content_id} | Get Allah Name By Id |
| [**getAllahNameByNumberApiV1AllahNamesNumberNumberGet**](AllahNamesApi.md#getallahnamebynumberapiv1allahnamesnumbernumberget) | **GET** /api/v1/allah-names/number/{number} | Get Allah Name By Number |
| [**getAllahNamesProgressApiV1AllahNamesProgressGet**](AllahNamesApi.md#getallahnamesprogressapiv1allahnamesprogressget) | **GET** /api/v1/allah-names/progress | Get Allah Names Progress |
| [**getRandomAllahNameApiV1AllahNamesRandomGet**](AllahNamesApi.md#getrandomallahnameapiv1allahnamesrandomget) | **GET** /api/v1/allah-names/random | Get Random Allah Name |
| [**listAllahNamesApiV1AllahNamesGet**](AllahNamesApi.md#listallahnamesapiv1allahnamesget) | **GET** /api/v1/allah-names/ | List Allah Names |
| [**markNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPost**](AllahNamesApi.md#marknameaslearnedapiv1allahnamescontentidmarklearnedpost) | **POST** /api/v1/allah-names/{content_id}/mark-learned | Mark Name As Learned |
| [**markNameAsViewedApiV1AllahNamesContentIdViewPost**](AllahNamesApi.md#marknameasviewedapiv1allahnamescontentidviewpost) | **POST** /api/v1/allah-names/{content_id}/view | Mark Name As Viewed |
| [**unmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPost**](AllahNamesApi.md#unmarknameaslearnedapiv1allahnamescontentidunmarklearnedpost) | **POST** /api/v1/allah-names/{content_id}/unmark-learned | Unmark Name As Learned |



## getAllahNameAudioApiV1AllahNamesAudioFilenameGet

> any getAllahNameAudioApiV1AllahNamesAudioFilenameGet(filename)

Get Allah Name Audio

Получить аудио файл имени Аллаха.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { GetAllahNameAudioApiV1AllahNamesAudioFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // string
    filename: filename_example,
  } satisfies GetAllahNameAudioApiV1AllahNamesAudioFilenameGetRequest;

  try {
    const data = await api.getAllahNameAudioApiV1AllahNamesAudioFilenameGet(body);
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
| **filename** | `string` |  | [Defaults to `undefined`] |

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


## getAllahNameByIdApiV1AllahNamesContentIdGet

> AllahName getAllahNameByIdApiV1AllahNamesContentIdGet(contentId)

Get Allah Name By Id

Получить имя Аллаха по UUID.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { GetAllahNameByIdApiV1AllahNamesContentIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // string
    contentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAllahNameByIdApiV1AllahNamesContentIdGetRequest;

  try {
    const data = await api.getAllahNameByIdApiV1AllahNamesContentIdGet(body);
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
| **contentId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AllahName**](AllahName.md)

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


## getAllahNameByNumberApiV1AllahNamesNumberNumberGet

> AllahName getAllahNameByNumberApiV1AllahNamesNumberNumberGet(number)

Get Allah Name By Number

Получить имя по порядковому номеру.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { GetAllahNameByNumberApiV1AllahNamesNumberNumberGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // number
    number: 56,
  } satisfies GetAllahNameByNumberApiV1AllahNamesNumberNumberGetRequest;

  try {
    const data = await api.getAllahNameByNumberApiV1AllahNamesNumberNumberGet(body);
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
| **number** | `number` |  | [Defaults to `undefined`] |

### Return type

[**AllahName**](AllahName.md)

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


## getAllahNamesProgressApiV1AllahNamesProgressGet

> any getAllahNamesProgressApiV1AllahNamesProgressGet()

Get Allah Names Progress

Получить прогресс изучения имён Аллаха.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { GetAllahNamesProgressApiV1AllahNamesProgressGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  try {
    const data = await api.getAllahNamesProgressApiV1AllahNamesProgressGet();
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


## getRandomAllahNameApiV1AllahNamesRandomGet

> AllahName getRandomAllahNameApiV1AllahNamesRandomGet()

Get Random Allah Name

Получить случайное имя Аллаха.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { GetRandomAllahNameApiV1AllahNamesRandomGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  try {
    const data = await api.getRandomAllahNameApiV1AllahNamesRandomGet();
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

[**AllahName**](AllahName.md)

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


## listAllahNamesApiV1AllahNamesGet

> AllahNamesList listAllahNamesApiV1AllahNamesGet(search, number, limit, offset)

List Allah Names

Получить список имён Аллаха.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { ListAllahNamesApiV1AllahNamesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // string | Поиск по латинице/переводам (optional)
    search: search_example,
    // number | Фильтр по номеру (optional)
    number: 56,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies ListAllahNamesApiV1AllahNamesGetRequest;

  try {
    const data = await api.listAllahNamesApiV1AllahNamesGet(body);
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
| **search** | `string` | Поиск по латинице/переводам | [Optional] [Defaults to `undefined`] |
| **number** | `number` | Фильтр по номеру | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `99`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |

### Return type

[**AllahNamesList**](AllahNamesList.md)

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


## markNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPost

> any markNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPost(contentId)

Mark Name As Learned

Отметить имя как изученное.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { MarkNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // string
    contentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies MarkNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPostRequest;

  try {
    const data = await api.markNameAsLearnedApiV1AllahNamesContentIdMarkLearnedPost(body);
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
| **contentId** | `string` |  | [Defaults to `undefined`] |

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


## markNameAsViewedApiV1AllahNamesContentIdViewPost

> any markNameAsViewedApiV1AllahNamesContentIdViewPost(contentId)

Mark Name As Viewed

Отметить имя как просмотренное.

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { MarkNameAsViewedApiV1AllahNamesContentIdViewPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // string
    contentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies MarkNameAsViewedApiV1AllahNamesContentIdViewPostRequest;

  try {
    const data = await api.markNameAsViewedApiV1AllahNamesContentIdViewPost(body);
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
| **contentId** | `string` |  | [Defaults to `undefined`] |

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


## unmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPost

> any unmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPost(contentId)

Unmark Name As Learned

Снять отметку «изучено».

### Example

```ts
import {
  Configuration,
  AllahNamesApi,
} from '';
import type { UnmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllahNamesApi(config);

  const body = {
    // string
    contentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies UnmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPostRequest;

  try {
    const data = await api.unmarkNameAsLearnedApiV1AllahNamesContentIdUnmarkLearnedPost(body);
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
| **contentId** | `string` |  | [Defaults to `undefined`] |

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

