<template>
  <div>
    <p class="justify-end d-flex"><v-btn @click="GoToHome"> X </v-btn></p>
    <form class="pa-4">
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
        v-model="degree"
        :error-messages="degreeErrors"
        :counter="30"
        label="Degree"
        required
        @input="$v.degree.$touch()"
        @blur="$v.degree.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="institution"
        :error-messages="institutionErrors"
        :counter="30"
        label="Institution Name"
        required
        @input="$v.institution.$touch()"
        @blur="$v.institution.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="passout"
        :error-messages="passoutErrors"
        :counter="30"
        label="Passout"
        required
        @input="$v.passout.$touch()"
        @blur="$v.passout.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="grade"
        :error-messages="gradeErrors"
        :counter="30"
        label="Grade"
        required
        @input="$v.grade.$touch()"
        @blur="$v.grade.$touch()"
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
import { db } from "../../apis/FireBase.js";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "EducationalPage",
  props: ["dialog1"],
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    degree: { required, maxLength: maxLength(30) },
    institution: { required, maxLength: maxLength(30) },
    passout: { required, maxLength: maxLength(30) },
    grade: { required, maxLength: maxLength(30) },

    checkbox: {
      checked(val) {
        return val;
      },
    },
  },
  data() {
    return {
      name: "",
      degree: "",
      institution: "",
      passout: "",
      grade: "",
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

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 30 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    degreeErrors() {
      const errors = [];
      if (!this.$v.degree.$dirty) return errors;
      !this.$v.degree.maxLength &&
        errors.push("degree must be at most 30 characters long");
      !this.$v.degree.required && errors.push("degree is required.");
      return errors;
    },
    institutionErrors() {
      const errors = [];
      if (!this.$v.institution.$dirty) return errors;
      !this.$v.institution.maxLength &&
        errors.push("institution must be at most 30 characters long");
      !this.$v.institution.required && errors.push("institution is required.");
      return errors;
    },
    passoutErrors() {
      const errors = [];
      if (!this.$v.passout.$dirty) return errors;
      !this.$v.passout.maxLength &&
        errors.push("passout must be at most 30 characters long");
      !this.$v.passout.required && errors.push("passout is required.");
      return errors;
    },
    gradeErrors() {
      const errors = [];
      if (!this.$v.grade.$dirty) return errors;
      !this.$v.grade.maxLength &&
        errors.push("grade must be at most 30 characters long");
      !this.$v.grade.required && errors.push("grade is required.");
      return errors;
    },
  },

  methods: {
    async submit() {
      this.$v.$touch(); //vuelidate code
      let payload = {
        name: this.name,
        degree: this.degree,
        institution: this.institution,
        passout: this.passout,
        grade: this.grade,
      };
      await setDoc(doc(db, "emp", ["education"]), payload);
      router.push("/"); //for router
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.degree = "";
      (this.institution = ""),
        (this.passout = ""),
        (this.grade = ""),
        (this.checkbox = false);
    },
    GoToHome() {
      this.$emit("close1");
      router.push("/");
    },
  },
};
</script>

<style scoped></style>
