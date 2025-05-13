<template>
  <div class="banner-wrapper py-none" style="background-color: #6666ff">
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
            <img style="width: 300px" class="mb-5" src="/icons/c.webp" />
            <h4 class="banner-subtitle white--text font-weight-regular">
              Somos a marca líder na fabricação e distribuição de iogurte
              congelado.<br />
              São deliciosos tradicionais e ainda temos os sabores gourmet
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                color="#5555D4"
                class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                nuxt
                large
                dark
                to="/produtos/?tag=cremozinn"
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
                    <iframe
                      v-if="dialog"
                      style="width: 100%; height: 100%"
                      src="https://www.youtube.com/embed/AGvRNdVdjKo?autoplay=1"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-responsive>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <v-img src="/gif/cremozinn.gif" lazy contain>
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
// ---------------------------------------------------------------------
// Banner Search Widget
// ---------------------------------------------------------------------

.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-subtitle {
  font-size: 21px;
}

.banner-wrapper {
  padding: 20px 0 20px;
  min-height: 700px;
  display: flex;
  align-items: center;
}

@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}

@media (min-width: 1200px) {
  .banner-subtitle {
    margin-right: 150px;
  }
}

//
// Banner1
//
.banner1-component {
  padding: 60px 0;
  background-color: #fdbfa8;
  .banner1-title {
    font-size: 48px;
    line-height: 50px;
    margin: 20px 0 15px;
  }
}

@media (max-width: 991px) {
  .banner1-component {
    .banner1-title {
      font-size: 35px;
    }
  }
}

//
// Banner2
//
.banner2-component {
  padding: 145px 0;

  .banner2-title {
    line-height: 50px;
    font-size: 46px;
    margin: 20px 0 15px;
  }
}

@media (max-width: 991px) {
  .banner2-component {
    padding: 45px 0;
    .banner2-title {
      font-size: 32px;
    }
  }
}

//
// Form Banner
//

.formbanner1-component {
  max-height: 700px;
  background-color: #e9f3f8;
  .formbanner1-title {
    font-size: 48px;
    line-height: 1;
    letter-spacing: -1px;
    margin: 20px 0 15px;
  }
}

.stylish-input-group {
  display: flex;
  align-items: center;
  .v-text-field__details {
    display: none;
  }
  .v-input__slot {
    margin-bottom: 0;
    border-radius: 36px 0 0 36px !important;
    text-indent: 35px;
    font-weight: 300;
    text-overflow: ellipsis;
    min-height: 72px;
    padding-left: 32px !important;
  }
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    box-shadow: -5px 0 30px 0 rgb(0 0 0 / 5%);
  }
  .v-btn {
    border-radius: 0 36px 36px 0 !important;
    height: 72px !important;
    padding: 0 30px !important;
  }
}

@media (max-width: 991px) {
  .formbanner1-component {
    .formbanner1-title {
      font-size: 39px;
      line-height: 42px;
    }
  }
}

@media (max-width: 767px) {
  .stylish-input-group {
    .v-input__slot {
      min-height: 60px;
      padding-left: 20px !important;
    }
    .v-btn {
      height: 60px !important;
    }
  }
}
// video
video:focus,
video {
  outline: none;
}

.video-wrapper {
  overflow: hidden;
  width: 101%;
  height: 100%;
}

.video-wrapper #video {
  position: relative; /* could be absolute if needed */
  width: 100%;
  height: 100%;
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
