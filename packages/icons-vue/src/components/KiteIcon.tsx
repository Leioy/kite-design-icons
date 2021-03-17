import { defineComponent, PropType } from 'vue'
import { IconDefinition } from '@kite-design/icons-svg/lib/types'
import IconBase from './IconBase'

export default defineComponent({
	name: 'KiteIcon',
	props: {
		icon: {
			type: Object as PropType<IconDefinition>,
			required: true,
		},
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		const { icon, spin, rotate } = props
		const prefixCls = 'kiteicon'
		const classes = {
			[prefixCls]: true,
			[`${prefixCls}-${icon.name}`]: icon.name,
			[`${prefixCls}-spin`]: spin || icon.name === 'loading',
		}
		const svgStyle = rotate ? {
			transform: `rotate(${rotate}deg)`,
			msTransform: `rotate(${rotate}deg)`,
		} : undefined
		return () =>
			<span role="img"
			      aria-label={icon.name}
			      class={classes}
			>
				<IconBase icon={icon} style={svgStyle}/>
			</span>
		
	},
})
