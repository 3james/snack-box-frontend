<template>
  <div>
    <b-container fluid="lg">
      <ModalNewArticle/>       

      <b-card no-body align="center" class="mb-1 overflow-hidden">
        <b-row no-gutters>
          <b-col md="8">
            <b-card-img src="https://picsum.photos/1024/370/?image=41" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="4">
            <b-card-body title="STORY BOX">
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
      // mainProps: {height: 250},
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

/* .mainImage {
  background: url('https://picsum.photos/1024/480/?image=41') no-repeat center;
  background-size: 100%;
  height: 250px;
} */

/* .shadow {
  background-color: rgb(209, 209, 209, 0.65);
  background-size: 100%;
  height: 250px;
} */

/* .main-top image {
  max-height: 200px;
}

.btn {
  margin-top: 30px;
} */

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