<template>
<v-lazy>
  <div class="the-video">
    <video
      playsinline="playsinline"
      autoplay="autoplay"
      :muted="!som ? 'muted' : undefined"
      type="video/mp4"
      loop="loop"
      src="/pao-de-queijo.mp4"
    ></video>
    <div class="shade"></div>
    <div class="overlay">
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

<style lang="scss" scoped>
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
    min-width: 100%;
    min-height: 100%;
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
@media only screen and (min-width: map-get($grid-breakpoints, "md")) {
  .the-video {
    height: 700px;
    video {
      max-width: 100%;
      max-height: none;
    }
  }
}
@media screen and (max-width: 992px) {
  .the-video {
    video {
      max-width: none;
      max-height: none;
    }
  }
}
@media only screen and (min-width: map-get($grid-breakpoints, "lg")) {
  .the-video {
    video {
      max-width: none;
      max-height: 100%;
    }
  }
}
@media only screen and (min-width: map-get($grid-breakpoints, "xl")) {
  .the-video {
    video {
      max-width: none;
      max-height: 100%;
    }
  }
}
@media screen and (min-width: 1900px) {
  .the-video {
    video {
      max-width: none;
      max-height: none;
    }
  }
}
</style>