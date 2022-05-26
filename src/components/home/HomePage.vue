<template>
<<<<<<< HEAD
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
=======

  <div>
    <SubHome />
    <!-- bottom 4 cards -->
    <v-container>
      <v-row dense>
        <v-container v-for="(item, i) in items" :key="i">
          <v-col cols="12">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="text-h5"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      v-if="i == 0"
                      @click="changePath"
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/education"
                    >
                      Update
                    </v-btn>
                    <v-btn
                      v-if="i == 1"
                      @click="changePath"
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/experience"
                    >
                      Update
                    </v-btn>
                    <v-btn
                      v-if="i == 2"
                      @click="changePath"
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/personal"
                    >
                      Update
                    </v-btn>
                    <v-btn
                      v-if="i == 3"
                      @click="changePath"
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                      to="/tech"
                    >
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

          <router-view
            v-slot="{ EducationalPage }"
            v-if="path == '/education'"
            v-show="i == 0"
          >
            <component :is="EducationalPage" view-prop="value"/>
          </router-view>
          <router-view
            v-slot="{ EducationalPage }"
            v-if="path == '/experience'"
            v-show="i == 1"
          >
            <component :is="EducationalPage" view-prop="value" />
          </router-view>
          <router-view
            v-slot="{ PersonalPage }"
            v-if="path == '/personal'"
            v-show="i == 2"
          >
            <component :is="PersonalPage" view-prop="value" />
          </router-view>
          <router-view
            v-slot="{ TechnologiesPage }"
            v-if="path == '/tech'"
            v-show="i == 3"
          >
            <component :is="TechnologiesPage" view-prop="value" />
          </router-view>
        </v-container>
      </v-row>
    </v-container>
  </div>

>>>>>>> 033d61d4ae1f6df95513a61bc7add35674cf68b3
</template>
<script>
<<<<<<< HEAD
=======
import SubHome from "./SubHome.vue";

>>>>>>> 033d61d4ae1f6df95513a61bc7add35674cf68b3
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
      path: window.location.pathname,
    };
  },
  methods: {
    changePath: function () {
      this.path = window.location.pathname;
    },
<<<<<<< HEAD

=======
  },
  components: { SubHome },
>>>>>>> 033d61d4ae1f6df95513a61bc7add35674cf68b3
};
</script>

<style scoped>
</style>
