<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<h3>Slot Page</h3>
				<card>
					<template v-slot:title>Product one</template>
					<template v-slot:text>Delectus qui ullam modi nam, obcaecati neque pariatur perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</template>
				</card>
				<card>
					<template v-slot:title>Product two</template>
					<template v-slot:text>Delectus qui ullam modi nam, obcaecati neque pariatur perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</template>
				</card>
				<card>
					<template v-slot:title>Product three</template>
					<template v-slot:text>Delectus qui ullam modi nam, obcaecati neque pariatur perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</template>
				</card>
			</div>
			<div class="col-md-4">Hello world</div>
		</div>
	</div>
</template>

<script>
	import Card from '@/components/Card.vue'
	export default {
		name: 'VueSlot',
		components: {
			Card
		}
	}
</script>

<style>
	.container{
		text-align: left;
	}
</style>
