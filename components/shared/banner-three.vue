<template>
  <div class="banner-wrapper py-0" style="background-color: #edb338">
    <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
    <v-row justify="start" class="py-0 my-0 mx-0" style="min-height: 700px">
      <v-spacer></v-spacer>
      <v-col
        cols="12"
        md="7"
        lg="4"
        xl="3"
        class="d-flex align-center justify-right py-16 py-md-0"
      >
        <div class="text-center text-md-left">
          <nuxt-img
            style="max-width: 300px"
            height="auto"
            contain
            class="mb-5"
            src="/icons/sgd.webp"
          />
          <h4 class="banner-subtitle white--text font-weight-regular">
            Experimente nosso mix de salgados congelados. Tem coxinha, risoles,
            kibes, mini churros e muito mais. Além de muito saborosos é tudo
            fácil e rápido de preparar.
          </h4>
          <div class="mt-16 pt-2">
            <v-btn
              color="error"
              class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
              nuxt
              large
              dark
              to="/produtos/?tag=salgados"
              elevation="0"
            >
              Ver catálogo
            </v-btn>
            <v-btn
              nuxt
              large
              class="btn-custom-md mb-5 mb-md-0"
              outlined
              color="white"
              elevation="0"
            >
              Fabricação
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col class="pa-0" cols="12" md="4" lg="6" xl="6">
        <Overlay1 src="/salgados.mp4" />
      </v-col>
    </v-row>

    <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
  </div>
</template>
