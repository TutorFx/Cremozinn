<template>
  <v-container><nuxt-content :document="articles" /></v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const articles = await $content("pagina", params.single).fetch();
      const [prev, next] = await $content("pagina")
        .only(["title", "slug"])
        .sortBy("updatedAt", "desc")
        .surround(params.single)
        .fetch();

      return {
        articles,
        prev,
        next,
      };
    } catch (error) {
      return redirect(301, "/404");
    }
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
};
</script>

<style>
</style>