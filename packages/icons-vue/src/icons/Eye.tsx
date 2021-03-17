// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import EyeSvg from '@kite-design/icons-svg/lib/asn/Eye';
import KiteIcon from '../components/KiteIcon'

const Eye = defineComponent({
	name: 'Eye',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={EyeSvg}/>
	},
})
export default Eye