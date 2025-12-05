
# GoalCreate

Модель для создания новой цели  Attributes:     itemId: UUID элемента из каталога (например, азкар, сура Корана)     goalType: Тип цели - daily (ежедневная), weekly (еженедельная), monthly (ежемесячная), custom (пользовательская)     targetCount: Целевое количество (должно быть больше 0)     period: Период - day (день), week (неделя), month (месяц), year (год)  Example:     ```json     {         \"itemId\": \"3d1e5ed4-b6c3-4505-9cd4-19f1a6a4a324\",         \"goalType\": \"daily\",         \"targetCount\": 100,         \"period\": \"day\"     }     ```

## Properties

Name | Type
------------ | -------------
`itemId` | string
`goalType` | string
`targetCount` | number
`period` | string

## Example

```typescript
import type { GoalCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "itemId": 3d1e5ed4-b6c3-4505-9cd4-19f1a6a4a324,
  "goalType": daily,
  "targetCount": 100,
  "period": day,
} satisfies GoalCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GoalCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


