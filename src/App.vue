<template>
  <div>
    <nav-bar/>
    <sns-main/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import SnsMain from '@/components/sns/SnsMain.vue';

export default {
  name: "app",
  components: {
    NavBar,
    SnsMain
  }
};
</script>
