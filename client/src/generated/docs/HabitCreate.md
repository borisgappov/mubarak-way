
# HabitCreate

Create habit request

## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`frequency` | string
`category` | string

## Example

```typescript
import type { HabitCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "frequency": null,
  "category": null,
} satisfies HabitCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HabitCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


