// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import AndroidSvg from '@kite-design/icons-svg/lib/asn/Android';
import KiteIcon from '../components/KiteIcon'

const Android = defineComponent({
	name: 'Android',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={AndroidSvg}/>
	},
})
export default Android