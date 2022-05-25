<template>
    <div>
<v-container class="d-flex">
     <v-card
     elevation="5"
    class="mx-auto"
    width="550"
    height="300"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          ID
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Name
        </v-list-item-title>  <v-list-item-title class=" mb-1">
          Designation
        </v-list-item-title>
<v-list-item-title class=" mb-1">
          email id
        </v-list-item-title>  <v-list-item-title class=" mb-1">
phone
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
      
    </v-card-actions>
  <v-container>
         <v-progress-linear
      color="light-blue"
      height="10"
      value="10"
      striped
      rounded
    ></v-progress-linear>
  </v-container>
  </v-card>
   <v-card
     elevation="5"
    class="mx-auto"
     width="550"
     height="300"

    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>