<template>
  <div>
    <div class="blog-component mini-spacer">
      <v-container>

        <!-- -----------------------------------------------
            Start Blog
        ----------------------------------------------- -->

        <v-row class="mt-13" justify="center">
          <v-col cols="12" md="6" lg="4" v-for="(post, i) in blog" :key="i">
            <v-card elevation="0" class="blog-card overflow-hidden">
              <div class="position-relative mb-10">
                <NuxtLink :to="post.path">
                  <v-img :aspect-ratio="14/9" :src="post.thumbnail" alt="blog" class="blog-img" />
                </NuxtLink>
                <div class="date-badge bg-info-grediant">
                  {{ month(post.createdAt)[0] }}
                  <span>{{ month(post.createdAt)[1] }}</span>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                  >{{ post.title }}</a
                >
                <p class="mt-10 mb-10">
                  {{ post.description.replace(/^(.{150}[^\s]*).*/, "$1") }}
                </p>
                <NuxtLink
                  :to="post.path"
                  class="
                    text-themecolor
                    linking
                    text-decoration-none
                    d-flex
                    align-center
                  "
                >
                  Ver Postagem <i class="mdi mdi-arrow-right"></i>
                </NuxtLink>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blog: {
      type: Array,
    },
  },
  methods: {
    month(time) {
      const now = new Date(time);
      return [
        [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ][now.getUTCMonth()],
        now.getDate(),
      ];
    },
  },
};
</script>
