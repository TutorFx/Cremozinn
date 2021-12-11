<template>
  <div>
    <banner />
    <bannerform />
    <provasocial />
    <textbox />
  </div>
</template>

<script>
import Provasocial from '../components/shared/provasocial.vue'
export default {
  components: {
    banner: () => import("../components/shared/banner"),
    bannerform: () => import("../components/shared/bannerform"),
    textbox: () => import("../components/shared/textbox"),
    provasocial: () => import("../components/shared/provasocial")
  },
}
</script>

<style>

</style>