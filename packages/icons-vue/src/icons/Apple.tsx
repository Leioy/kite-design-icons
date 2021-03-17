// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import AppleSvg from '@kite-design/icons-svg/lib/asn/Apple';
import KiteIcon from '../components/KiteIcon'

const Apple = defineComponent({
	name: 'Apple',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={AppleSvg}/>
	},
})
export default Apple