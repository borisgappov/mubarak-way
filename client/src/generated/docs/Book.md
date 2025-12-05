
# Book

Book model

## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`authors` | Array&lt;string&gt;
`tier` | string
`tags` | Array&lt;string&gt;
`language` | string
`description` | string
`offlinePackages` | Array&lt;string&gt;

## Example

```typescript
import type { Book } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "authors": null,
  "tier": null,
  "tags": null,
  "language": null,
  "description": null,
  "offlinePackages": null,
} satisfies Book

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Book
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


