<template>
  <v-app>
    <NavBar/>
<<<<<<< HEAD
    <SubHome/>
    <router-view></router-view>
=======
    <HomePage />
    <!-- <router-view></router-view> -->
>>>>>>> 033d61d4ae1f6df95513a61bc7add35674cf68b3
  </v-app>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';
<<<<<<< HEAD
import SubHome from './components/home/SubHome.vue';
=======
import HomePage from './components/home/HomePage.vue';
>>>>>>> 033d61d4ae1f6df95513a61bc7add35674cf68b3
export default {

  name: 'App',

  components: {
    NavBar,
<<<<<<< HEAD
    SubHome
=======
    HomePage
>>>>>>> 033d61d4ae1f6df95513a61bc7add35674cf68b3
},

  data: () => ({
    //
  }),
};
</script>
