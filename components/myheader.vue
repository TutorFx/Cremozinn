<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app class="app-header" flat elevate-on-scroll>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <NLink to="/">
            <img src="logo.svg" style="height: 50px;">
        </NLink>
        <v-spacer></v-spacer>
        <v-btn
          fab
          v-if="$vuetify.breakpoint.mobile"
          class="d-fixed btn-mobile-icon"
          text
          @click="toggleMenu()"
        >
          <v-icon color="primary">mdi-menu</v-icon>
        </v-btn>
        <!-- Desktop view Navigation -->
        <div class="navigation" v-else>
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/fabrica"> A Fábrica </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/fornecedores">
                Fornecedores
              </n-link>
            </li>
            <li class="nav-item">
              <v-btn color="white" nuxt target="_blank" href="" elevation="0">
                Contato
              </v-btn>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
    <v-row justify="center">
      <v-dialog
        v-model="menuMb"
        max-width="400"
        origin="top right"
        content-class="menu-mb-dialog"
        fullscreen
      >
        <v-card class="pa-4">
          <v-card-title class="text-h5 justify-center align-center mb-4"> MENU </v-card-title>
          <v-card-text>
            <v-btn class="mb-3" depressed block to="/fabrica"> Fornecedores </v-btn>
            <v-btn class="mb-3" depressed block to="/fornecedores"> A Fábrica </v-btn>
            <v-btn class="mb-3" depressed block> Contato </v-btn>
            <v-btn depressed block @click="toggleMenu()"> <v-icon size="15px">mdi-arrow-u-left-top</v-icon> Voltar </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuMb: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuMb = !this.menuMb;
    },
  },
  watch:{
    $route (to, from){
        this.menuMb ? this.toggleMenu() : null
    }
} 
};
</script>


<style lang="scss">
.app-header {
  &.v-sheet {
    background-color: transparent !important;
    height: 85px !important;
    .v-toolbar__content {
      height: 85px !important;
    }
  }
  .navbar-nav {
    align-items: center;
    padding: 15px;
  }
}
.common-links {
  padding: 0px;
  margin: 0px;
  list-style: none;
  li {
    list-style: none;
    a {
      transition: 0.1s ease-in;
    }
    &:hover a {
      padding-left: 5px;
    }
  }
  &.three-part li {
    width: 33%;
    display: inline-block;
  }
}
</style>