import clsx from 'clsx'
import { Header } from './common/views/Header'
import MemoSection from './features/Memo/views/MemoSection'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={clsx('mt-6 container', 'grid grid-cols-2 gap-12')}>
        <section className="bg-section p-4 rounded-lg   h-158">
          <p className="text-accent text-lg">Todo</p>
          <p className="mt-2 text-secondary">まだTodoはありません</p>
        </section>

        <MemoSection />
      </div>
    </div>
  )
}
