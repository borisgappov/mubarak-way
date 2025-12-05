
# ObjectInfo

Object metadata.

## Properties

Name | Type
------------ | -------------
`name` | string
`size` | number
`lastModified` | string
`etag` | string
`contentType` | string
`isDir` | boolean
`url` | string

## Example

```typescript
import type { ObjectInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "size": null,
  "lastModified": null,
  "etag": null,
  "contentType": null,
  "isDir": null,
  "url": null,
} satisfies ObjectInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ObjectInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


