<template>
  <div>
    <b-container class="container-p" fluid="md" align-v="center">
      <b-row align-v="center" align-h="center" style="height: 85vh">
        <b-col>
          <b-form class="form-bound" @submit="onSubmit">
            <div class="text-center page-title"><span>STORY BOX</span></div>
            <div>
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                content-cols-sm
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="이메일"
                  size="lg"
                  required
                  :disabled="emailDisabled"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group-single"
                id="input-group-2"
                label-for="input-2"
                content-cols-lg="3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="비밀번호"
                  size="lg"
                  minlength="1"
                  required
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="login-button">
              <b-button type="submit" variant="primary" block size="lg">로그인</b-button>
            </div>
            <div class="signup-text">계정이 없으신가요?<span @click="goSignUp">회원가입</span></div>
          </b-form>
        </b-col>
      </b-row>  
    </b-container>
    <common-alert-message
      :message="alertMessage"
      :isVisible="alertVisible"
      @onClose="alertClose"
    />        
  </div>
</template>

<script>
import CommonMixin from "@/common/mixin/CommonMixin";
import axios from "axios";

export default {
  name: "LoginPage",
  mixins: [CommonMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      emailCheckDesc: "",
      alertMessage: "",
      alertVisible: false,
    };
  },
  watch: {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));

      let url = "/api/login";
      let param = {
        email: this.form.email,
        password: this.form.password,
      };
      axios
        .post(url, param)
        .then((reponse) => {
          console.log(reponse);
          this.showAlert("로그인 되었습니다.");
          this.$router.replace('/sns');
        })
        .catch((ex) => {
          this.showAlert("이메일이나 비밀번호가 올바르지 않습니다.");
          console.warn("ERROR!! : ", ex);
        });

    },
    goSignUp: function() {
      this.$router.replace('/sign-up');
    },
    showAlert: function (alertMessage) {
      this.alertMessage = alertMessage;
      this.alertVisible = true;
    },
    alertClose: function () {
      this.alertMessage = "";
      this.alertVisible = false;
    },
  },
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@500&family=Big+Shoulders+Text:wght@600&family=Boogaloo&family=Bubbler+One&family=Ceviche+One&family=Courgette&family=Denk+One&family=Fredericka+the+Great&family=Galada&family=Galdeano&family=Julee&family=Londrina+Shadow&family=MedievalSharp&family=Niconne&family=Oleo+Script&family=Port+Lligat+Slab&family=Quintessential&family=Salsa&family=Sansita+Swashed&family=Sansita:wght@700&family=Tauri&display=swap");

.container-p {
  padding: 0 10 0 10;
}

.page-title {
  margin: 10px 0 40px 0;
  font-weight: bold;
  font-size: 45px;
  color: rgb(24, 23, 110);
  /* font-family: 'Courgette', cursive; */
  /* font-family: 'Oleo Script', cursive; */
  /* font-family: 'Sansita', sans-serif; */
  /* font-family: 'Fredericka the Great', cursive; */
  /* font-family: 'Boogaloo', cursive; */
  /* font-family: 'Niconne', cursive; */
  /* font-family: 'Sansita Swashed', cursive; */
  /* font-family: 'Ceviche One', cursive; */
  /* font-family: 'Denk One', sans-serif; */
  /* font-family: 'Galada', cursive; */
  /* font-family: 'Tauri', sans-serif; */
  /* font-family: 'Salsa', cursive; */
  /* font-family: 'Port Lligat Slab', serif; */
  /* font-family: 'Quintessential', cursive; */
  /* font-family: 'Big Shoulders Text', cursive; */
  font-family: "Julee", cursive;
  /* font-family: 'Bubbler One', sans-serif; */
  /* font-family: 'Baloo Paaji 2', cursive; */
  /* font-family: 'Londrina Shadow', cursive; */
  /* font-family: 'MedievalSharp', cursive; */
  /* font-family: 'Galdeano', sans-serif; */
}

@media (max-width: 576px) {
  .page-title {
    margin: 0px 0 30px 0;
    font-size: 30px;
  }
}

.form-bound {
  max-width: 620px;
  background-color: white;
  margin: 0 auto;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: rgb(224, 218, 230);
  border-radius: 10px;
  padding: 30px 20px 10px 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  max-width: 550px;
  margin: 0 auto 10px auto;
}

.login-button {
  max-width: 550px;
  margin: 20px auto 10px;
  text-align: center;
}

.signup-text {
  max-width: 550px;
  margin: 20px auto;
  text-align: center;
  font-size: 17px;
}

.signup-text span {
  cursor: pointer;
  color: rgb(101, 101, 247);
  margin-left: 10px;
}

.signup-text span:hover {
  font-weight: bold;
}

</style>