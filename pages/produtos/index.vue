<template>
  <div style="background-color: #ededed">
    <v-container class="my-16">
      <v-row>
        <v-col v-for="(produto, i) in produtos" :key="i" cols="12" xl="2" md="4" lg="3" sm="6">
          <produto
            :titulo="produto.title"
            :subtitulo="produto.description"
            :texto="produto"
            :thumbnail="produto.thumbnail"
          >
          </produto>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const produtos = await $content("produtos")
      .sortBy("updatedAt", "desc")
      .fetch();

    return {
      produtos,
    };
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
};
</script>

<style>
</style>