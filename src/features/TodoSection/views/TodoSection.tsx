import { LucideSave, PlusIcon } from 'lucide-react'

import { useFieldArray, useForm } from 'react-hook-form'
import { Button } from '../../../common/views/Button'

import type { Todo } from '../types/Todo'

type TodoListFormValue = {
  todos: Todo[]
}

export const TodoSection = () => {
  const {
    control,
    formState: { isDirty },
  } = useForm<TodoListFormValue>()

  const { fields, append } = useFieldArray({
    control,
    name: 'todos',
  })

  const addTodo = () => {
    const newTodo: Todo = {
      content: 'new todo ',
    }
    append(newTodo)
  }

  return (
    <section className="bg-section p-4 rounded-lg   h-158">
      <div className="flex justify-between items-center">
        <p className="text-accent text-lg">メモ</p>

        <div className="flex gap-3">
          <Button onClick={addTodo}>
            <PlusIcon />
          </Button>

          <Button disabled={!isDirty}>
            <LucideSave />
          </Button>
        </div>
      </div>

      {fields.length === 0 && (
        <p className="mt-2 text-secondary">まだTodoはありません</p>
      )}

      {fields.length !== 0 && (
        <div className="mt-2 flex flex-col gap-2">
          {fields.map((todo) => (
            <div key={todo.id}>{todo.content}</div>
          ))}
        </div>
      )}
    </section>
  )
}
