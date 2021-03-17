// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import WarningSvg from '@kite-design/icons-svg/lib/asn/Warning';
import KiteIcon from '../components/KiteIcon'

const Warning = defineComponent({
	name: 'Warning',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={WarningSvg}/>
	},
})
export default Warning