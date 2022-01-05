<template>
<v-lazy>
  <div id="Overlay" class="the-video">
    <video
      playsinline="playsinline"
      autoplay="autoplay"
      :muted="!som ? 'muted' : undefined"
      type="video/mp4"
      loop="loop"
      src="/2.mp4"
    ></video>
    <div class="shade"></div>
    <div class="overlay">
      <v-container style="height: 100%">
        <v-row align="end" justify="center" style="height: 100%">
          <v-col class="texto-cta-overlay">
            <div></div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  </v-lazy>
</template>

<script>
export default {
  data() {
    return {
      som: false,
    };
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";

.the-video {
  height: 100px;
}

.the-video {
  position: relative;
  background-color: black;

  min-height: 30rem;
  width: 100%;
  overflow: hidden;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 115%;
    min-height: 115%;
    width: auto;
    height: auto;
    z-index: 0;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    // span de texto
    .texto-cta-overlay {
      font-size: 15px;
      text-align: center;
      color: white;
      text-transform: uppercase;
    }
    .shade {
      background-color: black;
      height: 200px;
      position: relative;
      transform: translateY(-100%);
    }
  }
}

.the-video {
  video {
    max-width: none;
    max-height: 100%;
  }
}

@media only screen and (min-width: map-get($grid-breakpoints, "lg")) {
  .the-video {
    height: 70vh;
    video {
      max-width: 100%;
      max-height: none;
    }
  }
}
@media only screen and (min-width: map-get($grid-breakpoints, "xl")) {
  .the-video {
    height: 70vh;
    video {
      max-width: 100%;
      max-height: none;
    }
  }
}
</style>