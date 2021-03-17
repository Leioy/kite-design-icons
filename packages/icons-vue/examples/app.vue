<template>
	<Alipay class="xxx" :rotate="180" @click="handleClick"></Alipay>
</template>
<script>
import { defineComponent } from 'vue'
import Alipay from '../src/icons/Alipay'

export default defineComponent({
	components: { Alipay },
	setup () {
		const handleClick = (e) => {
			console.log(e.target)
		}
		return {
			handleClick,
		}
	},
})
</script>
