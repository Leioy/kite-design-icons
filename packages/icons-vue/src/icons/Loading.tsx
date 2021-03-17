// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import LoadingSvg from '@kite-design/icons-svg/lib/asn/Loading';
import KiteIcon from '../components/KiteIcon'

const Loading = defineComponent({
	name: 'Loading',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={LoadingSvg}/>
	},
})
export default Loading