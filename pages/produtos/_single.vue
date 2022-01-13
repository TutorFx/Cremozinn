<template>
  <div>
    <div class="py-5" v-if="$route.params.single">
      <v-container>
        <v-row align="start" justify="center">
          <v-col cols="12" md="6" lg="5" xl="5">
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
                  <v-img
                    contain
                    :src="img"
                    :aspect-ratio="1 / 1"
                  ></v-img>
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="7" xl="7">
            <h2 class="d-flex align-center" style="min-height: 96px">
              {{ produto.title }} {{ produto.sabores[qual] }}
            </h2>
            <v-divider class="mb-3" />
            <div class="mb-3">
              <span v-if="produto.cod_1">Codigo: {{ produto.cod_1 }}</span>
              <span v-if="produto.cod_2">NCM: {{ produto.cod_2 }}</span>
            </div>
            <nuxt-content :document="produto" />
            <v-row class="mb-3">
              <v-col v-if="produto.cod_1"
                ><v-btn
                  outlined
                  block
                  :to="'/distribuidores/' + produto.cod_1"
                  color="primary"
                  >Distribuidores</v-btn
                ></v-col
              >
              <v-col
                ><v-btn outlined to="/onde-encontrar" block color="primary"
                  >Mercados</v-btn
                ></v-col
              >
              <v-col v-if="produto.nutricional"
                ><v-btn
                  outlined
                  block
                  color="primary"
                  @click="tabelaVisivel = !tabelaVisivel"
                >
                  {{ tabelaVisivel ? "Ocultar" : "Ver" }}
                  Valor Nutricional</v-btn
                ></v-col
              >
            </v-row>
            <v-expand-transition>
              <div v-if="produto.nutricional && tabelaVisivel">
              <v-data-table
                :headers="headers"
                :items="produto.nutricional"
                class="elevation-1 mb-5"
                hide-default-footer
              ></v-data-table>
              <div>
                <v-alert
                  border="left"
                  colored-border
                  color="#ff0000"
                  elevation="2"
                >
                  {{produto.infoNutri}}
                </v-alert>
              </div>
              </div>
            </v-expand-transition>
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
      .where(query.tag != undefined ? { tag: query.tag } : undefined)
      .fetch();
    return {
      produtos,
      produto,
    };
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
  methods: {},
  data() {
    return {
      qual: 0,
      tabelaVisivel: false,
    };
  },
  watch: {
    $route(to, from) {
      this.$nuxt.refresh();
    },
  },
  computed: {
    headers() {
      return [
        {
          text: "Produto" + (this.produto.perc ? ' ('+this.produto.perc[0]+this.produto.perc[1]+')':""),
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: `Calorias (${this.produto.perc[1]})`,
          sortable: false,
          value: "calories",
        },
        { text: "Porcentagem (%)", sortable: false, value: "percent" },
      ];
    },
  },
};
</script>

<style>
</style>