<template>
  <v-card class="mx-auto">
    <div>
      <v-carousel
        height="auto"
        class="px-0"
        v-if="
          thumbnail != null &&
          thumbnail != undefined &&
          thumbnail != [] &&
          thumbnail != ''
        "
        :continuous="thumbnail.length > 1"
        :cycle="thumbnail.length > 1"
        :show-arrows="true"
        :hide-delimiters="true"
      >
        <v-carousel-item
          v-for="(img, i) in thumbnail"
          height="auto"
          class="mb-0"
          :key="i"
        >
          <v-img contain :src="img" :aspect-ratio="1/1"></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div
      :style="`background-color: ${['#057DC1', '#FF6060', '#FF8000'][Math.trunc(rank)]}`"
    >
      <v-card-title>
        <h3 class="white--text" style="word-break: normal;">{{ titulo }}</h3>
      </v-card-title>

      <v-card-subtitle style="color: white !important">
        {{ subtitulo }}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <client-only template="">
          <v-btn text color="white" :to="link" small>
            VEJA MAIS
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </client-only>
      </v-card-actions>
    </div>
  </v-card>
</template>
<script>
export default {
  data: () => ({}),
  props: ["img", "titulo", "subtitulo", "texto", "thumbnail", "link", "rank"],
};
</script>