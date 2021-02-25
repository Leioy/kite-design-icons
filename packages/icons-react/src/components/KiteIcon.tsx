import React from 'react'
import type { IconDefinition } from '@kite-design/icons-svg/lib/types'
import IconBase from './IconBase'
import clsx from 'clsx'
import type { IconBaseProps } from './CustomIcon'

export interface IconComponentProps extends IconBaseProps {
	icon: IconDefinition
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
	const { className, icon, spin, rotate, onClick, ...restProps } = props
	const prefixCls = 'kiteicon'
	const classes = clsx(
		prefixCls,
		{
			[`${prefixCls}-${icon.name}`]: icon.name,
			[`${prefixCls}-spin`]: spin || icon.name === 'loading',
		},
		className
	)
	const svgStyle = rotate ? {
		transform: `rotate(${rotate}deg)`,
		msTransform: `rotate(${rotate}deg)`,
	} : undefined
	return (
		<span
			role="img"
			ref={ref}
			aria-label={icon.name}
			className={classes}
			onClick={onClick}
			{...restProps}
		>
			<IconBase icon={icon} style={svgStyle}/>
		</span>
	)
})

export default Icon
