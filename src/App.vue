<template>
  <v-app>
    <NavBar/>
    <SubHome/>
    <HomePage />
<TeamUnity/>
  </v-app>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';

import SubHome from './components/home/SubHome.vue';

import HomePage from './components/home/HomePage.vue';
import TeamUnity from './components/slides/TeamUnity.vue';
export default {

  name: 'App',

  components: {
    NavBar,
    SubHome,
    HomePage,
    TeamUnity
},

  data: () => ({
    //
  }),
};
</script>
