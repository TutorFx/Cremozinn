<template>
  <div class="banner-wrapper py-none" style="background-color: #ffb3c6">
    <v-container>
      <!-- -----------------------------------------------
        Start Banner
        ----------------------------------------------- -->
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="6"
          lg="6"
          xl="6"
          class="d-flex align-center justify-center"
        >
          <div class="text-center text-md-left">
            <img style="width: 300px" class="mb-5" src="/update-1-jul/id-sorvetes-cremozinn.png" />
            <h4 class="banner-subtitle white--text font-weight-regular" style="color:#D53674!important;">
              O sabor que derrete no coração! É um sabor mais delicioso que o outro.
            </h4>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-img src="/update-1-jul/sorvete.png" lazy contain>
          </v-img>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>

<style lang="scss">
//
// sorvete
//
.sorvete-component {
  padding: 60px 0;
  background-color: #fdbfa8;
  .sorvete-title {
    font-size: 48px;
    line-height: 50px;
    margin: 20px 0 15px;
  }
}

@media (max-width: 991px) {
  .sorvete-component {
    .sorvete-title {
      font-size: 35px;
    }
  }
}

</style>

<script>
export default {
  name: "banner",

  data() {
    return {
      dialog: false,
    };
  },
};
</script>
