import { Component, defineComponent, PropType } from 'vue'
import { svgBaseAttributes, useInsertStyles, warning } from '../utils'

const Icon = defineComponent({
	name: 'Icon',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
		component: [ Function, Object ] as PropType<Component>,
		viewBox: String,
	},
	setup (props, { slots }) {
		const { spin, rotate, viewBox, component: Component } = props
		const slotsComponent = slots.component
		const innerSvgStyle = rotate ? {
			transform: `rotate(${rotate}deg)`,
			msTransform: `rotate(${rotate}deg)`,
		} : undefined
		const innerSvgProps = {
			...svgBaseAttributes,
			viewBox,
			style: innerSvgStyle,
		}
		if (!viewBox) {
			delete innerSvgProps.viewBox
		}
		const classes = {
			'kiteicon': true,
			['kiteicon-spin']: spin,
		}
		warning(
			Boolean(Component || slots.default || slotsComponent),
			'Should have `component` prop/slot or `children`.',
		);
		useInsertStyles()
		const renderInnerNode = () => {
			if (Component) {
				// @ts-ignore
				return <Component {...innerSvgProps}/>
			}
			if (slotsComponent) {
				return slotsComponent(innerSvgProps)
			}
			if (slots.default) {
				warning(
					Boolean(viewBox),
					'Make sure that you provide correct `viewBox`' +
					' prop (default `0 0 1024 1024`) to the icon.',
				);
				return <svg {...innerSvgProps}>
					{slots.default()}
				</svg>
			}
		}
		return () => <span
			role="img"
			class={classes}
		>
		{renderInnerNode()}
	</span>
	},
})
export default Icon
