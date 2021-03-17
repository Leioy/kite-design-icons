// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import EyeOffLineSvg from '@kite-design/icons-svg/lib/asn/EyeOffLine';
import KiteIcon from '../components/KiteIcon'

const EyeOffLine = defineComponent({
	name: 'EyeOffLine',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={EyeOffLineSvg}/>
	},
})
export default EyeOffLine