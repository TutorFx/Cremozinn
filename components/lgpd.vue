<template>
  <v-row justify="center">
    <v-dialog
      v-model="lgpd"
      persistent
      :hide-overlay="$route.path === '/pagina/politica-de-privacidade' || $route.path === '/pagina/politica-de-cookies'"
      max-width="800"
      origin="bottom center"
      content-class="lgpd-dialog"
    >
      <v-card class="pa-4">
        <v-row>
          <span>Atualizamos a <N-Link to="/pagina/politica-de-cookies">política de cookies</N-Link> e também nossa <N-Link to="/pagina/politica-de-privacidade">política de privacidade</N-Link> do site. Ao continuar navegando, entendemos que você está ciente e de acordo </span>
          <v-col><v-btn color="primary" @click="lgpd = false" depressed> Pode usar </v-btn></v-col>
        </v-row>
        <v-card-actions v-if="false">
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