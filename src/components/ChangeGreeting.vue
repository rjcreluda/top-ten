<template>
	<div class="form-group">
		<label for="">Change greeting:</label>
		<input type="text" v-on:keyup.enter="changeMsg" class="form-control" v-model="msg">
	</div>
</template>
<script>
	export default{
		name: 'ShowGreeting',
		computed: {
			msg(){
				return this.$store.state.msg;
			}
		},
		methods: {
			changeMsg( e ){
				this.$store.commit( 'changeMessage', e.target.value )
			}
		}
	}
</script>