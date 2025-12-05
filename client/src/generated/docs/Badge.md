
# Badge

Badge model

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`badgeType` | string
`level` | string
`achievedAt` | string
`createdAt` | string

## Example

```typescript
import type { Badge } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "badgeType": null,
  "level": null,
  "achievedAt": null,
  "createdAt": null,
} satisfies Badge

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Badge
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


