<template>
  <div>
    <p class="justify-end d-flex"><v-btn @click="GoToHome"> X </v-btn></p>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="30"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="company"
        :error-messages="companyErrors"
        :counter="30"
        label="Company"
        required
        @input="$v.company.$touch()"
        @blur="$v.company.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="designation"
        :error-messages="designationErrors"
        :counter="30"
        label="Designation"
        required
        @input="$v.designation.$touch()"
        @blur="$v.designation.$touch()"
      ></v-text-field>

      <v-select
        v-model="skills"
        :items="items"
        :error-messages="skillsErrors"
        label="skills"
        required
        @change="$v.skills.$touch()"
        @blur="$v.skills.$touch()"
      ></v-select>

      <v-text-field
        v-model="yop"
        :error-messages="yopErrors"
        :counter="30"
        label="Year of passout"
        required
        @input="$v.yop.$touch()"
        @blur="$v.yop.$touch()"
      ></v-text-field>

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
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: "ExperiencePage",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    company: { required, maxLength: maxLength(30) },
    designation: { required, maxLength: maxLength(30) },
    skills: { required },
    yop: { required, maxLength: maxLength(30) },

    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data() {
    return {
      name: "",
      company: "",
      designation: "",
      yop: "",
      skills: null,
      items: [
        "Java",
        "Python",
        "javascript",
        "HTML",
        "CSS",
        "selenium",
        "excel",
        "reactJS",
        "VueJS",
      ],
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
        skillsErrors() {
      const errors = [];
      if (!this.$v.skills.$dirty) return errors;
      !this.$v.skills.required && errors.push("Item is required");
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

    companyErrors() {
      const errors = [];
      if (!this.$v.company.$dirty) return errors;
      !this.$v.company.maxLength &&
        errors.push("company must be at most 30 characters long");
      !this.$v.company.required && errors.push("company is required.");
      return errors;
    },
    designationErrors() {
      const errors = [];
      if (!this.$v.yop.$dirty) return errors;
      !this.$v.designation.maxLength &&
        errors.push("designation must be at most 30 characters long");
      !this.$v.designation.required && errors.push("designation is required.");
      return errors;
    },
    yopErrors() {
      const errors = [];
      if (!this.$v.yop.$dirty) return errors;
      !this.$v.yop.maxLength &&
        errors.push("year of passout must be at most 30 characters long");
      !this.$v.yop.required && errors.push("year of passout is required.");
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
      this.company = "";
      (this.designation = ""),
        (this.yop = ""),
        (this.skills = null),
        (this.checkbox = false);
    },
    GoToHome() {
      router.push("/");
    },
  },
};
</script>

<style scoped></style>
