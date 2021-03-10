import React, { HTMLProps } from 'react'
import { useInsertStyles } from '../utils'
import clsx from 'clsx'

export interface IconBaseProps extends HTMLProps<HTMLSpanElement> {
	spin?: boolean
	rotate?: number
}

export interface CustomIconComponentProps {
	className?: string
	style?: React.CSSProperties
}

export interface IconComponentProps extends IconBaseProps {
	component: React.ComponentType<CustomIconComponentProps>
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
	const { className, spin, rotate, onClick, component: Component, ...restProps } = props
	useInsertStyles();
	
	const innerSvgStyle = rotate ? {
		transform: `rotate(${rotate}deg)`,
		msTransform: `rotate(${rotate}deg)`,
	} : undefined
	const classes = clsx(
		'kiteicon',
		{ 'kiteicon-spin': spin },
		className,
	)
	const renderInnerNode = () => {
		if (Component) {
			return <Component style={innerSvgStyle}/>
		}
	}
	return <span
		role="img"
		ref={ref}
		className={classes}
		onClick={onClick}
		{...restProps}
	>
		{renderInnerNode()}
	</span>
})

export default Icon
