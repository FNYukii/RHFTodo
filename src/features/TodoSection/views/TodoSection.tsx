import { LucideSave, PlusIcon } from 'lucide-react'

import { useFieldArray, useForm } from 'react-hook-form'
import { Button } from '../../../common/views/Button'

import type { Todo } from '../types/Todo'
import clsx from 'clsx'

type TodoListFormValue = {
  todos: Todo[]
}

const DEFAULT_VALUES: TodoListFormValue = {
  todos: [],
}

export const TodoSection = () => {
  const {
    control,
    register,
    formState: { isDirty },
  } = useForm<TodoListFormValue>({ defaultValues: DEFAULT_VALUES })

  const { fields, append } = useFieldArray({
    control,
    name: 'todos',
  })

  const addTodo = () => {
    const newTodo: Todo = {
      content: '',
    }
    append(newTodo, {})
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
        <div className="mt-2 flex flex-col gap-1">
          {fields.map((field, index) => (
            <div key={field.id} className="flex">
              <input
                {...register(`todos.${index}.content`)}
                placeholder="空のTodo"
                className={clsx(
                  'py-1 outline-none border-b border-transparent w-full',
                  'focus:border-disabled placeholder:text-disabled',
                )}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
