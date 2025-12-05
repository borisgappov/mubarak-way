
# NashidItem


## Properties

Name | Type
------------ | -------------
`id` | string
`numericId` | number
`title` | string
`artist` | string
`language` | string
`genre` | string
`theme` | string
`musicalForm` | string
`atmosphere` | string
`usage` | string
`popularity` | string
`fileName` | string
`filePath` | string
`fileSize` | number
`mimeType` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { NashidItem } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "numericId": null,
  "title": null,
  "artist": null,
  "language": null,
  "genre": null,
  "theme": null,
  "musicalForm": null,
  "atmosphere": null,
  "usage": null,
  "popularity": null,
  "fileName": null,
  "filePath": null,
  "fileSize": null,
  "mimeType": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies NashidItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NashidItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


