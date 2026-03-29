import { LucideSave, PlusIcon } from 'lucide-react'

import { useFieldArray, useForm } from 'react-hook-form'
import { Button } from '../../common/views/Button'

import clsx from 'clsx'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../../misc/utils/localStorage'
import { useEffect, useState } from 'react'
import { TodoRow } from './TodoRow'
import type { TodoListFormValues, Todo } from './TodoListFormValues'
import type { Achievement } from '../AchievementSection/AchievementListFormValues'

// MARK: Constants
const DEFAULT_VALUES: TodoListFormValues = {
  todos: [],
}

type Props = {
  className?: string
}

export const TodoSection = (props: Props) => {
  // MARK: States
  const {
    control,
    register,
    getValues,
    reset,
    formState: { isDirty },
  } = useForm<TodoListFormValues>({ defaultValues: DEFAULT_VALUES })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'todos',
  })

  const [checkedAchievements, setCheckedAchievements] = useState<Achievement[]>(
    [],
  )

  // MARK: Functions
  const addTodo = () => {
    const newTodo: Todo = {
      content: '',
    }
    append(newTodo, { shouldFocus: false })
  }

  const removeTodo = (index: number) => {
    remove(index)
  }

  const achiveTodo = (index: number) => {
    const todos = getValues('todos')
    const checkedTodo = todos[index]

    const newAchievement: Achievement = {
      content: checkedTodo.content,
      achievedAt: new Date(),
    }

    setCheckedAchievements((achievements) => [...achievements, newAchievement])
    remove(index)
  }

  const save = () => {
    const formValues = getValues()
    const filterdValues = {
      todos: formValues.todos.filter((todo) => todo.content !== ''),
    }

    // Todosを保存
    setToLocalStorage('todoListFormValues', filterdValues)
    reset(filterdValues)

    // Achievementを保存
    const currentAchievements =
      getFromLocalStorage('achievementListFormValues')?.achievements ?? []
    setToLocalStorage('achievementListFormValues', {
      achievements: [...currentAchievements, ...checkedAchievements],
    })
    setCheckedAchievements([])
  }

  // MARK: Setups
  useEffect(() => {
    const formValues = getFromLocalStorage('todoListFormValues')
    reset(formValues)
  }, [])

  // MARK: View
  return (
    <section className={clsx('bg-section p-4 rounded-lg', props.className)}>
      <div className="flex justify-between items-center">
        <p className="text-accent text-lg">Todo</p>

        <div className="flex gap-3">
          <Button onClick={addTodo}>
            <PlusIcon />
          </Button>

          <Button disabled={!isDirty} onClick={save}>
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
            <TodoRow
              key={index}
              field={field}
              index={index}
              control={control}
              register={register}
              onRemove={() => removeTodo(index)}
              onAchieve={() => achiveTodo(index)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
