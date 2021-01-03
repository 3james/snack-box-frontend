<template>
  <div>
    <b-container class="container-p" fluid="md" align-v="center">
      <b-row align-v="center" align-h="center" style="height: 100vh; margin: 0">
        <b-col style="padding: 0">
          <b-form
            class="form-bound"
            @submit="onSubmit"
            @reset="onReset"
          >
            <div class="text-center page-title"><span>STORY BOX</span></div>
            <div>
              <b-form-group
                id="input-group-1"
                label="이메일 주소:"
                label-for="input-1"
                content-cols-sm
              >
                <b-input-group>
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    :disabled="emailDisabled"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button variant="outline-success" @click="checkEmail">{{
                      emailCheckBtnName
                    }}</b-button>
                  </b-input-group-append>
                </b-input-group>
                <div class="valid-check-desc">
                  <span>{{ emailCheckDesc }}</span>
                </div>
              </b-form-group>

              <b-form-group
                class="form-group-single"
                id="input-group-2"
                label="패스워드:"
                label-for="input-2"
                content-cols-lg="3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  minlength="1"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="form-group-single"
                id="input-group-3"
                label="패스워드 확인:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.passwordConfirm"
                  type="password"
                  minlength="1"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-4"
                label="닉네임:"
                label-for="input-4"
              >
                <b-input-group>
                  <b-form-input
                    id="input-4"
                    v-model="form.nickname"
                    type="text"
                    :minlength="nickMinlength"
                    required
                    :disabled="nickDisabled"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button
                      variant="outline-success"
                      @click="checkNickname"
                      >{{ nickCheckBtnName }}</b-button
                    >
                  </b-input-group-append>
                </b-input-group>
                <div class="valid-check-desc">
                  <span>{{ nickCheckDesc }}</span>
                </div>
              </b-form-group>

              <b-form-group
                id="input-group-5"
                class="form-group-single"
                label="성별:"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="btn-radios-1"
                  v-model="form.sex"
                  :options="sexOptions"
                  :aria-describedby="ariaDescribedby"
                  button-variant="outline-primary"
                  name="radios-btn-default"
                  buttons
                  required
                ></b-form-radio-group>
              </b-form-group>

              <b-form-group
                id="input-group-6"
                label="연령대:"
                label-for="input-6"
              >
                <b-form-select
                  id="input-6"
                  v-model="form.age"
                  :options="ageOptions"
                  required
                ></b-form-select>
              </b-form-group>
            </div>

            <div class="signup-button">
              <b-button type="reset" variant="danger" style="margin-right: 5px">초기화</b-button>
              <b-button type="submit" variant="primary">가입</b-button>
            </div>
            <div class="signup-text">계정이 이미 있으신가요?<span @click="goLogin">로그인</span></div>
          </b-form>
          <common-alert-message
            :message="alertMessage"
            :isVisible="alertVisible"
            @onClose="alertClose"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CommonMixin from "@/common/mixin/CommonMixin";
import axios from "axios";

