<template>
	<h4>{{ msg }}</h4>
</template>
<script>
	export default{
		name: 'ShowGreeting',
		computed: {
			msg(){
				return this.$store.state.msg;
			}
		}
	}
</script>