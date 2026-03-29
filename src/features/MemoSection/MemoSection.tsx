import clsx from 'clsx'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../../misc/utils/localStorage'

import { LucideSave } from 'lucide-react'
import { Button } from '../../common/views/Button'

type Memo = {
  content: string
}

export type MemoFormValues = Memo

const DEFAULT_VALUES: MemoFormValues = {
  content: '',
}

const MemoSection = () => {
  const {
    register,
    getValues,
    reset,
    formState: { isDirty },
  } = useForm<MemoFormValues>({ defaultValues: DEFAULT_VALUES })

  const save = () => {
    const formValues = getValues()
    setToLocalStorage('memoFormValues', formValues)
    reset(formValues)
  }

  useEffect(() => {
    const formValues = getFromLocalStorage('memoFormValues')
    reset(formValues)
  }, [])

  return (
    <section
      className={clsx('h-60', 'bg-section p-4 rounded-lg', 'flex flex-col')}
    >
      <div className="flex justify-between items-center">
        <p className="text-accent text-lg">メモ</p>

        <Button disabled={!isDirty} onClick={save}>
          <LucideSave />
        </Button>
      </div>

      <textarea
        {...register('content')}
        placeholder="メモを入力"
        className={clsx(
          'mt-2 w-full grow',
          'placeholder:text-disabled outline-none resize-none',
        )}
      />
    </section>
  )
}

export default MemoSection
