export type Todo = {
  content: string
  achievedAt?: Date
}

export type TodoListFormValues = {
  todos: Todo[]
}
