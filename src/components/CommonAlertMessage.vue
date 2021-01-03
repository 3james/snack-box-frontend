<template>
  <div>
    <b-alert
      :show="this.dismissCountDown"
      dismissible
      fade
      variant="warning"
      @dismiss-count-down="this.countDownChanged"
      class="position-fixed fixed-bottom alert-msg"
    >
      {{ this.message }}
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'CommonAlertMessage',
  props: {
    message: {
      type: String
    },  
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isVisible(value) {
      if(value) {
        this.showAlert();
      }
    }
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      if (dismissCountDown == 0) {
        this.closeAlert();
      }
    },
    showAlert: function() {
      this.dismissCountDown = this.dismissSecs
    },
    closeAlert: function() {
      this.$emit('onClose');
    }
  }
}
</script>

<style scoped>

.alert-msg {
  z-index: 2000; 
}

@media (min-width: 576px) {
  .alert-msg {
    width: 550px; 
    margin-bottom: 30px;
    left: 50%; transform: 
    translateX(-50%);
  }
}

</style>