import clsx from 'clsx'
import { CSSProperties } from 'react'

interface SvgIconProps {
  name: string
  prefix?: string
  color?: string
  size?: string | number
  className?: string
  style?: CSSProperties
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  prefix = 'icon',
  color = 'currentColor',
  size = '1em',
  className,
  style,
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`
  const svgStyle: CSSProperties = { verticalAlign: 'middle', width: size, height: size, color, ...style }

  return (
    <svg
      className={clsx('inline-block h-[13m] w-[1em] overflow-hidden fill-current outline-none', className)}
      {...props}
      aria-hidden="true"
      style={svgStyle}
    >
      <use href={symbolId} fill="currentColor" />
    </svg>
  )
}

export default SvgIcon
