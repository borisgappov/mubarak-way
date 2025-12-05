# IntegrationBridgeApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeTextApiV1BridgeContextAnalyzePost**](IntegrationBridgeApi.md#analyzetextapiv1bridgecontextanalyzepost) | **POST** /api/v1/bridge/context/analyze | Analyze Text |
| [**autoCreateLinksApiV1BridgeAutoLinkPost**](IntegrationBridgeApi.md#autocreatelinksapiv1bridgeautolinkpost) | **POST** /api/v1/bridge/auto-link | Auto Create Links |
| [**bulkCreateLinksApiV1BridgeBulkLinksPost**](IntegrationBridgeApi.md#bulkcreatelinksapiv1bridgebulklinkspost) | **POST** /api/v1/bridge/bulk-links | Bulk Create Links |
| [**createAnnotationApiV1BridgeAnnotationsPost**](IntegrationBridgeApi.md#createannotationapiv1bridgeannotationspost) | **POST** /api/v1/bridge/annotations | Create Annotation |
| [**createEmbeddingApiV1BridgeEmbeddingsPost**](IntegrationBridgeApi.md#createembeddingapiv1bridgeembeddingspost) | **POST** /api/v1/bridge/embeddings | Create Embedding |
| [**createLinkApiV1BridgeLinksPost**](IntegrationBridgeApi.md#createlinkapiv1bridgelinkspost) | **POST** /api/v1/bridge/links | Create Link |
| [**createRuleApiV1BridgeRulesPost**](IntegrationBridgeApi.md#createruleapiv1bridgerulespost) | **POST** /api/v1/bridge/rules | Create Rule |
| [**deleteAnnotationApiV1BridgeAnnotationsAnnotationIdDelete**](IntegrationBridgeApi.md#deleteannotationapiv1bridgeannotationsannotationiddelete) | **DELETE** /api/v1/bridge/annotations/{annotation_id} | Delete Annotation |
| [**deleteEmbeddingApiV1BridgeEmbeddingsEmbeddingIdDelete**](IntegrationBridgeApi.md#deleteembeddingapiv1bridgeembeddingsembeddingiddelete) | **DELETE** /api/v1/bridge/embeddings/{embedding_id} | Delete Embedding |
| [**deleteLinkApiV1BridgeLinksLinkIdDelete**](IntegrationBridgeApi.md#deletelinkapiv1bridgelinkslinkiddelete) | **DELETE** /api/v1/bridge/links/{link_id} | Delete Link |
| [**deleteRuleApiV1BridgeRulesRuleIdDelete**](IntegrationBridgeApi.md#deleteruleapiv1bridgerulesruleiddelete) | **DELETE** /api/v1/bridge/rules/{rule_id} | Delete Rule |
| [**enrichContextApiV1BridgeContextEnrichGet**](IntegrationBridgeApi.md#enrichcontextapiv1bridgecontextenrichget) | **GET** /api/v1/bridge/context/enrich | Enrich Context |
| [**getAllRulesApiV1BridgeRulesGet**](IntegrationBridgeApi.md#getallrulesapiv1bridgerulesget) | **GET** /api/v1/bridge/rules | Get All Rules |
| [**getAnnotationApiV1BridgeAnnotationsAnnotationIdGet**](IntegrationBridgeApi.md#getannotationapiv1bridgeannotationsannotationidget) | **GET** /api/v1/bridge/annotations/{annotation_id} | Get Annotation |
| [**getAnnotationStatsApiV1BridgeStatsAnnotationsGet**](IntegrationBridgeApi.md#getannotationstatsapiv1bridgestatsannotationsget) | **GET** /api/v1/bridge/stats/annotations | Get Annotation Stats |
| [**getAnnotationsByKnowledgeEntryApiV1BridgeAnnotationsKnowledgeKnowledgeEntryIdGet**](IntegrationBridgeApi.md#getannotationsbyknowledgeentryapiv1bridgeannotationsknowledgeknowledgeentryidget) | **GET** /api/v1/bridge/annotations/knowledge/{knowledge_entry_id} | Get Annotations By Knowledge Entry |
| [**getAnnotationsByTargetApiV1BridgeAnnotationsTargetTypeTargetIdGet**](IntegrationBridgeApi.md#getannotationsbytargetapiv1bridgeannotationstargettypetargetidget) | **GET** /api/v1/bridge/annotations/{target_type}/{target_id} | Get Annotations By Target |
| [**getAnnotationsInRangeApiV1BridgeAnnotationsRangeTargetTypeTargetIdGet**](IntegrationBridgeApi.md#getannotationsinrangeapiv1bridgeannotationsrangetargettypetargetidget) | **GET** /api/v1/bridge/annotations/range/{target_type}/{target_id} | Get Annotations In Range |
| [**getBidirectionalLinksApiV1BridgeLinksBidirectionalEntity1TypeEntity1IdEntity2TypeEntity2IdGet**](IntegrationBridgeApi.md#getbidirectionallinksapiv1bridgelinksbidirectionalentity1typeentity1identity2typeentity2idget) | **GET** /api/v1/bridge/links/bidirectional/{entity1_type}/{entity1_id}/{entity2_type}/{entity2_id} | Get Bidirectional Links |
| [**getEmbeddingByEntityApiV1BridgeEmbeddingsEntityTypeEntityIdGet**](IntegrationBridgeApi.md#getembeddingbyentityapiv1bridgeembeddingsentitytypeentityidget) | **GET** /api/v1/bridge/embeddings/{entity_type}/{entity_id} | Get Embedding By Entity |
| [**getEmbeddingsByModelApiV1BridgeEmbeddingsModelEmbeddingModelGet**](IntegrationBridgeApi.md#getembeddingsbymodelapiv1bridgeembeddingsmodelembeddingmodelget) | **GET** /api/v1/bridge/embeddings/model/{embedding_model} | Get Embeddings By Model |
| [**getEntityGraphApiV1BridgeGraphEntityTypeEntityIdGet**](IntegrationBridgeApi.md#getentitygraphapiv1bridgegraphentitytypeentityidget) | **GET** /api/v1/bridge/graph/{entity_type}/{entity_id} | Get Entity Graph |
| [**getLinkApiV1BridgeLinksLinkIdGet**](IntegrationBridgeApi.md#getlinkapiv1bridgelinkslinkidget) | **GET** /api/v1/bridge/links/{link_id} | Get Link |
| [**getLinkStatsApiV1BridgeStatsLinksGet**](IntegrationBridgeApi.md#getlinkstatsapiv1bridgestatslinksget) | **GET** /api/v1/bridge/stats/links | Get Link Stats |
| [**getLinksBySourceApiV1BridgeLinksSourceSourceTypeSourceIdGet**](IntegrationBridgeApi.md#getlinksbysourceapiv1bridgelinkssourcesourcetypesourceidget) | **GET** /api/v1/bridge/links/source/{source_type}/{source_id} | Get Links By Source |
| [**getLinksByTargetApiV1BridgeLinksTargetTargetTypeTargetIdGet**](IntegrationBridgeApi.md#getlinksbytargetapiv1bridgelinkstargettargettypetargetidget) | **GET** /api/v1/bridge/links/target/{target_type}/{target_id} | Get Links By Target |
| [**getLinksByTypeApiV1BridgeLinksTypeLinkTypeGet**](IntegrationBridgeApi.md#getlinksbytypeapiv1bridgelinkstypelinktypeget) | **GET** /api/v1/bridge/links/type/{link_type} | Get Links By Type |
| [**getRelatedContentApiV1BridgeContextRelatedGet**](IntegrationBridgeApi.md#getrelatedcontentapiv1bridgecontextrelatedget) | **GET** /api/v1/bridge/context/related | Get Related Content |
| [**getRelatedEntitiesApiV1BridgeLinksRelatedSourceTypeSourceIdGet**](IntegrationBridgeApi.md#getrelatedentitiesapiv1bridgelinksrelatedsourcetypesourceidget) | **GET** /api/v1/bridge/links/related/{source_type}/{source_id} | Get Related Entities |
| [**getRuleApiV1BridgeRulesRuleIdGet**](IntegrationBridgeApi.md#getruleapiv1bridgerulesruleidget) | **GET** /api/v1/bridge/rules/{rule_id} | Get Rule |
| [**getRulesByTypeApiV1BridgeRulesTypeRuleTypeGet**](IntegrationBridgeApi.md#getrulesbytypeapiv1bridgerulestyperuletypeget) | **GET** /api/v1/bridge/rules/type/{rule_type} | Get Rules By Type |
| [**healthCheckApiV1BridgeHealthGet**](IntegrationBridgeApi.md#healthcheckapiv1bridgehealthget) | **GET** /api/v1/bridge/health | Health Check |
| [**recommendLinksApiV1BridgeRecommendLinksGet**](IntegrationBridgeApi.md#recommendlinksapiv1bridgerecommendlinksget) | **GET** /api/v1/bridge/recommend-links | Recommend Links |
| [**semanticMatchApiV1BridgeSemanticMatchPost**](IntegrationBridgeApi.md#semanticmatchapiv1bridgesemanticmatchpost) | **POST** /api/v1/bridge/semantic-match | Semantic Match |
| [**suggestLinksApiV1BridgeSuggestLinksSourceTypeSourceIdGet**](IntegrationBridgeApi.md#suggestlinksapiv1bridgesuggestlinkssourcetypesourceidget) | **GET** /api/v1/bridge/suggest-links/{source_type}/{source_id} | Suggest Links |
| [**updateAnnotationApiV1BridgeAnnotationsAnnotationIdPut**](IntegrationBridgeApi.md#updateannotationapiv1bridgeannotationsannotationidput) | **PUT** /api/v1/bridge/annotations/{annotation_id} | Update Annotation |
| [**updateEmbeddingApiV1BridgeEmbeddingsEmbeddingIdPut**](IntegrationBridgeApi.md#updateembeddingapiv1bridgeembeddingsembeddingidput) | **PUT** /api/v1/bridge/embeddings/{embedding_id} | Update Embedding |
| [**updateLinkApiV1BridgeLinksLinkIdPut**](IntegrationBridgeApi.md#updatelinkapiv1bridgelinkslinkidput) | **PUT** /api/v1/bridge/links/{link_id} | Update Link |
| [**updateRuleApiV1BridgeRulesRuleIdPut**](IntegrationBridgeApi.md#updateruleapiv1bridgerulesruleidput) | **PUT** /api/v1/bridge/rules/{rule_id} | Update Rule |



## analyzeTextApiV1BridgeContextAnalyzePost

> any analyzeTextApiV1BridgeContextAnalyzePost(text, contextType)

Analyze Text

Проанализировать текст на термины

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { AnalyzeTextApiV1BridgeContextAnalyzePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    text: text_example,
    // string | Тип контекста
    contextType: contextType_example,
  } satisfies AnalyzeTextApiV1BridgeContextAnalyzePostRequest;

  try {
    const data = await api.analyzeTextApiV1BridgeContextAnalyzePost(body);
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
| **text** | `string` |  | [Defaults to `undefined`] |
| **contextType** | `string` | Тип контекста | [Defaults to `undefined`] |

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


## autoCreateLinksApiV1BridgeAutoLinkPost

> any autoCreateLinksApiV1BridgeAutoLinkPost(sourceType, sourceId, targetType, linkType, requestBody, strength, createdBy)

Auto Create Links

Автоматически создать связи между сущностями (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { AutoCreateLinksApiV1BridgeAutoLinkPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    sourceType: sourceType_example,
    // string
    sourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    targetType: targetType_example,
    // string
    linkType: linkType_example,
    // Array<string>
    requestBody: ...,
    // number (optional)
    strength: 56,
    // string (optional)
    createdBy: createdBy_example,
  } satisfies AutoCreateLinksApiV1BridgeAutoLinkPostRequest;

  try {
    const data = await api.autoCreateLinksApiV1BridgeAutoLinkPost(body);
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
| **sourceType** | `string` |  | [Defaults to `undefined`] |
| **sourceId** | `string` |  | [Defaults to `undefined`] |
| **targetType** | `string` |  | [Defaults to `undefined`] |
| **linkType** | `string` |  | [Defaults to `undefined`] |
| **requestBody** | `Array<string>` |  | |
| **strength** | `number` |  | [Optional] [Defaults to `5`] |
| **createdBy** | `string` |  | [Optional] [Defaults to `&#39;system&#39;`] |

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


## bulkCreateLinksApiV1BridgeBulkLinksPost

> any bulkCreateLinksApiV1BridgeBulkLinksPost(requestBody)

Bulk Create Links

Массовое создание связей (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { BulkCreateLinksApiV1BridgeBulkLinksPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // Array<{ [key: string]: any; }>
    requestBody: ...,
  } satisfies BulkCreateLinksApiV1BridgeBulkLinksPostRequest;

  try {
    const data = await api.bulkCreateLinksApiV1BridgeBulkLinksPost(body);
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
| **requestBody** | `Array<{ [key: string]: any; }>` |  | |

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


## createAnnotationApiV1BridgeAnnotationsPost

> any createAnnotationApiV1BridgeAnnotationsPost(requestBody)

Create Annotation

Создать новую аннотацию (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { CreateAnnotationApiV1BridgeAnnotationsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateAnnotationApiV1BridgeAnnotationsPostRequest;

  try {
    const data = await api.createAnnotationApiV1BridgeAnnotationsPost(body);
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createEmbeddingApiV1BridgeEmbeddingsPost

> any createEmbeddingApiV1BridgeEmbeddingsPost(requestBody)

Create Embedding

Создать новый вектор (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { CreateEmbeddingApiV1BridgeEmbeddingsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateEmbeddingApiV1BridgeEmbeddingsPostRequest;

  try {
    const data = await api.createEmbeddingApiV1BridgeEmbeddingsPost(body);
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createLinkApiV1BridgeLinksPost

> any createLinkApiV1BridgeLinksPost(requestBody)

Create Link

Создать новую связь (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { CreateLinkApiV1BridgeLinksPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateLinkApiV1BridgeLinksPostRequest;

  try {
    const data = await api.createLinkApiV1BridgeLinksPost(body);
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRuleApiV1BridgeRulesPost

> any createRuleApiV1BridgeRulesPost(requestBody)

Create Rule

Создать новое правило (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { CreateRuleApiV1BridgeRulesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateRuleApiV1BridgeRulesPostRequest;

  try {
    const data = await api.createRuleApiV1BridgeRulesPost(body);
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
| **201** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAnnotationApiV1BridgeAnnotationsAnnotationIdDelete

> any deleteAnnotationApiV1BridgeAnnotationsAnnotationIdDelete(annotationId)

Delete Annotation

Удалить аннотацию (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { DeleteAnnotationApiV1BridgeAnnotationsAnnotationIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    annotationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteAnnotationApiV1BridgeAnnotationsAnnotationIdDeleteRequest;

  try {
    const data = await api.deleteAnnotationApiV1BridgeAnnotationsAnnotationIdDelete(body);
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
| **annotationId** | `string` |  | [Defaults to `undefined`] |

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


## deleteEmbeddingApiV1BridgeEmbeddingsEmbeddingIdDelete

> any deleteEmbeddingApiV1BridgeEmbeddingsEmbeddingIdDelete(embeddingId)

Delete Embedding

Удалить вектор (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { DeleteEmbeddingApiV1BridgeEmbeddingsEmbeddingIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    embeddingId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteEmbeddingApiV1BridgeEmbeddingsEmbeddingIdDeleteRequest;

  try {
    const data = await api.deleteEmbeddingApiV1BridgeEmbeddingsEmbeddingIdDelete(body);
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
| **embeddingId** | `string` |  | [Defaults to `undefined`] |

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


## deleteLinkApiV1BridgeLinksLinkIdDelete

> any deleteLinkApiV1BridgeLinksLinkIdDelete(linkId)

Delete Link

Удалить связь (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { DeleteLinkApiV1BridgeLinksLinkIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    linkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteLinkApiV1BridgeLinksLinkIdDeleteRequest;

  try {
    const data = await api.deleteLinkApiV1BridgeLinksLinkIdDelete(body);
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
| **linkId** | `string` |  | [Defaults to `undefined`] |

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


## deleteRuleApiV1BridgeRulesRuleIdDelete

> any deleteRuleApiV1BridgeRulesRuleIdDelete(ruleId)

Delete Rule

Удалить правило (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { DeleteRuleApiV1BridgeRulesRuleIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    ruleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteRuleApiV1BridgeRulesRuleIdDeleteRequest;

  try {
    const data = await api.deleteRuleApiV1BridgeRulesRuleIdDelete(body);
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
| **ruleId** | `string` |  | [Defaults to `undefined`] |

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


## enrichContextApiV1BridgeContextEnrichGet

> any enrichContextApiV1BridgeContextEnrichGet(entityType, entityId)

Enrich Context

Обогатить контекст сущности

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { EnrichContextApiV1BridgeContextEnrichGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    entityType: entityType_example,
    // string
    entityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies EnrichContextApiV1BridgeContextEnrichGetRequest;

  try {
    const data = await api.enrichContextApiV1BridgeContextEnrichGet(body);
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
| **entityType** | `string` |  | [Defaults to `undefined`] |
| **entityId** | `string` |  | [Defaults to `undefined`] |

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


## getAllRulesApiV1BridgeRulesGet

> any getAllRulesApiV1BridgeRulesGet(isActive)

Get All Rules

Получить все правила

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetAllRulesApiV1BridgeRulesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // boolean (optional)
    isActive: true,
  } satisfies GetAllRulesApiV1BridgeRulesGetRequest;

  try {
    const data = await api.getAllRulesApiV1BridgeRulesGet(body);
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
| **isActive** | `boolean` |  | [Optional] [Defaults to `true`] |

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


## getAnnotationApiV1BridgeAnnotationsAnnotationIdGet

> any getAnnotationApiV1BridgeAnnotationsAnnotationIdGet(annotationId)

Get Annotation

Получить аннотацию по ID

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetAnnotationApiV1BridgeAnnotationsAnnotationIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    annotationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAnnotationApiV1BridgeAnnotationsAnnotationIdGetRequest;

  try {
    const data = await api.getAnnotationApiV1BridgeAnnotationsAnnotationIdGet(body);
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
| **annotationId** | `string` |  | [Defaults to `undefined`] |

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


## getAnnotationStatsApiV1BridgeStatsAnnotationsGet

> any getAnnotationStatsApiV1BridgeStatsAnnotationsGet()

Get Annotation Stats

Получить статистику по аннотациям

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetAnnotationStatsApiV1BridgeStatsAnnotationsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  try {
    const data = await api.getAnnotationStatsApiV1BridgeStatsAnnotationsGet();
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


## getAnnotationsByKnowledgeEntryApiV1BridgeAnnotationsKnowledgeKnowledgeEntryIdGet

> any getAnnotationsByKnowledgeEntryApiV1BridgeAnnotationsKnowledgeKnowledgeEntryIdGet(knowledgeEntryId)

Get Annotations By Knowledge Entry

Получить аннотации для записи знаний

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetAnnotationsByKnowledgeEntryApiV1BridgeAnnotationsKnowledgeKnowledgeEntryIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    knowledgeEntryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAnnotationsByKnowledgeEntryApiV1BridgeAnnotationsKnowledgeKnowledgeEntryIdGetRequest;

  try {
    const data = await api.getAnnotationsByKnowledgeEntryApiV1BridgeAnnotationsKnowledgeKnowledgeEntryIdGet(body);
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
| **knowledgeEntryId** | `string` |  | [Defaults to `undefined`] |

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


## getAnnotationsByTargetApiV1BridgeAnnotationsTargetTypeTargetIdGet

> any getAnnotationsByTargetApiV1BridgeAnnotationsTargetTypeTargetIdGet(targetType, targetId)

Get Annotations By Target

Получить аннотации для цели

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetAnnotationsByTargetApiV1BridgeAnnotationsTargetTypeTargetIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    targetType: targetType_example,
    // string
    targetId: targetId_example,
  } satisfies GetAnnotationsByTargetApiV1BridgeAnnotationsTargetTypeTargetIdGetRequest;

  try {
    const data = await api.getAnnotationsByTargetApiV1BridgeAnnotationsTargetTypeTargetIdGet(body);
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
| **targetType** | `string` |  | [Defaults to `undefined`] |
| **targetId** | `string` |  | [Defaults to `undefined`] |

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


## getAnnotationsInRangeApiV1BridgeAnnotationsRangeTargetTypeTargetIdGet

> any getAnnotationsInRangeApiV1BridgeAnnotationsRangeTargetTypeTargetIdGet(targetType, targetId, startPos, endPos)

Get Annotations In Range

Получить аннотации в определенном диапазоне позиций

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetAnnotationsInRangeApiV1BridgeAnnotationsRangeTargetTypeTargetIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    targetType: targetType_example,
    // string
    targetId: targetId_example,
    // number | Начальная позиция
    startPos: 56,
    // number | Конечная позиция
    endPos: 56,
  } satisfies GetAnnotationsInRangeApiV1BridgeAnnotationsRangeTargetTypeTargetIdGetRequest;

  try {
    const data = await api.getAnnotationsInRangeApiV1BridgeAnnotationsRangeTargetTypeTargetIdGet(body);
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
| **targetType** | `string` |  | [Defaults to `undefined`] |
| **targetId** | `string` |  | [Defaults to `undefined`] |
| **startPos** | `number` | Начальная позиция | [Defaults to `undefined`] |
| **endPos** | `number` | Конечная позиция | [Defaults to `undefined`] |

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


## getBidirectionalLinksApiV1BridgeLinksBidirectionalEntity1TypeEntity1IdEntity2TypeEntity2IdGet

> any getBidirectionalLinksApiV1BridgeLinksBidirectionalEntity1TypeEntity1IdEntity2TypeEntity2IdGet(entity1Type, entity1Id, entity2Type, entity2Id)

Get Bidirectional Links

Получить двунаправленные связи между двумя сущностями

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetBidirectionalLinksApiV1BridgeLinksBidirectionalEntity1TypeEntity1IdEntity2TypeEntity2IdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    entity1Type: entity1Type_example,
    // string
    entity1Id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    entity2Type: entity2Type_example,
    // string
    entity2Id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetBidirectionalLinksApiV1BridgeLinksBidirectionalEntity1TypeEntity1IdEntity2TypeEntity2IdGetRequest;

  try {
    const data = await api.getBidirectionalLinksApiV1BridgeLinksBidirectionalEntity1TypeEntity1IdEntity2TypeEntity2IdGet(body);
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
| **entity1Type** | `string` |  | [Defaults to `undefined`] |
| **entity1Id** | `string` |  | [Defaults to `undefined`] |
| **entity2Type** | `string` |  | [Defaults to `undefined`] |
| **entity2Id** | `string` |  | [Defaults to `undefined`] |

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


## getEmbeddingByEntityApiV1BridgeEmbeddingsEntityTypeEntityIdGet

> any getEmbeddingByEntityApiV1BridgeEmbeddingsEntityTypeEntityIdGet(entityType, entityId)

Get Embedding By Entity

Получить вектор для сущности

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetEmbeddingByEntityApiV1BridgeEmbeddingsEntityTypeEntityIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    entityType: entityType_example,
    // string
    entityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetEmbeddingByEntityApiV1BridgeEmbeddingsEntityTypeEntityIdGetRequest;

  try {
    const data = await api.getEmbeddingByEntityApiV1BridgeEmbeddingsEntityTypeEntityIdGet(body);
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
| **entityType** | `string` |  | [Defaults to `undefined`] |
| **entityId** | `string` |  | [Defaults to `undefined`] |

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


## getEmbeddingsByModelApiV1BridgeEmbeddingsModelEmbeddingModelGet

> any getEmbeddingsByModelApiV1BridgeEmbeddingsModelEmbeddingModelGet(embeddingModel, limit)

Get Embeddings By Model

Получить векторы по модели

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetEmbeddingsByModelApiV1BridgeEmbeddingsModelEmbeddingModelGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    embeddingModel: embeddingModel_example,
    // number (optional)
    limit: 56,
  } satisfies GetEmbeddingsByModelApiV1BridgeEmbeddingsModelEmbeddingModelGetRequest;

  try {
    const data = await api.getEmbeddingsByModelApiV1BridgeEmbeddingsModelEmbeddingModelGet(body);
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
| **embeddingModel** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

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


## getEntityGraphApiV1BridgeGraphEntityTypeEntityIdGet

> any getEntityGraphApiV1BridgeGraphEntityTypeEntityIdGet(entityType, entityId, depth, maxLinks)

Get Entity Graph

Получить граф связей для сущности

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetEntityGraphApiV1BridgeGraphEntityTypeEntityIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    entityType: entityType_example,
    // string
    entityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    depth: 56,
    // number (optional)
    maxLinks: 56,
  } satisfies GetEntityGraphApiV1BridgeGraphEntityTypeEntityIdGetRequest;

  try {
    const data = await api.getEntityGraphApiV1BridgeGraphEntityTypeEntityIdGet(body);
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
| **entityType** | `string` |  | [Defaults to `undefined`] |
| **entityId** | `string` |  | [Defaults to `undefined`] |
| **depth** | `number` |  | [Optional] [Defaults to `2`] |
| **maxLinks** | `number` |  | [Optional] [Defaults to `50`] |

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


## getLinkApiV1BridgeLinksLinkIdGet

> any getLinkApiV1BridgeLinksLinkIdGet(linkId)

Get Link

Получить связь по ID

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetLinkApiV1BridgeLinksLinkIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    linkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLinkApiV1BridgeLinksLinkIdGetRequest;

  try {
    const data = await api.getLinkApiV1BridgeLinksLinkIdGet(body);
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
| **linkId** | `string` |  | [Defaults to `undefined`] |

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


## getLinkStatsApiV1BridgeStatsLinksGet

> any getLinkStatsApiV1BridgeStatsLinksGet()

Get Link Stats

Получить статистику по связям

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetLinkStatsApiV1BridgeStatsLinksGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  try {
    const data = await api.getLinkStatsApiV1BridgeStatsLinksGet();
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


## getLinksBySourceApiV1BridgeLinksSourceSourceTypeSourceIdGet

> any getLinksBySourceApiV1BridgeLinksSourceSourceTypeSourceIdGet(sourceType, sourceId)

Get Links By Source

Получить все связи от источника

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetLinksBySourceApiV1BridgeLinksSourceSourceTypeSourceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    sourceType: sourceType_example,
    // string
    sourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLinksBySourceApiV1BridgeLinksSourceSourceTypeSourceIdGetRequest;

  try {
    const data = await api.getLinksBySourceApiV1BridgeLinksSourceSourceTypeSourceIdGet(body);
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
| **sourceType** | `string` |  | [Defaults to `undefined`] |
| **sourceId** | `string` |  | [Defaults to `undefined`] |

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


## getLinksByTargetApiV1BridgeLinksTargetTargetTypeTargetIdGet

> any getLinksByTargetApiV1BridgeLinksTargetTargetTypeTargetIdGet(targetType, targetId)

Get Links By Target

Получить все связи к цели

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetLinksByTargetApiV1BridgeLinksTargetTargetTypeTargetIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    targetType: targetType_example,
    // string
    targetId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLinksByTargetApiV1BridgeLinksTargetTargetTypeTargetIdGetRequest;

  try {
    const data = await api.getLinksByTargetApiV1BridgeLinksTargetTargetTypeTargetIdGet(body);
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
| **targetType** | `string` |  | [Defaults to `undefined`] |
| **targetId** | `string` |  | [Defaults to `undefined`] |

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


## getLinksByTypeApiV1BridgeLinksTypeLinkTypeGet

> any getLinksByTypeApiV1BridgeLinksTypeLinkTypeGet(linkType, limit)

Get Links By Type

Получить связи определенного типа

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetLinksByTypeApiV1BridgeLinksTypeLinkTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    linkType: linkType_example,
    // number (optional)
    limit: 56,
  } satisfies GetLinksByTypeApiV1BridgeLinksTypeLinkTypeGetRequest;

  try {
    const data = await api.getLinksByTypeApiV1BridgeLinksTypeLinkTypeGet(body);
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
| **linkType** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |

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


## getRelatedContentApiV1BridgeContextRelatedGet

> any getRelatedContentApiV1BridgeContextRelatedGet(fromEntity, toType, limit)

Get Related Content

Найти связанное содержимое

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetRelatedContentApiV1BridgeContextRelatedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string | От сущности (type:id)
    fromEntity: fromEntity_example,
    // string | К типу
    toType: toType_example,
    // number (optional)
    limit: 56,
  } satisfies GetRelatedContentApiV1BridgeContextRelatedGetRequest;

  try {
    const data = await api.getRelatedContentApiV1BridgeContextRelatedGet(body);
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
| **fromEntity** | `string` | От сущности (type:id) | [Defaults to `undefined`] |
| **toType** | `string` | К типу | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

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


## getRelatedEntitiesApiV1BridgeLinksRelatedSourceTypeSourceIdGet

> any getRelatedEntitiesApiV1BridgeLinksRelatedSourceTypeSourceIdGet(sourceType, sourceId, targetType, linkType, minStrength, limit)

Get Related Entities

Найти связанные сущности

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetRelatedEntitiesApiV1BridgeLinksRelatedSourceTypeSourceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    sourceType: sourceType_example,
    // string
    sourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    targetType: targetType_example,
    // string (optional)
    linkType: linkType_example,
    // number (optional)
    minStrength: 56,
    // number (optional)
    limit: 56,
  } satisfies GetRelatedEntitiesApiV1BridgeLinksRelatedSourceTypeSourceIdGetRequest;

  try {
    const data = await api.getRelatedEntitiesApiV1BridgeLinksRelatedSourceTypeSourceIdGet(body);
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
| **sourceType** | `string` |  | [Defaults to `undefined`] |
| **sourceId** | `string` |  | [Defaults to `undefined`] |
| **targetType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **linkType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **minStrength** | `number` |  | [Optional] [Defaults to `3`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |

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


## getRuleApiV1BridgeRulesRuleIdGet

> any getRuleApiV1BridgeRulesRuleIdGet(ruleId)

Get Rule

Получить правило по ID

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetRuleApiV1BridgeRulesRuleIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    ruleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetRuleApiV1BridgeRulesRuleIdGetRequest;

  try {
    const data = await api.getRuleApiV1BridgeRulesRuleIdGet(body);
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
| **ruleId** | `string` |  | [Defaults to `undefined`] |

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


## getRulesByTypeApiV1BridgeRulesTypeRuleTypeGet

> any getRulesByTypeApiV1BridgeRulesTypeRuleTypeGet(ruleType)

Get Rules By Type

Получить правила определенного типа

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { GetRulesByTypeApiV1BridgeRulesTypeRuleTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    ruleType: ruleType_example,
  } satisfies GetRulesByTypeApiV1BridgeRulesTypeRuleTypeGetRequest;

  try {
    const data = await api.getRulesByTypeApiV1BridgeRulesTypeRuleTypeGet(body);
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
| **ruleType** | `string` |  | [Defaults to `undefined`] |

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


## healthCheckApiV1BridgeHealthGet

> any healthCheckApiV1BridgeHealthGet()

Health Check

Проверка здоровья API

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { HealthCheckApiV1BridgeHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  try {
    const data = await api.healthCheckApiV1BridgeHealthGet();
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


## recommendLinksApiV1BridgeRecommendLinksGet

> any recommendLinksApiV1BridgeRecommendLinksGet(entityType, entityId)

Recommend Links

Предложить связи для сущности (заглушка для будущей реализации)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { RecommendLinksApiV1BridgeRecommendLinksGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    entityType: entityType_example,
    // string
    entityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RecommendLinksApiV1BridgeRecommendLinksGetRequest;

  try {
    const data = await api.recommendLinksApiV1BridgeRecommendLinksGet(body);
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
| **entityType** | `string` |  | [Defaults to `undefined`] |
| **entityId** | `string` |  | [Defaults to `undefined`] |

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


## semanticMatchApiV1BridgeSemanticMatchPost

> any semanticMatchApiV1BridgeSemanticMatchPost(bodySemanticMatchApiV1BridgeSemanticMatchPost)

Semantic Match

Семантическое сопоставление (заглушка для будущей реализации)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { SemanticMatchApiV1BridgeSemanticMatchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // BodySemanticMatchApiV1BridgeSemanticMatchPost
    bodySemanticMatchApiV1BridgeSemanticMatchPost: ...,
  } satisfies SemanticMatchApiV1BridgeSemanticMatchPostRequest;

  try {
    const data = await api.semanticMatchApiV1BridgeSemanticMatchPost(body);
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
| **bodySemanticMatchApiV1BridgeSemanticMatchPost** | [BodySemanticMatchApiV1BridgeSemanticMatchPost](BodySemanticMatchApiV1BridgeSemanticMatchPost.md) |  | |

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


## suggestLinksApiV1BridgeSuggestLinksSourceTypeSourceIdGet

> any suggestLinksApiV1BridgeSuggestLinksSourceTypeSourceIdGet(sourceType, sourceId, targetType, limit)

Suggest Links

Предложить возможные связи на основе существующих паттернов

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { SuggestLinksApiV1BridgeSuggestLinksSourceTypeSourceIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    sourceType: sourceType_example,
    // string
    sourceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    targetType: targetType_example,
    // number (optional)
    limit: 56,
  } satisfies SuggestLinksApiV1BridgeSuggestLinksSourceTypeSourceIdGetRequest;

  try {
    const data = await api.suggestLinksApiV1BridgeSuggestLinksSourceTypeSourceIdGet(body);
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
| **sourceType** | `string` |  | [Defaults to `undefined`] |
| **sourceId** | `string` |  | [Defaults to `undefined`] |
| **targetType** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `5`] |

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


## updateAnnotationApiV1BridgeAnnotationsAnnotationIdPut

> any updateAnnotationApiV1BridgeAnnotationsAnnotationIdPut(annotationId, requestBody)

Update Annotation

Обновить аннотацию (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { UpdateAnnotationApiV1BridgeAnnotationsAnnotationIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    annotationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateAnnotationApiV1BridgeAnnotationsAnnotationIdPutRequest;

  try {
    const data = await api.updateAnnotationApiV1BridgeAnnotationsAnnotationIdPut(body);
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
| **annotationId** | `string` |  | [Defaults to `undefined`] |
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


## updateEmbeddingApiV1BridgeEmbeddingsEmbeddingIdPut

> any updateEmbeddingApiV1BridgeEmbeddingsEmbeddingIdPut(embeddingId, requestBody)

Update Embedding

Обновить вектор (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { UpdateEmbeddingApiV1BridgeEmbeddingsEmbeddingIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    embeddingId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateEmbeddingApiV1BridgeEmbeddingsEmbeddingIdPutRequest;

  try {
    const data = await api.updateEmbeddingApiV1BridgeEmbeddingsEmbeddingIdPut(body);
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
| **embeddingId** | `string` |  | [Defaults to `undefined`] |
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


## updateLinkApiV1BridgeLinksLinkIdPut

> any updateLinkApiV1BridgeLinksLinkIdPut(linkId, requestBody)

Update Link

Обновить связь (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { UpdateLinkApiV1BridgeLinksLinkIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    linkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateLinkApiV1BridgeLinksLinkIdPutRequest;

  try {
    const data = await api.updateLinkApiV1BridgeLinksLinkIdPut(body);
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
| **linkId** | `string` |  | [Defaults to `undefined`] |
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


## updateRuleApiV1BridgeRulesRuleIdPut

> any updateRuleApiV1BridgeRulesRuleIdPut(ruleId, requestBody)

Update Rule

Обновить правило (только для админов)

### Example

```ts
import {
  Configuration,
  IntegrationBridgeApi,
} from '';
import type { UpdateRuleApiV1BridgeRulesRuleIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new IntegrationBridgeApi(config);

  const body = {
    // string
    ruleId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateRuleApiV1BridgeRulesRuleIdPutRequest;

  try {
    const data = await api.updateRuleApiV1BridgeRulesRuleIdPut(body);
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
| **ruleId** | `string` |  | [Defaults to `undefined`] |
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

