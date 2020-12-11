<template>
  <div>
    <b-container fluid="lg" style="max-width: 1024px">
      <b-navbar toggleable type="dark" variant="dark" fixed="top" sticky style="padding: 3px 5px 3px 15px">
        <b-navbar-brand href="#">STORY BOX</b-navbar-brand>
        <!-- <b-navbar-nav class="ml-auto">      
          <b-nav-item class="px-2" href="#">Log In</b-nav-item>
          <a class="btn btn-outline-primary" href="#">Sign up</a>
        </b-navbar-nav> -->

        <!-- <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>        
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Log In</b-nav-item>
            <b-nav-item href="#">Sign up</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>         -->
        <b-dropdown size="sm" variant="outline-dark" right no-caret no-flip class="m-0 dropdown-style">
          <template #button-content>
            <b-button class="navbar-toggler" style="height#: 33px" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" style="height#: 19px"></span>
            </b-button>   
          </template>        
          <b-dropdown-item active href="#">SNS</b-dropdown-item>
          <b-dropdown-item href="#">CHAT</b-dropdown-item>       
          <b-dropdown-divider></b-dropdown-divider>              
          <b-dropdown-item href="#">Log in</b-dropdown-item>
          <b-dropdown-item href="#">Sign up</b-dropdown-item>
        </b-dropdown>        
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

.b-dropdown-item {
  text-align: center;
}

/* @media (min-width: 1200px) {
  #b-container {
    width: 1200px;
  }
} */

</style>