<template>
  <v-container>
    <v-row class="py-16">
      <downloadsIcon
        v-for="(item, i) in items"
        :texto="item.texto"
        :icone="item.icone"
        :link="item.link"
        :key="i"
      />
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
  data() {
    return {
      items: [
        {
          texto: "Catálogo",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1EepZeIr1n9xr156qpwrJQQXolGss-Xk6?usp=sharing",
        },
        {
          texto: "Tablóide",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/16WBSNnK5rkxaQqMnufoe8Ygt5ciSVQCt?usp=sharing",
        },
        {
          texto: "Cartaz",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1L3LS9Azm9uJkEtCUnMp1hYibIYhqu032?usp=sharing",
        },
        {
          texto: "Plotter Frota",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1cYxcXHRVho9_1-6tJc3AOgXQe1_1alty?usp=sharing",
        },
        {
          texto: "Freezer",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1JuTZkDW0KGohR7GN8VUFURqmxc4Zpqmi?usp=sharing",
        },
        {
          texto: "Outdoors",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1XeRnikwR_-Ru5N8rxAveOmvEgkPl05X8?usp=sharing",
        },
        {
          texto: "Mockup Embalagem",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1JI6KP6cOamE28A2J0qxzA6VmGhemv0ZU?usp=sharing",
        },
        {
          texto: "Fachada",
          icone: "mdi-folder",
          link: "https://drive.google.com/drive/folders/1y4kvmDVfEQbkfL_-cycFR8bxc2T00xz4?usp=sharing"
        }
      ],
    };
  },
};
</script>

<style>
</style>