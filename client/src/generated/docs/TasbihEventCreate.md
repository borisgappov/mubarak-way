
# TasbihEventCreate

Create tasbih event request

## Properties

Name | Type
------------ | -------------
`sessionId` | string
`eventType` | string
`delta` | number
`valueAfter` | number
`atTs` | string
`tz` | string

## Example

```typescript
import type { TasbihEventCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "sessionId": null,
  "eventType": null,
  "delta": null,
  "valueAfter": null,
  "atTs": null,
  "tz": null,
} satisfies TasbihEventCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TasbihEventCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


