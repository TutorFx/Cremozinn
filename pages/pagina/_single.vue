<template>
  <div><nuxt-content :document="articles" /></div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const articles = await $content("pagina", params.single).fetch();
      const [prev, next] = await $content("page")
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