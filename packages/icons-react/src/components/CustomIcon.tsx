import * as React from 'react'
import { svgBaseAttributes, useInsertStyles } from '../utils'
import clsx from 'clsx'

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
	spin?: boolean
	rotate?: number
}

export interface CustomIconComponentProps {
	className?: string
	style?: React.CSSProperties
}

export interface IconComponentProps extends IconBaseProps {
	component?: React.ComponentType<CustomIconComponentProps>
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
	const { className, spin, rotate, onClick, component: Component, children, ...restProps } = props
	useInsertStyles();
	
	const innerSvgStyle = rotate ? {
		transform: `rotate(${rotate}deg)`,
		msTransform: `rotate(${rotate}deg)`,
	} : undefined
	const innerSvgProps = {
		...svgBaseAttributes,
		style: innerSvgStyle,
	}
	const classes = clsx(
		'kiteicon',
		{ 'kiteicon-spin': spin },
		className,
	)
	const renderInnerNode = () => {
		if (Component) {
			return <Component style={innerSvgStyle}/>
		}
		if (children) {
			return <svg {...innerSvgProps}>
				{children}
			</svg>
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
