# DuasApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDuaApiV1DuasPost**](DuasApi.md#createduaapiv1duaspost) | **POST** /api/v1/duas/ | Create Dua |
| [**deleteDuaApiV1DuasDuaIdDelete**](DuasApi.md#deleteduaapiv1duasduaiddelete) | **DELETE** /api/v1/duas/{dua_id} | Delete Dua |
| [**getDuaApiV1DuasDuaIdGet**](DuasApi.md#getduaapiv1duasduaidget) | **GET** /api/v1/duas/{dua_id} | Get Dua |
| [**getDuasApiV1DuasGet**](DuasApi.md#getduasapiv1duasget) | **GET** /api/v1/duas/ | Get Duas |
| [**searchDuasApiV1DuasSearchGet**](DuasApi.md#searchduasapiv1duassearchget) | **GET** /api/v1/duas/search | Search Duas |
| [**updateDuaApiV1DuasDuaIdPut**](DuasApi.md#updateduaapiv1duasduaidput) | **PUT** /api/v1/duas/{dua_id} | Update Dua |



## createDuaApiV1DuasPost

> any createDuaApiV1DuasPost(requestBody)

Create Dua

Создать новое дуа (требует роль: moderator)

### Example

```ts
import {
  Configuration,
  DuasApi,
} from '';
import type { CreateDuaApiV1DuasPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DuasApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateDuaApiV1DuasPostRequest;

  try {
    const data = await api.createDuaApiV1DuasPost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | |

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


## deleteDuaApiV1DuasDuaIdDelete

> any deleteDuaApiV1DuasDuaIdDelete(duaId)

Delete Dua

Удалить дуа (требует роль: admin)

### Example

```ts
import {
  Configuration,
  DuasApi,
} from '';
import type { DeleteDuaApiV1DuasDuaIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DuasApi(config);

  const body = {
    // string
    duaId: duaId_example,
  } satisfies DeleteDuaApiV1DuasDuaIdDeleteRequest;

  try {
    const data = await api.deleteDuaApiV1DuasDuaIdDelete(body);
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
| **duaId** | `string` |  | [Defaults to `undefined`] |

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


## getDuaApiV1DuasDuaIdGet

> any getDuaApiV1DuasDuaIdGet(duaId)

Get Dua

Получить подробности дуа

### Example

```ts
import {
  Configuration,
  DuasApi,
} from '';
import type { GetDuaApiV1DuasDuaIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DuasApi(config);

  const body = {
    // string
    duaId: duaId_example,
  } satisfies GetDuaApiV1DuasDuaIdGetRequest;

  try {
    const data = await api.getDuaApiV1DuasDuaIdGet(body);
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
| **duaId** | `string` |  | [Defaults to `undefined`] |

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


## getDuasApiV1DuasGet

> any getDuasApiV1DuasGet(category, occasion, lang, madhab, country, hasAudio, sort, limit, offset)

Get Duas

Получить список дуа

### Example

```ts
import {
  Configuration,
  DuasApi,
} from '';
import type { GetDuasApiV1DuasGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DuasApi(config);

  const body = {
    // string | Category filter (optional)
    category: category_example,
    // string | Occasion filter (optional)
    occasion: occasion_example,
    // string | Language (optional)
    lang: lang_example,
    // string | Madhab filter (optional)
    madhab: madhab_example,
    // string | Country filter (optional)
    country: country_example,
    // boolean | Has audio filter (optional)
    hasAudio: true,
    // string | Sort order (optional)
    sort: sort_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetDuasApiV1DuasGetRequest;

  try {
    const data = await api.getDuasApiV1DuasGet(body);
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
| **category** | `string` | Category filter | [Optional] [Defaults to `undefined`] |
| **occasion** | `string` | Occasion filter | [Optional] [Defaults to `undefined`] |
| **lang** | `string` | Language | [Optional] [Defaults to `&#39;ru&#39;`] |
| **madhab** | `string` | Madhab filter | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country filter | [Optional] [Defaults to `undefined`] |
| **hasAudio** | `boolean` | Has audio filter | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Sort order | [Optional] [Defaults to `&#39;popularity&#39;`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
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


## searchDuasApiV1DuasSearchGet

> any searchDuasApiV1DuasSearchGet(q, lang, category, semantic, limit, offset)

Search Duas

Поиск дуа

### Example

```ts
import {
  Configuration,
  DuasApi,
} from '';
import type { SearchDuasApiV1DuasSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DuasApi(config);

  const body = {
    // string | Search query
    q: q_example,
    // string | Language (optional)
    lang: lang_example,
    // string | Category filter (optional)
    category: category_example,
    // boolean | Use semantic search (optional)
    semantic: true,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies SearchDuasApiV1DuasSearchGetRequest;

  try {
    const data = await api.searchDuasApiV1DuasSearchGet(body);
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
| **q** | `string` | Search query | [Defaults to `undefined`] |
| **lang** | `string` | Language | [Optional] [Defaults to `&#39;ru&#39;`] |
| **category** | `string` | Category filter | [Optional] [Defaults to `undefined`] |
| **semantic** | `boolean` | Use semantic search | [Optional] [Defaults to `false`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
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


## updateDuaApiV1DuasDuaIdPut

> any updateDuaApiV1DuasDuaIdPut(duaId, requestBody)

Update Dua

Обновить дуа (требует роль: moderator)

### Example

```ts
import {
  Configuration,
  DuasApi,
} from '';
import type { UpdateDuaApiV1DuasDuaIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DuasApi(config);

  const body = {
    // string
    duaId: duaId_example,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateDuaApiV1DuasDuaIdPutRequest;

  try {
    const data = await api.updateDuaApiV1DuasDuaIdPut(body);
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
| **duaId** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `{ [key: string]: any; }` |  | |

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

