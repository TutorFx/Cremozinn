<template>
  <div>
    <v-img height="300px" src="/fabrica.jpg"></v-img>
    <v-container>
      <h2 class="mb-10" style="font-size: 3rem">Nós somos Cremozinn</h2>
      <p class="offset-md-2">
        A Cremozinn Goianira é uma empresa no ramo alimentício que atua no
        mercado há mais de 15 anos. A empresa surgiu através de uma grande
        vontade e desejo de propor momentos agradáveis e deliciosos às famílias.
        Momentos esses, cheios de sabores e criatividade.
      </p>
      <p class="offset-md-2 mb-10">
        A Cremozinn Goianira possui um toque especial que é responsável por
        fazer com que os consumidores sejam apaixonados pelos nossos produtos.
        E, para que isso aconteça a empresa vem investido sempre em matéria
        prima de qualidade, tecnologia de ponta, fazendo com que os produtos
        tenha uma excelente qualidade para satisfazer a alegria de nossos
        consumidores.
      </p>
      <div class="blockquote-wrapper offset-md-2">
        <div class="blockquote">
          <h1>
            Há mais de 15 anos, somos a empresa líder na fabricação de alimentos
            congelados.
          </h1>
          <h4>&mdash;Alexandre Antônio, Dono da Cremozinn</h4>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
};
</script>

<style>
/* center the blockquote in the page */
.blockquote-wrapper {
  display: flex;
  padding: 0 20px;
}

/* Blockquote main style */
.blockquote {
  position: relative;
  font-weight: 800;
  color: #292a2b;
  padding: 30px 0;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  margin: 80px auto;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
}

/* Blockquote header */
.blockquote h1 {
  position: relative;
  color: #292a2b;
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  margin: 0;
}

/* Blockquote right double quotes */
.blockquote:after {
  position: absolute;
  content: "”";
  color: rgb(0, 0, 0);
  font-size: 10rem;
  line-height: 0;
  bottom: -43px;
  right: 30px;
}

/* increase header size after 600px */
@media all and (min-width: 600px) {
  .blockquote h1 {
    font-size: 30px;
  }
}

/* Blockquote subheader */
.blockquote h4 {
  position: relative;
  color: #292a2b;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding-top: 20px;
  z-index: 1;
}
</style>