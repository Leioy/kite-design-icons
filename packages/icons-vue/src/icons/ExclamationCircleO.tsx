// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import ExclamationCircleOSvg from '@kite-design/icons-svg/lib/asn/ExclamationCircleO';
import KiteIcon from '../components/KiteIcon'

const ExclamationCircleO = defineComponent({
	name: 'ExclamationCircleO',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={ExclamationCircleOSvg}/>
	},
})
export default ExclamationCircleO