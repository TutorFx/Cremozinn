<template>
  <div>
    <v-img :src="articles.header" height="600" />
    <v-container>
      <div class="offset-lg-2 col-lg-8 px-0" v-html="articles.description" />
      <div class="offset-lg-2 col-lg-8 pa-0 my-5">
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
              <v-btn
                class="mr-2"
                fab
                elevation="0"
                small
                target="_blank"
                :href="`https://www.facebook.com/sharer/sharer.php?u=${
                  domain + $route.path
                }`"
              >
                <v-icon color="blue">mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                fab
                elevation="0"
                small
                target="_blank"
                :href="`https://api.whatsapp.com/send?text=${
                  domain + $route.path
                }`"
              >
                <v-icon color="green">mdi-whatsapp</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="offset-lg-2 col-lg-8 px-0" v-html="articles.description2" />
      <v-img
        v-if="articles.thumbnail"
        class="mt-6 rounded"
        :src="articles.thumbnail"
        height="50vh"
      ></v-img>
    </v-container>
    <v-container>
      <nuxt-content class="offset-lg-2 col-lg-8" :document="articles" />
      <comments></comments>
      <div class="d-flex justify-center offset-lg-2 col-lg-8 pa-0">
        <div v-if="prev" class="text-center">
          <div class="mb-2">
            Postagem anterior
          </div>
          <v-btn
          depressed
          color="danger"
          :to="prev.slug"
        >
          {{ prev.title }}
        </v-btn></div>
        <v-spacer />
        <div v-if="next" class="text-center">
          <div class="mb-2">
            Próximo Post
          </div>
        <v-btn
          depressed
          color="danger"
          :to="next.slug"
        >
          {{ next.title }}
        </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    try {
      const articles = await $content("blog", params.single).fetch();
      const [prev, next] = await $content("blog")
        .only(["title", "slug"])
        .sortBy('updatedAt', 'desc')
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
  head() {
    return {
      title: this.articles.title,
      meta: [
        {
          name: "description",
          content: this.articles.description
        },
        {
          name: "keywords",
          content: this.articles.tags,
        },
        {
          property: "og:image",
          content: this.articles.thumbnail,
        },
        {
          property: "og:url",
          content: process.env.baseURL + this.$route.path,
        }
      ]
    };
  },
  data(){
    return {
      domain: process.env.baseURL
    }
  }
};
</script>

<style>
</style>