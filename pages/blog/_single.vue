<template>
  <div>
    <v-container>
      <v-img class="offset-lg-1 col-lg-10 mb-6" :src="articles.thumbnail" height="50vh"></v-img>
      <nuxt-content class="offset-lg-2 col-lg-8" :document="articles" />
    </v-container>
  </div>
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
  mounted(){
    this.$store.commit('menuOpaque', false);
  }
};
</script>

<style>
</style>