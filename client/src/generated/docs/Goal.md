
# Goal

Goal model

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`itemId` | string
`goalType` | string
`targetCount` | number
`period` | string
`status` | string
`progress` | number
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { Goal } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "itemId": null,
  "goalType": null,
  "targetCount": null,
  "period": null,
  "status": null,
  "progress": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Goal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Goal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


