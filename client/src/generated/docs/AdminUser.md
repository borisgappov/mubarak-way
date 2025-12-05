
# AdminUser

Admin user model

## Properties

Name | Type
------------ | -------------
`id` | string
`username` | string
`email` | string
`passwordHash` | string
`telegramId` | number
`firstName` | string
`lastName` | string
`languageCode` | string
`locale` | string
`timezone` | string
`madhab` | string
`isPremium` | boolean
`role` | string
`isActive` | boolean
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { AdminUser } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "username": null,
  "email": null,
  "passwordHash": null,
  "telegramId": null,
  "firstName": null,
  "lastName": null,
  "languageCode": null,
  "locale": null,
  "timezone": null,
  "madhab": null,
  "isPremium": null,
  "role": null,
  "isActive": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies AdminUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


