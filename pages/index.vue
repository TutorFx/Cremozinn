<template>
  <div>
    <!-- <slider /> -->
    <Overlay />
    <banner-one />
    <banner-two />
    <banner-three />
    <textbox />
    <bannerform :distribuidores="distribuidores" />
    <grid />
    <provasocial />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("blog")
      .limit(3)
      .sortBy("updatedAt", "desc")
      .fetch();
    return {
      articles,
    };
  },
  head() {
    return {
      title: "Cremozinn Goianira, o Original do Bonezinho Azul!",
      meta: [
        {
          name: "description",
          content: "Testimonial",
        },
        {
          name: "keywords",
          content:
            "fábrica de alimentos congelados, cremozinn, cremosinho, pão de queijo, biscoito de queijo, biscoito suíço, salgados, coxinha, mini churros, risoles, kibes, iogurte congelado, goiania, goianira, brasília, palmas, brasil",
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("menuOpaque", true);
    setTimeout(() => {
      this.distribuidoresStart();
    }, 5000);
  },
  methods: {
    distribuidoresStart() {
      this.$axios
        .$get(process.env.baseURL + "/distribuidores.json")
        .then((response) => {
          this.distribuidores = response;
          this.distribuidoresError = false;
        })
        .catch((error) => {
          this.distribuidoresError = true;
          distribuidoresStatus = error;
        });
    },
  },
  data() {
    return {
      distribuidores: [],
      distribuidoresError: false,
    };
  },
};
</script>

<style lang="scss">
.blog-card {
  transition: 0.2s ease-in;
  &:hover {
    transform: translateY(-10px);
  }
  .date-badge {
    padding: 10px;
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    border-radius: 8px;
    text-align: center;
    span {
      display: block;
      font-size: 30px;
      line-height: 30px;
    }
  }
  .blog-title {
    color: $dark !important;
    line-height: 22px;
    &:hover {
      color: $accent !important;
    }
  }
}
</style>