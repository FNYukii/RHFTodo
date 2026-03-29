import clsx from 'clsx'
import { Header } from './common/views/Header'
import MemoSection from './features/memo/views/MemoSection'
import { NotebookSection } from './features/notebook/views/NotebookSection'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={clsx('mt-6 container', 'grid grid-cols-3 gap-12')}>
        <div>
          <MemoSection />

          <NotebookSection className="mt-12" />
        </div>

        <section className="bg-card p-4 rounded-lg   h-158">
          <p className="text-accent text-lg">Todo</p>
          <p className="mt-2 text-wire">Todoを作成</p>
        </section>

        <section className="bg-card p-4 rounded-lg   h-158">
          <p className="text-accent text-lg">2026年3月</p>
          <p className="mt-2 text-wire">データなし</p>
        </section>
      </div>
    </div>
  )
}
