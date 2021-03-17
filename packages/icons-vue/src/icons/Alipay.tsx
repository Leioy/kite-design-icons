// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import AlipaySvg from '@kite-design/icons-svg/lib/asn/Alipay';
import KiteIcon from '../components/KiteIcon'

const Alipay = defineComponent({
	name: 'Alipay',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={AlipaySvg}/>
	},
})
export default Alipay