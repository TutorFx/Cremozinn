<template>
  <div class="banner-wrapper cafe-component py-none" style="background-color: #bc6c25">
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
            <h3 class="cafe-title" style="color:#fff!important;">
              Super Novidade!
            </h3>
            <h4 class="banner-subtitle white--text font-weight-regular" style="color:#fff!important;">
              O sabor que derrete no coração! É um sabor mais delicioso que o outro.
            </h4>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-img src="/update-1-jul/café.png" lazy contain>
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
// cafe
//
.cafe-component {
  padding: 60px 0;
  background-color: #fdbfa8;
  .cafe-title {
    font-size: 40px;
    line-height: 50px;
    margin: 20px 0 15px;
  }
}

@media (max-width: 991px) {
  .cafe-component {
    .cafe-title {
      font-size: 40px;
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
