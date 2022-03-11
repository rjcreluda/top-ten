new Vue({
	el: '#apps',
	data: {
		appName: 'Vue JS Poster Store',
		total: 0,
		items: [
			/*{ id: 1, title: 'Item 1', price: 8.99 },
			{ id: 2, title: 'Item 2', price: 7.50 },
			{ id: 3, title: 'Item 3', price: 9.95 },*/
		],
		cart: [],
		searchText: '', // current search item
		lastSearch: '', // populated after form search submition
		loading: false,
		links: '' // links per page
	},
	methods: {
		addItem( index ){
			this.total += this.items[index].price;
			var item = this.items[index]; // current item
			var found = false;
			for(var i = 0; i < this.cart.length; i++){
				if( item.id === this.cart[i].id ){ // item already in the cart
					this.cart[i].qty++;
					found = true;
					break;
				}
			}
			if( !found ){
				this.cart.push({
					id: item.id,
					title: item.title,
					price: item.price,
					qty: 1
				});
			}
		},
		// Increment Item's quantity in the cart
		increment(item){
			for(var i = 0; i < this.cart.length; i++){
				if( item.id === this.cart[i].id ){
					this.cart[i].qty++;
					this.total += this.cart[i].price;
					break;
				}
			}
		},
		// Decrement Item's quantity in the cart
		decrement( item ){
			var last = false;
			for(var i = 0; i < this.cart.length; i++){
				if( item.id === this.cart[i].id ){
					if( this.cart[i].qty > 1 ){
						this.cart[i].qty--;
						this.total -= this.cart[i].price;
					}
					else
						last = true;
					break;
				}
			}
			if( last ){
				this.cart.splice(i, 1);
			}
		},
		onSubmit(){
			if(!this.searchText.length)
				return;
			this.items = [];
			this.loading = true;
			// Using vue-resource to fetch aapi backend
			this.$http.get( 'http://127.0.0.1:8000/api/search/'.concat(this.searchText) )
			.then( function(result){
				this.lastSearch = this.searchText;
				this.items = result.data;
				this.loading = false;
			})
		},
		allItems(){
			this.loading = true;
			this.$http.get( 'http://127.0.0.1:8000/api/articles' )
			.then( function(result){
				console.log(result.data.links);
				this.loading = false;
				this.links = result.data.links;
				this.items = result.data.data;
			});
		},
		loadArticle( link ){
			this.$http.get( link )
			.then( function(result){
				this.links = result.data.links;
				this.items = result.data.data;
			})
		}
	},
	filters: {
		currency(price){
			return '$.'.concat(price.toFixed(2));
		}
	},
	mounted: function(){
		this.allItems();
	}
});