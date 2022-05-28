<template>




  <div>
    <!-- bottom 4 cards -->
    <v-card class="mx-8 my-16" elevation="0">
      <v-row class="d-flex justify-center">
        <v-card v-for="(item, i) in items" :key="i" class="mr-3" >
          <v-col class="d-flex pa-0">
            <v-card :color="item.color" dark height="180" width="315">
              <div class="d-flex justify-space-between">
                <div>
                  <v-card-title
                    class="text-h6"
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

                <v-avatar class="ma-3 rounded-circle" size="125"  tile>
                  <v-img :src="item.src" class="rounded-circle" min-height="160" min-width="160"></v-img>
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
        </v-card>
      </v-row>
    </v-card>
  </div>


</template>
<script>


import SubHome from "./SubHome.vue";


export default {
  data() {
    return {
      datas: {},
      items: [
        {
          color: "#1F7087",
          src: "https://e7.pngegg.com/pngimages/503/795/png-clipart-case-study-student-research-learning-study-skills-student-people-public-relations-thumbnail.png",
          title: "Education",
          artist: "Education of People",
        },
        {
          color: "#1F7087",
          src: "https://thumbs.dreamstime.com/b/illustration-successful-businessman-employee-cartoon-glasses-falling-money-coin-above-illustration-vector-180887933.jpg",
          title: "Experience",
          artist: "Experience ",
        },
        {
          color: "#1F7087",
          src: "https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-round-icon-vector-illustration-graphic-design-135443422.jpg",
          title: "Personal Info",
          artist: "Personal info",
        },
        {
          color: "#1F7087",
          src: "https://images-na.ssl-images-amazon.com/images/I/61d94+SfKML.png",
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


  },
  components: { SubHome },

};
</script>

<style scoped>
</style>
