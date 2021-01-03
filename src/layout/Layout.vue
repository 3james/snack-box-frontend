<template>
  <div>
    <frame-header/>
    <frame-body class="frame-body"/>
  </div>
</template>

<script>

import FrameHeader from '@/layout/frame/FrameHeader'
import FrameBody from '@/layout/frame/FrameBody'

export default {
  name: 'layout',
  components: {
    FrameHeader, 
    FrameBody
  }
}
</script>

<style scoped>

.frame-body {
  margin: 60px auto 0 auto;
  max-width: 900px;
}

</style>