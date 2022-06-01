<template>
  <v-app>
    <NavBar/>
    <SubHome/>
    <HomePage />
    <!-- <router-view></router-view> -->
  <button @click="clicked">Fire base data</button>
  </v-app>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';

import SubHome from './components/home/SubHome.vue';

import HomePage from './components/home/HomePage.vue';
import {doc,getDoc} from "firebase/firestore"
import { db } from './apis/FireBase';
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
  methods: {
    async clicked(){
    const docRef = doc(db,"emp",["education"]);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  }
  }
};
</script>
