
# CatalogItem

Catalog item model

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`category` | string
`title` | string
`meta` | { [key: string]: any; }
`availability` | string

## Example

```typescript
import type { CatalogItem } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "category": null,
  "title": null,
  "meta": null,
  "availability": null,
} satisfies CatalogItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


