<template>
  <div>
    <b-container fluid="lg" style="max-width: 1024px;">    
      <b-form class="form-bound" @submit="onSubmit" @reset="onReset">
        <div class="text-center page-title"><span>회원가입</span></div>
        <b-form-group
          id="input-group-5"
          label="이메일 주소:"
          label-for="input-5"
        >
          <b-input-group>
            <b-form-input
              id="input-5"
              v-model="form.email"
              type="email"              
              required
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="secondary">중복체크</b-button>
            </b-input-group-append>  
          </b-input-group>    
          <div class="valid-check-desc"><span>{{emailCheckDesc}}</span></div>      
        </b-form-group>

        <b-form-group class="form-group-single" id="input-group-2" label="패스워드:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.pwd"
            type="password"            
            required
          ></b-form-input>
        </b-form-group>        

        <b-form-group class="form-group-single" id="input-group-3" label="패스워드 확인:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.pwdConfirm"
            type="password"            
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
              v-model="form.name"
              type="text"                      
              required
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="secondary">중복체크</b-button>
            </b-input-group-append>  
          </b-input-group>         
          <div class="valid-check-desc"><span>{{nickCheckDesc}}</span></div>
        </b-form-group>

        <b-form-group class="form-group-single" label="성별:" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="btn-radios-1"
            v-model="form.sexSelected"
            :options="sexOptions"
            :aria-describedby="ariaDescribedby"
            button-variant="outline-primary"
            name="radios-btn-default"
            buttons
            required
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group id="input-group-3" label="연령대:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.ageSelected"
            :options="ageOptions"
            required
          ></b-form-select>
        </b-form-group>

        <b-button class="float-right" type="submit" variant="primary">저장</b-button>
        <b-button class="float-right" type="reset" variant="danger" style="margin-right: 5px">초기화</b-button>
      </b-form>
    </b-container>          
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      form: {
        email: '',
        pwd: '',
        pwdConfirm: '',
        name: '',        
        sexSelected: '',
        ageSelected: '',
      },
      emailCheckDesc: '',
      nickCheckDesc: '',      
      sexOptions: [
        { text: '남성', value: 'male' },
        { text: '여성', value: 'female' }
      ],
      ageOptions: [
        { text: '선택', value: '' }, 
        { text: '10대', value: '10' }, 
        { text: '20대', value: '20' },
        { text: '30대', value: '30' }, 
        { text: '40대', value: '40' }, 
        { text: '50대', value: '50' }, 
        { text: '60대', value: '60' },
        { text: '70대', value: '70' }
      ]      
    }
  }, 
  created() {
    
  },  
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.pwd = ''
      this.form.pwdConfirm = ''
      this.form.name = ''
      this.form.sexSelected = ''
      this.form.ageSelected = ''
    }
  }
}
</script>

<style scoped>

.page-title {
  margin: 20px 0 50px 0;
  font-weight: bold;
  font-size: 32px;
}

@media (max-height: 700px) {
  .page-title {
    margin: 0px 0 30px 0;
    font-size: 25px;
  }
}

.form-bound {
  border-width: .2rem;
  border: solid #f0f4f5;;
  padding: 35px 70px 55px 70px
}

@media (max-height: 700px) {
  .form-bound {
    padding: 35px 20px 55px 20px;
  }
}

.form-group {
  margin-bottom: 30px;
}

.form-group-single {
  margin-bottom: 40px;
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