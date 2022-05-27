<template>
  <div>
    <div>
      <v-card>
        <v-app-bar absolute color="transparent" elevation="0">
         <!-- <v-img max-height="150" max-width="150" class="ma-5" src=""></v-img> -->
         <v-app-bar-title class="font-weight-bold display-1 white--text">Empo-Info </v-app-bar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="0"
                v-bind="attrs"
                v-on="on"
                color="transparent"
                class="white--text font-weight-bold"
              >
                Sign-up
              </v-btn>
            </template>
            <template>
              <div>
                <v-container class="d-flex grey lighten-5 elevation-4">
                  <v-card elevation="0">
                    <v-img
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                      max-width="500"
                      max-height="500"
                      class="ma-5"
                    ></v-img>
                  </v-card>
                  <validation-observer
                    ref="observer"
                    v-slot="{ invalid }"
                    class="ma-5"
                    width="900"
                  >
                    <form @submit.prevent="submit" style="width: 500px;">
                      <validation-provider name="name">
                        <v-text-field
                          v-model="name"
                          label="Enter Namee"
                          outlined
                          required
                          color="#1ed760"
                          class="log"
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider name="email">
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                          outlined
                          required
                          color="#1ed760"
                          class="log"
                        ></v-text-field>
                      </validation-provider>

                      <validation-provider v-slot="{ errors }">
                        <v-text-field
                          v-model="number"
                          :error-messages="errors"
                          label="Enter Mobile Number"
                          required
                          outlined
                          color="#1ed760"
                          class="log"
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider v-slot="{ errors }">
                        <v-text-field
                          v-model="password"
                          :error-messages="errors"
                          label="Password"
                          type="password"
                          required
                          outlined
                          color="#1ed760"
                          class="log"
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider v-slot="{ errors }">
                        <v-text-field
                          v-model="password"
                          :error-messages="errors"
                          label="Re-enter Password"
                          required
                          type="password"
                          outlined
                          color="#1ed760"
                          class="log"
                        ></v-text-field>
                      </validation-provider>
                      <v-btn class="mr-4" type="submit" :disabled="invalid">
                        Sign In
                      </v-btn>
                      <v-btn @click="dialog = false"> close </v-btn>
                    </form>
                  </validation-observer>
                </v-container>
              </div>
            </template>
          </v-dialog>
          <v-dialog v-model="box">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="0"
                color="transparent"
                v-bind="attrs"
                v-on="on"
                class="white--text font-weight-bold "
              >
                Login
              </v-btn>
            </template>
            <v-container class="d-flex grey lighten-5 elevation-4">
              <v-card elevation="0">
                <v-img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                  max-width="500"
                  max-height="500"
                  class="ma-5"
                ></v-img>
              </v-card>
              <validation-observer
                ref="observer"
                v-slot="{ invalid }"
                class="ma-5"
              >
                <form @submit.prevent="handlesubmit">
                  <v-container
                    class="d-flex flex-column align-center justify-center"
                  >
                    <v-btn rounded class="pa-7 my-3" width="400">
                      CONTINUE WITH PHONE NUMBER
                    </v-btn>
                    <v-btn rounded class="pa-7 mb-3" width="400">
                      CONTINUE WITH GOOGLE
                    </v-btn>
                    OR
                  </v-container>
                  <validation-provider name="email" rules="required|email">
                    <v-text-field
                      v-model="mail"
                      label="E-mail"
                      outlined
                      required
                      color="#1ed760"
                      class="log"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="Name">
                    <v-text-field
                      v-model="pass"
                      :error-messages="errors"
                      label="Password"
                      required
                      outlined
                      color="#1ed760"
                      class="log"
                    ></v-text-field>
                  </validation-provider>
                  <v-btn class="mr-4" type="submit" :disabled="invalid">
                    Log-In
                  </v-btn>
                  <v-btn @click="box = false"> close </v-btn>
                </form>
              </validation-observer>
            </v-container>
          </v-dialog>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="0"
                color="transparent"
                class="white--text font-weight-bold "
                v-bind="attrs"
                v-on="on"
              >
                More
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-app-bar-nav-icon
            class="white--text font-weight-bold title"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
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
        <v-list>
          <v-list-item-group
            v-model="group"
            active-class="white--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title class="white--text text--accent-4"
                >Featurs</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="white--text text--accent-4"
                >About</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="white--text text--accent-4"
                >Sign-in</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="white--text text--accent-4"
                >Log-in</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import {auth} from "../../apis/FireBase.js"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Education" },
      { title: "Experience" },
      { title: "Personal Info" },
      { title: "Technologies" },
    ],
    dialog: false,
    box: false,

    name: "",
    password: "",
    email: "",
    number: "",
    mail:"",
    pass:""
  }),
  methods: {
async   submit () {
      this.$refs.observer.validate();
try{
  await createUserWithEmailAndPassword(auth,this.email,this.password)
  this.$vToastify.success("successfully signed up")
}
catch(err){
  console.log(err)
}
    },
    async   handlesubmit () {
      this.$refs.observer.validate();
try{
  await signInWithEmailAndPassword(auth,this.mail,this.pass)
 this.$vToastify.success("successfully signed in")
}
catch(err){
  console.log(err)
  this.$vToastify.error(err)
}
    },
    clear() {
      this.password = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped></style>
