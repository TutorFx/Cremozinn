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
          v-for="location in fornecedores"
          :key="location.id"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">{{ location.empresa }}</div>
              <v-list-item-title class="text-h5 mb-1">
                {{ location.endereco }}
              </v-list-item-title>
              <v-list-item-subtitle>Produtos que possui</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn outlined rounded text :href="`https://maps.google.com/?q=${location.lat},${location.lng}`" target="_blank">
              Mostrar no mapa <v-icon class="ml-2">mdi-crosshairs-gps</v-icon>
            </v-btn>
            <v-btn outlined rounded text :href="`https://maps.google.com/?q=${location.lat},${location.lng}`" target="_blank">
              Rota para mercado <v-icon class="ml-2">mdi-map</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
    <v-col cols="12" md="8" class="pa-0 ma-0">
      <GMap
        ref="gMap"
        language="pt-BR"
        :cluster="{ options: { styles: clusterStyle } }"
        :center="locationGps ?  {lat: locationGps.coords.latitude, lng: locationGps.coords.longitude}:{lat: fornecedores[0].lat, lng: fornecedores[0].lng}"
        :options="{ fullscreenControl: false }"
        :zoom="6"
      >
        <GMapMarker
          v-for="location in fornecedores"
          :key="location.id"
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected,
          }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{ maxWidth: 200 }">
            <div>{{ location.empresa +' '+ location.endereco }}</div>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions" />
      </GMap>
      
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const fornecedores = await $axios.$get(process.env.baseURL + "/onde-tem.json");
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
  data() {
    return {
      currentLocation: {},
      locationGps: null,
      gettingLocation: false,
      errorStr: null,
      circleOptions: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: "15.9819",
        },
        {
          lat: "45.12",
          lng: "16.21",
        },
      ],
      pins: {
        selected: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        notSelected: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
      },
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
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
.GMap__Wrapper {
  height: calc(100vh - 80px);
  width: 100%;
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