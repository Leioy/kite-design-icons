<template>
	<div style="border: 1px solid red">
		<h1>iconfont</h1>
		<MyIcon @click="fn" style="color: hotpink" type="icon-xiangyou"></MyIcon>
		<MyIcon type="icon-xiangyou" spin></MyIcon>
		<MyIcon type="icon-xiangyou" :rotate="180"></MyIcon>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createFromIconfontCN } from '../src'

const MyIcon = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
	extraCommonProps: {
		testProps: 'test',
	},
})
export default defineComponent({
	components: { MyIcon },
	setup () {
		const fn = e => console.log(e)
		return { fn }
	},
})
</script>
