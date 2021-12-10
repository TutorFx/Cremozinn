<template>
  <div style="margin-bottom: 5000px;">
    <banner />
    <bannerform />
  </div>
</template>

<script>
export default {
  components: {
    banner: () => import("../components/shared/banner"),
    bannerform: () => import("../components/shared/bannerform")
  },
}
</script>

<style>

</style>