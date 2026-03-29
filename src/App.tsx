import clsx from 'clsx'
import { Header } from './common/views/Header'
import MemoSection from './features/MemoSection/MemoSection'
import { TodoSection } from './features/TodoSection/TodoSection'
import { CalendarSection } from './features/CalendarSection/CalendarSection'
import { Footer } from './common/views/Footer'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={clsx('mt-2 mb-8 container', 'grid grid-cols-2 gap-6')}>
        <TodoSection />

        <div className="flex flex-col gap-6">
          <MemoSection />
          <CalendarSection className="aspect-square" />
        </div>
      </div>

      <Footer className="fixed bottom-4 inset-x-0" />
    </div>
  )
}
