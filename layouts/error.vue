<template>
  <v-app>
    <div class="fill-height fill-width d-flex justify-center align-center">
      <div class="text-center">
        <div class="mb-5">
          <h1 v-if="error.statusCode === 404">
            Oops! Essa página não existe.
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
        </div>
        <v-btn to="/" small outlined color="primary">
          Voltar para o início
        </v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
