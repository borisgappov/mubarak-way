
# AzkarSession

Azkar session model

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`segmentId` | string
`startedAt` | string
`completed` | number

## Example

```typescript
import type { AzkarSession } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "segmentId": null,
  "startedAt": null,
  "completed": null,
} satisfies AzkarSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AzkarSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


