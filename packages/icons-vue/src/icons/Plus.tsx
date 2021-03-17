// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import PlusSvg from '@kite-design/icons-svg/lib/asn/Plus';
import KiteIcon from '../components/KiteIcon'

const Plus = defineComponent({
	name: 'Plus',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={PlusSvg}/>
	},
})
export default Plus