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
        <v-col cols="12" sm="12" md="12" lg="3" >
          <h4 class="font-weight-regular font-18">Endereço</h4>
          <p class="mt-10">
            José Peixoto da Silveira QD. 52, LT 05, Rua 89 - CORA CORALINA, Goianira - GO, 75370-000
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" >
          <h4 class="font-weight-regular font-18">Telefones</h4>
          <p class="mt-10 mb-0">Luziânia : +55 (61) 99644-2450</p>
          <p>Goianira : +55 (62) 3516-3297</p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" >
          <h4 class="font-weight-regular font-18">Email</h4>
          <p class="mt-10 mb-0">
            Escritório : <a class="dark-link" href="/">cremozinn@cremozinn.com.br</a>
          </p>
          <p>
            Site :
            <a class="dark-link" href="http://www.cremozinn.com.br/"
              >www.cremozinn.com.br</a
            >
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" >
          <h4 class="font-weight-regular font-18">Social</h4>

          <div class="social-icons mt-10">
            <a href="#">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-google-plus"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
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
              <NLink to="/pagina/politica-de-privacidade" class="link px-4">Termos de uso</NLink>
              <NLink to="/pagina/politica-de-privacidade" class="link px-4">Aviso legal</NLink>
              <NLink to="/pagina/politica-de-privacidade" class="link px-4">Políticas de privacidade</NLink>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
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