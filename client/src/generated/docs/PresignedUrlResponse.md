
# PresignedUrlResponse

Response with presigned URL.

## Properties

Name | Type
------------ | -------------
`url` | string
`expiresIn` | number
`bucket` | string
`objectName` | string

## Example

```typescript
import type { PresignedUrlResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "expiresIn": null,
  "bucket": null,
  "objectName": null,
} satisfies PresignedUrlResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PresignedUrlResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


