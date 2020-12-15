<template>
  <b-container fluid>
    <b-modal
      v-model="visible"
      id="modalNewArticle"
      title="Story Box"
      size="lg"
      @close="modalClose"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <div style="height: 470px">
        <b-form @submit="onSubmit" v-if="!modalModeProp.isView">
          <b-form-group
            id="titleFormGroup"
            label="Title"
            label-for="titleInput"
            style="text-align: left"
          >
            <b-form-input
              id="titleInput"
              v-model="article.title"
              type="text"
              required
              placeholder="Enter Title"
            />
          </b-form-group>
          <b-form-group
            id="articleFormGroup"
            label="Story"
            label-for="artlcleTextarea"
            style="text-align: left"
          >
            <b-form-textarea
              id="artlcleTextarea"
              v-model="article.content"
              type="text"
              required
              placeholder
              rows="14"
            />
          </b-form-group>
        </b-form>

        <div v-if="modalModeProp.isView">
          <h4><b>{{article.title}}</b></h4>
          <b-card-text class="small text-muted">{{article.createdDate}}</b-card-text>            
          <b-card-text style="margin-top: 45px">{{article.content}}</b-card-text>       
        </div>

      </div>
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary" @click="onSave" v-if="!modalModeProp.isView && !modalModeProp.isModify">저장</b-button>
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary" @click="onDelete" v-if="modalModeProp.isView || modalModeProp.isModify">삭제</b-button>
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary" @click="onModify" v-if="modalModeProp.isView || modalModeProp.isModify">수정</b-button>
        <b-button class="float-right" variant="primary" @click="modalClose">닫기</b-button>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalNewArticle",
  props: {
    visibleProp: {
      type: Boolean,
      default: false
    },
    modalModeProp: {
      type: Object
    },
    articleProp: {
      type: Object
    }
  },
  data() {
    return {
      headerBgVariant: "light",
      headerTextVariant: "dark",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "light",
      footerTextVariant: "dark",
      visible: false,
      modalMode: {},      
      article: {},
    };
  },
  watch: {
    visibleProp(value) {
      this.visible = value
    },    
    modalModeProp(value) {
      this.modalMode = value
    },
    articleProp(value) {
      this.article = value
    }
  },
  methods: {
    onSave(evt) {
      evt.preventDefault();
      this.onSubmit();
    },
    onSubmit(evt) {
      var self = this;
      var confirmResult = confirm("저장 하시겠습니까?");
      if (confirmResult) {
        let form = new FormData();
        form.append("title", this.article.title);
        form.append("content", this.article.content);

        axios
          .post("/api/article", form)
          .then(reponse => {
            console.log(reponse);
            self.modalClose();
            this.$parent.getArticles();
          })
          .catch(ex => {
            console.warn("ERROR!! : ", ex);
          });
      } else {
        return;
      }
    },
    onModify : function(evt) {
      evt.preventDefault();
      this.modalModeProp.isView = false
      this.modalModeProp.isModify = true
    },
    onDelete: function(evt) {
      var self = this;      
      var confirmResult = confirm("삭제 하시겠습니까?");
      if (confirmResult) {
        axios
          .delete("/api/article/" + this.article.articleId)
          .then(reponse => {
            console.log(reponse);
            self.modalClose();
            this.$parent.getArticles();
          })
          .catch(ex => {
            console.warn("ERROR!! : ", ex);
          });
      } else {
        return;
      }
    },
    modalClose: function() {
      this.$emit('closeModal');
    }
  }
};
</script>