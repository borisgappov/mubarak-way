# SalawatApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSalawatApiV1SalawatPost**](SalawatApi.md#createsalawatapiv1salawatpost) | **POST** /api/v1/salawat/ | Create Salawat |
| [**deleteSalawatApiV1SalawatSalawatIdDelete**](SalawatApi.md#deletesalawatapiv1salawatsalawatiddelete) | **DELETE** /api/v1/salawat/{salawat_id} | Delete Salawat |
| [**getSalawatApiV1SalawatGet**](SalawatApi.md#getsalawatapiv1salawatget) | **GET** /api/v1/salawat/ | Get Salawat |
| [**getSalawatDetailApiV1SalawatSalawatIdGet**](SalawatApi.md#getsalawatdetailapiv1salawatsalawatidget) | **GET** /api/v1/salawat/{salawat_id} | Get Salawat Detail |
| [**searchSalawatApiV1SalawatSearchGet**](SalawatApi.md#searchsalawatapiv1salawatsearchget) | **GET** /api/v1/salawat/search | Search Salawat |
| [**updateSalawatApiV1SalawatSalawatIdPut**](SalawatApi.md#updatesalawatapiv1salawatsalawatidput) | **PUT** /api/v1/salawat/{salawat_id} | Update Salawat |



## createSalawatApiV1SalawatPost

> any createSalawatApiV1SalawatPost(requestBody)

Create Salawat

Создать новый салават (требует роль: moderator)

### Example

```ts
import {
  Configuration,
  SalawatApi,
} from '';
import type { CreateSalawatApiV1SalawatPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalawatApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateSalawatApiV1SalawatPostRequest;

  try {
    const data = await api.createSalawatApiV1SalawatPost(body);
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


## deleteSalawatApiV1SalawatSalawatIdDelete

> any deleteSalawatApiV1SalawatSalawatIdDelete(salawatId)

Delete Salawat

Удалить салават (требует роль: admin)

### Example

```ts
import {
  Configuration,
  SalawatApi,
} from '';
import type { DeleteSalawatApiV1SalawatSalawatIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalawatApi(config);

  const body = {
    // string
    salawatId: salawatId_example,
  } satisfies DeleteSalawatApiV1SalawatSalawatIdDeleteRequest;

  try {
    const data = await api.deleteSalawatApiV1SalawatSalawatIdDelete(body);
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
| **salawatId** | `string` |  | [Defaults to `undefined`] |

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


## getSalawatApiV1SalawatGet

> any getSalawatApiV1SalawatGet(salawatType, usageContext, isMandatory, lang, sort, limit, offset)

Get Salawat

Получить список салаватов

### Example

```ts
import {
  Configuration,
  SalawatApi,
} from '';
import type { GetSalawatApiV1SalawatGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalawatApi(config);

  const body = {
    // string | Salawat type filter (short|full|extended|ibrahimiyyah) (optional)
    salawatType: salawatType_example,
    // string | Usage context filter (in_prayer|after_adhan|friday|general) (optional)
    usageContext: usageContext_example,
    // boolean | Is mandatory filter (optional)
    isMandatory: true,
    // string | Language (optional)
    lang: lang_example,
    // string | Sort order (optional)
    sort: sort_example,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetSalawatApiV1SalawatGetRequest;

  try {
    const data = await api.getSalawatApiV1SalawatGet(body);
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
| **salawatType** | `string` | Salawat type filter (short|full|extended|ibrahimiyyah) | [Optional] [Defaults to `undefined`] |
| **usageContext** | `string` | Usage context filter (in_prayer|after_adhan|friday|general) | [Optional] [Defaults to `undefined`] |
| **isMandatory** | `boolean` | Is mandatory filter | [Optional] [Defaults to `undefined`] |
| **lang** | `string` | Language | [Optional] [Defaults to `&#39;ru&#39;`] |
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


## getSalawatDetailApiV1SalawatSalawatIdGet

> any getSalawatDetailApiV1SalawatSalawatIdGet(salawatId)

Get Salawat Detail

Получить подробности салавата

### Example

```ts
import {
  Configuration,
  SalawatApi,
} from '';
import type { GetSalawatDetailApiV1SalawatSalawatIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalawatApi(config);

  const body = {
    // string
    salawatId: salawatId_example,
  } satisfies GetSalawatDetailApiV1SalawatSalawatIdGetRequest;

  try {
    const data = await api.getSalawatDetailApiV1SalawatSalawatIdGet(body);
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
| **salawatId** | `string` |  | [Defaults to `undefined`] |

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


## searchSalawatApiV1SalawatSearchGet

> any searchSalawatApiV1SalawatSearchGet(q, lang, salawatType, semantic, limit, offset)

Search Salawat

Поиск салаватов

### Example

```ts
import {
  Configuration,
  SalawatApi,
} from '';
import type { SearchSalawatApiV1SalawatSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalawatApi(config);

  const body = {
    // string | Search query
    q: q_example,
    // string | Language (optional)
    lang: lang_example,
    // string | Salawat type filter (optional)
    salawatType: salawatType_example,
    // boolean | Use semantic search (optional)
    semantic: true,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies SearchSalawatApiV1SalawatSearchGetRequest;

  try {
    const data = await api.searchSalawatApiV1SalawatSearchGet(body);
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
| **salawatType** | `string` | Salawat type filter | [Optional] [Defaults to `undefined`] |
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


## updateSalawatApiV1SalawatSalawatIdPut

> any updateSalawatApiV1SalawatSalawatIdPut(salawatId, requestBody)

Update Salawat

Обновить салават (требует роль: moderator)

### Example

```ts
import {
  Configuration,
  SalawatApi,
} from '';
import type { UpdateSalawatApiV1SalawatSalawatIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalawatApi(config);

  const body = {
    // string
    salawatId: salawatId_example,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateSalawatApiV1SalawatSalawatIdPutRequest;

  try {
    const data = await api.updateSalawatApiV1SalawatSalawatIdPut(body);
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
| **salawatId** | `string` |  | [Defaults to `undefined`] |
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

