<template>
  <div>
    <b-container class="p-0 container-w" fluid="md">
      <b-form class="form-bound" @submit="onSubmit" @reset="onReset">
        <div class="text-center page-title"><span>회원가입</span></div>
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
              ></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-success">중복체크</b-button>
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
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="닉네임:" label-for="input-4">
            <b-input-group>
              <b-form-input
                id="input-4"
                v-model="form.nickname"
                type="text"
                required
              ></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-success">중복체크</b-button>
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

          <b-form-group id="input-group-6" label="연령대:" label-for="input-6">
            <b-form-select
              id="input-6"
              v-model="form.age"
              :options="ageOptions"
              required
            ></b-form-select>
          </b-form-group>
        </div>

        <div style="max-width: 550px; margin: 35px auto 20px; text-align: right">
          <b-button type="reset" variant="danger" style="margin-right: 5px">초기화</b-button>          
          <b-button type="submit" variant="primary">저장</b-button>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
      emailCheckDesc: "",
      nickCheckDesc: "",
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
    };
  },
  created() {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      var self = this;  
      var confirmResult = confirm("저장 하시겠습니까?");
      if (confirmResult) {
        let url = "/api/user";
        let param = {
          email: this.form.email,
          password: this.form.password,
          nickname: this.form.nickname,
          sex: this.form.sex,
          age: this.form.age
        };
        axios
          .post(url, param)
          .then((reponse) => {
            console.log(reponse);
            alert('저장되었습니다.')
          })
          .catch((ex) => {
            console.warn("ERROR!! : ", ex);
          });
      } else {
        return;
      }      
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
    },
  },
};
</script>

<style scoped>

.container-w {
  max-width: 900px;
}

.page-title {
  margin: 20px 0 50px 0;
  font-weight: bold;
  font-size: 32px;
}

@media (max-width: 768px) {
  .page-title {
    margin: 0px 0 30px 0;
    font-size: 25px;
  }
}

.form-bound {
  border-width: 0 2px 2px 2px;
  border-style: solid;
  border-color: rgb(247, 245, 248);
  padding: 35px 30px 0px 30px;
}

@media (max-width: 768px) {
  .form-bound {
    padding: 35px 10px 0px 10px;
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
</style>