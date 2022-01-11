<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer py-0">
    <v-container>
      <v-row class="py-0 py-md-15">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3">
          <h4 class="font-weight-regular font-18 mb-10">Produto</h4>
          <n-link to="/pagina/fabrica" class="mt-10 dark-link"> Nossa Fábrica </n-link> <br>
          <n-link to="/produtos/?tag=cremozinn" class="mt-10 dark-link"> Iogurte gelado </n-link> <br>
          <n-link to="/produtos/?tag=pao-de-queijo" class="mt-10 dark-link"> Pão de queijo </n-link> <br>
          <n-link to="/produtos/?tag=salgados" class="mt-10 dark-link"> Salgado </n-link> <br>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3">
        <h4 class="font-weight-regular font-18 mb-10"> Links Úteis </h4>
        <n-link to="/onde-encontrar" class="mt-10 dark-link"> Clientes </n-link> <br>
        <n-link to="/downloads" class="mt-10 dark-link"> Campanhas </n-link> <br>
        <n-link to="/downloads" class="mt-10 dark-link"> Downloads </n-link> <br>
        <n-link to="/blog" class="mt-10 dark-link"> Blog </n-link> <br>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3">
          <h4 class="font-weight-regular font-18 mb-10">Contato</h4>
          <n-link to="/onde-encontrar" class="mt-10 dark-link"> Onde encontrar </n-link> <br>
          <a @click="$store.commit('contatoToggle')" class="mt-10 dark-link"> Seja um parceiro </a> <br>
          <p class="mb-0">Email: <a class="dark-link" href="mailto:cremozinn@gmail.com" target="_blank">cremozinn@gmail.com</a></p>
          <p>SAC: <a class="dark-link" href="tel:+556235163297">(62)3516-3297</a></p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3">
          <h4 class="font-weight-regular font-18">Social</h4>

          <div class="social-icons mt-10">
            <a
              target="_blank"
              :href="`https://www.instagram.com/cremozinn_original/?hl=pt-br`"
            >
              <i class="mdi mdi-instagram"></i>
            </a>
            <a
              target="_blank"
              :href="`https://www.facebook.com/cremozinn`"
            >
              <i class="mdi mdi-facebook"></i>
            </a>
            <a
              target="_blank"
              :href="`https://www.linkedin.com/company/cremozinn-goianira/`"
            >
              <i class="mdi mdi-linkedin"></i>
            </a>
            <a
              target="_blank"
              :href="`https://www.youtube.com/channel/UCXO3orIYpjwveg23Q3FuRPA`"
            >
              <i class="mdi mdi-youtube"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center">
          <p>
            Todos os direitos reservados &copy; 2022 -
            <a href="http://www.cremozinn.com.br/" class="link">Cremozinn</a>
          </p>
          <div class="ml-auto">
            <div class="d-flex align-center">
              <NLink to="/pagina/politica-de-privacidade" class="link px-4"
                >Termos de uso</NLink
              >
              <NLink to="/pagina/politica-de-privacidade" class="link px-4"
                >Aviso legal</NLink
              >
              <NLink to="/pagina/politica-de-privacidade" class="link px-4"
                >Políticas de privacidade</NLink
              >
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      domain: process.env.baseURL,
    };
  },
};
</script>

<style lang="scss">
.theme--light.v-footer {
  background: white;
}

.social-icons {
  a {
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    display: inline-block;
    border-radius: 100%;
    margin: 0 5px;
    transition: 0.2s ease-in;
    color: #0164d3;
    background: #f4f8fa;
    &:hover {
      transform: translate3d(0px, -5px, 0px);
      background: #0164d3;
      color: #fff;
    }
  }
}

.footer {
  padding: 45px 0;
}
</style>