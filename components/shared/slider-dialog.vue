<template>
  <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="true"
      :hide-delimiters="true"
      height="auto"

    >
      <v-carousel-item
        v-for="(slide, i) in data"
        :key="i"
      >
        <v-img
        :aspect-ratio="5.2/1"
        :src="slide.url"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
</template>

<style lang="scss" scoped>
.cara, .cara .v-window__container, .cara .v-carousel__item { height: 100%!important; }
</style>

<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
        ],
        cycle: true,
        slides: [
          'https://i.imgur.com/wkXITtC.jpg',
          'https://i.imgur.com/wkXITtC.jpg',
          'https://i.imgur.com/vmyPKPc.jpg',
        ],
      }
    },
    props: {
      data: {
        type: Array,
      },
    },
  }
</script>