<template>
  <div
    class="banner-wrapper py-0"
    style="background-color: #efe9d0; min-height: 700px"
  >
    <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
    <v-row justify="start" class="py-0 my-0 mx-0" style="min-height: 700px">
      <v-col class="pa-0" cols="12" md="4" lg="6" xl="6">
        <Overlay1 src="/pao-de-queijo.mp4" />
      </v-col>
      <v-col
        cols="12"
        md="7"
        lg="4"
        xl="3"
        class="d-flex align-center justify-right py-16 py-md-0"
      >
        <v-container>
          <div class="text-center text-md-right">
            <img
              style="width: 270px;"
              height="auto"
              contain
              class="mb-5"
              src="/icons/pdq.webp"
            >
            <h4
              class="
                banner-subtitle
                mr-0
                red--text
                font-weight-regular
                text-sm-center text-md-right
                offset-lg-1 offset-sm-0
              "
            >
              A fabricação do pão de queijo e dos biscoitos são feitos com
              ingredientes de primeira qualidade e se tornaram essenciais no
              cotidiano dos consumidores.
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                color="error"
                class="mr-0 mb-5 mb-md-0 btn-custom-md"
                nuxt
                large
                dark
                to="/produtos/?tag=pao-de-queijo"
                elevation="0"
              >
                Ver catálogo
              </v-btn>
              <v-btn
                nuxt
                large
                @click="videoDetectado()"
                class="btn-custom-md ml-md-8 mb-5 mb-md-0"
                outlined
                color="red"
                elevation="0"
              >
                Fabricação
              </v-btn>
            </div>
          </div>
        </v-container>
      </v-col>
    </v-row>

    <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
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
      isIntersecting: false,
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
