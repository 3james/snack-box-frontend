<template>
  <div>
    <NavBar/>
    <MainTitle/>
    <Article/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import MainTitle from "@/components/MainTitle.vue";
import Article from "@/components/Article.vue";

export default {
  name: "app",
  components: {
    NavBar,
    MainTitle,
    Article
  }
};
</script>
