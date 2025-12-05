
# Habit

Habit model

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`title` | string
`description` | string
`frequency` | string
`category` | string
`isActive` | boolean
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { Habit } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "title": null,
  "description": null,
  "frequency": null,
  "category": null,
  "isActive": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Habit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Habit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


