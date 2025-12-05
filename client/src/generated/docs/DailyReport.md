
# DailyReport

Daily report model

## Properties

Name | Type
------------ | -------------
`date` | string
`tasbihCount` | number
`azkarCompleted` | number
`goalsProgress` | [Array&lt;GoalProgress&gt;](GoalProgress.md)

## Example

```typescript
import type { DailyReport } from ''

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "tasbihCount": null,
  "azkarCompleted": null,
  "goalsProgress": null,
} satisfies DailyReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DailyReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


