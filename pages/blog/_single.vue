<template>
  <div>
    <v-img :src="articles.header" height="600" />
    <v-container>
      <div class="offset-lg-2 col-lg-8 px-0" v-html="articles.description" />
      <v-divider class="offset-lg-2 col-lg-8 mt-3" />
      <div class="offset-lg-2 col-lg-8 pa-0 mb-5">
        <v-row class="" align="center">
          <v-col>
            <v-row align="center">
              <div class="py-3 pl-3">
                <v-avatar size="70">
                  <img src="https://picsum.photos/100/100/?rando" />
                </v-avatar>
              </div>
              <v-col>
                <div>
                  <div class="font-weight-bold">
                    <span>Autor do Texto</span>
                  </div>
                  <div class="text-muted">
                    Publicado dia
                    <span>{{ month(articles.createdAt)[1] }}</span> de
                    <span
                      >{{ month(articles.createdAt)[0] }},
                      {{ ano(articles.createdAt) }}</span
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <div class="d-flex">
              <v-spacer />
              <v-btn class="mr-2" fab elevation="0" small target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${$store.state.domain + $route.path}`">
                <v-icon color="blue">mdi-facebook</v-icon>
              </v-btn>
              <v-btn fab elevation="0" small target="_blank" :href="`https://api.whatsapp.com/send?text=${$store.state.domain + $route.path}`">
                <v-icon color="green">mdi-whatsapp</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-divider class="offset-lg-2 col-lg-8 pa-0" />
      <div class="offset-lg-2 col-lg-8 px-0" v-html="articles.description2" />
      <v-img
        v-if="articles.thumbnail"
        class="mb-6"
        :src="articles.thumbnail"
        height="50vh"
      ></v-img>
    </v-container>
    <v-container>
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
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
  props: {
    blog: {
      type: Array,
    },
  },
  methods: {
    month(time) {
      const now = new Date(time);
      return [
        [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ][now.getUTCMonth()],
        now.getDate(),
      ];
    },
    ano(time) {
      const now = new Date(time);
      return now.getFullYear();
    },
  },
};
</script>

<style>
</style>