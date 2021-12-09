<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar app absolute class="app-header" flat elevate-on-scroll>
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <Logo />

        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon class="white--text" />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
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
              <v-btn
                color="white"
                nuxt
                target="_blank"
                href=""
                elevation="0"
              >
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
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleClass(){
      this.isActive = !this.isActive;
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
@media (max-width: 767px) {
  .app-header {
    .navigation {
      display: none;
    }
    .navbar-nav {
      position: absolute;
      left: 0;
      top: 80px;
      width: 100%;
      background-color: #607df9;
      flex-direction: column !important;
      box-shadow: 0px 15px 30px rgb(0 0 0 / 12%);
      .nav-item {
        text-align: center;
        .nav-link {
          line-height: 55px !important;
        }
      }
    }
  }
  .common-links {
    &.three-part li {
      width: 50%;
      a {
        font-size: 13px;
      }
    }
  }
  .px-sm-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .mob-imagesetter {
    background-size: unset;
    background-position: unset !important;
    margin-top: 29px;
    // background-image: url(~assets/images/banner-bg-sm.png) !important;
  }
  .banner-title {
    margin-top: -30px;
  }
}

@media (max-width: 991px) {
  .mob-header-fixed {
    position: fixed;
  }
}
</style>