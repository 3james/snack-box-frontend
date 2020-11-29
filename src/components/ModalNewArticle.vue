<template>
  <div>
    <b-modal
      v-model="show"
      id="modalNewArticle"
      title="New Article"
      size="lg"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <div>
        <b-form @submit="onSave" v-if="show">
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
            label="Article"
            label-for="artlcleTextarea"
            style="text-align: left"
          >
            <b-form-textarea
              id="artlcleTextarea"
              v-model="article"
              type="text"
              required
              placeholder
              rows="12"
            />
          </b-form-group>
        </b-form>
      </div>
      <div slot="modal-footer" class="w-100">
        <b-button class="float-right" style="margin-left: 5px" type="submit" variant="primary">Save</b-button>
        <b-button class="float-right" variant="primary" @click="modalClose">Close</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalNewArticle",
  data() {
    return {
      show: false,
      headerBgVariant: "light",
      headerTextVariant: "dark",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "light",
      footerTextVariant: "dark",
      title: "",
      article: ""
    };
  },
  methods: {
    onSave(evt) {
      var self = this;
      evt.preventDefault();

      var confirmResult = confirm("저장 하시겠습니까?");
      if (confirmResult) {
        let form = new FormData();
        form.append("title", this.title);
        form.append("article", this.article);

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
    modalClose: function() {
      this.title = "";
      this.article = "";
      this.show = false;
    }
  }
};
</script>