<template>
  <div>
    <b-container fluid="lg" style="max-width: 1024px">
      <ModalNewArticle/>       

      <b-card no-body border-variant="info" class="mb-1 border-0 rounded-0 text-center overflow-hidden">
        <b-row no-gutters align-v="center" style="background-color: #e9e9e9;">
          <b-col md="8">
            <b-card-img src="https://picsum.photos/1024/370/?image=41" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="4" >
            <!-- <b-card-body title="STORY BOX"> -->
            <b-card-body>
              <b-card-text>
                 Draw your story. Put your story !!
              </b-card-text>
              <b-button variant="primary" v-b-modal.modalNewArticle>New Story &raquo;</b-button>              
            </b-card-body>
          </b-col>
        </b-row>        
      </b-card> 

      <b-card class="mb-1" no-body border-variant v-for="list in lists" :key="list.articleId">
        <b-card-body>
          <b-link href style="text-decoration: none;">
            <h5 class="linksyle">
              <b>{{list.title}}</b>
            </h5>
          </b-link>
          <b-card-text>
            <b-link href class="linksyle" style="text-decoration: none;">{{list.article}}</b-link>
          </b-card-text>
          <b-card-text class="small text-muted">{{list.createDate}}</b-card-text>
        </b-card-body>
      </b-card>
      <b-card v-if="this.lists.length === 0">
        <b-card-body>
          <b-card-text class="text-center">{{"There is no data"}}</b-card-text>
        </b-card-body>
      </b-card>       
    </b-container>              
  </div>
</template>


<script>
// @ is an alias to /src
import ModalNewArticle from "@/components/sns/ModalNewArticle.vue";
import axios from "axios";

export default {
  name: "SnsMain",
  data() {
    return {
      lists: []
    }
  },    
  components: {
    ModalNewArticle
  },
  created: function() {
    this.getArticles();
  },
  methods: {
    getArticles: function() {
      axios
        .get("/api/articles")
        .then(res => {
          console.log(res.data);
          this.lists = res.data;     
        })
        .catch(ex => {
          console.warn("ERROR!! : ", ex);
        });
    }
  }
};
</script>

<style scoped>

.linksyle {
  color: #574545;
}

.linksyle:hover {
  color: #000000;
}

@media (max-height: 200px) {
  .b-card {
    max-height: 300px;
  }
}

</style>