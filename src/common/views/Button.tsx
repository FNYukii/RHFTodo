import clsx from 'clsx'
import type { ReactNode } from 'react'

type Variant = 'flat' | 'outlined' | 'filled'
type Color = 'accent' | 'secondary'

type Props = {
  children: ReactNode
  variant?: Variant
  color?: Color
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const Button = ({
  variant = 'flat',
  color = 'accent',
  ...props
}: Props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={clsx(
        variant === 'flat' && [
          'p-2 -m-2 rounded-full',
          'font-bold',
          'transition',
          'enabled:cursor-pointer',
          'focus-visible:outline-2 disabled:text-disabled',

          color === 'accent' && [
            'outline-accent text-accent',
            'enabled:hover:bg-accent/20 focus-visible:bg-accent/20',
          ],

          color === 'secondary' && [
            'outline-secondary text-secondary',
            'enabled:hover:bg-secondary/20 focus-visible:bg-secondary/20',
          ],

          props.className,
        ],

        // props.variant === 'outlined' && [
        //   'px-4 py-1 rounded-full border border-blue-500',
        //   'font-bold text-blue-500',
        //   'outline-blue-500',
        //   'transition',
        //   'enabled:cursor-pointer',
        //   'enabled:hover:bg-blue-100 disabled:text-blue-300 disabled:border-blue-300',
        // ],

        // props.variant === 'filled' && [
        //   'px-4 py-1 rounded-full bg-blue-500',
        //   'font-bold text-white',
        //   'outline-blue-500 outline-offset-2',
        //   'transition',
        //   'enabled:cursor-pointer',
        //   'enabled:hover:bg-blue-400 disabled:bg-blue-300',
        // ],
      )}
    >
      {props.children}
    </button>
  )
}
