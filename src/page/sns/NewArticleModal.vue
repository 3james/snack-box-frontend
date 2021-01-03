<template>
  <b-container fluid>
    <b-modal
      v-model="visible"
      id="modalNewArticle"
      title="STORY BOX"
      size="lg"
      @close="modalClose"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"      
    >
      <div style="height: 470px; padding: 0 10px">
        <b-form @submit="onSubmit" v-if="modalModeProp.isCreate || modalModeProp.isModify">
          <b-form-group
            id="titleFormGroup"
            label="Title"
            label-for="titleInput"
            style="text-align: left"
          >
            <b-form-input
              id="titleInput"
              v-model="editArticle.title"
              type="text"
              required
              maxlength="80"
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
              v-model="editArticle.content"
              type="text"
              required
              rows="14"
              maxlength="3000"
            />
          </b-form-group>
          <b-button ref="submitButton" class="float-right"  style="margin-left: 5px; display:none" type="submit" variant="primary">저장</b-button>          
          <!-- <b-button class="float-right" variant="primary" @click="modalClose">닫기</b-button> -->
        </b-form>

        <div
          v-if="modalModeProp.isView"
          style="height: 470px; overflow-y: auto"
        >
          <h5>
            <b>{{ article.title }}</b>
          </h5>
          <b-card-text class="small text-muted" size="lg">{{
            article.createdDate
          }}</b-card-text>
          <!-- <b-card-text style="margin-top: 35px">{{
            article.content
          }}</b-card-text> -->
          <div style="border-bottom: 2px solid rgb(224, 218, 230, 0.5)"></div>
          <p v-html="handleNewLine(article.content)" style="margin-top: 35px"></p>
        </div>
      </div>
      <div slot="modal-footer" class="w-100">
        <b-button
          class="float-right"
          style="margin-left: 5px"
          type="submit"
          variant="primary"
          @click="onSave"
          v-if="modalModeProp.isCreate"
          >저장</b-button
        >
        <b-button
          class="float-right"
          style="margin-left: 5px"
          type="submit"
          variant="primary"
          @click="onDelete"
          v-if="modalModeProp.isView || modalModeProp.isModify"
          >삭제</b-button
        >
        <b-button
          class="float-right"
          style="margin-left: 5px"
          type="submit"
          variant="primary"
          @click="onModify"
          v-if="modalModeProp.isView || modalModeProp.isModify"
          >수정</b-button
        >
        <b-button class="float-right" variant="primary" @click="modalClose"
          >닫기</b-button
        >
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import axios from "axios";
import CommonMixin from '@/common/mixin/CommonMixin'

export default {
  name: "NewArticleModeal",
  mixins: [CommonMixin],    
  props: {
    visibleProp: {
      type: Boolean,
      default: false,
    },
    modalModeProp: {
      type: Object,
    },
    articleProp: {
      type: Object,
    },
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
      editArticle: {},
    };
  },
  watch: {
    visibleProp(value) {
      this.visible = value;
      this.editArticle = Object.assign({}, this.articleProp);
    },
    modalModeProp(value) {
      this.modalMode = value;
    },
    articleProp(value) {
      this.article = value;
    },
  },
  methods: {  
    onSave(event) {    
      this.$refs.submitButton.click();  
      event.preventDefault();    
    },
    onSubmit() {
      var self = this;  

      this.$bvModal.msgBoxConfirm('저장 하시겠습니까?', this.confirmDialogOption)
        .then(confirmResult => {
          if (confirmResult) {
            let url = "/api/article";
            let param = {
              title: this.editArticle.title,
              content: this.editArticle.content,
            };
            axios
              .post(url, param)
              .then((reponse) => {
                console.log(reponse);
                self.modalClose();
                this.$parent.getArticles();
              })
              .catch((ex) => {
                console.warn("ERROR!! : ", ex);
              });
          }
      })
        .catch(err => {
          console.warn(err);
      })
    },
    onModify: function (event) {
      event.preventDefault();
      if (this.modalModeProp.isView) {
        this.modalModeProp.isCreate = false;
        this.modalModeProp.isView = false;
        this.modalModeProp.isModify = true;
        return;
      }

      var self = this;

      this.$bvModal.msgBoxConfirm('수정 하시겠습니까?', this.confirmDialogOption)
        .then(confirmResult => {
          if (confirmResult) {
            let url = "/api/article/" + this.article.articleId;
            let param = {
              title: this.editArticle.title,
              content: this.editArticle.content,
            };
            axios
              .put(url, param)
              .then((reponse) => {
                console.log(reponse);
                self.modalClose();
                this.$parent.getArticles();
              })
              .catch((ex) => {
                console.warn("ERROR!! : ", ex);
              });
          }
      })
        .catch(err => {
          console.warn(err);
      })
    },
    onDelete: function () {
      var self = this;
      this.$bvModal.msgBoxConfirm('삭제 하시겠습니까?', this.confirmDialogOption)
        .then(confirmResult => {
          if (confirmResult) {
            axios
              .delete("/api/article/" + this.article.articleId)
              .then((reponse) => {
                console.log(reponse);
                self.modalClose();
                this.$parent.getArticles();
              })
              .catch((ex) => {
                console.warn("ERROR!! : ", ex);
              });
          }
      })
        .catch(err => {
          console.warn(err);
      })
    
    },
    modalClose: function () {
      this.$emit("closeModal");
      this.visible = false;
    },
    handleNewLine: function(str) {    
    return String(str).replace(/(?:\r\n|\r|\n)/g,"</br>");
   }
  },
};
</script>

<style scoped>

div {
  word-wrap: break-word;
  word-break: break-word;
  text-overflow: clip;
}

</style>