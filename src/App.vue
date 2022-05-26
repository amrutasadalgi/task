<template>
  <v-app>
    <NavBar/>
    <HomePage />
    <!-- <router-view></router-view> -->
  </v-app>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';
import HomePage from './components/home/HomePage.vue';
export default {

  name: 'App',

  components: {
    NavBar,
    HomePage
},

  data: () => ({
    //
  }),
};
</script>
