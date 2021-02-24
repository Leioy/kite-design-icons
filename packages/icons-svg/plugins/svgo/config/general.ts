import { baseBaseConfig } from './base'

export const generalConfig = Object.assign({}, baseBaseConfig, {
	plugins: [
		...(baseBaseConfig.plugins || []),
		{ removeAttrs: { attrs: [ 'class', 'fill' ] } },
	],
})
