
# AzkarToday

Azkar today model

## Properties

Name | Type
------------ | -------------
`dateLocal` | string
`segments` | [Array&lt;AzkarSegment&gt;](AzkarSegment.md)
`total` | number
`isComplete` | boolean

## Example

```typescript
import type { AzkarToday } from ''

// TODO: Update the object below with actual values
const example = {
  "dateLocal": null,
  "segments": null,
  "total": null,
  "isComplete": null,
} satisfies AzkarToday

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AzkarToday
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


