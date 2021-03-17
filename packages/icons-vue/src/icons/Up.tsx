// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import UpSvg from '@kite-design/icons-svg/lib/asn/Up';
import KiteIcon from '../components/KiteIcon'

const Up = defineComponent({
	name: 'Up',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={UpSvg}/>
	},
})
export default Up