<template>
  <div>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols="12" lg="10">
            <div class="anim-institucional">
              <video
                :style="`min-${
                  $vuetify.breakpoint.mobile ? 'width' : 'height'
                }: 100%`"
                playsinline="true"
                muted
                autoplay
                loop
              >
                <source
                  :src="$vuetify.breakpoint.mobile ? '/3.mp4' : '/2.mp4'"
                  type="video/mp4"
                />
              </video>
            </div>
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <reveal>
              <v-card class="card-shadow">
                <v-card-text>
                  <div class="pa-md-10 text-center">
                    <nuxt-img width="180px" height="auto" contain class="mb-5" src="/icons/p1pt.webp" />
                    <p>
                      Estamos nas principais redes de supermercados do país,
                      presentes em vários mercadinhos, quiosques, lanchonetes e
                      restaurantes. Veja a localização do ponto de venda mais
                      próximo de você.
                    </p>
                    <v-btn
                      color="error"
                      class="btn-custom-lg linking mt-10 btn-arrow"
                      nuxt
                      large
                      to="/onde-encontrar"
                      elevation="0"
                    >
                      <span>Onde Encontrar</span>
                      <i class="mdi mdi-arrow-right"></i>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </reveal>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feature3",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.anim-institucional {
  position: relative;
  background-color: #000;
  height: 60vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    z-index: 0;
    transform: translateX(-50%) translateY(-50%);
  }
}
//
// Feature 3
//

.feature3-component {
  position: relative;
}

.feature3-card {
  position: absolute;
  top: 15%;
  right: 0;
  .feature3-title {
    font-size: 24px;
    line-height: 30px;
    margin: 20px 0 15px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .feature3-card {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
  }
}

@media (max-width: 767px) {
  .feature3-card {
    position: relative;
  }
}
</style>