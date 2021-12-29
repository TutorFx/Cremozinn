
<template>
  <v-carousel height="auto" v-model="model" :cycle="true">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
      class="mb-0 pb-0"
      eager
    >
      <v-sheet
        :color="color"
        height="700px"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 white--text">
            Arte {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {

}
</script>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>