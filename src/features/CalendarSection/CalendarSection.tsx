import clsx from 'clsx'
import dayjs from 'dayjs'

type CalendarDate = {
  value: number | undefined
  dayOfWeek: number
  isToday: boolean
}

const DAYS_OF_WEEK = ['日', '月', '火', '水', '木', '金', '土']

const makeCalendarDates = () => {
  const firstDate = dayjs().startOf('month')
  const dayCount = firstDate.daysInMonth()

  const calendarDates = Array.from({ length: dayCount }, (_, i) => {
    const targetDate = firstDate.add(i, 'day')

    const date: CalendarDate = {
      value: targetDate.date(),
      dayOfWeek: targetDate.day(),
      isToday: targetDate.isSame(dayjs(), 'day'),
    }
    return date
  })

  const firstDayOfWeek = firstDate.day()
  const paddingDates = Array.from({ length: firstDayOfWeek }, (_, i) => {
    const date: CalendarDate = {
      value: undefined,
      dayOfWeek: i,
      isToday: false,
    }

    return date
  })

  return [...paddingDates, ...calendarDates]
}

type Props = {
  className?: string
}

export const CalendarSection = (props: Props) => {
  const dates = makeCalendarDates()

  return (
    <section className={clsx('bg-section p-4 rounded-lg', props.className)}>
      <p className="text-accent text-lg">カレンダー</p>

      <div className="-mx-4">
        <div className="mt-2 grid grid-cols-7">
          {DAYS_OF_WEEK.map((dayOfWeek, index) => (
            <p
              key={index}
              className={clsx(
                'text-center',
                (index === 0 || index === 6) && 'text-secondary',
              )}
            >
              {dayOfWeek}
            </p>
          ))}
        </div>

        <div className="mt-1 grid grid-cols-7">
          {dates.map((date, index) => (
            <div
              key={index}
              className={clsx(
                'py-1 text-center',
                date.isToday && '!text-accent',
                (date.dayOfWeek === 0 || date.dayOfWeek === 6) &&
                  'text-secondary',
              )}
            >
              {date.value ?? ''}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
