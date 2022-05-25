<template>
    <div>

       <div >
 
    <v-card class="overflow-hidden" tile height="60">
      <v-app-bar
        color="#952175"
        dark 
      >
        <v-app-bar-title>Dev Yanta</v-app-bar-title>
        <v-spacer></v-spacer> <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="0"
          v-bind="attrs"
          v-on="on"
         color="#952175"
        >
          More
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
    </v-card>
     <v-navigation-drawer
      v-model="drawer"
      absolute
      class="mt-16 align-center"
      width="1500"
      height="230"
      color="grey"
     elevation-1
    >
      <v-list
      >
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title class="white--text text--accent-4">Featurs</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="white--text text--accent-4">About</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="white--text text--accent-4">Sign-in</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="white--text text--accent-4">Log-in</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
  
</div>
  
    </div>
</template>

<script>
    export default {
       data: () => ({
      drawer: false,
      group: null,
       items: [
        { title: 'Education' },
        { title: 'Experience' },
        { title: 'Personal Info' },
        { title: 'Technologies' },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    }, 
    }
</script>

<style scoped>

</style>