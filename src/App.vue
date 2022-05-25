<template>
  <v-app>
    <NavBar/>
    <SubHome/>
    <router-view></router-view>
  </v-app>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';
import SubHome from './components/home/SubHome.vue';
export default {

  name: 'App',

  components: {
    NavBar,
    SubHome
},

  data: () => ({
    //
  }),
};
</script>
