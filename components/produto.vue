<template>
  <v-card class="mx-auto">
    <v-img :src="thumbnail" height="200px"></v-img>

    <v-card-title>
      <h3>{{ titulo }}</h3>
    </v-card-title>

    <v-card-subtitle>
      {{ subtitulo }}
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn text color="red" small @click="show = !show">
        VEJA MAIS
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <nuxt-content :document="texto" />
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  props: ["img", "titulo", "subtitulo", "texto", "thumbnail"],
};
</script>