import clsx from 'clsx'

interface SvgIconProps {
  name: string
  prefix?: string
  color?: string
  size?: string | number
  className?: string
  style?: React.CSSProperties
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
  const svgStyle: React.CSSProperties = { verticalAlign: 'middle', width: size, height: size, color, ...style }

  return (
    <svg
      className={clsx('inline-block h-[1em] w-[1em] overflow-hidden fill-current outline-none', className)}
      {...props}
      aria-hidden="true"
      style={svgStyle}
    >
      <use href={symbolId} fill="currentColor" />
    </svg>
  )
}

export default SvgIcon
