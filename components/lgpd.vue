<template>
  <v-row justify="center">
    <v-dialog
      v-model="lgpd"
      persistent
      max-width="400"
      origin="bottom center"
      content-class="lgpd-dialog"
    >
      <v-card class="pa-4">
        <v-card-title class="text-h5">
          Podemos usar seus dados?
        </v-card-title>
        <v-card-text>Usamos cookies para permitir que o nosso website funcione corretamente, para personalizar conteúdo e anúncios, para proporcionar funcionalidades das redes sociais e para analisar o nosso tráfego. Também partilhamos informação com os nossos parceiros das redes sociais, de publicidade e de analítica sobre o seu uso do nosso website.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="lgpd = 'proxima'"
          >
            Não
          </v-btn>
          <v-btn
            color="primary"
            @click="lgpd = false"
            depressed
          >
            Pode usar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    methods: {
    },
    data(){
        return {
            lgpd: false,
        }
    },
    watch: {
        lgpd: function() {
            window.localStorage.setItem('lgpd', this.lgpd);
            if (window.localStorage.getItem('lgpd') == 'proxima') {
                this.lgpd = false;
            }
        },
    },
    mounted(){
        const cookie = window.localStorage.getItem('lgpd')
        if (cookie == 'proxima') {
            this.lgpd = false
        } else if (cookie == 'true') {
            this.lgpd = true
        } else if (cookie == 'false') {
            this.lgpd = false
        } else if (cookie == null) {
            this.lgpd = true
            window.localStorage.setItem('lgpd', this.lgpd);
        }
    },
}
</script>

<style>
    @media screen and (min-width: 767px) {
        .lgpd-dialog {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }

</style>