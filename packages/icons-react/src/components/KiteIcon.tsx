import React, { HTMLProps } from 'react'
import type { IconDefinition } from '@kite-design/icons-svg/lib/types'
import IconBase from './IconBase'
import clsx from 'clsx'

export interface IconComponentProps extends IconBaseProps {
	icon: IconDefinition
}

export interface IconBaseProps extends HTMLProps<HTMLSpanElement> {
	spin?: boolean
	rotate?: number
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
	)
	return (
		<span
			role="img"
			ref={ref}
			aria-label={icon.name}
			className={classes}
			onClick={onClick}
			{...restProps}
		>
			<IconBase icon={icon}/>
		</span>
	)
})

export default Icon
