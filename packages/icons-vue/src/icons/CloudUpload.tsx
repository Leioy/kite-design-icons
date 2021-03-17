// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import CloudUploadSvg from '@kite-design/icons-svg/lib/asn/CloudUpload';
import KiteIcon from '../components/KiteIcon'

const CloudUpload = defineComponent({
	name: 'CloudUpload',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={CloudUploadSvg}/>
	},
})
export default CloudUpload