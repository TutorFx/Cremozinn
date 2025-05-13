<template>
  <v-container class="py-16 my-16">
    <v-row justify="center gutter">
      <v-card v-for="(distribuidor, i) in distribuidores" :key="i" class="mx-3 mb-6" max-width="344">
        <v-card-text>
          <div>{{distribuidor.type}}</div>
          <p class="text-h4 text--primary">{{distribuidor.local}}</p>
          <p>Endereço</p>
          <div class="text--primary col-md-10 pa-0">
            {{distribuidor.endereco}}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="#00C853" :href="`https://api.whatsapp.com/send?phone=55${distribuidor.ddd + distribuidor.whatsapp}${$route.params.produto ? '&text=Olá, eu gostaria de saber mais sobre o produto id:'+$route.params.produto:''}`" target="_blank"><v-icon size="14px" class="mr-1">mdi-whatsapp</v-icon> WhatsApp</v-btn>
          <v-btn v-if="distribuidor.lat && distribuidor.lng" text color="#FF1744" :href="`https://maps.google.com/?q=${distribuidor.lat +','+ distribuidor.lng}`" target="_blank"><v-icon size="14px" class="mr-1">mdi-google-maps</v-icon>Google Maps</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
  async asyncData({ $axios }) {
    const distribuidores = await $axios.$get(
      process.env.baseURL + "/distribuidores.json"
    );
    return { distribuidores };
  },
};
</script>

<style>
</style>