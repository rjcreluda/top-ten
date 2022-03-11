<template>
	<ul class="products list-unstyled">
		<li v-for="item in items" v-bind:key="item.id" class="border mb-2 p-3">
			<div>{{ item.title }}</div>
			<div class="d-flex justify-content-between">
				<span>{{ item.price | currency }}</span>
				<button class="btn btn-sm btn-outline-info" @click="addToCart(item)">Add</button>
			</div>
		</li>
	</ul>
</template>

<script>
	import 'vue-resource';
	export default{
		name: 'ProductList',
		data(){
			return {
				items: []
			}
		},
		methods: {
			addToCart( item ){
				alert('Adding to cart: ' + item.id);
			},
			allProducts(){
				for(var i = 0; i < 4; i++){
					this.items.push({
						id: i+1,
						title: 'Item ' + (i+1),
						price: 9.99
					});
				}
			}
		},
		filters: {
			currency( price ){
				return '$.' + price;
			}
		},
		mounted: function(){
			this.allProducts()
		}
	}
</script>