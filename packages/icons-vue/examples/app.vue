<template>
	<Basic></Basic>
	<CustomIcon></CustomIcon>
	<IconFont></IconFont>
</template>
<script>
import { defineComponent } from 'vue'
import Basic from './basic.vue'
import CustomIcon from './customIcon.vue'
import IconFont from './iconfont.vue'

export default defineComponent({
	components: { Basic, CustomIcon, IconFont },
})
</script>
