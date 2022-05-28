<template>
  <div>
    <p class="justify-end d-flex"><v-btn @click="GoToHome"> X </v-btn></p>
    <form class="pa-4">
      <v-select
        multiple
        v-model="languages"
        :items="languagesitems"
        :error-messages="languagesErrors"
        label="Languages known"
        required
        @change="$v.languages.$touch()"
        @blur="$v.languages.$touch()"
      ></v-select>
      <v-select
        multiple
        v-model="frontEnd"
        :items="frontEnditems"
        :error-messages="frontEndErrors"
        label="FrontEnd Technologies"
        required
        @change="$v.frontEnd.$touch()"
        @blur="$v.frontEnd.$touch()"
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </div>
</template>

<script>
import router from "@/router/CoustomRouter";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "TechnologiesPage",
  mixins: [validationMixin],
  validations: {
    languages: { required },
    frontEnd: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data() {
    return {
      languages: null,
      frontEnd: null,
      languagesitems: ["java","C","C++","C#","python","Ruby","Kotlin"],
      frontEnditems: ["HTML","CSS","Javascript","ReactJS","Angular","VueJS"],
      checkbox: false,
    };
  },

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 30 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      router.push("/");
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
    GoToHome() {
      router.push("/");
    },
  },
};
</script>

<style scoped></style>
