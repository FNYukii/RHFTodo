import { LucideSave } from 'lucide-react'
import { Button } from '../../common/views/Button'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import type { Todo } from '../TodoSection/TodoListFormValues'
import { getFromLocalStorage } from '../../misc/utils/localStorage'

type Props = {
  className?: string
}

export const AchievementSection = (props: Props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const todoListFormValues = getFromLocalStorage('todoListFormValues')
    setTodos(todoListFormValues?.todos ?? [])
  }, [])

  return (
    <section className={clsx('bg-section p-4 rounded-lg', props.className)}>
      <div className="flex justify-between items-center">
        <p className="text-accent text-lg">実績</p>

        <div className="flex gap-3">
          <Button disabled>
            <LucideSave />
          </Button>
        </div>
      </div>

      {todos.length === 0 && (
        <p className="mt-2 text-secondary">まだ達成したTodoはありません</p>
      )}

      {todos.length !== 0 && (
        <div className="mt-2 flex flex-col gap-2">
          {todos.map((todo, index) => (
            <>
              {todo.achievedAt && (
                <div key={index}>
                  <p>{todo.content}</p>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </section>
  )
}
