<template>
  <v-dialog :value="$store.state.contato" persistent max-width="600px">
    <v-form
      ref="form"
      :value="formularioValido"
      v-on:submit.prevent="onSubmit"
    >
      <v-card class="pa-5">
        <v-stepper elevation="0" class="ma-0 pa-0" v-model="stepper">
          <v-stepper-content class="ma-0 pa-0" step="1">
            <v-card-text>
              <h4 class="mb-3">Quase lá</h4>
              <h1 class="mb-3">Formulário de contato</h1>
              <p class="mb-5">
                Para falar com um de nossos agentes, preencha o formulário
                abaixo e clique em enviar.
              </p>
              <slider-dialog class="mb-10" :data="selected" />
              <v-row>
                <v-col cols="12" md="6" class="py-0 my-0">
                  <v-text-field
                    filled
                    dense
                    name="name"
                    label="Nome"
                    color="secondary"
                    v-model="name"
                    :rules="nameRules"
                    required
                    class="my-0 py-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0 my-0">
                  <v-text-field
                    filled
                    dense
                    name="email"
                    label="Email"
                    color="secondary"
                    v-model="email"
                    :rules="emailRules"
                    required
                    class="my-0 py-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0 my-0">
                  <v-text-field
                    filled
                    dense
                    name="phone"
                    label="Celular / Telefone"
                    color="secondary"
                    required
                    class="my-0 py-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="py-0 my-0">
                  <v-text-field
                    filled
                    dense
                    name="CEP"
                    label="CEP"
                    data-field="CEP"
                    color="secondary"
                    v-model="cep"
                    :rules="cepRules"
                    required
                    :error="this.cepData.erro == null ? false : true"
                    class="my-0 py-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0 my-0">
                <v-select
                  :items="select"
                  v-model="selected"
                  item-value="img"
                  item-text="text"
                  :return-object="true"
                  name="industry"
                  data-field="industry"
                  filled
                  chips
                  dense
                  label="Seu interesse"
                  color="secondary"
                  multiple
                ></v-select>
                </v-col>
                <v-col cols="6" md="3" class="py-0 my-0">
                <input
                    filled
                    dense
                    name="state"
                    data-field="state"
                    label="Estado"
                    color="secondary"
                    v-model="uf"
                    required
                    class="my-0 py-0"
                    type="hidden"
                  >
                  <input
                    filled
                    dense
                    name="city"
                    data-field="city"
                    label="Cidade"
                    color="secondary"
                    v-model="cidade"
                    required
                    class="my-0 py-0"
                    type="hidden"
                  >
                  <input
                    filled
                    dense
                    name="district"
                    data-field="district"
                    label="Bairro"
                    color="secondary"
                    v-model="bairro"
                    required
                    class="my-0 py-0"
                    type="hidden"
                  >
                  <input
                    filled
                    dense
                    name="street"
                    data-field="street"
                    label="Rua"
                    color="secondary"
                    v-model="rua"
                    required
                    class="my-0 py-0"
                    type="hidden"
                  >
                  <input
                    filled
                    dense
                    name="address"
                    data-field="address"
                    label="Número"
                    color="secondary"
                    v-model="numero"
                    required
                    class="my-0 py-0"
                    type="hidden"
                  >
                </v-col>
              </v-row>
              <v-textarea
                filled
                dense
                height="70"
                name="message"
                data-field="message"
                label="Mensagem"
                color="secondary"
                required
                class="pt-4"
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                :small="$vuetify.breakpoint.mobile ? true : undefined"
                @click="$store.commit('contatoToggle')"
              >
                Cancelar
              </v-btn>
              <v-btn
                depressed
                :small="$vuetify.breakpoint.mobile ? true : undefined"
                type="submit"
                @click="stepper ++"
                :disabled="formularioValido ? false : true"
              >
                <v-icon left>mdi-send</v-icon> Enviar
              </v-btn>
            </v-card-actions>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card-text>
              <h4 class="mb-3">Obrigado!</h4>
              <h1 class="mb-3">Sua mensagem foi enviada com sucesso.</h1>
              <p class="mb-10">
                Em breve entraremos em contato com você.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                :small="$vuetify.breakpoint.mobile ? true : undefined"
                @click="$store.commit('contatoToggle')"
              >
                Voltar
              </v-btn>
            </v-card-actions>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "O nome será necessário",
      (v) => v.length <= 40 || "O Nome deve conter no máximo 40 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O e-mail será necessário",
      (v) => /.+@.+/.test(v) || "E-mail precisa ser existente",
    ],
    cepRules: [
      (v) => !!v || "O CEP será necessário",
      (v) => /^[0-9]{8}$/.test(v) || "CEP precisa ser existente",
    ],
    cepStatus: false,
    cep: "",
    cepError: "",
    cepData: {},
    uf: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    stepper: 1,
    select: [{text: 'Seja um distribuidor', img: '1', url: '/dialog/Distribuidor_.png'}, {text: 'Seja um Representante', img: '2', url: '/dialog/Revendedores.png'}, {text: 'Seja um P. de Vendas', img: '3', url: '/dialog/Ponto_de_Vendas.png'}, {text: 'Já sou Parceiro Cremozinn', img: '4', url: '/dialog/Parceiro_Cremozinn.png'}],
    selected: [],
  }),
  methods: {
    buscarCep(cep) {
      if (/^[0-9]{8}$/.test(this.cep) && this.cep.length == 8) {
        this.$axios
          .$get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
            this.cepData = response;
            console.table(response);
            this.cepError = false;
          })
          .catch((error) => {
            this.cepError = true;
            cepStatus = error;
          });
      }
    },
    onSubmit() {

    },
    debounceSearch: function () {
      if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.buscarCep(this.cep);
      }, 500);
    },
  },
  watch: {
    cepData: function (newVal, oldVal) {
      if(this.cepData.erro == null) {
        this.uf = this.cepData.uf;
        this.cidade = this.cepData.localidade;
        this.bairro = this.cepData.bairro;
        this.rua = this.cepData.logradouro;
        this.numero = this.cepData.complemento;
      }
    },
    cep() {
      this.debounceSearch();
    },
  },
  computed: {
    formularioValido() {
      if(/^[0-9]{8}$/.test(this.cep) && this.cep.length == 8 && this.name.length > 0 && this.email.length > 0 && /.+@.+/.test(this.email)){
        return true;
      }else{
        return false;
      }
    },
  },
  created() {},
  head() {
    return {
      script: [
        {
          hid: "hs-script-loader",
          src: "//js.hs-scripts.com/21541614.js",
          defer: true,
          async: true,
        },
      ],
    };
  },
   components: {
    sliderDialog: () => import("../components/shared/slider-dialog.vue"),
    }
};
</script>

<style>
</style>