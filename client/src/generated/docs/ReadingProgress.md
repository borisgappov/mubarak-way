
# ReadingProgress

Reading progress model

## Properties

Name | Type
------------ | -------------
`userId` | string
`bookId` | string
`lastPosition` | number
`percent` | number
`updatedAt` | string

## Example

```typescript
import type { ReadingProgress } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "bookId": null,
  "lastPosition": null,
  "percent": null,
  "updatedAt": null,
} satisfies ReadingProgress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReadingProgress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


