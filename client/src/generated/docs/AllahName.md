
# AllahName


## Properties

Name | Type
------------ | -------------
`id` | string
`number` | number
`nameArabic` | string
`nameLatin` | string
`nameAscii` | string
`nameCyr` | string
`translations` | Array&lt;string&gt;
`quranReferences` | [Array&lt;QuranReference&gt;](QuranReference.md)
`notes` | Array&lt;string&gt;
`metadata` | { [key: string]: any; }
`properties` | [AllahNameProperties](AllahNameProperties.md)
`audio` | [AudioInfo](AudioInfo.md)

## Example

```typescript
import type { AllahName } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "number": null,
  "nameArabic": null,
  "nameLatin": null,
  "nameAscii": null,
  "nameCyr": null,
  "translations": null,
  "quranReferences": null,
  "notes": null,
  "metadata": null,
  "properties": null,
  "audio": null,
} satisfies AllahName

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllahName
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


