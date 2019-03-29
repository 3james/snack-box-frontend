<template>
  <div>
    <div class="b-container text-center pb-3">
      <b-button variant="primary" v-b-modal.modalNewArticle>New Article &raquo;</b-button>
      <ModalNewArticle/>
    </div>
    <div class="container">
      <b-card no-body border-variant v-for="list in lists" :key="list.articleId" class="mt-1">
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
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import ModalNewArticle from "@/components/ModalNewArticle.vue";
import axios from "axios";

export default {
  name: "Article",
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
        .then(response => {
          console.log(response.data);
          this.lists = response.data;
        })
        .catch(ex => {
          console.warn("ERROR!! : ", ex);
        });
    }
  },  
  data() {
    return {
      lists: null
      /*
      lists: [
        {
          id: "1",
          title: "First article!",
          article: "Hi Freinds !!!",
          createDate: "2019.03.08"
        },
        {
          id: "2",
          title: "어떤 프로그램 언어를 선택해야 할까요?",
          article: "Good Night !!!",
          createDate: "2019.02.03"
        },
        {
          id: "3",
          title: "Good News!!!!",
          article: "안녕하세요. 좋은 아침입니다. 오늘은 다음 주제로 ....",
          createDate: "2019.01.08"
        },
        {
          id: "4",
          title: "모바일 시스템 구조",
          article:
            "모바일 시스템의 일반적인 구조는 Hybrid App이 대세를 이뤄가고 있다.",
          createDate: "2019.01.02"
        }
      ]*/
    };
  }
};
</script>

<style>
.linksyle {
  color: #574545;
}
.linksyle:hover {
  color: #000000;
}

@media (min-width: 768px) {
  .container {
    width: 850px;
  }
}
</style>