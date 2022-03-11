<template>
  <div class="about">
    <h1>This is an about page</h1>
    <show-greeting></show-greeting><br>
    <change-greeting></change-greeting>
  </div>
</template>
<script>
	import ShowGreeting from '@/components/ShowGreeting.vue'
	import changeGreeting from '@/components/ChangeGreeting.vue'
	export default{
		name: 'About',
		components: {
			ShowGreeting,
			changeGreeting
		}
	}
</script>
