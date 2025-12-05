# ElasticsearchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**clusterHealthApiV1ElasticsearchClusterHealthGet**](ElasticsearchApi.md#clusterhealthapiv1elasticsearchclusterhealthget) | **GET** /api/v1/elasticsearch/_cluster/health | Cluster Health |
| [**clusterHealthApiV1ElasticsearchClusterHealthGet_0**](ElasticsearchApi.md#clusterhealthapiv1elasticsearchclusterhealthget_0) | **GET** /api/v1/elasticsearch/_cluster/health | Cluster Health |
| [**clusterStatsApiV1ElasticsearchClusterStatsGet**](ElasticsearchApi.md#clusterstatsapiv1elasticsearchclusterstatsget) | **GET** /api/v1/elasticsearch/_cluster/stats | Cluster Stats |
| [**clusterStatsApiV1ElasticsearchClusterStatsGet_0**](ElasticsearchApi.md#clusterstatsapiv1elasticsearchclusterstatsget_0) | **GET** /api/v1/elasticsearch/_cluster/stats | Cluster Stats |
| [**getDocumentApiV1ElasticsearchIndexNameDocDocIdGet**](ElasticsearchApi.md#getdocumentapiv1elasticsearchindexnamedocdocidget) | **GET** /api/v1/elasticsearch/{index_name}/_doc/{doc_id} | Get Document |
| [**getDocumentApiV1ElasticsearchIndexNameDocDocIdGet_0**](ElasticsearchApi.md#getdocumentapiv1elasticsearchindexnamedocdocidget_0) | **GET** /api/v1/elasticsearch/{index_name}/_doc/{doc_id} | Get Document |
| [**getMappingApiV1ElasticsearchIndexNameMappingGet**](ElasticsearchApi.md#getmappingapiv1elasticsearchindexnamemappingget) | **GET** /api/v1/elasticsearch/{index_name}/_mapping | Get Mapping |
| [**getMappingApiV1ElasticsearchIndexNameMappingGet_0**](ElasticsearchApi.md#getmappingapiv1elasticsearchindexnamemappingget_0) | **GET** /api/v1/elasticsearch/{index_name}/_mapping | Get Mapping |
| [**getStatsApiV1ElasticsearchIndexNameStatsGet**](ElasticsearchApi.md#getstatsapiv1elasticsearchindexnamestatsget) | **GET** /api/v1/elasticsearch/{index_name}/_stats | Get Stats |
| [**getStatsApiV1ElasticsearchIndexNameStatsGet_0**](ElasticsearchApi.md#getstatsapiv1elasticsearchindexnamestatsget_0) | **GET** /api/v1/elasticsearch/{index_name}/_stats | Get Stats |
| [**listIndicesApiV1ElasticsearchCatIndicesGet**](ElasticsearchApi.md#listindicesapiv1elasticsearchcatindicesget) | **GET** /api/v1/elasticsearch/_cat/indices | List Indices |
| [**listIndicesApiV1ElasticsearchCatIndicesGet_0**](ElasticsearchApi.md#listindicesapiv1elasticsearchcatindicesget_0) | **GET** /api/v1/elasticsearch/_cat/indices | List Indices |
| [**nodesStatsApiV1ElasticsearchNodesStatsGet**](ElasticsearchApi.md#nodesstatsapiv1elasticsearchnodesstatsget) | **GET** /api/v1/elasticsearch/_nodes/stats | Nodes Stats |
| [**nodesStatsApiV1ElasticsearchNodesStatsGet_0**](ElasticsearchApi.md#nodesstatsapiv1elasticsearchnodesstatsget_0) | **GET** /api/v1/elasticsearch/_nodes/stats | Nodes Stats |
| [**searchIndexApiV1ElasticsearchIndexNameSearchGet**](ElasticsearchApi.md#searchindexapiv1elasticsearchindexnamesearchget) | **GET** /api/v1/elasticsearch/{index_name}/_search | Search Index |
| [**searchIndexApiV1ElasticsearchIndexNameSearchGet_0**](ElasticsearchApi.md#searchindexapiv1elasticsearchindexnamesearchget_0) | **GET** /api/v1/elasticsearch/{index_name}/_search | Search Index |
| [**searchIndexPostApiV1ElasticsearchIndexNameSearchPost**](ElasticsearchApi.md#searchindexpostapiv1elasticsearchindexnamesearchpost) | **POST** /api/v1/elasticsearch/{index_name}/_search | Search Index Post |
| [**searchIndexPostApiV1ElasticsearchIndexNameSearchPost_0**](ElasticsearchApi.md#searchindexpostapiv1elasticsearchindexnamesearchpost_0) | **POST** /api/v1/elasticsearch/{index_name}/_search | Search Index Post |



## clusterHealthApiV1ElasticsearchClusterHealthGet

> any clusterHealthApiV1ElasticsearchClusterHealthGet()

Cluster Health

Проверка состояния кластера Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { ClusterHealthApiV1ElasticsearchClusterHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  try {
    const data = await api.clusterHealthApiV1ElasticsearchClusterHealthGet();
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


## clusterHealthApiV1ElasticsearchClusterHealthGet_0

> any clusterHealthApiV1ElasticsearchClusterHealthGet_0()

Cluster Health

Проверка состояния кластера Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { ClusterHealthApiV1ElasticsearchClusterHealthGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  try {
    const data = await api.clusterHealthApiV1ElasticsearchClusterHealthGet_0();
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


## clusterStatsApiV1ElasticsearchClusterStatsGet

> any clusterStatsApiV1ElasticsearchClusterStatsGet()

Cluster Stats

Статистика кластера Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { ClusterStatsApiV1ElasticsearchClusterStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  try {
    const data = await api.clusterStatsApiV1ElasticsearchClusterStatsGet();
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


## clusterStatsApiV1ElasticsearchClusterStatsGet_0

> any clusterStatsApiV1ElasticsearchClusterStatsGet_0()

Cluster Stats

Статистика кластера Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { ClusterStatsApiV1ElasticsearchClusterStatsGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  try {
    const data = await api.clusterStatsApiV1ElasticsearchClusterStatsGet_0();
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


## getDocumentApiV1ElasticsearchIndexNameDocDocIdGet

> any getDocumentApiV1ElasticsearchIndexNameDocDocIdGet(indexName, docId)

Get Document

Получение документа по ID

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { GetDocumentApiV1ElasticsearchIndexNameDocDocIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
    // string
    docId: docId_example,
  } satisfies GetDocumentApiV1ElasticsearchIndexNameDocDocIdGetRequest;

  try {
    const data = await api.getDocumentApiV1ElasticsearchIndexNameDocDocIdGet(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |
| **docId** | `string` |  | [Defaults to `undefined`] |

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


## getDocumentApiV1ElasticsearchIndexNameDocDocIdGet_0

> any getDocumentApiV1ElasticsearchIndexNameDocDocIdGet_0(indexName, docId)

Get Document

Получение документа по ID

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { GetDocumentApiV1ElasticsearchIndexNameDocDocIdGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
    // string
    docId: docId_example,
  } satisfies GetDocumentApiV1ElasticsearchIndexNameDocDocIdGet0Request;

  try {
    const data = await api.getDocumentApiV1ElasticsearchIndexNameDocDocIdGet_0(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |
| **docId** | `string` |  | [Defaults to `undefined`] |

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


## getMappingApiV1ElasticsearchIndexNameMappingGet

> any getMappingApiV1ElasticsearchIndexNameMappingGet(indexName)

Get Mapping

Получение маппинга индекса

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { GetMappingApiV1ElasticsearchIndexNameMappingGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies GetMappingApiV1ElasticsearchIndexNameMappingGetRequest;

  try {
    const data = await api.getMappingApiV1ElasticsearchIndexNameMappingGet(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## getMappingApiV1ElasticsearchIndexNameMappingGet_0

> any getMappingApiV1ElasticsearchIndexNameMappingGet_0(indexName)

Get Mapping

Получение маппинга индекса

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { GetMappingApiV1ElasticsearchIndexNameMappingGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies GetMappingApiV1ElasticsearchIndexNameMappingGet0Request;

  try {
    const data = await api.getMappingApiV1ElasticsearchIndexNameMappingGet_0(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## getStatsApiV1ElasticsearchIndexNameStatsGet

> any getStatsApiV1ElasticsearchIndexNameStatsGet(indexName)

Get Stats

Получение статистики индекса

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { GetStatsApiV1ElasticsearchIndexNameStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies GetStatsApiV1ElasticsearchIndexNameStatsGetRequest;

  try {
    const data = await api.getStatsApiV1ElasticsearchIndexNameStatsGet(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## getStatsApiV1ElasticsearchIndexNameStatsGet_0

> any getStatsApiV1ElasticsearchIndexNameStatsGet_0(indexName)

Get Stats

Получение статистики индекса

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { GetStatsApiV1ElasticsearchIndexNameStatsGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies GetStatsApiV1ElasticsearchIndexNameStatsGet0Request;

  try {
    const data = await api.getStatsApiV1ElasticsearchIndexNameStatsGet_0(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## listIndicesApiV1ElasticsearchCatIndicesGet

> any listIndicesApiV1ElasticsearchCatIndicesGet(format)

List Indices

Список индексов Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { ListIndicesApiV1ElasticsearchCatIndicesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string (optional)
    format: format_example,
  } satisfies ListIndicesApiV1ElasticsearchCatIndicesGetRequest;

  try {
    const data = await api.listIndicesApiV1ElasticsearchCatIndicesGet(body);
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
| **format** | `string` |  | [Optional] [Defaults to `&#39;json&#39;`] |

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


## listIndicesApiV1ElasticsearchCatIndicesGet_0

> any listIndicesApiV1ElasticsearchCatIndicesGet_0(format)

List Indices

Список индексов Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { ListIndicesApiV1ElasticsearchCatIndicesGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string (optional)
    format: format_example,
  } satisfies ListIndicesApiV1ElasticsearchCatIndicesGet0Request;

  try {
    const data = await api.listIndicesApiV1ElasticsearchCatIndicesGet_0(body);
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
| **format** | `string` |  | [Optional] [Defaults to `&#39;json&#39;`] |

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


## nodesStatsApiV1ElasticsearchNodesStatsGet

> any nodesStatsApiV1ElasticsearchNodesStatsGet()

Nodes Stats

Статистика узлов Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { NodesStatsApiV1ElasticsearchNodesStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  try {
    const data = await api.nodesStatsApiV1ElasticsearchNodesStatsGet();
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


## nodesStatsApiV1ElasticsearchNodesStatsGet_0

> any nodesStatsApiV1ElasticsearchNodesStatsGet_0()

Nodes Stats

Статистика узлов Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { NodesStatsApiV1ElasticsearchNodesStatsGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  try {
    const data = await api.nodesStatsApiV1ElasticsearchNodesStatsGet_0();
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


## searchIndexApiV1ElasticsearchIndexNameSearchGet

> any searchIndexApiV1ElasticsearchIndexNameSearchGet(indexName)

Search Index

Поиск в индексе Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { SearchIndexApiV1ElasticsearchIndexNameSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies SearchIndexApiV1ElasticsearchIndexNameSearchGetRequest;

  try {
    const data = await api.searchIndexApiV1ElasticsearchIndexNameSearchGet(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## searchIndexApiV1ElasticsearchIndexNameSearchGet_0

> any searchIndexApiV1ElasticsearchIndexNameSearchGet_0(indexName)

Search Index

Поиск в индексе Elasticsearch

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { SearchIndexApiV1ElasticsearchIndexNameSearchGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies SearchIndexApiV1ElasticsearchIndexNameSearchGet0Request;

  try {
    const data = await api.searchIndexApiV1ElasticsearchIndexNameSearchGet_0(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## searchIndexPostApiV1ElasticsearchIndexNameSearchPost

> any searchIndexPostApiV1ElasticsearchIndexNameSearchPost(indexName)

Search Index Post

Поиск в индексе Elasticsearch (POST запрос)

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { SearchIndexPostApiV1ElasticsearchIndexNameSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies SearchIndexPostApiV1ElasticsearchIndexNameSearchPostRequest;

  try {
    const data = await api.searchIndexPostApiV1ElasticsearchIndexNameSearchPost(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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


## searchIndexPostApiV1ElasticsearchIndexNameSearchPost_0

> any searchIndexPostApiV1ElasticsearchIndexNameSearchPost_0(indexName)

Search Index Post

Поиск в индексе Elasticsearch (POST запрос)

### Example

```ts
import {
  Configuration,
  ElasticsearchApi,
} from '';
import type { SearchIndexPostApiV1ElasticsearchIndexNameSearchPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ElasticsearchApi(config);

  const body = {
    // string
    indexName: indexName_example,
  } satisfies SearchIndexPostApiV1ElasticsearchIndexNameSearchPost0Request;

  try {
    const data = await api.searchIndexPostApiV1ElasticsearchIndexNameSearchPost_0(body);
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
| **indexName** | `string` |  | [Defaults to `undefined`] |

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