export default {
  name: "SignUpPage",
  mixins: [CommonMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordConfirm: "",
        nickname: "",
        sex: "",
        age: "",
      },
      emailCheckBtnName: "중복체크",
      nickCheckBtnName: "중복체크",
      emailCheckDesc: "",
      nickCheckDesc: "",
      emailCheckResult: "",
      nickCheckResult: "",
      emailDisabled: false,
      nickDisabled: false,
      nickMinlength: 2,
      sexOptions: [
        { text: "남성", value: "male" },
        { text: "여성", value: "female" },
      ],
      ageOptions: [
        { text: "선택", value: "" },
        { text: "10대", value: "10" },
        { text: "20대", value: "20" },
        { text: "30대", value: "30" },
        { text: "40대", value: "40" },
        { text: "50대", value: "50" },
        { text: "60대", value: "60" },
        { text: "70대", value: "70" },
      ],
      alertMessage: "",
      alertVisible: false,
    };
  },
  watch: {
    emailCheckResult(value) {
      if (value) {
        this.emailDisabled = true;
        this.emailCheckBtnName = "초기화";
      } else {
        this.emailDisabled = false;
        this.emailCheckBtnName = "중복체크";
      }
    },
    nickCheckResult(value) {
      if (value) {
        this.nickDisabled = true;
        this.nickCheckBtnName = "초기화";
      } else {
        this.nickDisabled = false;
        this.nickCheckBtnName = "중복체크";
      }
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));

      if (this.emailCheckResult === "") {
        this.showAlert("이메일 중복체크를 해주십시요");
        return;
      } else if (!this.emailCheckResult) {
        this.showAlert("사용 불가능한 메일주소입니다.");
        return;
      }

      if (this.form.password !== this.form.passwordConfirm) {
        this.showAlert("패스워드 확인이 일치하지 않습니다.");
        return;
      }

      if (this.nickCheckResult === "") {
        this.showAlert("닉네임 중복체크를 해주십시요.");
        return;
      } else if (!this.nickCheckResult) {
        this.showAlert("사용 불가능한 닉네임입니다.");
        return;
      }

      this.$bvModal
        .msgBoxConfirm("저장 하시겠습니까?", this.confirmDialogOption)
        .then((confirmResult) => {
          if (confirmResult) {
            let url = "/api/user";
            let param = {
              email: this.form.email,
              password: this.form.password,
              nickname: this.form.nickname,
              sex: this.form.sex,
              age: this.form.age,
            };
            axios
              .post(url, param)
              .then((reponse) => {
                console.log(reponse);
                this.showAlert("회원 가입이 되었습니다.");
                this.onReset();
                this.$router.replace('/sns');
              })
              .catch((ex) => {
                console.warn("ERROR!! : ", ex);
              });
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    onReset(event) {
      event.preventDefault();

      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.passwordConfirm = "";
      this.form.nickname = "";
      this.form.sex = "";
      this.form.age = "";
      this.emailCheckResult = "";
      this.nickCheckResult = "";
      this.emailCheckDesc = "";
      this.nickCheckDesc = "";
    },
    checkEmail: function () {
      if (this.emailCheckResult) {
        this.emailCheckResult = "";
        this.emailCheckDesc = "";
        return;
      }

      if (this.form.email === undefined || this.form.email === "") {
        this.emailCheckDesc = "이메일을 입력해 주세요.";
        return;
      } else if (this.form.email.indexOf("@") === -1) {
        this.emailCheckDesc = "이메일 주소에 '@'를 포함해 주세요.";
        return;
      } else if (
        this.form.email.substring(this.form.email.indexOf("@") + 1).length < 1
      ) {
        this.emailCheckDesc = "'@' 뒷 부분을 입력해주세요.";
        return;
      }

      let url = "/api/user/" + this.form.email;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          if (res.data === null) {
            this.emailCheckDesc = "사용 가능한 메일주소입니다.";
            this.emailCheckResult = true;
          } else {
            this.emailCheckDesc = "사용 불가능한 메일주소입니다.";
            this.emailCheckResult = false;
          }
        })
        .catch((ex) => {
          console.warn("ERROR!! : ", ex);
        });
    },
    checkNickname: function () {
      if (this.nickCheckResult) {
        this.nickCheckResult = "";
        this.nickCheckDesc = "";
        return;
      }

      if (this.form.nickname === undefined || this.form.nickname === "") {
        this.nickCheckDesc = "닉네임을 입력해 주세요.";
        return;
      } else if (this.form.nickname.trim().length < this.nickMinlength) {
        this.nickCheckDesc = this.nickMinlength + "글자 이상이어야 합니다.";
        return;
      }

      let url = "/api/user/nick-dup-check/" + this.form.nickname;
      axios
        .get(encodeURI(url))
        .then((res) => {
          console.log(res);
          if (res.data === null) {
            this.nickCheckDesc = "사용 가능한 닉네임입니다.";
            this.nickCheckResult = true;
          } else {
            this.nickCheckDesc = "사용 불가능한 닉네임입니다.";
            this.nickCheckResult = false;
          }
        })
        .catch((ex) => {
          console.warn("ERROR!! : ", ex);
        });
    },
    goLogin: function() {
      this.$router.replace('/login');
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
  padding: 0;
}

.page-title {
  margin: 5px 0 30px 0;
  font-weight: bold;
  font-size: 33px;
  color: rgb(24, 23, 110);
  font-family: "Julee", cursive;
}

@media (max-width: 576px) {
  .page-title {
    margin: 0px 0 30px 0;
    font-size: 29px;
  }
}

.form-bound {
  max-width: 650px;
  background-color: white;
  margin: 0 auto;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: rgb(224, 218, 230);
  border-radius: 10px;
  padding: 35px 20px 1px 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 650px) {
  .form-bound {
    border-radius: 0px;
  }
}

.form-group {
  max-width: 550px;
  margin: 0 auto 20px auto;
}

.form-group-single {
  margin-bottom: 30px;
}

.valid-check-desc {
  height: 12px;
  padding-left: 8px;
}

.valid-check-desc span {
  color: #f76c5e;
  font-size: 12px;
}

.signup-button {
  max-width: 550px; 
  margin: 35px auto 10px; 
  text-align: right;
}

.signup-text {
  font-size: 17px;  
  max-width: 550px;
  margin: 20px auto 30px;
  text-align: center;
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