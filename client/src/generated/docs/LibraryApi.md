# LibraryApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBookApiV1LibraryBooksPost**](LibraryApi.md#createbookapiv1librarybookspost) | **POST** /api/v1/library/books | Create Book |
| [**deleteBookApiV1LibraryBooksBookIdDelete**](LibraryApi.md#deletebookapiv1librarybooksbookiddelete) | **DELETE** /api/v1/library/books/{book_id} | Delete Book |
| [**deleteReadingProgressApiV1LibraryProgressBookIdDelete**](LibraryApi.md#deletereadingprogressapiv1libraryprogressbookiddelete) | **DELETE** /api/v1/library/progress/{book_id} | Delete Reading Progress |
| [**getLibraryBookApiV1LibraryBooksBookIdGet**](LibraryApi.md#getlibrarybookapiv1librarybooksbookidget) | **GET** /api/v1/library/books/{book_id} | Get Library Book |
| [**getLibraryBooksApiV1LibraryBooksGet**](LibraryApi.md#getlibrarybooksapiv1librarybooksget) | **GET** /api/v1/library/books | Get Library Books |
| [**getLibrarySectionsApiV1LibrarySectionsGet**](LibraryApi.md#getlibrarysectionsapiv1librarysectionsget) | **GET** /api/v1/library/sections | Get Library Sections |
| [**getReadingProgressApiV1LibraryProgressGet**](LibraryApi.md#getreadingprogressapiv1libraryprogressget) | **GET** /api/v1/library/progress | Get Reading Progress |
| [**updateBookApiV1LibraryBooksBookIdPut**](LibraryApi.md#updatebookapiv1librarybooksbookidput) | **PUT** /api/v1/library/books/{book_id} | Update Book |
| [**updateReadingProgressApiV1LibraryBooksBookIdProgressPost**](LibraryApi.md#updatereadingprogressapiv1librarybooksbookidprogresspost) | **POST** /api/v1/library/books/{book_id}/progress | Update Reading Progress |
| [**updateReadingProgressApiV1LibraryProgressBookIdPut**](LibraryApi.md#updatereadingprogressapiv1libraryprogressbookidput) | **PUT** /api/v1/library/progress/{book_id} | Update Reading Progress |



## createBookApiV1LibraryBooksPost

> Book createBookApiV1LibraryBooksPost(book)

Create Book

Создать новую книгу (только для админов)

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { CreateBookApiV1LibraryBooksPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // Book
    book: ...,
  } satisfies CreateBookApiV1LibraryBooksPostRequest;

  try {
    const data = await api.createBookApiV1LibraryBooksPost(body);
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
| **book** | [Book](Book.md) |  | |

### Return type

[**Book**](Book.md)

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


## deleteBookApiV1LibraryBooksBookIdDelete

> any deleteBookApiV1LibraryBooksBookIdDelete(bookId)

Delete Book

Удалить книгу (только для админов)

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { DeleteBookApiV1LibraryBooksBookIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string
    bookId: bookId_example,
  } satisfies DeleteBookApiV1LibraryBooksBookIdDeleteRequest;

  try {
    const data = await api.deleteBookApiV1LibraryBooksBookIdDelete(body);
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
| **bookId** | `string` |  | [Defaults to `undefined`] |

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


## deleteReadingProgressApiV1LibraryProgressBookIdDelete

> any deleteReadingProgressApiV1LibraryProgressBookIdDelete(bookId)

Delete Reading Progress

Удалить прогресс чтения

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { DeleteReadingProgressApiV1LibraryProgressBookIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string
    bookId: bookId_example,
  } satisfies DeleteReadingProgressApiV1LibraryProgressBookIdDeleteRequest;

  try {
    const data = await api.deleteReadingProgressApiV1LibraryProgressBookIdDelete(body);
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
| **bookId** | `string` |  | [Defaults to `undefined`] |

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


## getLibraryBookApiV1LibraryBooksBookIdGet

> Book getLibraryBookApiV1LibraryBooksBookIdGet(bookId)

Get Library Book

Get book details

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { GetLibraryBookApiV1LibraryBooksBookIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string
    bookId: bookId_example,
  } satisfies GetLibraryBookApiV1LibraryBooksBookIdGetRequest;

  try {
    const data = await api.getLibraryBookApiV1LibraryBooksBookIdGet(body);
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
| **bookId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**Book**](Book.md)

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


## getLibraryBooksApiV1LibraryBooksGet

> any getLibraryBooksApiV1LibraryBooksGet(tier, q, tags)

Get Library Books

Get library books

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { GetLibraryBooksApiV1LibraryBooksGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string | Filter by subscription tier (optional)
    tier: tier_example,
    // string | Search query (optional)
    q: q_example,
    // string | Filter by tags (comma-separated) (optional)
    tags: tags_example,
  } satisfies GetLibraryBooksApiV1LibraryBooksGetRequest;

  try {
    const data = await api.getLibraryBooksApiV1LibraryBooksGet(body);
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
| **tier** | `string` | Filter by subscription tier | [Optional] [Defaults to `undefined`] |
| **q** | `string` | Search query | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Filter by tags (comma-separated) | [Optional] [Defaults to `undefined`] |

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


## getLibrarySectionsApiV1LibrarySectionsGet

> Array&lt;LibrarySection&gt; getLibrarySectionsApiV1LibrarySectionsGet()

Get Library Sections

Get library sections

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { GetLibrarySectionsApiV1LibrarySectionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  try {
    const data = await api.getLibrarySectionsApiV1LibrarySectionsGet();
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

[**Array&lt;LibrarySection&gt;**](LibrarySection.md)

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


## getReadingProgressApiV1LibraryProgressGet

> Array&lt;ReadingProgress&gt; getReadingProgressApiV1LibraryProgressGet()

Get Reading Progress

Get reading progress

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { GetReadingProgressApiV1LibraryProgressGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  try {
    const data = await api.getReadingProgressApiV1LibraryProgressGet();
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

[**Array&lt;ReadingProgress&gt;**](ReadingProgress.md)

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


## updateBookApiV1LibraryBooksBookIdPut

> Book updateBookApiV1LibraryBooksBookIdPut(bookId, book)

Update Book

Обновить книгу (только для админов)

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { UpdateBookApiV1LibraryBooksBookIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string
    bookId: bookId_example,
    // Book
    book: ...,
  } satisfies UpdateBookApiV1LibraryBooksBookIdPutRequest;

  try {
    const data = await api.updateBookApiV1LibraryBooksBookIdPut(body);
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
| **bookId** | `string` |  | [Defaults to `undefined`] |
| **book** | [Book](Book.md) |  | |

### Return type

[**Book**](Book.md)

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


## updateReadingProgressApiV1LibraryBooksBookIdProgressPost

> ReadingProgress updateReadingProgressApiV1LibraryBooksBookIdProgressPost(bookId, readingProgressUpdate)

Update Reading Progress

Update reading progress

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { UpdateReadingProgressApiV1LibraryBooksBookIdProgressPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string
    bookId: bookId_example,
    // ReadingProgressUpdate
    readingProgressUpdate: ...,
  } satisfies UpdateReadingProgressApiV1LibraryBooksBookIdProgressPostRequest;

  try {
    const data = await api.updateReadingProgressApiV1LibraryBooksBookIdProgressPost(body);
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
| **bookId** | `string` |  | [Defaults to `undefined`] |
| **readingProgressUpdate** | [ReadingProgressUpdate](ReadingProgressUpdate.md) |  | |

### Return type

[**ReadingProgress**](ReadingProgress.md)

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


## updateReadingProgressApiV1LibraryProgressBookIdPut

> ReadingProgress updateReadingProgressApiV1LibraryProgressBookIdPut(bookId, readingProgress)

Update Reading Progress

Обновить прогресс чтения

### Example

```ts
import {
  Configuration,
  LibraryApi,
} from '';
import type { UpdateReadingProgressApiV1LibraryProgressBookIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LibraryApi(config);

  const body = {
    // string
    bookId: bookId_example,
    // ReadingProgress
    readingProgress: ...,
  } satisfies UpdateReadingProgressApiV1LibraryProgressBookIdPutRequest;

  try {
    const data = await api.updateReadingProgressApiV1LibraryProgressBookIdPut(body);
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
| **bookId** | `string` |  | [Defaults to `undefined`] |
| **readingProgress** | [ReadingProgress](ReadingProgress.md) |  | |

### Return type

[**ReadingProgress**](ReadingProgress.md)

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

