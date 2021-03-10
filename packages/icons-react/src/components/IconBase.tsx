import React from 'react'
import { IconDefinition } from '@kite-design/icons-svg/lib/types'
import { generate, svgBaseAttributes, useInsertStyles } from '../utils'

export interface IconProps {
	icon: IconDefinition
	style?: React.CSSProperties
}

const IconBase: React.FC<IconProps> = (props) => {
	const { icon,...restProps } = props
	useInsertStyles()
	return generate(icon.icon, `svg-${icon.name}`, {
		'data-icon': icon.name,
		...svgBaseAttributes,
		...restProps
	})
}
export default IconBase
