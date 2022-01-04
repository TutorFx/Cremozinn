<template>
  <div>
    <div class="py-16" v-if="$route.params.single">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" lg="5" xl="3">
            <div class="rounded-lg">
              <v-img :src="produto.thumbnail" :aspect-ratio="1 / 1"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="5" xl="3">
            <h1 class="mb-3">{{ produto.title }}</h1><v-divider class="mb-3" /><nuxt-content :document="produto" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="py-16" style="background-color: #ededed">
      <v-container>
        <v-row>
          <v-col
            v-for="(produto, i) in produtos"
            :key="i"
            cols="12"
            xl="2"
            md="4"
            lg="3"
            sm="6"
          >
            <produto
              :titulo="produto.title"
              :subtitulo="produto.description"
              :thumbnail="produto.thumbnail"
              :link="produto.path"
            >
            </produto>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let produto = await $content("produtos", params.single).fetch();
    let produtos = await $content("produtos")
      .sortBy("updatedAt", "desc")
      .only(["title", "description", "thumbnail", "path"])
      .fetch();

    return {
      produtos,
      produto,
    };
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
};
</script>

<style>
</style>