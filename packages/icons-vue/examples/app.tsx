import { defineComponent } from 'vue'
import AllIcon from './basic'
import CustomIcon from './customIcon'
import IconFont from './iconfont'

export default defineComponent({
	setup () {
		return () => (
			<div>
				<AllIcon/>
				<CustomIcon/>
				<IconFont/>
			</div>
		)
	},
})
