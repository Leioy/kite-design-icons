import { defineComponent } from 'vue'
import { Alipay } from '../src'

export default defineComponent({
	setup () {
		return () => (
			<div style={{ border: '1px solid red', padding: '20px' }}>
				<h1>basic</h1>
				<Alipay/>
				<Alipay spin/>
				<Alipay rotate={180}/>
				<Alipay class="xxx" style={{ color: 'red' }}/>
				<Alipay onClick={(e: any) => console.log(e.target)}/>
			</div>
		)
	},
})
