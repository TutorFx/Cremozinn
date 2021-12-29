<template>
  <div>
    <div class="banner2-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner2
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="8" xl="6" class="d-flex align-center">
            <div class="text-center">
              <h2 class="banner2-title font-weight-light">
                Deseja ser
                <span class="font-weight-bold"> um ponto de venda, </span>
                ou <span class="font-weight-bold">representar</span> nossos
                produtos?
              </h2>

              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  to="/"
                  class="btn-custom-lg btn-arrow ma-2"
                  depressed
                  color="error"
                  elevation="0"
                  @click="$store.commit('contatoToggle')"
                >
                  <span>Formulário</span>
                  <i class="mdi mdi-arrow-right"></i>
                </v-btn>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      nuxt
                      large
                      to="/"
                      class="btn-custom-lg btn-arrow white--text ma-2"
                      depressed
                      color="blue"
                      elevation="0"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span>Distribuidores</span>
                      <i class="mdi mdi-arrow-right"></i>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>Goianira - GO</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Brasília - DF</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Caldas Novas - GO</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Palmas - TO</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner2
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bannerform",
  data() {
    return {};
  },
  methods: {},
};
</script>
