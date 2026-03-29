import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../../common/views/Button'
import type { Notebook } from '../types/Notebook'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

type Props = {
  className?: string
}

export const NotebookSection = (props: Props) => {
  const { register, getValues, control } = useForm<Notebook>({
    defaultValues: {
      pages: [{ content: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray<Notebook>({
    name: 'pages',
    control,
  })

  const [pageIndex, setPageIndex] = useState(0)

  // FIXME: 不要なら無くしたい
  const pageNumber = pageIndex + 1
  const pageLength = fields.length

  /**
   * 前のページに戻る
   * 今のページが最終ページでかつ未記載なら、ページを削除
   */
  const handlePrev = () => {
    const notebook = getValues()

    if (
      pageIndex + 1 === fields.length &&
      notebook.pages[pageIndex].content === ''
    ) {
      remove(pageIndex)
    }

    setPageIndex((value) => value - 1)
  }

  /**
   * 次のページに進む
   * 今のページが最終ページなら、ページを追加
   */
  const handleNext = () => {
    if (pageIndex === fields.length) {
      append({ content: '' })
    }

    setPageIndex((value) => value + 1)
  }

  return (
    <section className={clsx('bg-card p-4 rounded-lg', props.className)}>
      <div className="flex justify-between">
        <div className="text-accent text-lg">
          <span>ノート</span>
          <span className="ml-2">
            {/* FIXME: Next時に思うようにページ数が増えない */}
            {pageNumber} / {pageLength}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="flat"
            disabled={pageIndex === 0}
            onClick={handlePrev}
          >
            <ChevronLeft className="text-accent size-6" />
          </Button>
          <Button variant="flat" onClick={handleNext}>
            <ChevronRight className="text-accent size-6" />
          </Button>
        </div>
      </div>

      <textarea
        {...register(`pages.${pageIndex}.content`)}
        placeholder="ノートを記載"
        className={clsx(
          'mt-2 w-full min-h-80 field-sizing-content',
          'placeholder:text-wire outline-none resize-none',
        )}
      />

      {/* TODO: 手動保存ボタンを設置 */}
    </section>
  )
}
