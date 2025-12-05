
# SurahResponse

Модель ответа для суры

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`nameArabic` | string
`nameEnglish` | string
`versesCount` | number
`revelationPlace` | string
`revelationOrder` | number

## Example

```typescript
import type { SurahResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "nameArabic": null,
  "nameEnglish": null,
  "versesCount": null,
  "revelationPlace": null,
  "revelationOrder": null,
} satisfies SurahResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SurahResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


