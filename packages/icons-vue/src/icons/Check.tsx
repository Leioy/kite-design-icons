// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import CheckSvg from '@kite-design/icons-svg/lib/asn/Check';
import KiteIcon from '../components/KiteIcon'

const Check = defineComponent({
	name: 'Check',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={CheckSvg}/>
	},
})
export default Check