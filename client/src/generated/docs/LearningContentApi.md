# LearningContentApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLessonApiV1LearningLessonsPost**](LearningContentApi.md#createlessonapiv1learninglessonspost) | **POST** /api/v1/learning/lessons | Create Lesson |
| [**createProgressApiV1LearningProgressPost**](LearningContentApi.md#createprogressapiv1learningprogresspost) | **POST** /api/v1/learning/progress | Create Progress |
| [**createStepApiV1LearningStepsPost**](LearningContentApi.md#createstepapiv1learningstepspost) | **POST** /api/v1/learning/steps | Create Step |
| [**createUnitApiV1LearningUnitsPost**](LearningContentApi.md#createunitapiv1learningunitspost) | **POST** /api/v1/learning/units | Create Unit |
| [**deleteUnitApiV1LearningUnitsUnitIdDelete**](LearningContentApi.md#deleteunitapiv1learningunitsunitiddelete) | **DELETE** /api/v1/learning/units/{unit_id} | Delete Unit |
| [**generateQuizApiV1LearningQuizUnitIdPost**](LearningContentApi.md#generatequizapiv1learningquizunitidpost) | **POST** /api/v1/learning/quiz/{unit_id} | Generate Quiz |
| [**getLessonApiV1LearningLessonsLessonIdGet**](LearningContentApi.md#getlessonapiv1learninglessonslessonidget) | **GET** /api/v1/learning/lessons/{lesson_id} | Get Lesson |
| [**getLessonProgressApiV1LearningProgressLessonLessonIdGet**](LearningContentApi.md#getlessonprogressapiv1learningprogresslessonlessonidget) | **GET** /api/v1/learning/progress/lesson/{lesson_id} | Get Lesson Progress |
| [**getLessonWithStepsApiV1LearningLessonsLessonIdWithStepsGet**](LearningContentApi.md#getlessonwithstepsapiv1learninglessonslessonidwithstepsget) | **GET** /api/v1/learning/lessons/{lesson_id}/with-steps | Get Lesson With Steps |
| [**getLessonsByUnitApiV1LearningUnitsUnitIdLessonsGet**](LearningContentApi.md#getlessonsbyunitapiv1learningunitsunitidlessonsget) | **GET** /api/v1/learning/units/{unit_id}/lessons | Get Lessons By Unit |
| [**getRandomUnitApiV1LearningUnitsRandomGet**](LearningContentApi.md#getrandomunitapiv1learningunitsrandomget) | **GET** /api/v1/learning/units/random | Get Random Unit |
| [**getRecommendedApiV1LearningRecommendedGet**](LearningContentApi.md#getrecommendedapiv1learningrecommendedget) | **GET** /api/v1/learning/recommended | Get Recommended |
| [**getRecommendedUnitsApiV1LearningRecommendedUserUserIdGet**](LearningContentApi.md#getrecommendedunitsapiv1learningrecommendeduseruseridget) | **GET** /api/v1/learning/recommended/user/{user_id} | Get Recommended Units |
| [**getStatsApiV1LearningStatsGet**](LearningContentApi.md#getstatsapiv1learningstatsget) | **GET** /api/v1/learning/stats | Get Stats |
| [**getStepApiV1LearningStepsStepIdGet**](LearningContentApi.md#getstepapiv1learningstepsstepidget) | **GET** /api/v1/learning/steps/{step_id} | Get Step |
| [**getStepsByLessonApiV1LearningLessonsLessonIdStepsGet**](LearningContentApi.md#getstepsbylessonapiv1learninglessonslessonidstepsget) | **GET** /api/v1/learning/lessons/{lesson_id}/steps | Get Steps By Lesson |
| [**getUnitApiV1LearningUnitsUnitIdGet**](LearningContentApi.md#getunitapiv1learningunitsunitidget) | **GET** /api/v1/learning/units/{unit_id} | Get Unit |
| [**getUnitByCodeApiV1LearningUnitsCodeUnitCodeGet**](LearningContentApi.md#getunitbycodeapiv1learningunitscodeunitcodeget) | **GET** /api/v1/learning/units/code/{unit_code} | Get Unit By Code |
| [**getUnitProgressApiV1LearningProgressUnitUnitIdGet**](LearningContentApi.md#getunitprogressapiv1learningprogressunitunitidget) | **GET** /api/v1/learning/progress/unit/{unit_id} | Get Unit Progress |
| [**getUnitsApiV1LearningUnitsGet**](LearningContentApi.md#getunitsapiv1learningunitsget) | **GET** /api/v1/learning/units | Get Units |
| [**getUnitsByCategoryApiV1LearningUnitsCategoryCategoryGet**](LearningContentApi.md#getunitsbycategoryapiv1learningunitscategorycategoryget) | **GET** /api/v1/learning/units/category/{category} | Get Units By Category |
| [**getUnitsByDifficultyApiV1LearningUnitsDifficultyDifficultyLevelGet**](LearningContentApi.md#getunitsbydifficultyapiv1learningunitsdifficultydifficultylevelget) | **GET** /api/v1/learning/units/difficulty/{difficulty_level} | Get Units By Difficulty |
| [**getUnitsByTypeApiV1LearningUnitsTypeUnitTypeGet**](LearningContentApi.md#getunitsbytypeapiv1learningunitstypeunittypeget) | **GET** /api/v1/learning/units/type/{unit_type} | Get Units By Type |
| [**getUserProgressApiV1LearningProgressUserUserIdGet**](LearningContentApi.md#getuserprogressapiv1learningprogressuseruseridget) | **GET** /api/v1/learning/progress/user/{user_id} | Get User Progress |
| [**getUserStatsApiV1LearningStatsUserUserIdGet**](LearningContentApi.md#getuserstatsapiv1learningstatsuseruseridget) | **GET** /api/v1/learning/stats/user/{user_id} | Get User Stats |
| [**healthCheckApiV1LearningHealthGet**](LearningContentApi.md#healthcheckapiv1learninghealthget) | **GET** /api/v1/learning/health | Health Check |
| [**searchUnitsApiV1LearningSearchGet**](LearningContentApi.md#searchunitsapiv1learningsearchget) | **GET** /api/v1/learning/search | Search Units |
| [**updateLessonApiV1LearningLessonsLessonIdPut**](LearningContentApi.md#updatelessonapiv1learninglessonslessonidput) | **PUT** /api/v1/learning/lessons/{lesson_id} | Update Lesson |
| [**updateProgressApiV1LearningProgressProgressIdPut**](LearningContentApi.md#updateprogressapiv1learningprogressprogressidput) | **PUT** /api/v1/learning/progress/{progress_id} | Update Progress |
| [**updateStepApiV1LearningStepsStepIdPut**](LearningContentApi.md#updatestepapiv1learningstepsstepidput) | **PUT** /api/v1/learning/steps/{step_id} | Update Step |
| [**updateUnitApiV1LearningUnitsUnitIdPut**](LearningContentApi.md#updateunitapiv1learningunitsunitidput) | **PUT** /api/v1/learning/units/{unit_id} | Update Unit |
| [**upsertProgressApiV1LearningProgressUpsertPost**](LearningContentApi.md#upsertprogressapiv1learningprogressupsertpost) | **POST** /api/v1/learning/progress/upsert | Upsert Progress |



## createLessonApiV1LearningLessonsPost

> any createLessonApiV1LearningLessonsPost(requestBody)

Create Lesson

Создать новый урок (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { CreateLessonApiV1LearningLessonsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateLessonApiV1LearningLessonsPostRequest;

  try {
    const data = await api.createLessonApiV1LearningLessonsPost(body);
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


## createProgressApiV1LearningProgressPost

> any createProgressApiV1LearningProgressPost(requestBody)

Create Progress

Создать запись прогресса

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { CreateProgressApiV1LearningProgressPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateProgressApiV1LearningProgressPostRequest;

  try {
    const data = await api.createProgressApiV1LearningProgressPost(body);
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


## createStepApiV1LearningStepsPost

> any createStepApiV1LearningStepsPost(requestBody)

Create Step

Создать новый шаг (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { CreateStepApiV1LearningStepsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateStepApiV1LearningStepsPostRequest;

  try {
    const data = await api.createStepApiV1LearningStepsPost(body);
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


## createUnitApiV1LearningUnitsPost

> any createUnitApiV1LearningUnitsPost(requestBody)

Create Unit

Создать новую единицу обучения (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { CreateUnitApiV1LearningUnitsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies CreateUnitApiV1LearningUnitsPostRequest;

  try {
    const data = await api.createUnitApiV1LearningUnitsPost(body);
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


## deleteUnitApiV1LearningUnitsUnitIdDelete

> any deleteUnitApiV1LearningUnitsUnitIdDelete(unitId)

Delete Unit

Удалить единицу обучения (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { DeleteUnitApiV1LearningUnitsUnitIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteUnitApiV1LearningUnitsUnitIdDeleteRequest;

  try {
    const data = await api.deleteUnitApiV1LearningUnitsUnitIdDelete(body);
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
| **unitId** | `string` |  | [Defaults to `undefined`] |

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


## generateQuizApiV1LearningQuizUnitIdPost

> any generateQuizApiV1LearningQuizUnitIdPost(unitId, requestBody)

Generate Quiz

Генерация квиза для единицы (заглушка для будущей реализации)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GenerateQuizApiV1LearningQuizUnitIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies GenerateQuizApiV1LearningQuizUnitIdPostRequest;

  try {
    const data = await api.generateQuizApiV1LearningQuizUnitIdPost(body);
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
| **unitId** | `string` |  | [Defaults to `undefined`] |
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


## getLessonApiV1LearningLessonsLessonIdGet

> any getLessonApiV1LearningLessonsLessonIdGet(lessonId)

Get Lesson

Получить урок по ID

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetLessonApiV1LearningLessonsLessonIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLessonApiV1LearningLessonsLessonIdGetRequest;

  try {
    const data = await api.getLessonApiV1LearningLessonsLessonIdGet(body);
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
| **lessonId** | `string` |  | [Defaults to `undefined`] |

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


## getLessonProgressApiV1LearningProgressLessonLessonIdGet

> any getLessonProgressApiV1LearningProgressLessonLessonIdGet(lessonId, userId)

Get Lesson Progress

Получить прогресс по уроку

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetLessonProgressApiV1LearningProgressLessonLessonIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | ID пользователя
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLessonProgressApiV1LearningProgressLessonLessonIdGetRequest;

  try {
    const data = await api.getLessonProgressApiV1LearningProgressLessonLessonIdGet(body);
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
| **lessonId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` | ID пользователя | [Defaults to `undefined`] |

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


## getLessonWithStepsApiV1LearningLessonsLessonIdWithStepsGet

> any getLessonWithStepsApiV1LearningLessonsLessonIdWithStepsGet(lessonId)

Get Lesson With Steps

Получить урок со всеми шагами

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetLessonWithStepsApiV1LearningLessonsLessonIdWithStepsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLessonWithStepsApiV1LearningLessonsLessonIdWithStepsGetRequest;

  try {
    const data = await api.getLessonWithStepsApiV1LearningLessonsLessonIdWithStepsGet(body);
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
| **lessonId** | `string` |  | [Defaults to `undefined`] |

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


## getLessonsByUnitApiV1LearningUnitsUnitIdLessonsGet

> any getLessonsByUnitApiV1LearningUnitsUnitIdLessonsGet(unitId)

Get Lessons By Unit

Получить уроки для единицы

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetLessonsByUnitApiV1LearningUnitsUnitIdLessonsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetLessonsByUnitApiV1LearningUnitsUnitIdLessonsGetRequest;

  try {
    const data = await api.getLessonsByUnitApiV1LearningUnitsUnitIdLessonsGet(body);
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
| **unitId** | `string` |  | [Defaults to `undefined`] |

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


## getRandomUnitApiV1LearningUnitsRandomGet

> any getRandomUnitApiV1LearningUnitsRandomGet(unitType, category)

Get Random Unit

Получить случайную единицу

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetRandomUnitApiV1LearningUnitsRandomGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string (optional)
    unitType: unitType_example,
    // string (optional)
    category: category_example,
  } satisfies GetRandomUnitApiV1LearningUnitsRandomGetRequest;

  try {
    const data = await api.getRandomUnitApiV1LearningUnitsRandomGet(body);
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
| **unitType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |

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


## getRecommendedApiV1LearningRecommendedGet

> any getRecommendedApiV1LearningRecommendedGet(limit)

Get Recommended

Получить рекомендации на основе прогресса пользователя

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetRecommendedApiV1LearningRecommendedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // number (optional)
    limit: 56,
  } satisfies GetRecommendedApiV1LearningRecommendedGetRequest;

  try {
    const data = await api.getRecommendedApiV1LearningRecommendedGet(body);
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


## getRecommendedUnitsApiV1LearningRecommendedUserUserIdGet

> any getRecommendedUnitsApiV1LearningRecommendedUserUserIdGet(userId, limit)

Get Recommended Units

Получить рекомендуемые единицы для пользователя

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetRecommendedUnitsApiV1LearningRecommendedUserUserIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number (optional)
    limit: 56,
  } satisfies GetRecommendedUnitsApiV1LearningRecommendedUserUserIdGetRequest;

  try {
    const data = await api.getRecommendedUnitsApiV1LearningRecommendedUserUserIdGet(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |
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


## getStatsApiV1LearningStatsGet

> any getStatsApiV1LearningStatsGet()

Get Stats

Получить статистику обучения

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetStatsApiV1LearningStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  try {
    const data = await api.getStatsApiV1LearningStatsGet();
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


## getStepApiV1LearningStepsStepIdGet

> any getStepApiV1LearningStepsStepIdGet(stepId)

Get Step

Получить шаг по ID

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetStepApiV1LearningStepsStepIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    stepId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetStepApiV1LearningStepsStepIdGetRequest;

  try {
    const data = await api.getStepApiV1LearningStepsStepIdGet(body);
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
| **stepId** | `string` |  | [Defaults to `undefined`] |

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


## getStepsByLessonApiV1LearningLessonsLessonIdStepsGet

> any getStepsByLessonApiV1LearningLessonsLessonIdStepsGet(lessonId)

Get Steps By Lesson

Получить шаги урока

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetStepsByLessonApiV1LearningLessonsLessonIdStepsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetStepsByLessonApiV1LearningLessonsLessonIdStepsGetRequest;

  try {
    const data = await api.getStepsByLessonApiV1LearningLessonsLessonIdStepsGet(body);
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
| **lessonId** | `string` |  | [Defaults to `undefined`] |

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


## getUnitApiV1LearningUnitsUnitIdGet

> any getUnitApiV1LearningUnitsUnitIdGet(unitId)

Get Unit

Получить единицу по ID

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitApiV1LearningUnitsUnitIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUnitApiV1LearningUnitsUnitIdGetRequest;

  try {
    const data = await api.getUnitApiV1LearningUnitsUnitIdGet(body);
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
| **unitId** | `string` |  | [Defaults to `undefined`] |

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


## getUnitByCodeApiV1LearningUnitsCodeUnitCodeGet

> any getUnitByCodeApiV1LearningUnitsCodeUnitCodeGet(unitCode)

Get Unit By Code

Получить единицу по коду

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitByCodeApiV1LearningUnitsCodeUnitCodeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitCode: unitCode_example,
  } satisfies GetUnitByCodeApiV1LearningUnitsCodeUnitCodeGetRequest;

  try {
    const data = await api.getUnitByCodeApiV1LearningUnitsCodeUnitCodeGet(body);
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
| **unitCode** | `string` |  | [Defaults to `undefined`] |

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


## getUnitProgressApiV1LearningProgressUnitUnitIdGet

> any getUnitProgressApiV1LearningProgressUnitUnitIdGet(unitId, userId)

Get Unit Progress

Получить прогресс по единице

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitProgressApiV1LearningProgressUnitUnitIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | ID пользователя
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUnitProgressApiV1LearningProgressUnitUnitIdGetRequest;

  try {
    const data = await api.getUnitProgressApiV1LearningProgressUnitUnitIdGet(body);
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
| **unitId** | `string` |  | [Defaults to `undefined`] |
| **userId** | `string` | ID пользователя | [Defaults to `undefined`] |

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


## getUnitsApiV1LearningUnitsGet

> any getUnitsApiV1LearningUnitsGet(unitType, category, difficultyLevel, isActive, limit, offset)

Get Units

Получить список единиц обучения

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitsApiV1LearningUnitsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string (optional)
    unitType: unitType_example,
    // string (optional)
    category: category_example,
    // string (optional)
    difficultyLevel: difficultyLevel_example,
    // boolean (optional)
    isActive: true,
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies GetUnitsApiV1LearningUnitsGetRequest;

  try {
    const data = await api.getUnitsApiV1LearningUnitsGet(body);
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
| **unitType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **difficultyLevel** | `string` |  | [Optional] [Defaults to `undefined`] |
| **isActive** | `boolean` |  | [Optional] [Defaults to `true`] |
| **limit** | `number` |  | [Optional] [Defaults to `100`] |
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


## getUnitsByCategoryApiV1LearningUnitsCategoryCategoryGet

> any getUnitsByCategoryApiV1LearningUnitsCategoryCategoryGet(category, limit)

Get Units By Category

Получить единицы по категории

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitsByCategoryApiV1LearningUnitsCategoryCategoryGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    category: category_example,
    // number (optional)
    limit: 56,
  } satisfies GetUnitsByCategoryApiV1LearningUnitsCategoryCategoryGetRequest;

  try {
    const data = await api.getUnitsByCategoryApiV1LearningUnitsCategoryCategoryGet(body);
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
| **category** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getUnitsByDifficultyApiV1LearningUnitsDifficultyDifficultyLevelGet

> any getUnitsByDifficultyApiV1LearningUnitsDifficultyDifficultyLevelGet(difficultyLevel, limit)

Get Units By Difficulty

Получить единицы по уровню сложности

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitsByDifficultyApiV1LearningUnitsDifficultyDifficultyLevelGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    difficultyLevel: difficultyLevel_example,
    // number (optional)
    limit: 56,
  } satisfies GetUnitsByDifficultyApiV1LearningUnitsDifficultyDifficultyLevelGetRequest;

  try {
    const data = await api.getUnitsByDifficultyApiV1LearningUnitsDifficultyDifficultyLevelGet(body);
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
| **difficultyLevel** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getUnitsByTypeApiV1LearningUnitsTypeUnitTypeGet

> any getUnitsByTypeApiV1LearningUnitsTypeUnitTypeGet(unitType, limit)

Get Units By Type

Получить единицы по типу

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUnitsByTypeApiV1LearningUnitsTypeUnitTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitType: unitType_example,
    // number (optional)
    limit: 56,
  } satisfies GetUnitsByTypeApiV1LearningUnitsTypeUnitTypeGetRequest;

  try {
    const data = await api.getUnitsByTypeApiV1LearningUnitsTypeUnitTypeGet(body);
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
| **unitType** | `string` |  | [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `50`] |

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


## getUserProgressApiV1LearningProgressUserUserIdGet

> any getUserProgressApiV1LearningProgressUserUserIdGet(userId)

Get User Progress

Получить весь прогресс пользователя

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUserProgressApiV1LearningProgressUserUserIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUserProgressApiV1LearningProgressUserUserIdGetRequest;

  try {
    const data = await api.getUserProgressApiV1LearningProgressUserUserIdGet(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

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


## getUserStatsApiV1LearningStatsUserUserIdGet

> any getUserStatsApiV1LearningStatsUserUserIdGet(userId)

Get User Stats

Получить статистику пользователя

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { GetUserStatsApiV1LearningStatsUserUserIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetUserStatsApiV1LearningStatsUserUserIdGetRequest;

  try {
    const data = await api.getUserStatsApiV1LearningStatsUserUserIdGet(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |

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


## healthCheckApiV1LearningHealthGet

> any healthCheckApiV1LearningHealthGet()

Health Check

Проверка здоровья API

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { HealthCheckApiV1LearningHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  try {
    const data = await api.healthCheckApiV1LearningHealthGet();
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


## searchUnitsApiV1LearningSearchGet

> any searchUnitsApiV1LearningSearchGet(q, unitType, category, limit)

Search Units

Поиск единиц по тексту

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { SearchUnitsApiV1LearningSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string | Поисковый запрос
    q: q_example,
    // string (optional)
    unitType: unitType_example,
    // string (optional)
    category: category_example,
    // number (optional)
    limit: 56,
  } satisfies SearchUnitsApiV1LearningSearchGetRequest;

  try {
    const data = await api.searchUnitsApiV1LearningSearchGet(body);
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
| **q** | `string` | Поисковый запрос | [Defaults to `undefined`] |
| **unitType** | `string` |  | [Optional] [Defaults to `undefined`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

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


## updateLessonApiV1LearningLessonsLessonIdPut

> any updateLessonApiV1LearningLessonsLessonIdPut(lessonId, requestBody)

Update Lesson

Обновить урок (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { UpdateLessonApiV1LearningLessonsLessonIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    lessonId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateLessonApiV1LearningLessonsLessonIdPutRequest;

  try {
    const data = await api.updateLessonApiV1LearningLessonsLessonIdPut(body);
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
| **lessonId** | `string` |  | [Defaults to `undefined`] |
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


## updateProgressApiV1LearningProgressProgressIdPut

> any updateProgressApiV1LearningProgressProgressIdPut(progressId, requestBody)

Update Progress

Обновить прогресс

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { UpdateProgressApiV1LearningProgressProgressIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    progressId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateProgressApiV1LearningProgressProgressIdPutRequest;

  try {
    const data = await api.updateProgressApiV1LearningProgressProgressIdPut(body);
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
| **progressId** | `string` |  | [Defaults to `undefined`] |
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


## updateStepApiV1LearningStepsStepIdPut

> any updateStepApiV1LearningStepsStepIdPut(stepId, requestBody)

Update Step

Обновить шаг (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { UpdateStepApiV1LearningStepsStepIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    stepId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateStepApiV1LearningStepsStepIdPutRequest;

  try {
    const data = await api.updateStepApiV1LearningStepsStepIdPut(body);
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
| **stepId** | `string` |  | [Defaults to `undefined`] |
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


## updateUnitApiV1LearningUnitsUnitIdPut

> any updateUnitApiV1LearningUnitsUnitIdPut(unitId, requestBody)

Update Unit

Обновить единицу обучения (только для админов)

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { UpdateUnitApiV1LearningUnitsUnitIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpdateUnitApiV1LearningUnitsUnitIdPutRequest;

  try {
    const data = await api.updateUnitApiV1LearningUnitsUnitIdPut(body);
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
| **unitId** | `string` |  | [Defaults to `undefined`] |
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


## upsertProgressApiV1LearningProgressUpsertPost

> any upsertProgressApiV1LearningProgressUpsertPost(userId, unitId, requestBody)

Upsert Progress

Создать или обновить прогресс

### Example

```ts
import {
  Configuration,
  LearningContentApi,
} from '';
import type { UpsertProgressApiV1LearningProgressUpsertPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LearningContentApi(config);

  const body = {
    // string
    userId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    unitId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies UpsertProgressApiV1LearningProgressUpsertPostRequest;

  try {
    const data = await api.upsertProgressApiV1LearningProgressUpsertPost(body);
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
| **userId** | `string` |  | [Defaults to `undefined`] |
| **unitId** | `string` |  | [Defaults to `undefined`] |
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

