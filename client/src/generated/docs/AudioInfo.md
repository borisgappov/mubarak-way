
# AudioInfo


## Properties

Name | Type
------------ | -------------
`storagePath` | string
`filename` | string
`reciterName` | string
`mimeType` | string
`durationSeconds` | number
`sizeBytes` | number

## Example

```typescript
import type { AudioInfo } from ''

// TODO: Update the object below with actual values
const example = {
  "storagePath": null,
  "filename": null,
  "reciterName": null,
  "mimeType": null,
  "durationSeconds": null,
  "sizeBytes": null,
} satisfies AudioInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


