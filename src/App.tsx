import clsx from 'clsx'
import { Header } from './common/views/Header'
import MemoSection from './features/MemoSection/views/MemoSection'
import { TodoSection } from './features/TodoSection/views/TodoSection'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={clsx('mt-6 container', 'grid grid-cols-2 gap-12')}>
        <TodoSection />
        <MemoSection />
      </div>
    </div>
  )
}
