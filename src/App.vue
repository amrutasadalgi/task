<template>
  <v-app>
    <NavBar/>

    <SubHome/>


    <HomePage />
    <!-- <router-view></router-view> -->

  </v-app>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';

import SubHome from './components/home/SubHome.vue';

import HomePage from './components/home/HomePage.vue';
export default {

  name: 'App',

  components: {
    NavBar,
    SubHome,
    HomePage
},

  data: () => ({
    //
  }),
};
</script>
