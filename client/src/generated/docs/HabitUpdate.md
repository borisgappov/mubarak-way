
# HabitUpdate

Update habit request

## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`frequency` | string
`category` | string
`isActive` | boolean

## Example

```typescript
import type { HabitUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "frequency": null,
  "category": null,
  "isActive": null,
} satisfies HabitUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HabitUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


