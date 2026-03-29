import clsx from 'clsx'

type Props = {
  className?: string
}

export const CalendarSection = (props: Props) => {
  return (
    <section className={clsx('bg-section p-4 rounded-lg', props.className)}>
      <p className="text-accent text-lg">カレンダー</p>
    </section>
  )
}
