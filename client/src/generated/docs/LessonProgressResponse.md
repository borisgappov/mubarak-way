
# LessonProgressResponse

Ответ с прогрессом урока

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`lessonId` | string
`startedAt` | string
`completedAt` | string
`score` | number
`timeSpent` | number
`attempts` | number
`isCompleted` | boolean
`stepResults` | { [key: string]: any; }
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { LessonProgressResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "lessonId": null,
  "startedAt": null,
  "completedAt": null,
  "score": null,
  "timeSpent": null,
  "attempts": null,
  "isCompleted": null,
  "stepResults": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies LessonProgressResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LessonProgressResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


