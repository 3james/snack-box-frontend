<script>

export default {
  name: 'CommonMixin',
  data() {
    return {  
      confirmDialogOption: {
        title: 'Confirm',
        size: 'sm',
        okVariant: 'primary',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }
    }
  }
}

</script>