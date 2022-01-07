<template>
  <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="true"
      :hide-delimiters="true"
      height="auto"
      class="rounded-lg"
    >
      <v-carousel-item
        v-for="(slide, i) in data"
        :key="i"
      >
        <v-img
        :aspect-ratio="46/8"
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
      }
    },
    props: {
      data: {
        type: Array,
      },
    },
  }
</script>