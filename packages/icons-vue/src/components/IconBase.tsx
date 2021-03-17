import { useInsertStyles } from '../utils'
import { generate, svgBaseAttributes } from '../utils'
import { defineComponent, PropType } from 'vue'
import { IconDefinition } from '@kite-design/icons-svg/lib/types'

const IconBase = defineComponent({
	name: 'IconBase',
	props: {
		icon: {
			type: Object as PropType<IconDefinition>,
		},
	},
	setup (props) {
		const { icon } = props
		useInsertStyles()
		return () => generate(icon.icon, `svg-${icon.name}`, {
			'data-icon': icon.name,
			...svgBaseAttributes,
		})
	},
})

export default IconBase
