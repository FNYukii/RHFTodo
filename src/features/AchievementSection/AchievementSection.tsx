import { LucideSave } from 'lucide-react'
import { Button } from '../../common/views/Button'
import clsx from 'clsx'

type Props = {
  className?: string
}

export const AchievementSection = (props: Props) => {
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

      <p className="mt-2 text-secondary">まだ達成したTodoはありません</p>
    </section>
  )
}
