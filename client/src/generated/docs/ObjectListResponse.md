
# ObjectListResponse

Response for object list.

## Properties

Name | Type
------------ | -------------
`bucket` | string
`prefix` | string
`objects` | [Array&lt;ObjectInfo&gt;](ObjectInfo.md)
`count` | number

## Example

```typescript
import type { ObjectListResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "bucket": null,
  "prefix": null,
  "objects": null,
  "count": null,
} satisfies ObjectListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ObjectListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


