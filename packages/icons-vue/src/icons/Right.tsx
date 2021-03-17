// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import RightSvg from '@kite-design/icons-svg/lib/asn/Right';
import KiteIcon from '../components/KiteIcon'

const Right = defineComponent({
	name: 'Right',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={RightSvg}/>
	},
})
export default Right