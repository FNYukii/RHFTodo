import clsx from 'clsx'

type Props = {
  className?: string
}

export const Footer = (props: Props) => {
  return (
    <footer className={clsx('text-center text-disabled', props.className)}>
      Copyright © 2026 FNYukii
    </footer>
  )
}
