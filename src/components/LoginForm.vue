<template>
  <v-container>
    <v-row justify="center" align-content="center">
      <v-col cols="md">
        <v-card-title> login </v-card-title>
        <v-form ref="form">
          <v-row justify="center" align-content="center">
            <v-col cols="10">
              <v-text-field label="パスワード" v-model="pw"> </v-text-field>
              <v-spacer></v-spacer>
              <v-btn depressed color="primary" @click="login()"></v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebaseApp from "../main";
import { getAuth, signWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default {
  name: "loginForm",
  data: () => ({
    email: "",
    pw: "",
  }),
  methods: {
    login: function () {
      signWithEmailAndPassword(auth, this.email, this.pw)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("create user success." + user);
          // ★成功レスポンスだった場合は『this.$router.push('/top')』で遷移します
          this.$router.push("/top");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode: " + errorCode);
          console.log("errorMessage: " + errorMessage);
          alert("認証失敗");
        });
    },
  },
};
</script>
<style scoped>
.signup {
  top: 500px;
}
</style>
