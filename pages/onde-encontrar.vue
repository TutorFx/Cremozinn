<template>
  <v-container fluid>
    <v-row class="pa-0 ma-0">
      <v-col cols="12" md="4" class="pa-0 ma-0">
        <div
          class="p-3"
          style="height: calc(100vh - 80px) !important; overflow-y: auto"
        >
          <v-card
            class="mx-auto my-3 mr-3 filtro"
            outlined
            v-for="(location, id) in fornecedores"
            :key="id"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-row>
                  <v-col
                    ><div class="text-overline mb-4">
                      {{ location.empresa }}
                    </div></v-col
                  >
                  <v-spacer></v-spacer>
                  <v-col>
                    <client-only placeholder="Carregando">
                      <div
                        class="text-overline mb-4 text-right"
                        v-if="locationGps"
                      >
                        {{ distancia(id) }}KM
                      </div>
                    </client-only>
                  </v-col>
                </v-row>

                <v-list-item-title class="text-h5 mb-1">
                  {{ location.endereco }}
                </v-list-item-title>
                <v-list-item-subtitle>Cremozinn</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
                :href="`https://maps.google.com/?q=${location.lat},${location.lng}`"
                target="_blank"
              >
                Rota para mercado <v-icon class="ml-2">mdi-map</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div v-if="false">
          <client-only placeholder="Loading...">
            <div v-if="errorStr">
              Sorry, but the following error occurred: {{ errorStr }}
            </div>

            <div v-if="gettingLocation">
              <i>Getting your location...</i>
            </div>

            <div v-if="locationGps">
              Your location data is {{ locationGps.coords.latitude }},
              {{ locationGps.coords.longitude }}
            </div>
          </client-only>
        </div>
      </v-col>
      <v-col cols="12" md="8" class="pa-0 ma-0">
        <GMap
          ref="gMap"
          language="pt-BR"
          :cluster="{ options: { styles: clusterStyle } }"
          :center="center"
          :options="{ fullscreenControl: false }"
          :zoom="13"
        >
          <GMapMarker
            v-for="(location, id) in fornecedores"
            :key="id"
            :position="{ lat: location.lat, lng: location.lng }"
            :options="{
              icon:
                location === currentLocation ? pins.selected : pins.notSelected,
            }"
          >
            <GMapInfoWindow :options="{ maxWidth: 200 }">
              <div>{{ location.empresa + " " + location.endereco }}</div>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapCircle :options="circleOptions" />
        </GMap>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" right :timeout="1000">
      Calculando Distância
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const fornecedores = await $axios.$get(
      process.env.baseURL + "/onde-tem.json"
    );
    return { fornecedores };
  },
  mounted() {
    this.$store.commit("menuOpaque", false);
  },
  created() {
    if (process.client) {
      //do we support geolocation
      if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }

      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.gettingLocation = false;
          this.locationGps = pos;
        },
        (err) => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        }
      );
    }
  },
  watch: {
    locationGps(newVal, oldVal) {
      if (newVal !== null) {
        this.center = {
          lat: newVal.coords.latitude,
          lng: newVal.coords.longitude,
        };
        this.snackbar = true;

        let i = 0;
        let distA = 10000;
        let distB = 10000;
        const lat1 = this.locationGps.coords.latitude;
        const lng1 = this.locationGps.coords.longitude;

        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km
          var dLat = deg2rad(lat2 - lat1); // deg2rad below
          var dLon = deg2rad(lon2 - lon1);
          var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
              Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km
          return d;
        }

        function deg2rad(deg) {
          return deg * (Math.PI / 180);
        }

        this.fornecedores.sort(function (a, b) {
          i++;
          distA =
            Math.round(getDistanceFromLatLonInKm(lat1, lng1, a.lat, a.lng) * 100) / 100;
          distB =
            Math.round(getDistanceFromLatLonInKm(lat1, lng1, b.lat, b.lng) * 100) / 100;
          if (distA > distB) {
            return 1;
          }
          if (distA < distB) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
    },
  },
  methods: {
    verLocal(id) {},
    distancia(id) {
      if (this.locationGps === null || this.fornecedores[id] === undefined) {
        return "";
      } else {
        const lat1 = this.locationGps.coords.latitude;
        const lng1 = this.locationGps.coords.longitude;
        const lat2 = this.fornecedores[id].lat;
        const lng2 = this.fornecedores[id].lng;
        return Math.round(this.distance(lat1, lng1, lat2, lng2) * 100) / 100;
      }
    },
    distance(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
      var dLon = this.deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
  },
  data() {
    return {
      currentLocation: {},
      snackbar: false,
      locationGps: null,
      center: { lat: -16.68445890840414, lng: -49.292770767317606 },
      gettingLocation: false,
      errorStr: null,
      circleOptions: {},
      pins: {
        selected: "/icon-maps.svg",
        notSelected: "/icon-maps.svg",
      },
      clusterStyle: [
        {
          url: "/icons-maps.svg",
          width: 56,
          height: 56,
          textColor: "#fff",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.GMap__Wrapper, .GMap {
  height: calc(100vh - 80px)!important;
  width: 100%!important;
}
.filtro {
  /* custom scrollbar */
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
}
</style>