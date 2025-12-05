
# NotificationSchedule

Notification schedule model

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`type` | string
`scheduleSpec` | string
`channel` | string
`payload` | { [key: string]: any; }

## Example

```typescript
import type { NotificationSchedule } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "type": null,
  "scheduleSpec": null,
  "channel": null,
  "payload": null,
} satisfies NotificationSchedule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationSchedule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


