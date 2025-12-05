# UsersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserApiV1UsersAdminUsersPost**](UsersApi.md#createuserapiv1usersadminuserspost) | **POST** /api/v1/users/admin/users | Create User |
| [**deleteUserApiV1UsersAdminUsersUserIdDelete**](UsersApi.md#deleteuserapiv1usersadminusersuseriddelete) | **DELETE** /api/v1/users/admin/users/{user_id} | Delete User |
| [**getAllUsersApiV1UsersAdminUsersGet**](UsersApi.md#getallusersapiv1usersadminusersget) | **GET** /api/v1/users/admin/users | Get All Users |
| [**getCurrentUserApiV1UsersMeGet**](UsersApi.md#getcurrentuserapiv1usersmeget) | **GET** /api/v1/users/me | Get Current User |
| [**updateCurrentUserApiV1UsersMePatch**](UsersApi.md#updatecurrentuserapiv1usersmepatch) | **PATCH** /api/v1/users/me | Update Current User |
| [**updateUserApiV1UsersAdminUsersUserIdPut**](UsersApi.md#updateuserapiv1usersadminusersuseridput) | **PUT** /api/v1/users/admin/users/{user_id} | Update User |



## createUserApiV1UsersAdminUsersPost

> AdminUser createUserApiV1UsersAdminUsersPost(adminUserCreate)

Create User

Create new user for admin panel

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { CreateUserApiV1UsersAdminUsersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // AdminUserCreate
    adminUserCreate: ...,
  } satisfies CreateUserApiV1UsersAdminUsersPostRequest;

  try {
    const data = await api.createUserApiV1UsersAdminUsersPost(body);
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
| **adminUserCreate** | [AdminUserCreate](AdminUserCreate.md) |  | |

### Return type

[**AdminUser**](AdminUser.md)

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


## deleteUserApiV1UsersAdminUsersUserIdDelete

> any deleteUserApiV1UsersAdminUsersUserIdDelete(userId)

Delete User

Delete user for admin panel

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { DeleteUserApiV1UsersAdminUsersUserIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User UUID
    userId: userId_example,
  } satisfies DeleteUserApiV1UsersAdminUsersUserIdDeleteRequest;

  try {
    const data = await api.deleteUserApiV1UsersAdminUsersUserIdDelete(body);
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
| **userId** | `string` | User UUID | [Defaults to `undefined`] |

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


## getAllUsersApiV1UsersAdminUsersGet

> Array&lt;AdminUser&gt; getAllUsersApiV1UsersAdminUsersGet()

Get All Users

Get all users for admin panel

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { GetAllUsersApiV1UsersAdminUsersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.getAllUsersApiV1UsersAdminUsersGet();
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

[**Array&lt;AdminUser&gt;**](AdminUser.md)

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


## getCurrentUserApiV1UsersMeGet

> any getCurrentUserApiV1UsersMeGet()

Get Current User

Get current user profile

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { GetCurrentUserApiV1UsersMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.getCurrentUserApiV1UsersMeGet();
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


## updateCurrentUserApiV1UsersMePatch

> any updateCurrentUserApiV1UsersMePatch(userUpdate)

Update Current User

Update current user profile

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UpdateCurrentUserApiV1UsersMePatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // UserUpdate
    userUpdate: ...,
  } satisfies UpdateCurrentUserApiV1UsersMePatchRequest;

  try {
    const data = await api.updateCurrentUserApiV1UsersMePatch(body);
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
| **userUpdate** | [UserUpdate](UserUpdate.md) |  | |

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


## updateUserApiV1UsersAdminUsersUserIdPut

> AdminUser updateUserApiV1UsersAdminUsersUserIdPut(userId, adminUserUpdate)

Update User

Update user for admin panel

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UpdateUserApiV1UsersAdminUsersUserIdPutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User UUID
    userId: userId_example,
    // AdminUserUpdate
    adminUserUpdate: ...,
  } satisfies UpdateUserApiV1UsersAdminUsersUserIdPutRequest;

  try {
    const data = await api.updateUserApiV1UsersAdminUsersUserIdPut(body);
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
| **userId** | `string` | User UUID | [Defaults to `undefined`] |
| **adminUserUpdate** | [AdminUserUpdate](AdminUserUpdate.md) |  | |

### Return type

[**AdminUser**](AdminUser.md)

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

