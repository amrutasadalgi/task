import vue from "vue"
import VueRouter from "vue-router"
// import HomePage from "../components/home/HomePage.vue"
import EducationalPage from "../components/pages/EducationalPage.vue"
import PersonalPage from "../components/pages/PersonalPage.vue"
import TechnologiesPage from "../components/pages/TechnologiesPage.vue"
import ExperiencePage from "../components/pages/ExperiencePage.vue"
vue.use(VueRouter)

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomePage,
  // },
  {
    path: "/education",
    name: "EducationalPage",
    component: EducationalPage,
  },
  {
    path: "/experience",
    name: "experience",
    component: ExperiencePage,
  },

  {
    path: "/personal",
    name: "personal",
    component: PersonalPage,
  },
  {
    path: "/tech",
    name: "tech",
    component: TechnologiesPage,
  },
];


const router = new VueRouter(
    {
        routes,
        mode:"history",
        base:process.env.BASE_URL
    }
);
export default router
