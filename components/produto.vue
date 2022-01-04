<template>
  <v-card :to="link" class="mx-auto">
    <div>
      <v-img :src="thumbnail" height="200px"></v-img>
    </div>

    <v-card-title>
      <h3>{{ titulo }}</h3>
    </v-card-title>

    <v-card-subtitle>
      {{ subtitulo }}
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <client-only template="">
        <v-btn text color="red" :to="link" small>
          VEJA MAIS
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </client-only>
    </v-card-actions>

  </v-card>
</template>
<script>
export default {
  data: () => ({
  }),
  props: ["img", "titulo", "subtitulo", "texto", "thumbnail", "link"],
};
</script>