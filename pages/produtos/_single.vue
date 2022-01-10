<template>
  <div>
    <div class="py-16" v-if="$route.params.single">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" lg="5" xl="8">
            <div class="rounded-lg">
              <v-carousel
                height="auto"
                class="px-0"
                :continuous="false"
                :cycle="true"
                :show-arrows="true"
                :hide-delimiters="true"
                v-model="qual"
                v-if="
                  produto.thumbnail != null &&
                  produto.thumbnail != undefined &&
                  produto.thumbnail != [] &&
                  produto.thumbnail != ''
                "
              >
                <v-carousel-item
                  v-for="(img, i) in produto.thumbnail"
                  height="auto"
                  class="mb-0"
                  :key="i"
                >
                  <v-img contain :src="img" max-height="600px" :aspect-ratio="1 / 1"></v-img>
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="5" xl="4">
            <h1 class="mb-3">
              {{ produto.title }} {{ produto.sabores[qual] }}
            </h1>
            <v-divider class="mb-3" /><nuxt-content :document="produto" />
            <div class="mb-3">
              <span v-if="produto.cod_1">Codigo: {{ produto.cod_1 }}</span>
              <span v-if="produto.cod_2">NCM: {{ produto.cod_2 }}</span>
            </div>
            <v-row>
              <v-col v-if="produto.cod_1"><v-btn outlined :block="produto.cod_1 != undefined" :to="'/distribuidores/'+produto.cod_1" color="primary">Distribuidores</v-btn></v-col>
              <v-col><v-btn outlined :block="produto.cod_1 != undefined" to="/onde-encontrar" color="primary">Mercados</v-btn></v-col>
            </v-row>
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
            xl="4"
            md="6"
            lg="4"
            sm="6"
          >
            <produto
              :titulo="produto.title"
              :subtitulo="produto.description"
              :thumbnail="produto.thumbnail"
              :link="produto.path"
              :rank="produto.rank"
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
  async asyncData({ $content, params, query }) {
    let produto = await $content("produtos", params.single).fetch();
    let produtos = await $content("produtos")
      .sortBy("rank", "asc")
      .only(["title", "description", "thumbnail", "path", "rank"])
      .search(query.filtro != undefined ? "title" : undefined, query.filtro)
      .where(query.tag != undefined ? {tag: query.tag} : undefined)
      .fetch();
    return {
      produtos,
      produto,
    };
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
  methods: {
  },
  data() {
    return {
      qual: 0,
    };
  },
  watch: {
    $route(to, from) {},
  },
};
</script>

<style>
</style>