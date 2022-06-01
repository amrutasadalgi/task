import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emp: {
      education: {
        name: "",
        degree: "",
        institution: "",
        passout: "",
        grade: "",
      },
      experience: {},
      personal: {},
      technology: {},
    },
  },
  mutations: {},
  actions: {},
  getters: {
    getEducation: state => state.emp.education,
    getExperience: state => state.emp.experience,
    getPersonal: state => state.emp.personal,
    getTechnology: state => state.emp.technology,
  },
});
