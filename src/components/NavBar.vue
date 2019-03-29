<template>
  <div>
    <b-navbar fixed="top" sticky='true' class="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="px-2" href="#">Log In</b-nav-item>
        <a class="btn btn-outline-primary" href="#">Sign up</a>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>