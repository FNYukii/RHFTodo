import clsx from 'clsx'
import { Header } from './common/views/Header'
import MemoSection from './features/MemoSection/MemoSection'
import { TodoSection } from './features/TodoSection/TodoSection'
import { CalendarSection } from './features/CalendarSection/CalendarSection'

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
          <CalendarSection className="aspect-square" />
        </div>
      </div>
    </div>
  )
}
