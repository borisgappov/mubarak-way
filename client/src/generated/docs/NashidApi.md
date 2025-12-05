# NashidApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createNashidApiV1NashidPost**](NashidApi.md#createnashidapiv1nashidpost) | **POST** /api/v1/nashid | Create Nashid |
| [**deleteNashidApiV1NashidNashidIdDelete**](NashidApi.md#deletenashidapiv1nashidnashididdelete) | **DELETE** /api/v1/nashid/{nashid_id} | Delete Nashid |
| [**getNashidApiV1NashidNashidIdGet**](NashidApi.md#getnashidapiv1nashidnashididget) | **GET** /api/v1/nashid/{nashid_id} | Get Nashid |
| [**getNashidAudioApiV1NashidAudioNumericIdGet**](NashidApi.md#getnashidaudioapiv1nashidaudionumericidget) | **GET** /api/v1/nashid/audio/{numeric_id} | Get Nashid Audio |
| [**getNashidsApiV1NashidGet**](NashidApi.md#getnashidsapiv1nashidget) | **GET** /api/v1/nashid | Get Nashids |
| [**patchNashidApiV1NashidNashidIdPatch**](NashidApi.md#patchnashidapiv1nashidnashididpatch) | **PATCH** /api/v1/nashid/{nashid_id} | Patch Nashid |
| [**updateNashidApiV1NashidNashidIdPut**](NashidApi.md#updatenashidapiv1nashidnashididput) | **PUT** /api/v1/nashid/{nashid_id} | Update Nashid |



## createNashidApiV1NashidPost

> NashidItem createNashidApiV1NashidPost(nashidCreate)

Create Nashid

Создать новый нашид (admin only)

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { CreateNashidApiV1NashidPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // NashidCreate
    nashidCreate: ...,
  } satisfies CreateNashidApiV1NashidPostRequest;

  try {
    const data = await api.createNashidApiV1NashidPost(body);
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
| **nashidCreate** | [NashidCreate](NashidCreate.md) |  | |

### Return type

[**NashidItem**](NashidItem.md)

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


## deleteNashidApiV1NashidNashidIdDelete

> any deleteNashidApiV1NashidNashidIdDelete(nashidId)

Delete Nashid

Удалить нашид (admin only)

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { DeleteNashidApiV1NashidNashidIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // string
    nashidId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteNashidApiV1NashidNashidIdDeleteRequest;

  try {
    const data = await api.deleteNashidApiV1NashidNashidIdDelete(body);
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
| **nashidId** | `string` |  | [Defaults to `undefined`] |

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


## getNashidApiV1NashidNashidIdGet

> NashidItem getNashidApiV1NashidNashidIdGet(nashidId)

Get Nashid

Получить детали нашида

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { GetNashidApiV1NashidNashidIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // string
    nashidId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetNashidApiV1NashidNashidIdGetRequest;

  try {
    const data = await api.getNashidApiV1NashidNashidIdGet(body);
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
| **nashidId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**NashidItem**](NashidItem.md)

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


## getNashidAudioApiV1NashidAudioNumericIdGet

> any getNashidAudioApiV1NashidAudioNumericIdGet(numericId)

Get Nashid Audio

Получить аудио файл нашида (MP3)

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { GetNashidAudioApiV1NashidAudioNumericIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // number
    numericId: 56,
  } satisfies GetNashidAudioApiV1NashidAudioNumericIdGetRequest;

  try {
    const data = await api.getNashidAudioApiV1NashidAudioNumericIdGet(body);
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
| **numericId** | `number` |  | [Defaults to `undefined`] |

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


## getNashidsApiV1NashidGet

> any getNashidsApiV1NashidGet(artist, genre, language, theme, q, limit, offset, sort)

Get Nashids

Получить список нашидов

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { GetNashidsApiV1NashidGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // string (optional)
    artist: artist_example,
    // string (optional)
    genre: genre_example,
    // string (optional)
    language: language_example,
    // string (optional)
    theme: theme_example,
    // string (optional)
    q: q_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
    // string (optional)
    sort: sort_example,
  } satisfies GetNashidsApiV1NashidGetRequest;

  try {
    const data = await api.getNashidsApiV1NashidGet(body);
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
| **artist** | `string` |  | [Optional] [Defaults to `undefined`] |
| **genre** | `string` |  | [Optional] [Defaults to `undefined`] |
| **language** | `string` |  | [Optional] [Defaults to `undefined`] |
| **theme** | `string` |  | [Optional] [Defaults to `undefined`] |
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
| **offset** | `number` |  | [Optional] [Defaults to `0`] |
| **sort** | `string` |  | [Optional] [Defaults to `&#39;created_at&#39;`] |

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


## patchNashidApiV1NashidNashidIdPatch

> NashidItem patchNashidApiV1NashidNashidIdPatch(nashidId, nashidUpdate)

Patch Nashid

Частично обновить нашид (admin only)

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { PatchNashidApiV1NashidNashidIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // string
    nashidId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // NashidUpdate
    nashidUpdate: ...,
  } satisfies PatchNashidApiV1NashidNashidIdPatchRequest;

  try {
    const data = await api.patchNashidApiV1NashidNashidIdPatch(body);
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
| **nashidId** | `string` |  | [Defaults to `undefined`] |
| **nashidUpdate** | [NashidUpdate](NashidUpdate.md) |  | |

### Return type

[**NashidItem**](NashidItem.md)

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


## updateNashidApiV1NashidNashidIdPut

> NashidItem updateNashidApiV1NashidNashidIdPut(nashidId, nashidUpdate)

Update Nashid

Обновить нашид (admin only)

### Example

```ts
import {
  Configuration,
  NashidApi,
} from '';
import type { UpdateNashidApiV1NashidNashidIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new NashidApi(config);

  const body = {
    // string
    nashidId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // NashidUpdate
    nashidUpdate: ...,
  } satisfies UpdateNashidApiV1NashidNashidIdPutRequest;

  try {
    const data = await api.updateNashidApiV1NashidNashidIdPut(body);
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
| **nashidId** | `string` |  | [Defaults to `undefined`] |
| **nashidUpdate** | [NashidUpdate](NashidUpdate.md) |  | |

### Return type

[**NashidItem**](NashidItem.md)

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

