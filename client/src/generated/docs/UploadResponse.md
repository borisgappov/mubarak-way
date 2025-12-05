
# UploadResponse

Response for file upload.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`bucket` | string
`objectName` | string
`size` | number
`contentType` | string
`etag` | string
`url` | string

## Example

```typescript
import type { UploadResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "bucket": null,
  "objectName": null,
  "size": null,
  "contentType": null,
  "etag": null,
  "url": null,
} satisfies UploadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UploadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


