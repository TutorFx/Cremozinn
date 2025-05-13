
<template>
  <v-carousel height="auto" v-model="model" hide-delimiters :show-arrows="false" hide :cycle="true">
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      class="mb-0 pb-0"
      :eager="i === 0"
      :progress="true"
    >
      <v-sheet v-if="$vuetify.breakpoint.mdAndUp" color="red" height="100vh" max-height="880px" tile>
        <v-img height="100%" :src="slide.lg">
          <v-container v-if="transition">
            <v-lazy  transition="scroll-y-transition">
              <h1 class="py-16 col-lg-9" :style="`color: ${slide.text[1]}; font-size: 3.6vw; line-height: 4vw; font-family: 'Poppins', sans-serif;`" v-html="slide.text[0]"></h1>
            </v-lazy>
          </v-container>
        </v-img>
      </v-sheet>
      <v-sheet v-else color="red" height="500px" tile>
        <v-img height="100%" :src="slide.mb">
          <v-container v-if="transition">
            <h1 class="py-6 text-center" :style="`color: ${slide.text[1]}; font-size: 8vw; line-height: 10vw; font-family: 'Poppins', sans-serif;`"></h1>
          </v-container>
        </v-img>
      </v-sheet>
    </v-carousel-item>
    <div
      class="pa-5 d-flex justify-center align-center"
      style="position: absolute; width: 100%; height: 100%;"
    >
      <v-container class="d-flex">
        <v-btn small @click="model === 0 ? model = slides.length - 1 : model--" outlined fab>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn small @click="model++" outlined fab>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-container>
    </div>
    <div
      class="pa-5 d-flex justify-center"
      style="position: absolute; bottom: 0; width: 100%"
    >
      <v-btn
        v-for="(slide, i) in slides"
        :key="i"
        :small="$vuetify.breakpoint.mdAndUp"
        x-small
        :color="i === model ? '#E63B30' : 'white'"
        :outlined="i === model"
        @click="model = i"
        :elevation="5"
        rounded
        :text="!(i === model)"
        active-class="cremozinn-slide"
        class="mx-1"
        >{{ slide.sigla }}</v-btn
      >
    </div>
  </v-carousel>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');

</style>

<script>
export default {
  data: () => ({
    model: 0,
    transition: true,
    slides: [
            {lg:"/slider/Cremozinn-Desktop.webp", mb:"/slider/Cremozinn-Mobile.webp", sigla:"CRE", text:["O original do <br> bonezinho azul!", "#fff"]},
      {lg:"/slider/Churros-Desktop.webp", mb:"/slider/Churros-Mobile-.webp", sigla:"MO", text:["Fica pronto em <br> alguns minutos!", "#649F04"]},
      {lg:"/slider/Pão-de-queijo-Desktop.webp", mb:"/slider/Pão-de-queijo-Mobile.webp", sigla:"ZINN", text:["Toda hora <br> pede um!", "#321D10"]},
    ],
  }),
  watch:{
    // "this.model": function() {
    //   this.transition = false
    //   setTimeout(() => this.transition = true, 1000);
    // }
  }
};
</script>