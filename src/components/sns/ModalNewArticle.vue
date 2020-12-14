<template>
  <b-container fluid>
    <b-modal
      v-model="visibleProp"
      id="modalNewArticle"
      title="Story is ..."
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
              v-model="title"
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
              v-model="content"
              type="text"
              required
              placeholder
              rows="14"
            />
          </b-form-group>
        </b-form>

        <div v-if="modalModeProp.isView">
          <h4><b>{{articleProp.title}}</b></h4>
          <b-card-text class="small text-muted">{{articleProp.createdDate}}</b-card-text>            
          <b-card-text style="margin-top: 45px">{{articleProp.content}}</b-card-text>       
        </div>

      </div>
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary" @click="onSave" v-if="!modalModeProp.isView">Save</b-button>
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary" @click="onDelete" v-if="modalModeProp.isView">Delete</b-button>
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary" @click="onModify" v-if="modalModeProp.isView">Modify</b-button>
        <b-button class="float-right" variant="primary" @click="modalClose">Close</b-button>
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
      article: {},
      title: this.articleProp.title,
      content: this.articleProp.content
    };
  },
  watch: {
    articleProp(value) {
      this.article = value
    },
    modalModeProp(value) {
      // alert(value.isView)
    }
  },
  methods: {
    onSave(evt) {
      evt.preventDefault();
      this.onSubmit();
    },
    onSubmit(evt) {
      var self = this;
      // evt.preventDefault();

      var confirmResult = confirm("저장 하시겠습니까?");
      if (confirmResult) {
        let form = new FormData();
        form.append("title", this.title);
        form.append("content", this.content);

        axios
          .post("/api/article", form)
          .then(reponse => {
            console.warn(reponse);
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
    onDelete: function() {
      alert('deleted!')
    },
    modalClose: function() {
      this.title = "";
      this.content = "";
      this.articleProp = {};
      this.modalModeProp = {};
      this.$emit('closeModal');
    }
  }
};
</script>