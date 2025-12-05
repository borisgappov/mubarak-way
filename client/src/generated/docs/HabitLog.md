
# HabitLog

Habit log model

## Properties

Name | Type
------------ | -------------
`id` | string
`habitId` | string
`userId` | string
`dateLocal` | string
`notes` | string
`createdAt` | string

## Example

```typescript
import type { HabitLog } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "habitId": null,
  "userId": null,
  "dateLocal": null,
  "notes": null,
  "createdAt": null,
} satisfies HabitLog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HabitLog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


