# ArabicLessonsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzePronunciationApiV1ArabicLessonsPronunciationAnalyzePost**](ArabicLessonsApi.md#analyzepronunciationapiv1arabiclessonspronunciationanalyzepost) | **POST** /api/v1/arabic-lessons/pronunciation/analyze | Analyze Pronunciation |
| [**completeChallengeApiV1ArabicLessonsDailyChallengeChallengeIdCompletePost**](ArabicLessonsApi.md#completechallengeapiv1arabiclessonsdailychallengechallengeidcompletepost) | **POST** /api/v1/arabic-lessons/daily-challenge/{challenge_id}/complete | Complete Challenge |
| [**completeLearningSessionApiV1ArabicLessonsSessionSessionIdCompletePost**](ArabicLessonsApi.md#completelearningsessionapiv1arabiclessonssessionsessionidcompletepost) | **POST** /api/v1/arabic-lessons/session/{session_id}/complete | Complete Learning Session |
| [**getAchievementsApiV1ArabicLessonsAchievementsGet**](ArabicLessonsApi.md#getachievementsapiv1arabiclessonsachievementsget) | **GET** /api/v1/arabic-lessons/achievements | Get Achievements |
| [**getAllLettersApiV1ArabicLessonsLettersGet**](ArabicLessonsApi.md#getalllettersapiv1arabiclessonslettersget) | **GET** /api/v1/arabic-lessons/letters | Get All Letters |
| [**getAllahNameForLetterApiV1ArabicLessonsAllahNameForLetterLetterGet**](ArabicLessonsApi.md#getallahnameforletterapiv1arabiclessonsallahnameforletterletterget) | **GET** /api/v1/arabic-lessons/allah-name-for-letter/{letter} | Get Allah Name For Letter |
| [**getAllahNamesProgressApiV1ArabicLessonsAllahNamesProgressGet**](ArabicLessonsApi.md#getallahnamesprogressapiv1arabiclessonsallahnamesprogressget) | **GET** /api/v1/arabic-lessons/allah-names/progress | Get Allah Names Progress |
| [**getAnimationsIndexApiV1ArabicLessonsAnimationsIndexGet**](ArabicLessonsApi.md#getanimationsindexapiv1arabiclessonsanimationsindexget) | **GET** /api/v1/arabic-lessons/animations/index | Get Animations Index |
| [**getArabicLessonApiV1ArabicLessonsLessonIdGet**](ArabicLessonsApi.md#getarabiclessonapiv1arabiclessonslessonidget) | **GET** /api/v1/arabic-lessons/{lesson_id} | Get Arabic Lesson |
| [**getArabicLessonsApiV1ArabicLessonsLessonsGet**](ArabicLessonsApi.md#getarabiclessonsapiv1arabiclessonslessonsget) | **GET** /api/v1/arabic-lessons/lessons | Get Arabic Lessons |
| [**getArabicLessonsRootApiV1ArabicLessonsGet**](ArabicLessonsApi.md#getarabiclessonsrootapiv1arabiclessonsget) | **GET** /api/v1/arabic-lessons/ | Get Arabic Lessons Root |
| [**getAudioForLessonApiV1ArabicLessonsQuranAudioSurahAyahGet**](ArabicLessonsApi.md#getaudioforlessonapiv1arabiclessonsquranaudiosurahayahget) | **GET** /api/v1/arabic-lessons/quran/audio/{surah}/{ayah} | Get Audio For Lesson |
| [**getDailyChallengeApiV1ArabicLessonsDailyChallengeGet**](ArabicLessonsApi.md#getdailychallengeapiv1arabiclessonsdailychallengeget) | **GET** /api/v1/arabic-lessons/daily-challenge | Get Daily Challenge |
| [**getLeaderboardApiV1ArabicLessonsLeaderboardGet**](ArabicLessonsApi.md#getleaderboardapiv1arabiclessonsleaderboardget) | **GET** /api/v1/arabic-lessons/leaderboard | Get Leaderboard |
| [**getLessonByLetterApiV1ArabicLessonsByLetterLetterGet**](ArabicLessonsApi.md#getlessonbyletterapiv1arabiclessonsbyletterletterget) | **GET** /api/v1/arabic-lessons/by-letter/{letter} | Get Lesson By Letter |
| [**getLessonTermsApiV1ArabicLessonsLessonsLessonIdTermsGet**](ArabicLessonsApi.md#getlessontermsapiv1arabiclessonslessonslessonidtermsget) | **GET** /api/v1/arabic-lessons/lessons/{lesson_id}/terms | Get Lesson Terms |
| [**getLessonsByDifficultyApiV1ArabicLessonsDifficultyDifficultyLevelGet**](ArabicLessonsApi.md#getlessonsbydifficultyapiv1arabiclessonsdifficultydifficultylevelget) | **GET** /api/v1/arabic-lessons/difficulty/{difficulty_level} | Get Lessons By Difficulty |
| [**getLessonsByTypeApiV1ArabicLessonsTypeLessonTypeGet**](ArabicLessonsApi.md#getlessonsbytypeapiv1arabiclessonstypelessontypeget) | **GET** /api/v1/arabic-lessons/type/{lesson_type} | Get Lessons By Type |
| [**getLetterAnimationApiV1ArabicLessonsMediaAnimationLetterLetterFilenameGet**](ArabicLessonsApi.md#getletteranimationapiv1arabiclessonsmediaanimationletterletterfilenameget) | **GET** /api/v1/arabic-lessons/media/animation/letter/{letter}/{filename} | Get Letter Animation |
| [**getLetterAudioFileApiV1ArabicLessonsMediaAudioLetterFilenameGet**](ArabicLessonsApi.md#getletteraudiofileapiv1arabiclessonsmediaaudioletterfilenameget) | **GET** /api/v1/arabic-lessons/media/audio/{letter}/{filename} | Get Letter Audio File |
| [**getLetterDetailsApiV1ArabicLessonsLettersLetterGet**](ArabicLessonsApi.md#getletterdetailsapiv1arabiclessonslettersletterget) | **GET** /api/v1/arabic-lessons/letters/{letter} | Get Letter Details |
| [**getLetterExamplesApiV1ArabicLessonsLettersLetterExamplesGet**](ArabicLessonsApi.md#getletterexamplesapiv1arabiclessonslettersletterexamplesget) | **GET** /api/v1/arabic-lessons/letters/{letter}/examples | Get Letter Examples |
| [**getLetterExamplesForLessonApiV1ArabicLessonsQuranLetterExamplesLetterGet**](ArabicLessonsApi.md#getletterexamplesforlessonapiv1arabiclessonsquranletterexamplesletterget) | **GET** /api/v1/arabic-lessons/quran/letter-examples/{letter} | Get Letter Examples For Lesson |
| [**getLetterFormsApiV1ArabicLessonsLettersLetterFormsGet**](ArabicLessonsApi.md#getletterformsapiv1arabiclessonslettersletterformsget) | **GET** /api/v1/arabic-lessons/letters/{letter}/forms | Get Letter Forms |
| [**getLetterImageApiV1ArabicLessonsMediaImageLetterCategoryFilenameGet**](ArabicLessonsApi.md#getletterimageapiv1arabiclessonsmediaimagelettercategoryfilenameget) | **GET** /api/v1/arabic-lessons/media/image/{letter}/{category}/{filename} | Get Letter Image |
| [**getLetterSvgDeprecatedApiV1ArabicLessonsStorageSvgLetterLetterFormGet**](ArabicLessonsApi.md#getlettersvgdeprecatedapiv1arabiclessonsstoragesvgletterletterformget) | **GET** /api/v1/arabic-lessons/storage/svg/letter/{letter}/{form} | Get Letter Svg Deprecated |
| [**getLetterSvgFileApiV1ArabicLessonsMediaSvgLetterCategoryFilenameGet**](ArabicLessonsApi.md#getlettersvgfileapiv1arabiclessonsmediasvglettercategoryfilenameget) | **GET** /api/v1/arabic-lessons/media/svg/{letter}/{category}/{filename} | Get Letter Svg File |
| [**getLetterSyllablesApiV1ArabicLessonsLettersLetterSyllablesGet**](ArabicLessonsApi.md#getlettersyllablesapiv1arabiclessonsletterslettersyllablesget) | **GET** /api/v1/arabic-lessons/letters/{letter}/syllables | Get Letter Syllables |
| [**getLetterTajweedApiV1ArabicLessonsTajweedLetterGet**](ArabicLessonsApi.md#getlettertajweedapiv1arabiclessonstajweedletterget) | **GET** /api/v1/arabic-lessons/tajweed/{letter} | Get Letter Tajweed |
| [**getLetterWordsApiV1ArabicLessonsLettersLetterWordsGet**](ArabicLessonsApi.md#getletterwordsapiv1arabiclessonslettersletterwordsget) | **GET** /api/v1/arabic-lessons/letters/{letter}/words | Get Letter Words |
| [**getRandomAyahWithLetterApiV1ArabicLessonsQuranRandomAyahWithLetterLetterGet**](ArabicLessonsApi.md#getrandomayahwithletterapiv1arabiclessonsquranrandomayahwithletterletterget) | **GET** /api/v1/arabic-lessons/quran/random-ayah-with-letter/{letter} | Get Random Ayah With Letter |
| [**getStaticSvgApiV1ArabicLessonsMediaSvgStaticLetterTypeFilenameGet**](ArabicLessonsApi.md#getstaticsvgapiv1arabiclessonsmediasvgstaticlettertypefilenameget) | **GET** /api/v1/arabic-lessons/media/svg-static/{letter}/{type}/{filename} | Get Static Svg |
| [**getSyllableAnimationApiV1ArabicLessonsMediaAnimationSyllableLetterSyllableTypeGet**](ArabicLessonsApi.md#getsyllableanimationapiv1arabiclessonsmediaanimationsyllablelettersyllabletypeget) | **GET** /api/v1/arabic-lessons/media/animation/syllable/{letter}/{syllable_type} | Get Syllable Animation |
| [**getSyllableAudioApiV1ArabicLessonsMediaAudioLetterSyllableSyllableTypeMp3Get**](ArabicLessonsApi.md#getsyllableaudioapiv1arabiclessonsmediaaudiolettersyllablesyllabletypemp3get) | **GET** /api/v1/arabic-lessons/media/audio/{letter}/syllable_{syllable_type}.mp3 | Get Syllable Audio |
| [**getTermLessonsApiV1ArabicLessonsLessonsTermsTermIdGet**](ArabicLessonsApi.md#gettermlessonsapiv1arabiclessonslessonstermstermidget) | **GET** /api/v1/arabic-lessons/lessons/terms/{term_id} | Get Term Lessons |
| [**getUserAchievementsApiV1ArabicLessonsUserAchievementsGet**](ArabicLessonsApi.md#getuserachievementsapiv1arabiclessonsuserachievementsget) | **GET** /api/v1/arabic-lessons/user/achievements | Get User Achievements |
| [**getUserArabicStatsApiV1ArabicLessonsUserStatsGet**](ArabicLessonsApi.md#getuserarabicstatsapiv1arabiclessonsuserstatsget) | **GET** /api/v1/arabic-lessons/user/stats | Get User Arabic Stats |
| [**getUserLessonProgressApiV1ArabicLessonsUserProgressGet**](ArabicLessonsApi.md#getuserlessonprogressapiv1arabiclessonsuserprogressget) | **GET** /api/v1/arabic-lessons/user/progress | Get User Lesson Progress |
| [**getUserProgressApiV1ArabicLessonsUserProgressGet**](ArabicLessonsApi.md#getuserprogressapiv1arabiclessonsuserprogressget) | **GET** /api/v1/arabic-lessons/user-progress | Get User Progress |
| [**getVerseForLessonApiV1ArabicLessonsQuranVerseSurahAyahGet**](ArabicLessonsApi.md#getverseforlessonapiv1arabiclessonsquranversesurahayahget) | **GET** /api/v1/arabic-lessons/quran/verse/{surah}/{ayah} | Get Verse For Lesson |
| [**getWordAnimationApiV1ArabicLessonsMediaAnimationWordLetterWordIdGet**](ArabicLessonsApi.md#getwordanimationapiv1arabiclessonsmediaanimationwordletterwordidget) | **GET** /api/v1/arabic-lessons/media/animation/word/{letter}/{word_id} | Get Word Animation |
| [**getWordAnimationApiV1ArabicLessonsMediaAnimationWordWordIdGet**](ArabicLessonsApi.md#getwordanimationapiv1arabiclessonsmediaanimationwordwordidget) | **GET** /api/v1/arabic-lessons/media/animation/word/{word_id} | Get Word Animation |
| [**getWordForLessonApiV1ArabicLessonsQuranWordSurahAyahWordGet**](ArabicLessonsApi.md#getwordforlessonapiv1arabiclessonsquranwordsurahayahwordget) | **GET** /api/v1/arabic-lessons/quran/word/{surah}/{ayah}/{word} | Get Word For Lesson |
| [**getWordSvgApiV1ArabicLessonsMediaSvgWordsWordFilenameGet**](ArabicLessonsApi.md#getwordsvgapiv1arabiclessonsmediasvgwordswordfilenameget) | **GET** /api/v1/arabic-lessons/media/svg-words/{word}/{filename} | Get Word Svg |
| [**healthCheckApiV1ArabicLessonsHealthGet**](ArabicLessonsApi.md#healthcheckapiv1arabiclessonshealthget) | **GET** /api/v1/arabic-lessons/health | Health Check |
| [**markAllahNameLearnedApiV1ArabicLessonsAllahNameNameIdMarkLearnedPost**](ArabicLessonsApi.md#markallahnamelearnedapiv1arabiclessonsallahnamenameidmarklearnedpost) | **POST** /api/v1/arabic-lessons/allah-name/{name_id}/mark-learned | Mark Allah Name Learned |
| [**saveLessonProgressApiV1ArabicLessonsLessonsLessonIdProgressPost**](ArabicLessonsApi.md#savelessonprogressapiv1arabiclessonslessonslessonidprogresspost) | **POST** /api/v1/arabic-lessons/lessons/{lesson_id}/progress | Save Lesson Progress |
| [**saveLessonProgressApiV1ArabicLessonsProgressPost**](ArabicLessonsApi.md#savelessonprogressapiv1arabiclessonsprogresspost) | **POST** /api/v1/arabic-lessons/progress | Save Lesson Progress |
| [**saveUserProgressApiV1ArabicLessonsUserProgressPost**](ArabicLessonsApi.md#saveuserprogressapiv1arabiclessonsuserprogresspost) | **POST** /api/v1/arabic-lessons/user-progress | Save User Progress |
| [**searchCorpusApiV1ArabicLessonsCorpusSearchGet**](ArabicLessonsApi.md#searchcorpusapiv1arabiclessonscorpussearchget) | **GET** /api/v1/arabic-lessons/corpus/search | Search Corpus |
| [**startLearningSessionApiV1ArabicLessonsSessionStartPost**](ArabicLessonsApi.md#startlearningsessionapiv1arabiclessonssessionstartpost) | **POST** /api/v1/arabic-lessons/session/start | Start Learning Session |
| [**synthesizePronunciationApiV1ArabicLessonsPronunciationSynthesizePost**](ArabicLessonsApi.md#synthesizepronunciationapiv1arabiclessonspronunciationsynthesizepost) | **POST** /api/v1/arabic-lessons/pronunciation/synthesize | Synthesize Pronunciation |
| [**uploadUserRecordingApiV1ArabicLessonsStorageRecordingUploadPost**](ArabicLessonsApi.md#uploaduserrecordingapiv1arabiclessonsstoragerecordinguploadpost) | **POST** /api/v1/arabic-lessons/storage/recording/upload | Upload User Recording |



## analyzePronunciationApiV1ArabicLessonsPronunciationAnalyzePost

> any analyzePronunciationApiV1ArabicLessonsPronunciationAnalyzePost(requestBody)

Analyze Pronunciation

Анализ произношения через NeuroAPI

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { AnalyzePronunciationApiV1ArabicLessonsPronunciationAnalyzePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // { [key: string]: any; } (optional)
    requestBody: Object,
  } satisfies AnalyzePronunciationApiV1ArabicLessonsPronunciationAnalyzePostRequest;

  try {
    const data = await api.analyzePronunciationApiV1ArabicLessonsPronunciationAnalyzePost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | [Optional] |

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


## completeChallengeApiV1ArabicLessonsDailyChallengeChallengeIdCompletePost

> any completeChallengeApiV1ArabicLessonsDailyChallengeChallengeIdCompletePost(challengeId)

Complete Challenge

Отметить челлендж как выполненный

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { CompleteChallengeApiV1ArabicLessonsDailyChallengeChallengeIdCompletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    challengeId: challengeId_example,
  } satisfies CompleteChallengeApiV1ArabicLessonsDailyChallengeChallengeIdCompletePostRequest;

  try {
    const data = await api.completeChallengeApiV1ArabicLessonsDailyChallengeChallengeIdCompletePost(body);
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
| **challengeId** | `string` |  | [Defaults to `undefined`] |

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


## completeLearningSessionApiV1ArabicLessonsSessionSessionIdCompletePost

> any completeLearningSessionApiV1ArabicLessonsSessionSessionIdCompletePost(sessionId, requestBody)

Complete Learning Session

Завершить сессию обучения

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { CompleteLearningSessionApiV1ArabicLessonsSessionSessionIdCompletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    sessionId: sessionId_example,
    // { [key: string]: any; } (optional)
    requestBody: Object,
  } satisfies CompleteLearningSessionApiV1ArabicLessonsSessionSessionIdCompletePostRequest;

  try {
    const data = await api.completeLearningSessionApiV1ArabicLessonsSessionSessionIdCompletePost(body);
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
| **requestBody** | `{ [key: string]: any; }` |  | [Optional] |

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


## getAchievementsApiV1ArabicLessonsAchievementsGet

> any getAchievementsApiV1ArabicLessonsAchievementsGet()

Get Achievements

Получить список всех возможных достижений

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetAchievementsApiV1ArabicLessonsAchievementsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getAchievementsApiV1ArabicLessonsAchievementsGet();
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


## getAllLettersApiV1ArabicLessonsLettersGet

> any getAllLettersApiV1ArabicLessonsLettersGet()

Get All Letters

Получить список всех арабских букв

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetAllLettersApiV1ArabicLessonsLettersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getAllLettersApiV1ArabicLessonsLettersGet();
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


## getAllahNameForLetterApiV1ArabicLessonsAllahNameForLetterLetterGet

> any getAllahNameForLetterApiV1ArabicLessonsAllahNameForLetterLetterGet(letter, change)

Get Allah Name For Letter

Получить имя Аллаха с буквой, учитывая прогресс пользователя  Args:     letter: Арабская буква     change: Если True, показать другое имя  Returns:     Имя Аллаха с прогрессом изучения

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetAllahNameForLetterApiV1ArabicLessonsAllahNameForLetterLetterGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // boolean (optional)
    change: true,
  } satisfies GetAllahNameForLetterApiV1ArabicLessonsAllahNameForLetterLetterGetRequest;

  try {
    const data = await api.getAllahNameForLetterApiV1ArabicLessonsAllahNameForLetterLetterGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **change** | `boolean` |  | [Optional] [Defaults to `false`] |

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


## getAllahNamesProgressApiV1ArabicLessonsAllahNamesProgressGet

> any getAllahNamesProgressApiV1ArabicLessonsAllahNamesProgressGet()

Get Allah Names Progress

Получить прогресс изучения всех 99 имен Аллаха

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetAllahNamesProgressApiV1ArabicLessonsAllahNamesProgressGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getAllahNamesProgressApiV1ArabicLessonsAllahNamesProgressGet();
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


## getAnimationsIndexApiV1ArabicLessonsAnimationsIndexGet

> any getAnimationsIndexApiV1ArabicLessonsAnimationsIndexGet()

Get Animations Index

Получить индекс всех доступных анимаций  Returns:     JSON с метаданными всех анимаций (буквы, слоги, слова)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetAnimationsIndexApiV1ArabicLessonsAnimationsIndexGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getAnimationsIndexApiV1ArabicLessonsAnimationsIndexGet();
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


## getArabicLessonApiV1ArabicLessonsLessonIdGet

> any getArabicLessonApiV1ArabicLessonsLessonIdGet(lessonId)

Get Arabic Lesson

Получить конкретный урок с его шагами

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetArabicLessonApiV1ArabicLessonsLessonIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    lessonId: lessonId_example,
  } satisfies GetArabicLessonApiV1ArabicLessonsLessonIdGetRequest;

  try {
    const data = await api.getArabicLessonApiV1ArabicLessonsLessonIdGet(body);
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


## getArabicLessonsApiV1ArabicLessonsLessonsGet

> Array&lt;LessonResponse&gt; getArabicLessonsApiV1ArabicLessonsLessonsGet()

Get Arabic Lessons

Получить список всех активных уроков

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetArabicLessonsApiV1ArabicLessonsLessonsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getArabicLessonsApiV1ArabicLessonsLessonsGet();
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

[**Array&lt;LessonResponse&gt;**](LessonResponse.md)

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


## getArabicLessonsRootApiV1ArabicLessonsGet

> { [key: string]: any; } getArabicLessonsRootApiV1ArabicLessonsGet()

Get Arabic Lessons Root

Получить список всех активных уроков (корневой эндпоинт)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetArabicLessonsRootApiV1ArabicLessonsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getArabicLessonsRootApiV1ArabicLessonsGet();
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

**{ [key: string]: any; }**

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


## getAudioForLessonApiV1ArabicLessonsQuranAudioSurahAyahGet

> any getAudioForLessonApiV1ArabicLessonsQuranAudioSurahAyahGet(surah, ayah, word)

Get Audio For Lesson

Получить URL аудио для аята или слова  Args:     surah: Номер суры (1-114)     ayah: Номер аята     word: Позиция слова (опционально, если нужно аудио конкретного слова)  Returns:     URL аудио файла (Mishari Alafasy)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetAudioForLessonApiV1ArabicLessonsQuranAudioSurahAyahGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // number
    surah: 56,
    // number
    ayah: 56,
    // number (optional)
    word: 56,
  } satisfies GetAudioForLessonApiV1ArabicLessonsQuranAudioSurahAyahGetRequest;

  try {
    const data = await api.getAudioForLessonApiV1ArabicLessonsQuranAudioSurahAyahGet(body);
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
| **surah** | `number` |  | [Defaults to `undefined`] |
| **ayah** | `number` |  | [Defaults to `undefined`] |
| **word** | `number` |  | [Optional] [Defaults to `undefined`] |

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


## getDailyChallengeApiV1ArabicLessonsDailyChallengeGet

> any getDailyChallengeApiV1ArabicLessonsDailyChallengeGet()

Get Daily Challenge

Получить сегодняшний ежедневный челлендж

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetDailyChallengeApiV1ArabicLessonsDailyChallengeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getDailyChallengeApiV1ArabicLessonsDailyChallengeGet();
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


## getLeaderboardApiV1ArabicLessonsLeaderboardGet

> any getLeaderboardApiV1ArabicLessonsLeaderboardGet(period, limit)

Get Leaderboard

Получить таблицу лидеров

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLeaderboardApiV1ArabicLessonsLeaderboardGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string (optional)
    period: period_example,
    // number (optional)
    limit: 56,
  } satisfies GetLeaderboardApiV1ArabicLessonsLeaderboardGetRequest;

  try {
    const data = await api.getLeaderboardApiV1ArabicLessonsLeaderboardGet(body);
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
| **period** | `string` |  | [Optional] [Defaults to `&#39;week&#39;`] |
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


## getLessonByLetterApiV1ArabicLessonsByLetterLetterGet

> any getLessonByLetterApiV1ArabicLessonsByLetterLetterGet(letter)

Get Lesson By Letter

Получить урок для конкретной буквы  Args:     letter: Арабская буква (например: \&#39;ا\&#39;, \&#39;ب\&#39;, \&#39;ت\&#39;)  Returns:     Полный урок с шагами, информацией о букве, примерами из Корана

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLessonByLetterApiV1ArabicLessonsByLetterLetterGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetLessonByLetterApiV1ArabicLessonsByLetterLetterGetRequest;

  try {
    const data = await api.getLessonByLetterApiV1ArabicLessonsByLetterLetterGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getLessonTermsApiV1ArabicLessonsLessonsLessonIdTermsGet

> any getLessonTermsApiV1ArabicLessonsLessonsLessonIdTermsGet(lessonId)

Get Lesson Terms

Получить термины для конкретного урока

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLessonTermsApiV1ArabicLessonsLessonsLessonIdTermsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    lessonId: lessonId_example,
  } satisfies GetLessonTermsApiV1ArabicLessonsLessonsLessonIdTermsGetRequest;

  try {
    const data = await api.getLessonTermsApiV1ArabicLessonsLessonsLessonIdTermsGet(body);
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


## getLessonsByDifficultyApiV1ArabicLessonsDifficultyDifficultyLevelGet

> any getLessonsByDifficultyApiV1ArabicLessonsDifficultyDifficultyLevelGet(difficultyLevel)

Get Lessons By Difficulty

Получить уроки по уровню сложности

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLessonsByDifficultyApiV1ArabicLessonsDifficultyDifficultyLevelGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // number
    difficultyLevel: 56,
  } satisfies GetLessonsByDifficultyApiV1ArabicLessonsDifficultyDifficultyLevelGetRequest;

  try {
    const data = await api.getLessonsByDifficultyApiV1ArabicLessonsDifficultyDifficultyLevelGet(body);
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
| **difficultyLevel** | `number` |  | [Defaults to `undefined`] |

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


## getLessonsByTypeApiV1ArabicLessonsTypeLessonTypeGet

> any getLessonsByTypeApiV1ArabicLessonsTypeLessonTypeGet(lessonType)

Get Lessons By Type

Получить уроки по типу

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLessonsByTypeApiV1ArabicLessonsTypeLessonTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    lessonType: lessonType_example,
  } satisfies GetLessonsByTypeApiV1ArabicLessonsTypeLessonTypeGetRequest;

  try {
    const data = await api.getLessonsByTypeApiV1ArabicLessonsTypeLessonTypeGet(body);
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
| **lessonType** | `string` |  | [Defaults to `undefined`] |

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


## getLetterAnimationApiV1ArabicLessonsMediaAnimationLetterLetterFilenameGet

> any getLetterAnimationApiV1ArabicLessonsMediaAnimationLetterLetterFilenameGet(letter, filename)

Get Letter Animation

Получить SVG анимацию написания буквы  Args:     letter: Английское название буквы (alif, ba, ta, ...)     filename: Имя файла (letter.svg, initial.svg, medial.svg, final.svg)  Returns:     SVG файл с анимацией написания буквы

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterAnimationApiV1ArabicLessonsMediaAnimationLetterLetterFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    filename: filename_example,
  } satisfies GetLetterAnimationApiV1ArabicLessonsMediaAnimationLetterLetterFilenameGetRequest;

  try {
    const data = await api.getLetterAnimationApiV1ArabicLessonsMediaAnimationLetterLetterFilenameGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
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


## getLetterAudioFileApiV1ArabicLessonsMediaAudioLetterFilenameGet

> any getLetterAudioFileApiV1ArabicLessonsMediaAudioLetterFilenameGet(letter, filename)

Get Letter Audio File

Получить аудио файл для буквы  ТРЕБУЕТ АВТОРИЗАЦИИ!  Args:     letter: английское название буквы (alif, ba, ta, ...) или арабская буква     filename: имя файла (isolated.mp3, name.mp3, sound.mp3, ...)  Returns:     FileResponse с аудио файлом

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterAudioFileApiV1ArabicLessonsMediaAudioLetterFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    filename: filename_example,
  } satisfies GetLetterAudioFileApiV1ArabicLessonsMediaAudioLetterFilenameGetRequest;

  try {
    const data = await api.getLetterAudioFileApiV1ArabicLessonsMediaAudioLetterFilenameGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
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


## getLetterDetailsApiV1ArabicLessonsLettersLetterGet

> any getLetterDetailsApiV1ArabicLessonsLettersLetterGet(letter)

Get Letter Details

Получить детальную информацию о букве

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterDetailsApiV1ArabicLessonsLettersLetterGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetLetterDetailsApiV1ArabicLessonsLettersLetterGetRequest;

  try {
    const data = await api.getLetterDetailsApiV1ArabicLessonsLettersLetterGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getLetterExamplesApiV1ArabicLessonsLettersLetterExamplesGet

> any getLetterExamplesApiV1ArabicLessonsLettersLetterExamplesGet(letter, position, limit)

Get Letter Examples

Получить примеры буквы из Корана

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterExamplesApiV1ArabicLessonsLettersLetterExamplesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string (optional)
    position: position_example,
    // number (optional)
    limit: 56,
  } satisfies GetLetterExamplesApiV1ArabicLessonsLettersLetterExamplesGetRequest;

  try {
    const data = await api.getLetterExamplesApiV1ArabicLessonsLettersLetterExamplesGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **position** | `string` |  | [Optional] [Defaults to `undefined`] |
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


## getLetterExamplesForLessonApiV1ArabicLessonsQuranLetterExamplesLetterGet

> any getLetterExamplesForLessonApiV1ArabicLessonsQuranLetterExamplesLetterGet(letter, form, limit)

Get Letter Examples For Lesson

Получить примеры использования буквы в Коране из Elasticsearch  Args:     letter: Арабская буква (например: \&#39;ا\&#39;, \&#39;ب\&#39;, \&#39;ت\&#39;)     form: Форма буквы (isolated, initial, medial, final) - опционально     limit: Количество примеров (по умолчанию 10)  Returns:     Список примеров: сура, аят, слово, позиция буквы, контекст

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterExamplesForLessonApiV1ArabicLessonsQuranLetterExamplesLetterGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string (optional)
    form: form_example,
    // number (optional)
    limit: 56,
  } satisfies GetLetterExamplesForLessonApiV1ArabicLessonsQuranLetterExamplesLetterGetRequest;

  try {
    const data = await api.getLetterExamplesForLessonApiV1ArabicLessonsQuranLetterExamplesLetterGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **form** | `string` |  | [Optional] [Defaults to `undefined`] |
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


## getLetterFormsApiV1ArabicLessonsLettersLetterFormsGet

> any getLetterFormsApiV1ArabicLessonsLettersLetterFormsGet(letter)

Get Letter Forms

Получить все формы буквы (isolated, initial, medial, final)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterFormsApiV1ArabicLessonsLettersLetterFormsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetLetterFormsApiV1ArabicLessonsLettersLetterFormsGetRequest;

  try {
    const data = await api.getLetterFormsApiV1ArabicLessonsLettersLetterFormsGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getLetterImageApiV1ArabicLessonsMediaImageLetterCategoryFilenameGet

> any getLetterImageApiV1ArabicLessonsMediaImageLetterCategoryFilenameGet(letter, category, filename)

Get Letter Image

Получить PNG изображение буквы  ТРЕБУЕТ АВТОРИЗАЦИИ!  Args:     letter: английское название буквы или арабская буква     category: standalone, in_word, diacritics     filename: имя файла (isolated_naskh.png, initial_kufi.png, ...)  Returns:     FileResponse с PNG изображением

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterImageApiV1ArabicLessonsMediaImageLetterCategoryFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    category: category_example,
    // string
    filename: filename_example,
  } satisfies GetLetterImageApiV1ArabicLessonsMediaImageLetterCategoryFilenameGetRequest;

  try {
    const data = await api.getLetterImageApiV1ArabicLessonsMediaImageLetterCategoryFilenameGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **category** | `string` |  | [Defaults to `undefined`] |
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


## getLetterSvgDeprecatedApiV1ArabicLessonsStorageSvgLetterLetterFormGet

> any getLetterSvgDeprecatedApiV1ArabicLessonsStorageSvgLetterLetterFormGet(letter, form)

Get Letter Svg Deprecated

УСТАРЕЛ! Используйте /media/svg/{letter}/{category}/{filename}  Этот endpoint оставлен для обратной совместимости

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterSvgDeprecatedApiV1ArabicLessonsStorageSvgLetterLetterFormGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    form: form_example,
  } satisfies GetLetterSvgDeprecatedApiV1ArabicLessonsStorageSvgLetterLetterFormGetRequest;

  try {
    const data = await api.getLetterSvgDeprecatedApiV1ArabicLessonsStorageSvgLetterLetterFormGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **form** | `string` |  | [Defaults to `undefined`] |

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


## getLetterSvgFileApiV1ArabicLessonsMediaSvgLetterCategoryFilenameGet

> any getLetterSvgFileApiV1ArabicLessonsMediaSvgLetterCategoryFilenameGet(letter, category, filename)

Get Letter Svg File

Получить SVG изображение буквы  ТРЕБУЕТ АВТОРИЗАЦИИ!  Args:     letter: английское название буквы или арабская буква     category: standalone, in_word, diacritics     filename: имя файла (isolated_naskh.svg, initial_kufi.svg, ...)  Returns:     FileResponse с SVG изображением

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterSvgFileApiV1ArabicLessonsMediaSvgLetterCategoryFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    category: category_example,
    // string
    filename: filename_example,
  } satisfies GetLetterSvgFileApiV1ArabicLessonsMediaSvgLetterCategoryFilenameGetRequest;

  try {
    const data = await api.getLetterSvgFileApiV1ArabicLessonsMediaSvgLetterCategoryFilenameGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **category** | `string` |  | [Defaults to `undefined`] |
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


## getLetterSyllablesApiV1ArabicLessonsLettersLetterSyllablesGet

> any getLetterSyllablesApiV1ArabicLessonsLettersLetterSyllablesGet(letter)

Get Letter Syllables

Получить все слоги для буквы с аудио и изображениями  Args:     letter: Арабская буква  Returns:     Список слогов с URL для аудио и изображений

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterSyllablesApiV1ArabicLessonsLettersLetterSyllablesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetLetterSyllablesApiV1ArabicLessonsLettersLetterSyllablesGetRequest;

  try {
    const data = await api.getLetterSyllablesApiV1ArabicLessonsLettersLetterSyllablesGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getLetterTajweedApiV1ArabicLessonsTajweedLetterGet

> any getLetterTajweedApiV1ArabicLessonsTajweedLetterGet(letter)

Get Letter Tajweed

Получить правила таджвида для буквы  Args:     letter: Арабская буква  Returns:     Правила таджвида (махрадж, сифат, примеры)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterTajweedApiV1ArabicLessonsTajweedLetterGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetLetterTajweedApiV1ArabicLessonsTajweedLetterGetRequest;

  try {
    const data = await api.getLetterTajweedApiV1ArabicLessonsTajweedLetterGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getLetterWordsApiV1ArabicLessonsLettersLetterWordsGet

> any getLetterWordsApiV1ArabicLessonsLettersLetterWordsGet(letter)

Get Letter Words

Получить слова для изучаемой буквы  Args:     letter: Арабская буква (например, \&#39;ش\&#39;, \&#39;ب\&#39;, \&#39;ت\&#39;)  Returns:     Список слов содержащих изучаемую букву

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetLetterWordsApiV1ArabicLessonsLettersLetterWordsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetLetterWordsApiV1ArabicLessonsLettersLetterWordsGetRequest;

  try {
    const data = await api.getLetterWordsApiV1ArabicLessonsLettersLetterWordsGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getRandomAyahWithLetterApiV1ArabicLessonsQuranRandomAyahWithLetterLetterGet

> any getRandomAyahWithLetterApiV1ArabicLessonsQuranRandomAyahWithLetterLetterGet(letter)

Get Random Ayah With Letter

Получить случайный аят из Корана, содержащий указанную букву  Возвращает: - surah_number: номер суры - ayah_number: номер аята - text_arabic: текст аята на арабском - letter_count: количество вхождений буквы - letter_positions: позиции буквы в тексте (индексы символов)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetRandomAyahWithLetterApiV1ArabicLessonsQuranRandomAyahWithLetterLetterGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
  } satisfies GetRandomAyahWithLetterApiV1ArabicLessonsQuranRandomAyahWithLetterLetterGetRequest;

  try {
    const data = await api.getRandomAyahWithLetterApiV1ArabicLessonsQuranRandomAyahWithLetterLetterGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |

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


## getStaticSvgApiV1ArabicLessonsMediaSvgStaticLetterTypeFilenameGet

> any getStaticSvgApiV1ArabicLessonsMediaSvgStaticLetterTypeFilenameGet(letter, type, filename)

Get Static Svg

Получить статический SVG без анимации  Args:     letter: английское название буквы (ba, ta, alif, ...)     type: \&#39;forms\&#39; (isolated, initial, medial, final) или \&#39;syllables\&#39; (syllable_fatha, ...)     filename: имя файла (isolated.svg, syllable_fatha_highlighted.svg, ...)  Returns:     FileResponse с SVG изображением  Примеры:     /media/svg-static/ba/forms/isolated.svg     /media/svg-static/ba/forms/isolated_highlighted.svg     /media/svg-static/ba/syllables/syllable_fatha.svg     /media/svg-static/ta/syllables/syllable_kasra_highlighted.svg

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetStaticSvgApiV1ArabicLessonsMediaSvgStaticLetterTypeFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    type: type_example,
    // string
    filename: filename_example,
  } satisfies GetStaticSvgApiV1ArabicLessonsMediaSvgStaticLetterTypeFilenameGetRequest;

  try {
    const data = await api.getStaticSvgApiV1ArabicLessonsMediaSvgStaticLetterTypeFilenameGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **type** | `string` |  | [Defaults to `undefined`] |
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


## getSyllableAnimationApiV1ArabicLessonsMediaAnimationSyllableLetterSyllableTypeGet

> any getSyllableAnimationApiV1ArabicLessonsMediaAnimationSyllableLetterSyllableTypeGet(letter, syllableType)

Get Syllable Animation

Получить SVG анимацию написания слога (буква + диакритика)  Args:     letter: Английское название буквы (alif, ba, ta, ...)     syllable_type: Тип слога (fatha, kasra, damma, tanween_fatha, ...)  Returns:     SVG файл с анимацией написания слога

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetSyllableAnimationApiV1ArabicLessonsMediaAnimationSyllableLetterSyllableTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    syllableType: syllableType_example,
  } satisfies GetSyllableAnimationApiV1ArabicLessonsMediaAnimationSyllableLetterSyllableTypeGetRequest;

  try {
    const data = await api.getSyllableAnimationApiV1ArabicLessonsMediaAnimationSyllableLetterSyllableTypeGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **syllableType** | `string` |  | [Defaults to `undefined`] |

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


## getSyllableAudioApiV1ArabicLessonsMediaAudioLetterSyllableSyllableTypeMp3Get

> any getSyllableAudioApiV1ArabicLessonsMediaAudioLetterSyllableSyllableTypeMp3Get(letter, syllableType)

Get Syllable Audio

Получить аудио файл для слога  Args:     letter: Английское название буквы (например, \&#39;alif\&#39;, \&#39;ba\&#39;)     syllable_type: Тип слога (например, \&#39;fatha\&#39;, \&#39;kasra\&#39;, \&#39;long_alif\&#39;)  Returns:     Аудио файл .mp3

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetSyllableAudioApiV1ArabicLessonsMediaAudioLetterSyllableSyllableTypeMp3GetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    syllableType: syllableType_example,
  } satisfies GetSyllableAudioApiV1ArabicLessonsMediaAudioLetterSyllableSyllableTypeMp3GetRequest;

  try {
    const data = await api.getSyllableAudioApiV1ArabicLessonsMediaAudioLetterSyllableSyllableTypeMp3Get(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **syllableType** | `string` |  | [Defaults to `undefined`] |

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


## getTermLessonsApiV1ArabicLessonsLessonsTermsTermIdGet

> any getTermLessonsApiV1ArabicLessonsLessonsTermsTermIdGet(termId)

Get Term Lessons

Получить уроки для конкретного термина

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetTermLessonsApiV1ArabicLessonsLessonsTermsTermIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    termId: termId_example,
  } satisfies GetTermLessonsApiV1ArabicLessonsLessonsTermsTermIdGetRequest;

  try {
    const data = await api.getTermLessonsApiV1ArabicLessonsLessonsTermsTermIdGet(body);
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
| **termId** | `string` |  | [Defaults to `undefined`] |

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


## getUserAchievementsApiV1ArabicLessonsUserAchievementsGet

> any getUserAchievementsApiV1ArabicLessonsUserAchievementsGet()

Get User Achievements

Получить достижения пользователя

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetUserAchievementsApiV1ArabicLessonsUserAchievementsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getUserAchievementsApiV1ArabicLessonsUserAchievementsGet();
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


## getUserArabicStatsApiV1ArabicLessonsUserStatsGet

> UserStatsResponse getUserArabicStatsApiV1ArabicLessonsUserStatsGet()

Get User Arabic Stats

Получить статистику пользователя по арабскому языку

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetUserArabicStatsApiV1ArabicLessonsUserStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getUserArabicStatsApiV1ArabicLessonsUserStatsGet();
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

[**UserStatsResponse**](UserStatsResponse.md)

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


## getUserLessonProgressApiV1ArabicLessonsUserProgressGet

> any getUserLessonProgressApiV1ArabicLessonsUserProgressGet()

Get User Lesson Progress

Получить прогресс пользователя по всем урокам

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetUserLessonProgressApiV1ArabicLessonsUserProgressGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getUserLessonProgressApiV1ArabicLessonsUserProgressGet();
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


## getUserProgressApiV1ArabicLessonsUserProgressGet

> any getUserProgressApiV1ArabicLessonsUserProgressGet()

Get User Progress

Получить прогресс пользователя по изучению букв  Returns:     Объект с информацией о прогрессе пользователя

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetUserProgressApiV1ArabicLessonsUserProgressGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.getUserProgressApiV1ArabicLessonsUserProgressGet();
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


## getVerseForLessonApiV1ArabicLessonsQuranVerseSurahAyahGet

> any getVerseForLessonApiV1ArabicLessonsQuranVerseSurahAyahGet(surah, ayah)

Get Verse For Lesson

Получить аят из Корана с полным разбором слов  Args:     surah: Номер суры (1-114)     ayah: Номер аята  Returns:     Данные аята: текст, перевод, список слов с разбором

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetVerseForLessonApiV1ArabicLessonsQuranVerseSurahAyahGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // number
    surah: 56,
    // number
    ayah: 56,
  } satisfies GetVerseForLessonApiV1ArabicLessonsQuranVerseSurahAyahGetRequest;

  try {
    const data = await api.getVerseForLessonApiV1ArabicLessonsQuranVerseSurahAyahGet(body);
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
| **surah** | `number` |  | [Defaults to `undefined`] |
| **ayah** | `number` |  | [Defaults to `undefined`] |

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


## getWordAnimationApiV1ArabicLessonsMediaAnimationWordLetterWordIdGet

> any getWordAnimationApiV1ArabicLessonsMediaAnimationWordLetterWordIdGet(letter, wordId)

Get Word Animation

Получить SVG анимацию написания слова  Args:     letter: Английское название буквы (alif, ba, ta, ...)     word_id: ID слова (word_1, word_2, ...)  Returns:     SVG файл с анимацией написания слова

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetWordAnimationApiV1ArabicLessonsMediaAnimationWordLetterWordIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    wordId: wordId_example,
  } satisfies GetWordAnimationApiV1ArabicLessonsMediaAnimationWordLetterWordIdGetRequest;

  try {
    const data = await api.getWordAnimationApiV1ArabicLessonsMediaAnimationWordLetterWordIdGet(body);
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
| **letter** | `string` |  | [Defaults to `undefined`] |
| **wordId** | `string` |  | [Defaults to `undefined`] |

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


## getWordAnimationApiV1ArabicLessonsMediaAnimationWordWordIdGet

> any getWordAnimationApiV1ArabicLessonsMediaAnimationWordWordIdGet(wordId)

Get Word Animation

Получить SVG анимацию написания слова  Args:     word_id: ID слова (bismillah, allah, alhamd, rahman, rahim, salah, ...)  Returns:     SVG файл с анимацией написания слова

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetWordAnimationApiV1ArabicLessonsMediaAnimationWordWordIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    wordId: wordId_example,
  } satisfies GetWordAnimationApiV1ArabicLessonsMediaAnimationWordWordIdGetRequest;

  try {
    const data = await api.getWordAnimationApiV1ArabicLessonsMediaAnimationWordWordIdGet(body);
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
| **wordId** | `string` |  | [Defaults to `undefined`] |

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


## getWordForLessonApiV1ArabicLessonsQuranWordSurahAyahWordGet

> any getWordForLessonApiV1ArabicLessonsQuranWordSurahAyahWordGet(surah, ayah, word)

Get Word For Lesson

Получить слово из Корана с полной информацией для урока  Args:     surah: Номер суры (1-114)     ayah: Номер аята     word: Позиция слова в аяте  Returns:     Данные слова: текст, транслитерация, перевод, аудио, буквы

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetWordForLessonApiV1ArabicLessonsQuranWordSurahAyahWordGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // number
    surah: 56,
    // number
    ayah: 56,
    // number
    word: 56,
  } satisfies GetWordForLessonApiV1ArabicLessonsQuranWordSurahAyahWordGetRequest;

  try {
    const data = await api.getWordForLessonApiV1ArabicLessonsQuranWordSurahAyahWordGet(body);
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
| **surah** | `number` |  | [Defaults to `undefined`] |
| **ayah** | `number` |  | [Defaults to `undefined`] |
| **word** | `number` |  | [Defaults to `undefined`] |

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


## getWordSvgApiV1ArabicLessonsMediaSvgWordsWordFilenameGet

> any getWordSvgApiV1ArabicLessonsMediaSvgWordsWordFilenameGet(word, filename)

Get Word Svg

Получить статический SVG для коранического слова  Args:     word: название слова (bismillah, allah, alhamd, ...)     filename: имя файла (word.svg, word_highlight_ب.svg, ...)  Returns:     FileResponse с SVG изображением  Примеры:     /media/svg-words/bismillah/bismillah.svg                    ← без выделения     /media/svg-words/bismillah/bismillah_highlight_ب.svg       ← с выделением буквы Ба     /media/svg-words/allah/allah_highlight_ل.svg               ← с выделением буквы Лям

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { GetWordSvgApiV1ArabicLessonsMediaSvgWordsWordFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    word: word_example,
    // string
    filename: filename_example,
  } satisfies GetWordSvgApiV1ArabicLessonsMediaSvgWordsWordFilenameGetRequest;

  try {
    const data = await api.getWordSvgApiV1ArabicLessonsMediaSvgWordsWordFilenameGet(body);
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
| **word** | `string` |  | [Defaults to `undefined`] |
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


## healthCheckApiV1ArabicLessonsHealthGet

> any healthCheckApiV1ArabicLessonsHealthGet()

Health Check

Проверка здоровья API уроков арабского

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { HealthCheckApiV1ArabicLessonsHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.healthCheckApiV1ArabicLessonsHealthGet();
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


## markAllahNameLearnedApiV1ArabicLessonsAllahNameNameIdMarkLearnedPost

> any markAllahNameLearnedApiV1ArabicLessonsAllahNameNameIdMarkLearnedPost(nameId)

Mark Allah Name Learned

Отметить имя Аллаха как изученное

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { MarkAllahNameLearnedApiV1ArabicLessonsAllahNameNameIdMarkLearnedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    nameId: nameId_example,
  } satisfies MarkAllahNameLearnedApiV1ArabicLessonsAllahNameNameIdMarkLearnedPostRequest;

  try {
    const data = await api.markAllahNameLearnedApiV1ArabicLessonsAllahNameNameIdMarkLearnedPost(body);
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
| **nameId** | `string` |  | [Defaults to `undefined`] |

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


## saveLessonProgressApiV1ArabicLessonsLessonsLessonIdProgressPost

> any saveLessonProgressApiV1ArabicLessonsLessonsLessonIdProgressPost(lessonId, requestBody)

Save Lesson Progress

Сохранить прогресс прохождения урока

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { SaveLessonProgressApiV1ArabicLessonsLessonsLessonIdProgressPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    lessonId: lessonId_example,
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies SaveLessonProgressApiV1ArabicLessonsLessonsLessonIdProgressPostRequest;

  try {
    const data = await api.saveLessonProgressApiV1ArabicLessonsLessonsLessonIdProgressPost(body);
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


## saveLessonProgressApiV1ArabicLessonsProgressPost

> LessonProgressResponse saveLessonProgressApiV1ArabicLessonsProgressPost(lessonProgressRequest)

Save Lesson Progress

Сохранить прогресс урока

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { SaveLessonProgressApiV1ArabicLessonsProgressPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // LessonProgressRequest
    lessonProgressRequest: ...,
  } satisfies SaveLessonProgressApiV1ArabicLessonsProgressPostRequest;

  try {
    const data = await api.saveLessonProgressApiV1ArabicLessonsProgressPost(body);
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
| **lessonProgressRequest** | [LessonProgressRequest](LessonProgressRequest.md) |  | |

### Return type

[**LessonProgressResponse**](LessonProgressResponse.md)

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


## saveUserProgressApiV1ArabicLessonsUserProgressPost

> any saveUserProgressApiV1ArabicLessonsUserProgressPost(requestBody)

Save User Progress

Сохранить прогресс пользователя по изучению букв  Args:     progress_data: Данные о прогрессе (completed_letters, current_letter, last_completed)  Returns:     Подтверждение сохранения

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { SaveUserProgressApiV1ArabicLessonsUserProgressPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // { [key: string]: any; }
    requestBody: Object,
  } satisfies SaveUserProgressApiV1ArabicLessonsUserProgressPostRequest;

  try {
    const data = await api.saveUserProgressApiV1ArabicLessonsUserProgressPost(body);
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


## searchCorpusApiV1ArabicLessonsCorpusSearchGet

> any searchCorpusApiV1ArabicLessonsCorpusSearchGet(query, letter, limit)

Search Corpus

Поиск в корпусе Корана (через Elasticsearch)

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { SearchCorpusApiV1ArabicLessonsCorpusSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    query: query_example,
    // string (optional)
    letter: letter_example,
    // number (optional)
    limit: 56,
  } satisfies SearchCorpusApiV1ArabicLessonsCorpusSearchGetRequest;

  try {
    const data = await api.searchCorpusApiV1ArabicLessonsCorpusSearchGet(body);
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
| **query** | `string` |  | [Defaults to `undefined`] |
| **letter** | `string` |  | [Optional] [Defaults to `undefined`] |
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


## startLearningSessionApiV1ArabicLessonsSessionStartPost

> any startLearningSessionApiV1ArabicLessonsSessionStartPost()

Start Learning Session

Начать новую сессию обучения

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { StartLearningSessionApiV1ArabicLessonsSessionStartPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  try {
    const data = await api.startLearningSessionApiV1ArabicLessonsSessionStartPost();
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


## synthesizePronunciationApiV1ArabicLessonsPronunciationSynthesizePost

> any synthesizePronunciationApiV1ArabicLessonsPronunciationSynthesizePost(text, voice)

Synthesize Pronunciation

Синтез речи через Google Cloud TTS

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { SynthesizePronunciationApiV1ArabicLessonsPronunciationSynthesizePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    text: text_example,
    // string (optional)
    voice: voice_example,
  } satisfies SynthesizePronunciationApiV1ArabicLessonsPronunciationSynthesizePostRequest;

  try {
    const data = await api.synthesizePronunciationApiV1ArabicLessonsPronunciationSynthesizePost(body);
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
| **voice** | `string` |  | [Optional] [Defaults to `&#39;ar-XA-Wavenet-A&#39;`] |

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


## uploadUserRecordingApiV1ArabicLessonsStorageRecordingUploadPost

> any uploadUserRecordingApiV1ArabicLessonsStorageRecordingUploadPost(lessonId, stepId)

Upload User Recording

Загрузить аудио запись пользователя

### Example

```ts
import {
  Configuration,
  ArabicLessonsApi,
} from '';
import type { UploadUserRecordingApiV1ArabicLessonsStorageRecordingUploadPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ArabicLessonsApi(config);

  const body = {
    // string
    lessonId: lessonId_example,
    // string
    stepId: stepId_example,
  } satisfies UploadUserRecordingApiV1ArabicLessonsStorageRecordingUploadPostRequest;

  try {
    const data = await api.uploadUserRecordingApiV1ArabicLessonsStorageRecordingUploadPost(body);
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

