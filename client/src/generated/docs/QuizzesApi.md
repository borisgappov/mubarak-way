# QuizzesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**abandonQuizSessionApiV1QuizzesSessionsSessionIdAbandonPost**](QuizzesApi.md#abandonquizsessionapiv1quizzessessionssessionidabandonpost) | **POST** /api/v1/quizzes/sessions/{session_id}/abandon | Abandon Quiz Session |
| [**completeQuizSessionApiV1QuizzesSessionsSessionIdCompletePost**](QuizzesApi.md#completequizsessionapiv1quizzessessionssessionidcompletepost) | **POST** /api/v1/quizzes/sessions/{session_id}/complete | Complete Quiz Session |
| [**createQuizSessionApiV1QuizzesSessionsPost**](QuizzesApi.md#createquizsessionapiv1quizzessessionspost) | **POST** /api/v1/quizzes/sessions | Create Quiz Session |
| [**generateQuizApiV1QuizzesGeneratePost**](QuizzesApi.md#generatequizapiv1quizzesgeneratepost) | **POST** /api/v1/quizzes/generate | Generate Quiz |
| [**getCategoryStatsApiV1QuizzesStatsCategoriesGet**](QuizzesApi.md#getcategorystatsapiv1quizzesstatscategoriesget) | **GET** /api/v1/quizzes/stats/categories | Get Category Stats |
| [**getDifficultyStatsApiV1QuizzesStatsDifficultyGet**](QuizzesApi.md#getdifficultystatsapiv1quizzesstatsdifficultyget) | **GET** /api/v1/quizzes/stats/difficulty | Get Difficulty Stats |
| [**getQuizSessionApiV1QuizzesSessionsSessionIdGet**](QuizzesApi.md#getquizsessionapiv1quizzessessionssessionidget) | **GET** /api/v1/quizzes/sessions/{session_id} | Get Quiz Session |
| [**getSessionAnswersApiV1QuizzesSessionsSessionIdAnswersGet**](QuizzesApi.md#getsessionanswersapiv1quizzessessionssessionidanswersget) | **GET** /api/v1/quizzes/sessions/{session_id}/answers | Get Session Answers |
| [**getUserQuizSessionsApiV1QuizzesSessionsGet**](QuizzesApi.md#getuserquizsessionsapiv1quizzessessionsget) | **GET** /api/v1/quizzes/sessions | Get User Quiz Sessions |
| [**getUserQuizStatsApiV1QuizzesStatsGet**](QuizzesApi.md#getuserquizstatsapiv1quizzesstatsget) | **GET** /api/v1/quizzes/stats | Get User Quiz Stats |
| [**healthCheckApiV1QuizzesHealthGet**](QuizzesApi.md#healthcheckapiv1quizzeshealthget) | **GET** /api/v1/quizzes/health | Health Check |
| [**submitAnswerApiV1QuizzesSessionsSessionIdAnswersPost**](QuizzesApi.md#submitanswerapiv1quizzessessionssessionidanswerspost) | **POST** /api/v1/quizzes/sessions/{session_id}/answers | Submit Answer |
| [**updateSessionProgressApiV1QuizzesSessionsSessionIdProgressPut**](QuizzesApi.md#updatesessionprogressapiv1quizzessessionssessionidprogressput) | **PUT** /api/v1/quizzes/sessions/{session_id}/progress | Update Session Progress |



## abandonQuizSessionApiV1QuizzesSessionsSessionIdAbandonPost

> any abandonQuizSessionApiV1QuizzesSessionsSessionIdAbandonPost(sessionId)

Abandon Quiz Session

Отменить сессию викторины

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { AbandonQuizSessionApiV1QuizzesSessionsSessionIdAbandonPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies AbandonQuizSessionApiV1QuizzesSessionsSessionIdAbandonPostRequest;

  try {
    const data = await api.abandonQuizSessionApiV1QuizzesSessionsSessionIdAbandonPost(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

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


## completeQuizSessionApiV1QuizzesSessionsSessionIdCompletePost

> any completeQuizSessionApiV1QuizzesSessionsSessionIdCompletePost(sessionId, score)

Complete Quiz Session

Завершить сессию викторины

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { CompleteQuizSessionApiV1QuizzesSessionsSessionIdCompletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
    // number
    score: 56,
  } satisfies CompleteQuizSessionApiV1QuizzesSessionsSessionIdCompletePostRequest;

  try {
    const data = await api.completeQuizSessionApiV1QuizzesSessionsSessionIdCompletePost(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |
| **score** | `number` |  | [Defaults to `undefined`] |

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


## createQuizSessionApiV1QuizzesSessionsPost

> any createQuizSessionApiV1QuizzesSessionsPost(quizSessionCreate)

Create Quiz Session

Создать новую сессию викторины

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { CreateQuizSessionApiV1QuizzesSessionsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // QuizSessionCreate
    quizSessionCreate: ...,
  } satisfies CreateQuizSessionApiV1QuizzesSessionsPostRequest;

  try {
    const data = await api.createQuizSessionApiV1QuizzesSessionsPost(body);
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
| **quizSessionCreate** | [QuizSessionCreate](QuizSessionCreate.md) |  | |

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


## generateQuizApiV1QuizzesGeneratePost

> any generateQuizApiV1QuizzesGeneratePost(quizGenerateRequest)

Generate Quiz

Сгенерировать новую викторину с вопросами

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GenerateQuizApiV1QuizzesGeneratePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // QuizGenerateRequest
    quizGenerateRequest: ...,
  } satisfies GenerateQuizApiV1QuizzesGeneratePostRequest;

  try {
    const data = await api.generateQuizApiV1QuizzesGeneratePost(body);
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
| **quizGenerateRequest** | [QuizGenerateRequest](QuizGenerateRequest.md) |  | |

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


## getCategoryStatsApiV1QuizzesStatsCategoriesGet

> any getCategoryStatsApiV1QuizzesStatsCategoriesGet()

Get Category Stats

Получить статистику по категориям

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GetCategoryStatsApiV1QuizzesStatsCategoriesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  try {
    const data = await api.getCategoryStatsApiV1QuizzesStatsCategoriesGet();
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


## getDifficultyStatsApiV1QuizzesStatsDifficultyGet

> any getDifficultyStatsApiV1QuizzesStatsDifficultyGet()

Get Difficulty Stats

Получить статистику по уровням сложности

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GetDifficultyStatsApiV1QuizzesStatsDifficultyGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  try {
    const data = await api.getDifficultyStatsApiV1QuizzesStatsDifficultyGet();
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


## getQuizSessionApiV1QuizzesSessionsSessionIdGet

> any getQuizSessionApiV1QuizzesSessionsSessionIdGet(sessionId)

Get Quiz Session

Получить сессию викторины по ID

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GetQuizSessionApiV1QuizzesSessionsSessionIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies GetQuizSessionApiV1QuizzesSessionsSessionIdGetRequest;

  try {
    const data = await api.getQuizSessionApiV1QuizzesSessionsSessionIdGet(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

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


## getSessionAnswersApiV1QuizzesSessionsSessionIdAnswersGet

> any getSessionAnswersApiV1QuizzesSessionsSessionIdAnswersGet(sessionId)

Get Session Answers

Получить все ответы сессии

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GetSessionAnswersApiV1QuizzesSessionsSessionIdAnswersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
  } satisfies GetSessionAnswersApiV1QuizzesSessionsSessionIdAnswersGetRequest;

  try {
    const data = await api.getSessionAnswersApiV1QuizzesSessionsSessionIdAnswersGet(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |

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


## getUserQuizSessionsApiV1QuizzesSessionsGet

> any getUserQuizSessionsApiV1QuizzesSessionsGet(limit, offset, status)

Get User Quiz Sessions

Получить сессии викторин пользователя

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GetUserQuizSessionsApiV1QuizzesSessionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
    // string (optional)
    status: status_example,
  } satisfies GetUserQuizSessionsApiV1QuizzesSessionsGetRequest;

  try {
    const data = await api.getUserQuizSessionsApiV1QuizzesSessionsGet(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |

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


## getUserQuizStatsApiV1QuizzesStatsGet

> any getUserQuizStatsApiV1QuizzesStatsGet()

Get User Quiz Stats

Получить статистику пользователя по викторинам

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { GetUserQuizStatsApiV1QuizzesStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  try {
    const data = await api.getUserQuizStatsApiV1QuizzesStatsGet();
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


## healthCheckApiV1QuizzesHealthGet

> any healthCheckApiV1QuizzesHealthGet()

Health Check

Проверка здоровья модуля

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { HealthCheckApiV1QuizzesHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  try {
    const data = await api.healthCheckApiV1QuizzesHealthGet();
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


## submitAnswerApiV1QuizzesSessionsSessionIdAnswersPost

> any submitAnswerApiV1QuizzesSessionsSessionIdAnswersPost(sessionId, quizAnswerSubmit)

Submit Answer

Отправить ответ на вопрос викторины

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { SubmitAnswerApiV1QuizzesSessionsSessionIdAnswersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
    // QuizAnswerSubmit
    quizAnswerSubmit: ...,
  } satisfies SubmitAnswerApiV1QuizzesSessionsSessionIdAnswersPostRequest;

  try {
    const data = await api.submitAnswerApiV1QuizzesSessionsSessionIdAnswersPost(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |
| **quizAnswerSubmit** | [QuizAnswerSubmit](QuizAnswerSubmit.md) |  | |

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


## updateSessionProgressApiV1QuizzesSessionsSessionIdProgressPut

> any updateSessionProgressApiV1QuizzesSessionsSessionIdProgressPut(sessionId, currentQuestion, score)

Update Session Progress

Обновить прогресс сессии

### Example

```ts
import {
  Configuration,
  QuizzesApi,
} from '';
import type { UpdateSessionProgressApiV1QuizzesSessionsSessionIdProgressPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QuizzesApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
    // number
    currentQuestion: 56,
    // number (optional)
    score: 56,
  } satisfies UpdateSessionProgressApiV1QuizzesSessionsSessionIdProgressPutRequest;

  try {
    const data = await api.updateSessionProgressApiV1QuizzesSessionsSessionIdProgressPut(body);
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
| **sessionId** | `string` |  | [Defaults to `undefined`] |
| **currentQuestion** | `number` |  | [Defaults to `undefined`] |
| **score** | `number` |  | [Optional] [Defaults to `undefined`] |

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

