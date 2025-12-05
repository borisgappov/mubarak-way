
# UserStatsResponse

Ответ со статистикой пользователя

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`totalLessonsCompleted` | number
`totalScore` | number
`averageScore` | number
`totalTimeSpent` | number
`currentLevel` | number
`lettersLearned` | Array&lt;string&gt;
`currentStreak` | number
`longestStreak` | number
`lastLessonDate` | string
`achievements` | { [key: string]: any; }
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { UserStatsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "totalLessonsCompleted": null,
  "totalScore": null,
  "averageScore": null,
  "totalTimeSpent": null,
  "currentLevel": null,
  "lettersLearned": null,
  "currentStreak": null,
  "longestStreak": null,
  "lastLessonDate": null,
  "achievements": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies UserStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


