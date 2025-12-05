# StorageApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteObjectApiV1StorageBucketPathDelete**](StorageApi.md#deleteobjectapiv1storagebucketpathdelete) | **DELETE** /api/v1/storage/{bucket}/{path} | Delete Object |
| [**deleteObjectApiV1StorageBucketPathDelete_0**](StorageApi.md#deleteobjectapiv1storagebucketpathdelete_0) | **DELETE** /api/v1/storage/{bucket}/{path} | Delete Object |
| [**downloadFileApiV1StorageDownloadBucketPathGet**](StorageApi.md#downloadfileapiv1storagedownloadbucketpathget) | **GET** /api/v1/storage/download/{bucket}/{path} | Download File |
| [**downloadFileApiV1StorageDownloadBucketPathGet_0**](StorageApi.md#downloadfileapiv1storagedownloadbucketpathget_0) | **GET** /api/v1/storage/download/{bucket}/{path} | Download File |
| [**getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet**](StorageApi.md#getarabicaudioapiv1storagearabiclessonsaudioletterformget) | **GET** /api/v1/storage/arabic-lessons/audio/{letter}/{form} | Get Arabic Audio |
| [**getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet_0**](StorageApi.md#getarabicaudioapiv1storagearabiclessonsaudioletterformget_0) | **GET** /api/v1/storage/arabic-lessons/audio/{letter}/{form} | Get Arabic Audio |
| [**getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet**](StorageApi.md#getarabicimageapiv1storagearabiclessonsimagelettercategoryfilenameget) | **GET** /api/v1/storage/arabic-lessons/image/{letter}/{category}/{filename} | Get Arabic Image |
| [**getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet_0**](StorageApi.md#getarabicimageapiv1storagearabiclessonsimagelettercategoryfilenameget_0) | **GET** /api/v1/storage/arabic-lessons/image/{letter}/{category}/{filename} | Get Arabic Image |
| [**getObjectInfoApiV1StorageInfoBucketPathGet**](StorageApi.md#getobjectinfoapiv1storageinfobucketpathget) | **GET** /api/v1/storage/info/{bucket}/{path} | Get Object Info |
| [**getObjectInfoApiV1StorageInfoBucketPathGet_0**](StorageApi.md#getobjectinfoapiv1storageinfobucketpathget_0) | **GET** /api/v1/storage/info/{bucket}/{path} | Get Object Info |
| [**getPresignedUrlApiV1StorageUrlBucketPathGet**](StorageApi.md#getpresignedurlapiv1storageurlbucketpathget) | **GET** /api/v1/storage/url/{bucket}/{path} | Get Presigned Url |
| [**getPresignedUrlApiV1StorageUrlBucketPathGet_0**](StorageApi.md#getpresignedurlapiv1storageurlbucketpathget_0) | **GET** /api/v1/storage/url/{bucket}/{path} | Get Presigned Url |
| [**getUserRecordingsApiV1StorageArabicLessonsRecordingsGet**](StorageApi.md#getuserrecordingsapiv1storagearabiclessonsrecordingsget) | **GET** /api/v1/storage/arabic-lessons/recordings | Get User Recordings |
| [**getUserRecordingsApiV1StorageArabicLessonsRecordingsGet_0**](StorageApi.md#getuserrecordingsapiv1storagearabiclessonsrecordingsget_0) | **GET** /api/v1/storage/arabic-lessons/recordings | Get User Recordings |
| [**listObjectsApiV1StorageListBucketGet**](StorageApi.md#listobjectsapiv1storagelistbucketget) | **GET** /api/v1/storage/list/{bucket} | List Objects |
| [**listObjectsApiV1StorageListBucketGet_0**](StorageApi.md#listobjectsapiv1storagelistbucketget_0) | **GET** /api/v1/storage/list/{bucket} | List Objects |
| [**storageHealthApiV1StorageHealthGet**](StorageApi.md#storagehealthapiv1storagehealthget) | **GET** /api/v1/storage/health | Storage Health |
| [**storageHealthApiV1StorageHealthGet_0**](StorageApi.md#storagehealthapiv1storagehealthget_0) | **GET** /api/v1/storage/health | Storage Health |
| [**uploadFileApiV1StorageUploadPost**](StorageApi.md#uploadfileapiv1storageuploadpost) | **POST** /api/v1/storage/upload | Upload File |
| [**uploadFileApiV1StorageUploadPost_0**](StorageApi.md#uploadfileapiv1storageuploadpost_0) | **POST** /api/v1/storage/upload | Upload File |
| [**uploadRecordingApiV1StorageArabicLessonsRecordingPost**](StorageApi.md#uploadrecordingapiv1storagearabiclessonsrecordingpost) | **POST** /api/v1/storage/arabic-lessons/recording | Upload Recording |
| [**uploadRecordingApiV1StorageArabicLessonsRecordingPost_0**](StorageApi.md#uploadrecordingapiv1storagearabiclessonsrecordingpost_0) | **POST** /api/v1/storage/arabic-lessons/recording | Upload Recording |



## deleteObjectApiV1StorageBucketPathDelete

> DeleteResponse deleteObjectApiV1StorageBucketPathDelete(bucket, path)

Delete Object

Delete an object from storage.  - **bucket**: Bucket name - **path**: Object path  For user-recordings, only the owner can delete.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { DeleteObjectApiV1StorageBucketPathDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
  } satisfies DeleteObjectApiV1StorageBucketPathDeleteRequest;

  try {
    const data = await api.deleteObjectApiV1StorageBucketPathDelete(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteResponse**](DeleteResponse.md)

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


## deleteObjectApiV1StorageBucketPathDelete_0

> DeleteResponse deleteObjectApiV1StorageBucketPathDelete_0(bucket, path)

Delete Object

Delete an object from storage.  - **bucket**: Bucket name - **path**: Object path  For user-recordings, only the owner can delete.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { DeleteObjectApiV1StorageBucketPathDelete0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
  } satisfies DeleteObjectApiV1StorageBucketPathDelete0Request;

  try {
    const data = await api.deleteObjectApiV1StorageBucketPathDelete_0(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |

### Return type

[**DeleteResponse**](DeleteResponse.md)

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


## downloadFileApiV1StorageDownloadBucketPathGet

> any downloadFileApiV1StorageDownloadBucketPathGet(bucket, path)

Download File

Download a file from storage.  Returns file content as binary stream.  - **bucket**: Source bucket - **path**: Object path in bucket

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { DownloadFileApiV1StorageDownloadBucketPathGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
  } satisfies DownloadFileApiV1StorageDownloadBucketPathGetRequest;

  try {
    const data = await api.downloadFileApiV1StorageDownloadBucketPathGet(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |

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


## downloadFileApiV1StorageDownloadBucketPathGet_0

> any downloadFileApiV1StorageDownloadBucketPathGet_0(bucket, path)

Download File

Download a file from storage.  Returns file content as binary stream.  - **bucket**: Source bucket - **path**: Object path in bucket

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { DownloadFileApiV1StorageDownloadBucketPathGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
  } satisfies DownloadFileApiV1StorageDownloadBucketPathGet0Request;

  try {
    const data = await api.downloadFileApiV1StorageDownloadBucketPathGet_0(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |

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


## getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet

> any getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet(letter, form, expires)

Get Arabic Audio

Get Arabic letter audio URL.  - **letter**: Letter name (alif, ba, ta, ...) - **form**: Form (isolated, initial, medial, final, name, sound, pronunciation) - **expires**: URL expiration in seconds

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetArabicAudioApiV1StorageArabicLessonsAudioLetterFormGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    form: form_example,
    // number (optional)
    expires: 56,
  } satisfies GetArabicAudioApiV1StorageArabicLessonsAudioLetterFormGetRequest;

  try {
    const data = await api.getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet(body);
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
| **expires** | `number` |  | [Optional] [Defaults to `3600`] |

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


## getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet_0

> any getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet_0(letter, form, expires)

Get Arabic Audio

Get Arabic letter audio URL.  - **letter**: Letter name (alif, ba, ta, ...) - **form**: Form (isolated, initial, medial, final, name, sound, pronunciation) - **expires**: URL expiration in seconds

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    form: form_example,
    // number (optional)
    expires: 56,
  } satisfies GetArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet0Request;

  try {
    const data = await api.getArabicAudioApiV1StorageArabicLessonsAudioLetterFormGet_0(body);
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
| **expires** | `number` |  | [Optional] [Defaults to `3600`] |

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


## getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet

> any getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet(letter, category, filename, expires)

Get Arabic Image

Get Arabic letter image URL.  - **letter**: Letter name - **category**: Category (standalone, in_word, diacritics) - **filename**: Image filename - **expires**: URL expiration in seconds

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    category: category_example,
    // string
    filename: filename_example,
    // number (optional)
    expires: 56,
  } satisfies GetArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGetRequest;

  try {
    const data = await api.getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet(body);
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
| **expires** | `number` |  | [Optional] [Defaults to `3600`] |

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


## getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet_0

> any getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet_0(letter, category, filename, expires)

Get Arabic Image

Get Arabic letter image URL.  - **letter**: Letter name - **category**: Category (standalone, in_word, diacritics) - **filename**: Image filename - **expires**: URL expiration in seconds

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    letter: letter_example,
    // string
    category: category_example,
    // string
    filename: filename_example,
    // number (optional)
    expires: 56,
  } satisfies GetArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet0Request;

  try {
    const data = await api.getArabicImageApiV1StorageArabicLessonsImageLetterCategoryFilenameGet_0(body);
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
| **expires** | `number` |  | [Optional] [Defaults to `3600`] |

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


## getObjectInfoApiV1StorageInfoBucketPathGet

> ObjectInfo getObjectInfoApiV1StorageInfoBucketPathGet(bucket, path)

Get Object Info

Get object metadata.  - **bucket**: Bucket name - **path**: Object path  Returns object size, content type, and other metadata.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetObjectInfoApiV1StorageInfoBucketPathGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
  } satisfies GetObjectInfoApiV1StorageInfoBucketPathGetRequest;

  try {
    const data = await api.getObjectInfoApiV1StorageInfoBucketPathGet(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ObjectInfo**](ObjectInfo.md)

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


## getObjectInfoApiV1StorageInfoBucketPathGet_0

> ObjectInfo getObjectInfoApiV1StorageInfoBucketPathGet_0(bucket, path)

Get Object Info

Get object metadata.  - **bucket**: Bucket name - **path**: Object path  Returns object size, content type, and other metadata.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetObjectInfoApiV1StorageInfoBucketPathGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
  } satisfies GetObjectInfoApiV1StorageInfoBucketPathGet0Request;

  try {
    const data = await api.getObjectInfoApiV1StorageInfoBucketPathGet_0(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ObjectInfo**](ObjectInfo.md)

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


## getPresignedUrlApiV1StorageUrlBucketPathGet

> PresignedUrlResponse getPresignedUrlApiV1StorageUrlBucketPathGet(bucket, path, expires)

Get Presigned Url

Get presigned URL for file access.  Returns a temporary URL valid for the specified duration.  - **bucket**: Bucket name - **path**: Object path - **expires**: URL expiration in seconds (60-86400)

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetPresignedUrlApiV1StorageUrlBucketPathGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
    // number | Expiration in seconds (optional)
    expires: 56,
  } satisfies GetPresignedUrlApiV1StorageUrlBucketPathGetRequest;

  try {
    const data = await api.getPresignedUrlApiV1StorageUrlBucketPathGet(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |
| **expires** | `number` | Expiration in seconds | [Optional] [Defaults to `3600`] |

### Return type

[**PresignedUrlResponse**](PresignedUrlResponse.md)

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


## getPresignedUrlApiV1StorageUrlBucketPathGet_0

> PresignedUrlResponse getPresignedUrlApiV1StorageUrlBucketPathGet_0(bucket, path, expires)

Get Presigned Url

Get presigned URL for file access.  Returns a temporary URL valid for the specified duration.  - **bucket**: Bucket name - **path**: Object path - **expires**: URL expiration in seconds (60-86400)

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetPresignedUrlApiV1StorageUrlBucketPathGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string
    path: path_example,
    // number | Expiration in seconds (optional)
    expires: 56,
  } satisfies GetPresignedUrlApiV1StorageUrlBucketPathGet0Request;

  try {
    const data = await api.getPresignedUrlApiV1StorageUrlBucketPathGet_0(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **path** | `string` |  | [Defaults to `undefined`] |
| **expires** | `number` | Expiration in seconds | [Optional] [Defaults to `3600`] |

### Return type

[**PresignedUrlResponse**](PresignedUrlResponse.md)

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


## getUserRecordingsApiV1StorageArabicLessonsRecordingsGet

> any getUserRecordingsApiV1StorageArabicLessonsRecordingsGet(lessonId, limit)

Get User Recordings

Get user\&#39;s recordings.  - **lesson_id**: Optional lesson filter - **limit**: Maximum recordings to return  Returns list of recordings with presigned URLs.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetUserRecordingsApiV1StorageArabicLessonsRecordingsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Filter by lesson (optional)
    lessonId: lessonId_example,
    // number (optional)
    limit: 56,
  } satisfies GetUserRecordingsApiV1StorageArabicLessonsRecordingsGetRequest;

  try {
    const data = await api.getUserRecordingsApiV1StorageArabicLessonsRecordingsGet(body);
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
| **lessonId** | `string` | Filter by lesson | [Optional] [Defaults to `undefined`] |
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


## getUserRecordingsApiV1StorageArabicLessonsRecordingsGet_0

> any getUserRecordingsApiV1StorageArabicLessonsRecordingsGet_0(lessonId, limit)

Get User Recordings

Get user\&#39;s recordings.  - **lesson_id**: Optional lesson filter - **limit**: Maximum recordings to return  Returns list of recordings with presigned URLs.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { GetUserRecordingsApiV1StorageArabicLessonsRecordingsGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Filter by lesson (optional)
    lessonId: lessonId_example,
    // number (optional)
    limit: 56,
  } satisfies GetUserRecordingsApiV1StorageArabicLessonsRecordingsGet0Request;

  try {
    const data = await api.getUserRecordingsApiV1StorageArabicLessonsRecordingsGet_0(body);
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
| **lessonId** | `string` | Filter by lesson | [Optional] [Defaults to `undefined`] |
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


## listObjectsApiV1StorageListBucketGet

> ObjectListResponse listObjectsApiV1StorageListBucketGet(bucket, prefix, limit)

List Objects

List objects in a bucket.  - **bucket**: Bucket name - **prefix**: Filter objects by prefix - **limit**: Maximum number of objects to return

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { ListObjectsApiV1StorageListBucketGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string | Filter by prefix (optional)
    prefix: prefix_example,
    // number | Max objects to return (optional)
    limit: 56,
  } satisfies ListObjectsApiV1StorageListBucketGetRequest;

  try {
    const data = await api.listObjectsApiV1StorageListBucketGet(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **prefix** | `string` | Filter by prefix | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max objects to return | [Optional] [Defaults to `100`] |

### Return type

[**ObjectListResponse**](ObjectListResponse.md)

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


## listObjectsApiV1StorageListBucketGet_0

> ObjectListResponse listObjectsApiV1StorageListBucketGet_0(bucket, prefix, limit)

List Objects

List objects in a bucket.  - **bucket**: Bucket name - **prefix**: Filter objects by prefix - **limit**: Maximum number of objects to return

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { ListObjectsApiV1StorageListBucketGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string
    bucket: bucket_example,
    // string | Filter by prefix (optional)
    prefix: prefix_example,
    // number | Max objects to return (optional)
    limit: 56,
  } satisfies ListObjectsApiV1StorageListBucketGet0Request;

  try {
    const data = await api.listObjectsApiV1StorageListBucketGet_0(body);
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
| **bucket** | `string` |  | [Defaults to `undefined`] |
| **prefix** | `string` | Filter by prefix | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Max objects to return | [Optional] [Defaults to `100`] |

### Return type

[**ObjectListResponse**](ObjectListResponse.md)

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


## storageHealthApiV1StorageHealthGet

> HealthResponse storageHealthApiV1StorageHealthGet()

Storage Health

Check storage service health.  Returns MinIO connection status and bucket count.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageHealthApiV1StorageHealthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  try {
    const data = await api.storageHealthApiV1StorageHealthGet();
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

[**HealthResponse**](HealthResponse.md)

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


## storageHealthApiV1StorageHealthGet_0

> HealthResponse storageHealthApiV1StorageHealthGet_0()

Storage Health

Check storage service health.  Returns MinIO connection status and bucket count.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { StorageHealthApiV1StorageHealthGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  try {
    const data = await api.storageHealthApiV1StorageHealthGet_0();
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

[**HealthResponse**](HealthResponse.md)

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


## uploadFileApiV1StorageUploadPost

> UploadResponse uploadFileApiV1StorageUploadPost(bucket, file, path)

Upload File

Upload a file to storage.  - **file**: File to upload (multipart/form-data) - **bucket**: Target bucket (arabic-lessons-audio, arabic-lessons-images, user-recordings) - **path**: Optional path prefix  Requires authentication.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { UploadFileApiV1StorageUploadPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Target bucket name
    bucket: bucket_example,
    // Blob
    file: BINARY_DATA_HERE,
    // string | Path prefix in bucket (optional)
    path: path_example,
  } satisfies UploadFileApiV1StorageUploadPostRequest;

  try {
    const data = await api.uploadFileApiV1StorageUploadPost(body);
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
| **bucket** | `string` | Target bucket name | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **path** | `string` | Path prefix in bucket | [Optional] [Defaults to `undefined`] |

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadFileApiV1StorageUploadPost_0

> UploadResponse uploadFileApiV1StorageUploadPost_0(bucket, file, path)

Upload File

Upload a file to storage.  - **file**: File to upload (multipart/form-data) - **bucket**: Target bucket (arabic-lessons-audio, arabic-lessons-images, user-recordings) - **path**: Optional path prefix  Requires authentication.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { UploadFileApiV1StorageUploadPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Target bucket name
    bucket: bucket_example,
    // Blob
    file: BINARY_DATA_HERE,
    // string | Path prefix in bucket (optional)
    path: path_example,
  } satisfies UploadFileApiV1StorageUploadPost0Request;

  try {
    const data = await api.uploadFileApiV1StorageUploadPost_0(body);
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
| **bucket** | `string` | Target bucket name | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **path** | `string` | Path prefix in bucket | [Optional] [Defaults to `undefined`] |

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadRecordingApiV1StorageArabicLessonsRecordingPost

> any uploadRecordingApiV1StorageArabicLessonsRecordingPost(lessonId, file)

Upload Recording

Upload user pronunciation recording.  - **file**: Audio file (webm, mp3, wav) - **lesson_id**: Lesson identifier  Requires authentication. Recording is saved to user\&#39;s folder.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { UploadRecordingApiV1StorageArabicLessonsRecordingPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Lesson ID
    lessonId: lessonId_example,
    // Blob
    file: BINARY_DATA_HERE,
  } satisfies UploadRecordingApiV1StorageArabicLessonsRecordingPostRequest;

  try {
    const data = await api.uploadRecordingApiV1StorageArabicLessonsRecordingPost(body);
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
| **lessonId** | `string` | Lesson ID | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## uploadRecordingApiV1StorageArabicLessonsRecordingPost_0

> any uploadRecordingApiV1StorageArabicLessonsRecordingPost_0(lessonId, file)

Upload Recording

Upload user pronunciation recording.  - **file**: Audio file (webm, mp3, wav) - **lesson_id**: Lesson identifier  Requires authentication. Recording is saved to user\&#39;s folder.

### Example

```ts
import {
  Configuration,
  StorageApi,
} from '';
import type { UploadRecordingApiV1StorageArabicLessonsRecordingPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StorageApi(config);

  const body = {
    // string | Lesson ID
    lessonId: lessonId_example,
    // Blob
    file: BINARY_DATA_HERE,
  } satisfies UploadRecordingApiV1StorageArabicLessonsRecordingPost0Request;

  try {
    const data = await api.uploadRecordingApiV1StorageArabicLessonsRecordingPost_0(body);
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
| **lessonId** | `string` | Lesson ID | [Defaults to `undefined`] |
| **file** | `Blob` |  | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

