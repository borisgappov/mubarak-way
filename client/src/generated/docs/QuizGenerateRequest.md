
# QuizGenerateRequest

Модель для генерации викторины

## Properties

Name | Type
------------ | -------------
`category` | string
`difficulty` | string
`totalQuestions` | number

## Example

```typescript
import type { QuizGenerateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "difficulty": null,
  "totalQuestions": null,
} satisfies QuizGenerateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuizGenerateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


