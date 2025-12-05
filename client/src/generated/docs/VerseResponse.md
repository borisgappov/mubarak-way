
# VerseResponse

Модель ответа для аята

## Properties

Name | Type
------------ | -------------
`id` | string
`verseNumber` | number
`textArabic` | string
`textTransliteration` | string
`translations` | Array&lt;{ [key: string]: any; }&gt;

## Example

```typescript
import type { VerseResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "verseNumber": null,
  "textArabic": null,
  "textTransliteration": null,
  "translations": null,
} satisfies VerseResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerseResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


