// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import CloseSvg from '@kite-design/icons-svg/lib/asn/Close';
import KiteIcon from '../components/KiteIcon'

const Close = defineComponent({
	name: 'Close',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={CloseSvg}/>
	},
})
export default Close