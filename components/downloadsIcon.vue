<template>
  <v-col cols="12" md="3"
    ><v-card :href="link" target="_blank" class="rounded-xl">
      <v-responsive
        :aspect-ratio="1 / 1"
        class="d-flex align-center justify-center"
      >
        <div class="pa-6">
          <v-card
            color="#ffe2e2"
            height="90px"
            width="90px"
            elevation="0"
            class="d-flex align-center rounded-xl mx-auto"
          >
            <v-icon color="#ff3838" class="w-100" size="60px">{{icone}}</v-icon>
          </v-card>
          <v-card-title class="justify-center text-center" style="word-break: break-word">
            <span class="headline black--text">{{texto}}</span>
          </v-card-title>
        </div>
      </v-responsive>
    </v-card>
  </v-col>
</template>

<script>
export default {
    props: ['texto', 'icone', 'link']
};
</script>

<style>
</style>