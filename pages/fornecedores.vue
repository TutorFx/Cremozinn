<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const cidades = await $axios.$get("/cidades.json");
    return { cidades };
  },
  head() {
    return {
      title: "Distribuidores",
      meta: [
        {
          name: "description",
          content: "Distribuidores",
        },
      ],
    };
  },
  
};
</script>

<style>
</style>