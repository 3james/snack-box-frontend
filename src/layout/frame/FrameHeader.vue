<template>
  <div>    
    <b-navbar class="navbar" type="light" variant="light" fixed="top" sticky>
      <b-container class="container-w">
        <b-navbar-brand class="d-flex justify-content-between logo">STORY BOX</b-navbar-brand>
        <b-dropdown class="dropdown-style" size="sm" variant="outline-secondary" right no-caret>
          <template #button-content>
            <b-button class="toggle-button" type="button">
              <span class="navbar-toggler-icon"></span>
            </b-button>   
          </template>        
          <b-dropdown-item @click="sns" href="#">SNS</b-dropdown-item>
          <b-dropdown-item href="#">CHAT</b-dropdown-item>       
          <b-dropdown-divider></b-dropdown-divider>              
          <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
        </b-dropdown>    
      </b-container>            
    </b-navbar>    
  </div>
</template>

<script>
export default {
  name: 'FrameHeader',
  methods: {
    sns: function() {
      this.$router.replace('/sns');
    },        
    logout: function() {
      this.$router.replace('/login');
    },    
  }
}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@500&family=Big+Shoulders+Text:wght@600&family=Boogaloo&family=Bubbler+One&family=Ceviche+One&family=Courgette&family=Denk+One&family=Fredericka+the+Great&family=Galada&family=Galdeano&family=Julee&family=Londrina+Shadow&family=MedievalSharp&family=Niconne&family=Oleo+Script&family=Port+Lligat+Slab&family=Quintessential&family=Salsa&family=Sansita+Swashed&family=Sansita:wght@700&family=Tauri&display=swap");

.container-w {
  max-width: 900px;
}

.navbar {
  height: 60px;
  position: fixed;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: rgb(224, 218, 230)
}

.logo {
  font-family: "Julee", cursive;
  font-weight: bold;
  font-size: 25px;
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