<template>
  <div>    
    <b-navbar class="navbar" type="light" variant="light" fixed="top" sticky>
      <b-container class="container-w">
        <b-navbar-brand class="d-flex justify-content-between">STORY BOX</b-navbar-brand>
        <b-dropdown class="dropdown-style" size="sm" variant="outline-secondary" right no-caret>
          <template #button-content>
            <b-button class="toggle-button" type="button">
              <span class="navbar-toggler-icon"></span>
            </b-button>   
          </template>        
          <b-dropdown-item @click="sns" href="#">SNS</b-dropdown-item>
          <b-dropdown-item href="#">CHAT</b-dropdown-item>       
          <b-dropdown-divider></b-dropdown-divider>              
          <b-dropdown-item href="#">로그인</b-dropdown-item>
          <b-dropdown-item @click="sighUp">회원가입</b-dropdown-item>
        </b-dropdown>    
      </b-container>            
    </b-navbar>    
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    sns: function() {
      this.$router.push('/sns');
    },    
    sighUp: function() {
      this.$router.push('/sign-up');
    }
  }
}
</script>

<style scoped>

.container-w {
  max-width: 900px;
}

.navbar {
  position: fixed;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgb(224, 218, 230)
}

.toggle-button {
    border-width: 0;
    padding: .1rem .5rem;
    font-size: 1.11rem;    
    line-height: 1;
    background-color: transparent;
    border-radius: .25rem;    
}

</style>