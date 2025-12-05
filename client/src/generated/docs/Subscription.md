
# Subscription

Subscription model

## Properties

Name | Type
------------ | -------------
`tier` | string
`status` | string
`startedAt` | string
`expiresAt` | string
`autoRenew` | boolean
`paymentMethod` | string

## Example

```typescript
import type { Subscription } from ''

// TODO: Update the object below with actual values
const example = {
  "tier": null,
  "status": null,
  "startedAt": null,
  "expiresAt": null,
  "autoRenew": null,
  "paymentMethod": null,
} satisfies Subscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Subscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


