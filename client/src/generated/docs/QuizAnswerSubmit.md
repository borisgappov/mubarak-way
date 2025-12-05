
# QuizAnswerSubmit

Модель для отправки ответа

## Properties

Name | Type
------------ | -------------
`termId` | string
`questionType` | string
`questionText` | string
`userAnswer` | string
`correctAnswer` | string
`isCorrect` | boolean
`timeSpent` | number
`confidence` | number

## Example

```typescript
import type { QuizAnswerSubmit } from ''

// TODO: Update the object below with actual values
const example = {
  "termId": null,
  "questionType": null,
  "questionText": null,
  "userAnswer": null,
  "correctAnswer": null,
  "isCorrect": null,
  "timeSpent": null,
  "confidence": null,
} satisfies QuizAnswerSubmit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuizAnswerSubmit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


