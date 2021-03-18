<template>
	<Basic></Basic>
	<CustomIcon></CustomIcon>
</template>
<script>
import { defineComponent } from 'vue'
import Basic from './basic.vue'
import CustomIcon from './customIcon.vue'

export default defineComponent({
	components: { Basic, CustomIcon },
})
</script>
