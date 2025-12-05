
# TasbihEvent

Tasbih event model

## Properties

Name | Type
------------ | -------------
`id` | string
`sessionId` | string
`eventType` | string
`delta` | number
`valueAfter` | number
`atTs` | string
`tz` | string
`offlineId` | string

## Example

```typescript
import type { TasbihEvent } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "sessionId": null,
  "eventType": null,
  "delta": null,
  "valueAfter": null,
  "atTs": null,
  "tz": null,
  "offlineId": null,
} satisfies TasbihEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TasbihEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


