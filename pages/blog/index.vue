<template>
  <v-container>
    <blog-wrapper :blog="articles" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("blog").sortBy('updatedAt', 'desc').fetch();

    return {
      articles,
    };
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
};
</script>

<style>
</style>