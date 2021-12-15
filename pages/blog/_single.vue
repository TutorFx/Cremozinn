<template>
  <nuxt-content :document="articles" />
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const articles = await $content("blog", params.single).fetch();

      return {
        articles,
      };
    } catch (error) {
      return redirect(301, "/404");
    }
  },
};
</script>

<style>
</style>