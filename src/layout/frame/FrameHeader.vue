<template>
  <div>
    <b-container style="max-width: 1024px">
      <b-navbar toggleable type="dark" variant="dark" style="padding: 3px 5px 3px 15px">
        <b-navbar-brand >STORY BOX</b-navbar-brand>
        <b-dropdown class="dropdown-style" size="sm" variant="outline-dark" right no-caret>
          <template #button-content>
            <b-button class="toggle-button" type="button" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </b-button>   
          </template>        
          <b-dropdown-item @click="sns" href="#">SNS</b-dropdown-item>
          <b-dropdown-item href="#">CHAT</b-dropdown-item>       
          <b-dropdown-divider></b-dropdown-divider>              
          <b-dropdown-item href="#">로그인</b-dropdown-item>
          <b-dropdown-item @click="sighUp">회원가입</b-dropdown-item>
        </b-dropdown>        
      </b-navbar>
    </b-container>
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

.toggle-button {
    color: rgba(255,255,255,.5);
    border-color: rgba(255,255,255,.1);
    padding: .25rem .75rem;
    font-size: 1.11rem;    
    line-height: 1;
    background-color: transparent;
    border-radius: .25rem;    
}

.toggle-button:hover {
  background-color: rgba(255,255,255,.1);
}

</style>