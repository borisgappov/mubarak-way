
# AdminUserCreate

Admin user creation request

## Properties

Name | Type
------------ | -------------
`username` | string
`email` | string
`role` | string

## Example

```typescript
import type { AdminUserCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "username": null,
  "email": null,
  "role": null,
} satisfies AdminUserCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUserCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


