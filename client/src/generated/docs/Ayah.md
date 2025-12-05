
# Ayah

Ayah model

## Properties

Name | Type
------------ | -------------
`sura` | number
`ayah` | number
`textAr` | string
`translit` | string
`translation` | string

## Example

```typescript
import type { Ayah } from ''

// TODO: Update the object below with actual values
const example = {
  "sura": null,
  "ayah": null,
  "textAr": null,
  "translit": null,
  "translation": null,
} satisfies Ayah

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Ayah
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


