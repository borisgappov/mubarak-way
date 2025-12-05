
# TasbihSession

Tasbih session model

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`itemId` | string
`goalId` | string
`valueStart` | number
`valueCurrent` | number
`startedAt` | string
`endedAt` | string

## Example

```typescript
import type { TasbihSession } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "itemId": null,
  "goalId": null,
  "valueStart": null,
  "valueCurrent": null,
  "startedAt": null,
  "endedAt": null,
} satisfies TasbihSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TasbihSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


