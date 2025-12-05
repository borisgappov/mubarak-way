
# LessonProgressRequest

Запрос на сохранение прогресса урока

## Properties

Name | Type
------------ | -------------
`lessonId` | string
`score` | number
`timeSpent` | number
`isCompleted` | boolean
`stepResults` | { [key: string]: any; }

## Example

```typescript
import type { LessonProgressRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "lessonId": null,
  "score": null,
  "timeSpent": null,
  "isCompleted": null,
  "stepResults": null,
} satisfies LessonProgressRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LessonProgressRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


