<template>
  <div class="banner-wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <NuxtLink to="/quem-somos">
            <v-hover v-slot="{ hover }">
              <v-img
                style="cursor: pointer"
                height="300"
                src="/grid/fábrica.jpg"
              >
                <v-expand-transition>
                  <v-card
                    color="#F24C00A6"
                    height="100%"
                    v-if="!hover"
                    class="rounded-0 transition-fast-in-fast-out"
                  >
                    <v-container class="fill-height white--text pa-10">
                      <div style="max-width: 300px; position: absolute">
                        <h2 class="font-weight-light white--text">
                          Nossa história
                        </h2>
                        <div class="linha"></div>
                        <div class="mb-3">
                          Há mais de 15 anos, somos a empresa líder na fabricação de alimentos congelados.
                        </div>
                        <v-btn outlined small color="white">Veja Mais</v-btn>
                      </div>
                    </v-container>
                  </v-card>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </NuxtLink>
        </v-col>
        <v-col cols="12" md="6">
          <NuxtLink to="/eventos">
            <v-hover v-slot="{ hover }">
              <v-img
                style="cursor: pointer"
                height="300"
                src="/grid/eventos.jpg"
              >
                <v-expand-transition>
                  <v-card
                    color="#485696A6"
                    height="100%"
                    v-if="!hover"
                    class="rounded-0 transition-fast-in-fast-out"
                  >
                    <v-container class="fill-height white--text pa-10">
                      <div style="max-width: 300px; position: absolute">
                        <h2 class="font-weight-light white--text">
                          Eventos
                        </h2>
                        <div class="linha"></div>
                        <div class="mb-3">
                          Participe das nossas degustações no ponto de vendas mais próximo da sua casa.
                        </div>
                        <v-btn outlined small color="white">Veja Mais</v-btn>
                      </div>
                    </v-container>
                  </v-card>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4">
          <NuxtLink to="/blog">
            <v-hover v-slot="{ hover }">
              <v-img
                style="cursor: pointer"
                height="300"
                src="/grid/Blog.jpg"
              >
                <v-expand-transition>
                  <v-card
                    color="#000000A6"
                    height="100%"
                    v-if="!hover"
                    class="rounded-0 transition-fast-in-fast-out"
                  >
                    <v-container class="fill-height white--text pa-10">
                      <div style="max-width: 300px; position: absolute">
                        <h2 class="font-weight-light white--text">
                          Blog
                        </h2>
                        <div class="linha"></div>
                        <div class="mb-3">
                          Combine nossos alimentos de várias maneiras, vem dá uma espiada em algumas receitas!
                        </div>
                        <v-btn outlined small color="white">Veja Mais</v-btn>
                      </div>
                    </v-container>
                  </v-card>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </NuxtLink>
        </v-col>
        <v-col cols="12" sm="8">
          <NuxtLink to="/programa-social">
            <v-hover v-slot="{ hover }">
              <v-img
                style="cursor: pointer"
                height="300"
                src="/grid/programa-social.jpg"
              >
                <v-expand-transition>
                  <v-card
                    color="#EC0B43A6"
                    height="100%"
                    v-if="!hover"
                    class="rounded-0 transition-fast-in-fast-out"
                  >
                    <v-container class="fill-height white--text pa-10">
                      <div style="max-width: 300px; position: absolute">
                        <h2 class="font-weight-light white--text">
                          Programa Social
                        </h2>
                        <div class="linha"></div>
                        <div class="mb-3">
                          Ética empresarial, cidadania, direitos humanos e responsabilidade com o meio ambiente. Nós Contribuímos!
                        </div>
                        <v-btn outlined small color="white">Veja Mais</v-btn>
                      </div>
                    </v-container>
                  </v-card>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.linha {
  height: 3px;
  width: 20px;
  background-color: white;
  margin: 1rem 0 1rem 0;
}
</style>