import clsx from 'clsx'
import { Header } from './common/views/Header'
import MemoSection from './features/MemoSection/MemoSection'
import { TodoSection } from './features/TodoSection/TodoSection'
import { AchievementSection } from './features/AchievementSection/AchievementSection'

export const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div
        className={clsx(
          'mt-2 mb-8 container',
          'grow',
          'grid grid-cols-2 gap-6',
        )}
      >
        <TodoSection className="h-full" />

        <div className="flex flex-col gap-6">
          <MemoSection />
          <AchievementSection className="grow" />
        </div>
      </div>
    </div>
  )
}
