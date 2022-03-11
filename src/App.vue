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
  import AppMenuBar from '@/views/layouts/AppMenuBar'
  import AppFooter from '@/views/layouts/AppFooter'
  export default{
    name: 'App',
    components: { AppMenuBar, AppFooter }
  }
</script>
