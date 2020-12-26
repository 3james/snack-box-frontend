<template>
  <div>
    <frame-header/>
    <router-view/>
  </div>
</template>

<script>

import FrameHeader from '@/layout/frame/FrameHeader'

export default {
    name: 'layout',
    components: {FrameHeader}
}
</script>