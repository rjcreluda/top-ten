<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<product-list />
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>
</template>

<script>
	import ProductList from '@/components/ProductList.vue'

	export default{
		name: 'Products',
		components: {
			ProductList
		}
	}
</script>
<style>
	.container{
		text-align: left;
	}
</style>