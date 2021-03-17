// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import ExclamationSvg from '@kite-design/icons-svg/lib/asn/Exclamation';
import KiteIcon from '../components/KiteIcon'

const Exclamation = defineComponent({
	name: 'Exclamation',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={ExclamationSvg}/>
	},
})
export default Exclamation