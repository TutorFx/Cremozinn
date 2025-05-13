<template>
  <div>
    <v-img height="500px" src="/fabrica.jpg"></v-img>
    <v-container>
      <h2 class="mb-10" style="font-size: 3rem">Nós somos Cremozinn</h2>
      <p>
        A Cremozinn Goianira é uma empresa no ramo alimentício que atua no
        mercado há mais de 15 anos. A empresa surgiu através de uma grande
        vontade e desejo de propor momentos agradáveis e deliciosos às famílias.
        Momentos esses, cheios de sabores e criatividade.
      </p>
      <p>
        A Cremozinn Goianira possui um toque especial que é responsável por
        fazer com que os consumidores sejam apaixonados pelos nossos produtos.
        E, para que isso aconteça a empresa vem investido sempre em matéria
        prima de qualidade, tecnologia de ponta, fazendo com que os produtos
        tenha uma excelente qualidade para satisfazer a alegria de nossos
        consumidores.
      </p>
      <div class="blockquote-wrapper">
        <div class="blockquote">
          <h1>
            Há mais de 15 anos, somos a empresa líder na fabricação de alimentos
            congelados.
          </h1>
          <h4>&mdash;Alexandre Antônio, Dono da Cremozinn</h4>
        </div>
      </div>
      <div>
        <v-row>
          <v-col
            v-for="(image, i) in imgs"
            :src="image"
            :key="i"
            @click="index = i"
            class="d-flex child-flex image"
            cols="4"
          >
            <v-img
              :lazy-src="image"
              :src="images[i]"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
        <client-only placeholder="Loading...">
          <VueGallerySlideshow
            :images="images"
            :index="index"
            @close="index = null"
          />
        </client-only>
      </div>
      <v-row align="center" justify="center">
        <v-alert type="success" style="max-width: 400px;" class="pa-5 my-16">
          <div class="d-flex">
            Trabalhe na fábrica, insira seu currículo aqui!
            <v-spacer></v-spacer>
            <v-btn fab color="white" href="mailto:cremozinn@gmail.com" class="ml-3" small depressed><v-icon color="black">mdi mdi-email-outline</v-icon></v-btn>
          </div>
        </v-alert>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  mounted() {
    this.$store.commit("menuOpaque", false);
    for (let i = 1; i <= 17; i++) {
      this.images.push(`/fabrica/cremozinn-${i}.jpg`);
      this.imgs.push(`/fabrica/cremozinn-sm-Small-${i}.jpg`);
    }
  },
  data() {
    return {
      index: null,
      images: [],
      imgs: [],
    };
  },
  components: {
    VueGallerySlideshow,
  },
};
</script>

<style>
/* center the blockquote in the page */
.blockquote-wrapper {
  display: flex;
  padding: 0 20px;
}

/* Blockquote main style */
.blockquote {
  position: relative;
  font-weight: 800;
  color: #292a2b;
  padding: 30px 0;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  margin: 80px auto;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
}

/* Blockquote header */
.blockquote h1 {
  position: relative;
  color: #292a2b;
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  margin: 0;
}

/* Blockquote right double quotes */
.blockquote:after {
  position: absolute;
  content: "”";
  color: rgb(0, 0, 0);
  font-size: 10rem;
  line-height: 0;
  bottom: -43px;
  right: 30px;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
  .blockquote h1 {
    font-size: 30px;
  }
}

/* Blockquote subheader */
.blockquote h4 {
  position: relative;
  color: #292a2b;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding-top: 20px;
  z-index: 1;
}
</style>