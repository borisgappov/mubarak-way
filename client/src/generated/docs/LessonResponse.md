
# LessonResponse

Ответ с данными урока

## Properties

Name | Type
------------ | -------------
`id` | string
`lessonCode` | string
`title` | string
`description` | string
`letter` | string
`difficultyLevel` | number
`estimatedDuration` | number
`lessonType` | string
`isActive` | boolean
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { LessonResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "lessonCode": null,
  "title": null,
  "description": null,
  "letter": null,
  "difficultyLevel": null,
  "estimatedDuration": null,
  "lessonType": null,
  "isActive": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies LessonResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LessonResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


