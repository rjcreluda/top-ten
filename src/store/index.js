import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		msg: 'Hello World',
		categories: [
      { name: 'Tech', icon: 'fa-whmcs', link: 'tech' },
      { name: 'Fashion', icon: 'fa-walking', link: 'fashion' },
      { name: 'Food', icon: 'fa-utensils', link: 'food' },
      { name: 'Entertainment', icon: 'fa-gamepad', link: 'entertainment' },
      { name: 'Relationship', icon: 'fa-heart', link: 'relationship' },
      { name: 'Shopping', icon: 'fa-shopping-cart', link:'shopping' },
    ]
	},
	mutations: {
		changeMessage( state, msg ){
			state.msg = msg
		}
	},
	actions: {
	},
	modules: {
	}
})
