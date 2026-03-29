import { LucideSave } from 'lucide-react'
import { Button } from '../../common/views/Button'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { getFromLocalStorage } from '../../misc/utils/localStorage'
import type { Achievement } from './AchievementListFormValues'

type Props = {
  className?: string
}

export const AchievementSection = (props: Props) => {
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    const achievementListFormValues = getFromLocalStorage(
      'achievementListFormValues',
    )
    if (!achievementListFormValues) return
    setAchievements(achievementListFormValues.achievements)
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

      {achievements.length === 0 && (
        <p className="mt-2 text-secondary">まだ達成したTodoはありません</p>
      )}

      {achievements.length !== 0 && (
        <div className="mt-2 flex flex-col gap-2">
          {achievements.map((achievement, index) => (
            <div key={index}>
              <p>{achievement.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
