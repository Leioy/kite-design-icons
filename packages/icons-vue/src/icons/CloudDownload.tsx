// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue'
import CloudDownloadSvg from '@kite-design/icons-svg/lib/asn/CloudDownload';
import KiteIcon from '../components/KiteIcon'

const CloudDownload = defineComponent({
	name: 'CloudDownload',
	props: {
		spin: {
			type: Boolean,
			default: false,
		},
		rotate: Number,
	},
	setup (props) {
		return () => <KiteIcon {...props} icon={CloudDownloadSvg}/>
	},
})
export default CloudDownload