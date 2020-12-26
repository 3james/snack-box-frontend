<template>
  <div>
    <b-container fluid="lg" style="max-width: 1024px; margin-bottom: 20px">
      <new-article-modal
        :visibleProp="articalModalVisible"
        :articleProp="articleForProp"
        :modalModeProp="modalModeForProp"
        @closeModal="onClose">       
      </new-article-modal>

      <b-card class="mb-1 border-0 rounded-0 text-center overflow-hidden" no-body border-variant="info">
        <b-row class="top-banner" no-gutters align-v="center" >
          <b-col md="8">
            <b-card-img class="rounded-0 card-img" src="https://picsum.photos/1024/370/?image=71" alt="Image"></b-card-img>
          </b-col>
          <b-col md="4" >
            <b-card-body>
              <b-card-text>
                 <h5><b>Write Your Story !</b></h5>
              </b-card-text>
              <b-button variant="primary" @click="popupNewModal()">New Story &raquo;</b-button>              
            </b-card-body>
          </b-col>
        </b-row>        
      </b-card> 

      <b-card class="mb-0 b-card-select rounded-0 wrap" 
              no-body 
              border-variant="link" 
              v-for="article in articleList" 
              :key="article.articleId" 
              @click="popupDetailModal(article)">
        <b-card-body>
          <b-link style="text-decoration: none;">
            <span class="linksyle list-title">
              <b>{{article.title}}</b>
            </span>
          </b-link>
          <b-card-text class="font-gray list-content">
            {{(article.content !== null && article.content.length > 50) ? article.content.substr(0, 50) + ' ......' : article.content}}
          </b-card-text>       
          <b-card-text class="small text-muted">{{article.createdDate}}</b-card-text>
        </b-card-body>
        <!-- <template #footer>
          <small class="text-muted">Last updated {{list.createdDate}}</small>
        </template>            -->
      </b-card>

      <b-card v-if="this.articleList.length === 0">
        <b-card-body>
          <b-card-text class="text-center">{{"There is no data"}}</b-card-text>
        </b-card-body>
      </b-card>
      
    </b-container>              
  </div>
</template>


<script>
// @ is an alias to /src
import NewArticleModal from "@/page/sns/NewArticleModal.vue";
import axios from "axios";

export default {
  name: "SnsMain",
  components: {
    NewArticleModal
  },  
  data() {
    return {
      articleList: [],
      articalModalVisible: false,
      articleForProp: {},
      modalModeForProp: {
        isCreate: false,
        isView: false,
        isModify: false
      }
    }
  },     
  created() {
    this.getArticles();
  },
  methods: {
    getArticles: function() {
      axios
        .get("/api/articles")
        .then(res => {
          console.log(res.data);
          this.articleList = res.data;     
        })
        .catch(ex => {
          console.warn("ERROR!! : ", ex);
        });
    },
    popupNewModal: function() {
      this.articleForProp = {};

      this.modalModeForProp.isCreate = true;
      this.modalModeForProp.isView = false;
      this.modalModeForProp.isModify = false;

      this.articalModalVisible = !this.articalModalVisible;
    },
    popupDetailModal: function(article) {      
      this.articleForProp = article;

      this.modalModeForProp.isCreate = false;
      this.modalModeForProp.isView = true;
      this.modalModeForProp.isModify = false;

      this.articalModalVisible = !this.articalModalVisible;
    },
    onClose: function() {
      this.articalModalVisible = false;
    }
  }
};
</script>

<style scoped>

.top-banner {
  background-color: #f3f1f1;
}

.list-title {
  font-size: 17px;
}

.list-content {
  margin-top: 7px;
}

.b-card-select {
  border: 0.1px solid rgb(224, 218, 230)
}

.b-card-select:hover {
  cursor: pointer;
  /* border: 1px solid rgb(166, 165, 168) */
  border: 0.1px solid rgb(176, 161, 189);
  background-color: #f5f4f8;
}

.b-card-select .linksyle {
  color: #645d5d;
  /* color: #574545; */
}

.b-card-select:hover .linksyle {
  color: #000000;
}

.b-card-select .font-gray {
  color: #918a8a;
}

.card-img {
  height: 220px
}

.wrap {
  word-wrap: break-word;
  word-break: break-word;
  text-overflow: ellipsis;
}

@media (max-height: 700px) {
  .b-card-select {
    max-height: 150px;
  }
}

@media (max-height: 700px) {
  .card-img {
    height: 170px
  }
}

</style>