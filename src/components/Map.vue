<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LatLngExpression, Map } from "leaflet";

const props = defineProps({
  center: {
    type: Array,
    required: true,
  },
});

const mapRef = ref<HTMLElement | null>(null);

const createMap = (): void => {
  // Do nothing if the element is not created yet
  if (!mapRef.value) return;

  const map = L.map(mapRef.value, {
    center: props.center,
    attributionControl: false,
    zoomControl: false,
    zoom: 10,
  });

  L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
    },
  ).addTo(map);

  // Creating the marker
  createMarker(map, props.center);
};

const createMarker = (map: Map): void => {
  const marker = new L.Marker(props.center);

  marker.addTo(map).openPopup();
};

onMounted(() => {
  createMap();
});
</script>

<template>
  <div class="map" ref="mapRef" />
</template>

<style scoped>
.map {
  width: 100%;
  height: 300px;
}
</style>
