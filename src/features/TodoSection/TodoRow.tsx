import clsx from 'clsx'
import { Trash, Check } from 'lucide-react'
import {
  type Control,
  type FieldArrayWithId,
  type UseFormRegister,
  useWatch,
} from 'react-hook-form'
import { Button } from '../../common/views/Button'
import type { TodoListFormValues } from './TodoListFormValues'

type Props = {
  field: FieldArrayWithId<TodoListFormValues, 'todos', 'id'>
  index: number
  control: Control<TodoListFormValues, any, TodoListFormValues>
  register: UseFormRegister<TodoListFormValues>
  onRemove: () => void
}

export const TodoRow = (props: Props) => {
  const content = useWatch({
    control: props.control,
    name: `todos.${props.index}.content`,
  })

  return (
    <div
      key={props.field.id}
      className={clsx('flex gap-2 items-center', 'group')}
    >
      <input
        {...props.register(`todos.${props.index}.content`)}
        placeholder="空のTodo"
        className={clsx(
          'py-1 w-full',
          'border-b border-transparent outline-none transition',
          'peer',
          'focus:border-disabled group-hover:border-disabled placeholder:text-disabled',
        )}
      />

      <div
        className={clsx(
          'flex gap-3',
          'invisible',
          'group-hover:visible peer-focus:visible',
        )}
      >
        <Button onClick={props.onRemove} color="secondary">
          <Trash />
        </Button>

        {/* 監視している content の値を判定に使う */}
        <Button disabled={!content || content.trim() === ''}>
          <Check />
        </Button>
      </div>
    </div>
  )
}
