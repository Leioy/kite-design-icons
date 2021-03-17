// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import LeftSvg from '@kite-design/icons-svg/lib/asn/Left';
import KiteIcon from '../components/KiteIcon'

const Left = defineComponent({
	name: 'Left',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={LeftSvg}/>
	},
})
export default Left