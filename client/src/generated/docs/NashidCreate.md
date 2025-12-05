
# NashidCreate


## Properties

Name | Type
------------ | -------------
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
`fileSize` | number
`dateAdded` | string

## Example

```typescript
import type { NashidCreate } from ''

// TODO: Update the object below with actual values
const example = {
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
  "fileSize": null,
  "dateAdded": null,
} satisfies NashidCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NashidCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


