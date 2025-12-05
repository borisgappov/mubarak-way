
# TasbihState

Tasbih state model

## Properties

Name | Type
------------ | -------------
`activeSession` | [TasbihSession](TasbihSession.md)
`todayProgress` | number
`streak` | number

## Example

```typescript
import type { TasbihState } from ''

// TODO: Update the object below with actual values
const example = {
  "activeSession": null,
  "todayProgress": null,
  "streak": null,
} satisfies TasbihState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TasbihState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


