import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		msg: 'Hello World',
		categories: [
      /*{ name: 'Tech', icon: 'fa-whmcs', link: 'tech' },
      { name: 'Fashion', icon: 'fa-walking', link: 'fashion' },
      { name: 'Food', icon: 'fa-utensils', link: 'food' },
      { name: 'Entertainment', icon: 'fa-gamepad', link: 'entertainment' },
      { name: 'Relationship', icon: 'fa-heart', link: 'relationship' },
      { name: 'Shopping', icon: 'fa-shopping-cart', link:'shopping' },*/
      { name: 'Tech', icon: 'fa-cog', link: 'tech' },
      { name: 'Business', icon: 'fa-briefcase', link: 'business' },
      { name: 'Health', icon: 'fa-capsules', link: 'health/dna-testing' },
      { name: 'Love & Relationship', icon: 'fa-heart', link: 'relationship' },
      { name: 'Entertainment', icon: 'fa-gamepad', link: 'entertainment' },
      { name: 'Shopping', icon: 'fa-shopping-cart', link:'shopping' },
    ],
    products: []
	},
	mutations: {
		changeMessage( state, msg ){
			state.msg = msg
		},
		setProducts( state, products ){
			state.products = products
		},
		addProduct( state, product ){
			state.products.push( product )
		}
	},
	actions: {
	},
	modules: {
	}
})
