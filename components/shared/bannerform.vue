<template>
  <div>
    <div class="banner2-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner2
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="8" class="d-flex align-center">
            <div class="text-center">
              <h2 class="banner2-title font-weight-light">
                Gostaria de uma
                <span class="font-weight-bold">
                  parceria comercial?
                </span>
                vamos conversar!
              </h2>

              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  to="/"
                  class="btn-custom-lg btn-arrow"
                  depressed
                  color="error"
                  elevation="0"
                >
                  <span>Entre em contato</span>
                  <i class="mdi mdi-arrow-right"></i>
                </v-btn>
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
