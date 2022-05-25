<template>
  <div>
      
    <!-- bottom 4 cards -->
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>

                  <v-btn class="ml-2 mt-5" outlined rounded small>
                    Update
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src" class="rounded-circle"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: {},
      items: [
        {
          color: "#1F7087",
          src: "https://bit.ly/3yUuBHh",
          title: "Education",
          artist: "Education of People",
        },
        {
          color: "#1F7087",
          src: "https://shiftworkplace.com/wp-content/uploads/2017/06/Experience-photo.jpg",
          title: "Experience",
          artist: "Experience ",
        },
        {
          color: "#1F7087",
          src: "https://cdn3.iconfinder.com/data/icons/flat-rounded-7/50/617-512.png",
          title: "Personal Info",
          artist: "Personal info of People",
        },
        {
          color: "#1F7087",
          src: "https://ps-attachments.s3.amazonaws.com/cc810a17-c903-405a-b914-be7622637dc2/ixTAUT5DNBKQzZaBAixIkA.jpg",
          title: "Technologies",
          artist: "Technologies used",
        },
      ],
      show: false,
    };
  },
};
</script>

<style scoped></style>
