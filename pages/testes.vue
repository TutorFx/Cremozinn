<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card elevation="24" max-width="444" class="mx-auto">
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>James Smith</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => ({
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1",
    ],
    slides: [1, 2, 3, 4, 5],
  }),
};
</script>