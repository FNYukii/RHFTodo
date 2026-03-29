import clsx from 'clsx'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  getFromLocalStorage,
  setToLocalStorage,
} from '../../../misc/utils/localStorage'
import type { Memo } from '../types/Memo'

const MemoSection = () => {
  const { register, getValues, reset } = useForm<Memo>()

  const save = () => {
    const memo = getValues()
    setToLocalStorage('memo', memo)
  }

  useEffect(() => {
    const memo = getFromLocalStorage('memo')
    reset(memo)
  }, [])

  return (
    <section className="bg-card p-4 rounded-lg h-60">
      <p className="text-accent text-lg">メモ</p>

      <textarea
        {...register('content', { onChange: save })}
        placeholder="メモを入力"
        className={clsx(
          'mt-2 w-full min-h-12 field-sizing-content',
          'placeholder:text-wire outline-none resize-none',
        )}
      />
    </section>
  )
}

export default MemoSection
