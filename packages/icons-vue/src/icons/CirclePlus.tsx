// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import CirclePlusSvg from '@kite-design/icons-svg/lib/asn/CirclePlus';
import KiteIcon from '../components/KiteIcon'

const CirclePlus = defineComponent({
	name: 'CirclePlus',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={CirclePlusSvg}/>
	},
})
export default CirclePlus