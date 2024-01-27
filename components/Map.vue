<template>
  <div class="map">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="center"
      :options="{ zoomControl: false, attributionControl: false }"
    >
      <LTileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
      />
    </LMap>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  center: {
    type: Object,
    required: true
  }
})

const zoom = ref(10)
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>