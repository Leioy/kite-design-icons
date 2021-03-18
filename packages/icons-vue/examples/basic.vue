<template>
	<div style="border: 1px solid red">
		<h1>basic</h1>
		<Alipay />
		<Alipay spin />
		<Alipay :rotate="180"/>
		<Alipay class="xxx" style="color: red"/>
		<Alipay @click="e => console.log(e)"/>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Alipay } from '../src'

export default defineComponent({
	components: { Alipay },
})
</script>
