import clsx from 'clsx'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../../../misc/utils/localStorage'
import type { Memo } from '../types/Memo'
import { LucideSave } from 'lucide-react'
import { Button } from '../../../common/views/Button'

const MemoSection = () => {
  const {
    register,
    getValues,
    reset,
    formState: { isDirty },
  } = useForm<Memo>()

  const save = () => {
    const memo = getValues()
    setToLocalStorage('memo', memo)
    reset(memo)
  }

  useEffect(() => {
    const memo = getFromLocalStorage('memo')
    reset(memo)
  }, [])

  return (
    <section className="bg-section p-4 rounded-lg h-60">
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
          'mt-2 w-full min-h-12 field-sizing-content',
          'placeholder:text-disabled outline-none resize-none',
        )}
      />
    </section>
  )
}

export default MemoSection
