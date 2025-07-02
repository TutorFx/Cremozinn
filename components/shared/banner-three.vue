<template>
  <div class="banner-wrapper py-0" style="background-color: #A020F0">
    <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
    <v-container>
      <v-row justify="start" class="py-0 my-0 mx-0" style="min-height: 700px">
        <v-spacer></v-spacer>

        <v-col class="pa-0" cols="12" md="6" lg="6" xl="6">
          <!-- <Overlay1 src="/salgados.mp4" /> -->
          <v-img
            class="mx-auto"
            src="/update-1-jul/acai.png"
            lazy
            contain
            height="100%"
            width="100%"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="6"
          xl="6"
          class="d-flex align-center justify-right py-16 py-md-0"
        >
          <div class="text-center text-md-right">
            <img
              style="width: 300px"
              height="auto"
              contain
              class="mb-5"
              src="/update-1-jul/id-açaí-cremozinn.png"
            />
            <h4 class="banner-subtitle white--text font-weight-regular mr-0">
              Sinta o verdadeiro gostinho da fruta, com opções para todos os gostos e tamanhos.<br><br>O Açaí Cremozinn é puro sabor e energia para o seu dia!
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                color="#6C0BA9"
                class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                nuxt
                large
                dark
                to="/produtos/?tag=acai"
                elevation="0"
              >
                Ver catálogo
              </v-btn>
              <v-dialog v-model="dialog" max-width="1000px" min-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    nuxt
                    large
                    class="btn-custom-md mb-5 mb-md-0"
                    outlined
                    color="white"
                    elevation="0"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Fabricação
                  </v-btn>
                </template>
                <v-card>
                  <v-responsive :aspect-ratio="16 / 9">
                    <v-btn @click="dialog = !dialog" small fab absolute top right class="mt-10" elevation="0"
                      ><v-icon>mdi-close</v-icon></v-btn
                    >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OrC-bH_BGfc\" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </v-responsive>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
  </div>
</template>
<script>
export default {
  name: "banner",

  data() {
    return {
      isIntersecting: false,
      dialog: false,
    };
  },
  methods: {
    videoDetectado() {
      this.$refs.videoCima.play();
    },
    onIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.videoDetectado();
        }
      });
    },
  },
};
</script>