<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/vue-slot">Slot in Vue</router-link>
      <router-link to="/products">Products</router-link>
    </div> -->
    <app-menu-bar />

    <router-view/>

    <app-footer />
  </div>
</template>

<script type="text/javascript">
  import fashion from '@/data/fashion.json'
  import food from '@/data/food.json'
  import relationship from '@/data/relationship.json'
  import tech from '@/data/tech.json'
  import entertainment from '@/data/entertainment.json'
  import shopping from '@/data/shopping.json'
  import website_builder from '@/data/tech-website-builder.json'
  import dna_testing from '@/data/dna-testing.json'

  import AppMenuBar from '@/views/layouts/AppMenuBar'
  import AppFooter from '@/views/layouts/AppFooter'
  export default{
    name: 'App',
    components: { AppMenuBar, AppFooter },
    created(){
      this.$store.commit('setProducts', [ fashion, food, relationship, tech, entertainment, shopping, website_builder, dna_testing])
    }
  }
</script>
