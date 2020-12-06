<template>
  <div>
    <b-container fluid="lg">
      <b-navbar  type="dark" variant="dark" fixed="top" sticky>
        <b-navbar-nav>
          <b-nav-item href="#">STORY BOX</b-nav-item>
        </b-navbar-nav>        
        <b-navbar-nav class="ml-auto">      
          <b-nav-item class="px-2" href="#">Log In</b-nav-item>
          <a class="btn btn-outline-primary" href="#">Sign up</a>
        </b-navbar-nav>
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

/* @media (min-width: 1200px) {
  #b-container {
    width: 1200px;
  }
} */

</style>