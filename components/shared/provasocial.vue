<template>
  <div>
    <div class="testimonial-component mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Testimonial Text
        ----------------------------------------------- -->
        <reveal threshold="5">
          <v-row justify="center">
            <v-col cols="12" sm="10" md="9" lg="7">
              <div class="text-center">
                <h2 class="section-title font-weight-medium mb-5">
                  Veja o que os nossos clientes estão dizendo
                </h2>
                <p>
                  Se comprar agora com o preço promocional direto da fábrica, lucre de até 100%. Postamos sua entrega em 24 horas.
                </p>
              </div>
            </v-col>
          </v-row>
        </reveal>
        <!-- -----------------------------------------------
            End Testimonial Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Testimonial
        ----------------------------------------------- -->
        <v-row class="mt-13" justify="center">
            <v-col cols="12" md="6" lg="4">
              <v-card class="testimonial-card card-shadow">
                <v-card-text>
                  <p class="font-weight-light mb-15">
                    “Tive o prazer de experimentar essa delícia de Cremozinn hoje de manhã e realmente, é essa delícia que todos dizem.”
                  </p>
                  <div class="bottom-bar d-flex align-center">
                    <img
                      src="https://nextkit-nuxtjs-free-uikit.vercel.app/_nuxt/img/1.2e14a06.jpg"
                      alt="Testimonial"
                      class="testimonial-img rounded-circle"
                    />
                    <div class="ml-10">
                      <h6 class="text-uppercase font-weight-medium font-14">
                        Roberto Silva
                      </h6>
                      <div class="d-flex align-center font-13">
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="grey--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-card class="testimonial-card card-shadow">
                <v-card-text>
                  <p class="font-weight-light mb-15">
                    “Eu gosto por que é leve e fácil de transportar... Quando eu vou viajar, coloco em uma manta térmica e pronto. Já posso desfrutar de momentos agradáveis ​​e deliciosos com minha família no carro.”
                  </p>
                  <div class="bottom-bar d-flex align-center">
                    <img
                      src="https://nextkit-nuxtjs-free-uikit.vercel.app/_nuxt/img/2.128dd6c.jpg"
                      alt="Testimonial"
                      class="testimonial-img rounded-circle"
                    />
                    <div class="ml-10">
                      <h6 class="text-uppercase font-weight-medium font-14">
                        Mark mesty
                      </h6>
                      <div class="d-flex align-center font-13">
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="grey--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-card class="testimonial-card card-shadow">
                <v-card-text>
                  <p class="font-weight-light mb-15">
                    “É ótimo por que é fácil de consumir, você não precisa sujar um copo ou vasilha. Ele tem uma própria embalagem que facilita muito na hora de tomar”
                  </p>
                  <div class="bottom-bar d-flex align-center">
                    <img
                      src="https://nextkit-nuxtjs-free-uikit.vercel.app/_nuxt/img/3.58e07d7.jpg"
                      alt="Testimonial"
                      class="testimonial-img rounded-circle"
                    />
                    <div class="ml-10">
                      <h6 class="text-uppercase font-weight-medium font-14">
                        Limpsy adam
                      </h6>
                      <div class="d-flex align-center font-13">
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="error--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                        <a href="/" class="grey--text">
                          <i class="mdi mdi-star"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Testimonial
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Testimonial",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.testimonial-card {
  .v-card__text {
    padding: 40px 35px !important;
  }
  p {
    color: $dark;
    line-height: 26px;
  }
  .testimonial-img {
    width: 60px;
    height: 60px;
  }
}
</style>