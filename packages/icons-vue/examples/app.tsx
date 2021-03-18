import { defineComponent } from 'vue'
import AllIcon from './basic'
import CustomIcon from './customIcon'
export default defineComponent({
	setup () {
		return () => (
			<div>
				<AllIcon/>
				<CustomIcon/>
			</div>
		)
	},
})
