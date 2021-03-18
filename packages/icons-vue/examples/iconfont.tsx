import { defineComponent } from 'vue'
import { createFromIconfontCN } from '../src'

export default defineComponent({
	setup () {
		const MyIcon = createFromIconfontCN({
			scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
			extraCommonProps: {
				testProps: 'test',
			},
		})
		return () => (
			<div style={{ border: '1px solid red', padding: '20px' }}>
				<h1>iconfont</h1>
				<MyIcon onClick={e => console.log(e)} style={{ color: 'red' }} type="icon-xiangyou"/>
				<MyIcon spin type="icon-xiangyou"/>
				<MyIcon rotate={90} type="icon-xiangyou"/>
			</div>
		)
	},
})
