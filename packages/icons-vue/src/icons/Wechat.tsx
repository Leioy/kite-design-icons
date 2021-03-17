// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import WechatSvg from '@kite-design/icons-svg/lib/asn/Wechat';
import KiteIcon from '../components/KiteIcon'

const Wechat = defineComponent({
	name: 'Wechat',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={WechatSvg}/>
	},
})
export default Wechat