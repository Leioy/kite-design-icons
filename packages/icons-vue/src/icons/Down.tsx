// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import DownSvg from '@kite-design/icons-svg/lib/asn/Down';
import KiteIcon from '../components/KiteIcon'

const Down = defineComponent({
	name: 'Down',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={DownSvg}/>
	},
})
export default Down