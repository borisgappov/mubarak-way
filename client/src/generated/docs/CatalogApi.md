# CatalogApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCatalogCategoryApiV1CatalogCategoriesPost**](CatalogApi.md#createcatalogcategoryapiv1catalogcategoriespost) | **POST** /api/v1/catalog/categories | Create Catalog Category |
| [**createCatalogItemApiV1CatalogItemsPost**](CatalogApi.md#createcatalogitemapiv1catalogitemspost) | **POST** /api/v1/catalog/items | Create Catalog Item |
| [**deleteCatalogCategoryApiV1CatalogCategoriesCategoryIdDelete**](CatalogApi.md#deletecatalogcategoryapiv1catalogcategoriescategoryiddelete) | **DELETE** /api/v1/catalog/categories/{category_id} | Delete Catalog Category |
| [**deleteCatalogItemApiV1CatalogItemsItemIdDelete**](CatalogApi.md#deletecatalogitemapiv1catalogitemsitemiddelete) | **DELETE** /api/v1/catalog/items/{item_id} | Delete Catalog Item |
| [**getCatalogCategoriesApiV1CatalogCategoriesGet**](CatalogApi.md#getcatalogcategoriesapiv1catalogcategoriesget) | **GET** /api/v1/catalog/categories | Get Catalog Categories |
| [**getCatalogItemApiV1CatalogItemsItemIdGet**](CatalogApi.md#getcatalogitemapiv1catalogitemsitemidget) | **GET** /api/v1/catalog/items/{item_id} | Get Catalog Item |
| [**getCatalogItemAyahsApiV1CatalogItemsItemIdAyahsGet**](CatalogApi.md#getcatalogitemayahsapiv1catalogitemsitemidayahsget) | **GET** /api/v1/catalog/items/{item_id}/ayahs | Get Catalog Item Ayahs |
| [**getCatalogItemsApiV1CatalogItemsGet**](CatalogApi.md#getcatalogitemsapiv1catalogitemsget) | **GET** /api/v1/catalog/items | Get Catalog Items |
| [**updateCatalogCategoryApiV1CatalogCategoriesCategoryIdPut**](CatalogApi.md#updatecatalogcategoryapiv1catalogcategoriescategoryidput) | **PUT** /api/v1/catalog/categories/{category_id} | Update Catalog Category |
| [**updateCatalogItemApiV1CatalogItemsItemIdPut**](CatalogApi.md#updatecatalogitemapiv1catalogitemsitemidput) | **PUT** /api/v1/catalog/items/{item_id} | Update Catalog Item |



## createCatalogCategoryApiV1CatalogCategoriesPost

> CatalogCategory createCatalogCategoryApiV1CatalogCategoriesPost(catalogCategory)

Create Catalog Category

Создать новую категорию каталога (только для админов)

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { CreateCatalogCategoryApiV1CatalogCategoriesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // CatalogCategory
    catalogCategory: ...,
  } satisfies CreateCatalogCategoryApiV1CatalogCategoriesPostRequest;

  try {
    const data = await api.createCatalogCategoryApiV1CatalogCategoriesPost(body);
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
| **catalogCategory** | [CatalogCategory](CatalogCategory.md) |  | |

### Return type

[**CatalogCategory**](CatalogCategory.md)

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


## createCatalogItemApiV1CatalogItemsPost

> CatalogItem createCatalogItemApiV1CatalogItemsPost(catalogItem)

Create Catalog Item

Создать новый элемент каталога (только для админов)

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { CreateCatalogItemApiV1CatalogItemsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // CatalogItem
    catalogItem: ...,
  } satisfies CreateCatalogItemApiV1CatalogItemsPostRequest;

  try {
    const data = await api.createCatalogItemApiV1CatalogItemsPost(body);
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
| **catalogItem** | [CatalogItem](CatalogItem.md) |  | |

### Return type

[**CatalogItem**](CatalogItem.md)

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


## deleteCatalogCategoryApiV1CatalogCategoriesCategoryIdDelete

> any deleteCatalogCategoryApiV1CatalogCategoriesCategoryIdDelete(categoryId)

Delete Catalog Category

Удалить категорию каталога (только для админов)

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { DeleteCatalogCategoryApiV1CatalogCategoriesCategoryIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    categoryId: categoryId_example,
  } satisfies DeleteCatalogCategoryApiV1CatalogCategoriesCategoryIdDeleteRequest;

  try {
    const data = await api.deleteCatalogCategoryApiV1CatalogCategoriesCategoryIdDelete(body);
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
| **categoryId** | `string` |  | [Defaults to `undefined`] |

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


## deleteCatalogItemApiV1CatalogItemsItemIdDelete

> any deleteCatalogItemApiV1CatalogItemsItemIdDelete(itemId)

Delete Catalog Item

Удалить элемент каталога (только для админов)

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { DeleteCatalogItemApiV1CatalogItemsItemIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    itemId: itemId_example,
  } satisfies DeleteCatalogItemApiV1CatalogItemsItemIdDeleteRequest;

  try {
    const data = await api.deleteCatalogItemApiV1CatalogItemsItemIdDelete(body);
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
| **itemId** | `string` |  | [Defaults to `undefined`] |

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


## getCatalogCategoriesApiV1CatalogCategoriesGet

> Array&lt;CatalogCategory&gt; getCatalogCategoriesApiV1CatalogCategoriesGet(lang)

Get Catalog Categories

Get catalog categories

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { GetCatalogCategoriesApiV1CatalogCategoriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string | Language code (optional)
    lang: lang_example,
  } satisfies GetCatalogCategoriesApiV1CatalogCategoriesGetRequest;

  try {
    const data = await api.getCatalogCategoriesApiV1CatalogCategoriesGet(body);
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
| **lang** | `string` | Language code | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

[**Array&lt;CatalogCategory&gt;**](CatalogCategory.md)

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


## getCatalogItemApiV1CatalogItemsItemIdGet

> CatalogItem getCatalogItemApiV1CatalogItemsItemIdGet(itemId, lang)

Get Catalog Item

Get catalog item details

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { GetCatalogItemApiV1CatalogItemsItemIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    itemId: itemId_example,
    // string | Language code (optional)
    lang: lang_example,
  } satisfies GetCatalogItemApiV1CatalogItemsItemIdGetRequest;

  try {
    const data = await api.getCatalogItemApiV1CatalogItemsItemIdGet(body);
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
| **itemId** | `string` |  | [Defaults to `undefined`] |
| **lang** | `string` | Language code | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

[**CatalogItem**](CatalogItem.md)

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


## getCatalogItemAyahsApiV1CatalogItemsItemIdAyahsGet

> Array&lt;Ayah&gt; getCatalogItemAyahsApiV1CatalogItemsItemIdAyahsGet(itemId, lang)

Get Catalog Item Ayahs

Get ayahs for catalog item

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { GetCatalogItemAyahsApiV1CatalogItemsItemIdAyahsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    itemId: itemId_example,
    // string | Language code (optional)
    lang: lang_example,
  } satisfies GetCatalogItemAyahsApiV1CatalogItemsItemIdAyahsGetRequest;

  try {
    const data = await api.getCatalogItemAyahsApiV1CatalogItemsItemIdAyahsGet(body);
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
| **itemId** | `string` |  | [Defaults to `undefined`] |
| **lang** | `string` | Language code | [Optional] [Defaults to `&#39;en&#39;`] |

### Return type

[**Array&lt;Ayah&gt;**](Ayah.md)

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


## getCatalogItemsApiV1CatalogItemsGet

> CatalogItemsResponse getCatalogItemsApiV1CatalogItemsGet(category, q, lang, limit, offset, sort)

Get Catalog Items

Get catalog items

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { GetCatalogItemsApiV1CatalogItemsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string | Filter by category (optional)
    category: category_example,
    // string | Search query (optional)
    q: q_example,
    // string | Language code (optional)
    lang: lang_example,
    // number | Number of items to return (optional)
    limit: 56,
    // number | Number of items to skip (optional)
    offset: 56,
    // string | Sort order (optional)
    sort: sort_example,
  } satisfies GetCatalogItemsApiV1CatalogItemsGetRequest;

  try {
    const data = await api.getCatalogItemsApiV1CatalogItemsGet(body);
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
| **category** | `string` | Filter by category | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Search query | [Optional] [Defaults to `undefined`] |
| **lang** | `string` | Language code | [Optional] [Defaults to `&#39;en&#39;`] |
| **limit** | `number` | Number of items to return | [Optional] [Defaults to `20`] |
| **offset** | `number` | Number of items to skip | [Optional] [Defaults to `0`] |
| **sort** | `string` | Sort order | [Optional] [Defaults to `&#39;popular&#39;`] |

### Return type

[**CatalogItemsResponse**](CatalogItemsResponse.md)

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


## updateCatalogCategoryApiV1CatalogCategoriesCategoryIdPut

> CatalogCategory updateCatalogCategoryApiV1CatalogCategoriesCategoryIdPut(categoryId, catalogCategory)

Update Catalog Category

Обновить категорию каталога (только для админов)

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { UpdateCatalogCategoryApiV1CatalogCategoriesCategoryIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    categoryId: categoryId_example,
    // CatalogCategory
    catalogCategory: ...,
  } satisfies UpdateCatalogCategoryApiV1CatalogCategoriesCategoryIdPutRequest;

  try {
    const data = await api.updateCatalogCategoryApiV1CatalogCategoriesCategoryIdPut(body);
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
| **categoryId** | `string` |  | [Defaults to `undefined`] |
| **catalogCategory** | [CatalogCategory](CatalogCategory.md) |  | |

### Return type

[**CatalogCategory**](CatalogCategory.md)

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


## updateCatalogItemApiV1CatalogItemsItemIdPut

> CatalogItem updateCatalogItemApiV1CatalogItemsItemIdPut(itemId, catalogItem)

Update Catalog Item

Обновить элемент каталога (только для админов)

### Example

```ts
import {
  Configuration,
  CatalogApi,
} from '';
import type { UpdateCatalogItemApiV1CatalogItemsItemIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CatalogApi(config);

  const body = {
    // string
    itemId: itemId_example,
    // CatalogItem
    catalogItem: ...,
  } satisfies UpdateCatalogItemApiV1CatalogItemsItemIdPutRequest;

  try {
    const data = await api.updateCatalogItemApiV1CatalogItemsItemIdPut(body);
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
| **itemId** | `string` |  | [Defaults to `undefined`] |
| **catalogItem** | [CatalogItem](CatalogItem.md) |  | |

### Return type

[**CatalogItem**](CatalogItem.md)

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

