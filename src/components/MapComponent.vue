<script setup>

import { CustomMarker, GoogleMap } from 'vue3-google-map'
import { Loader } from '@googlemaps/js-api-loader';
import { ref } from 'vue'
import axios from 'axios'
const props = defineProps({travel:Object})
const API_KEY = ref('MAPS_KEY')
const apiPromise = ref()
const loaded = ref(false)
const center = ref({
          lat: ((props.travel.destination.location.lat+props.travel.origin.location.lat)/2),
          lng: ((props.travel.destination.location.lng+props.travel.origin.location.lng)/2)
        })
const origin = ref(props.travel.origin.location)
const destination = ref(props.travel.destination.location)

function loadPromise(){
  let loader =  new Loader({
  apiKey: API_KEY.value,
  version: 'weekly',
  libraries: ['maps'],
})
  apiPromise.value= loader.load()
  loaded.value = true
}

axios.get('http://localhost:3000/key').then(response=>{
  API_KEY.value = response.data.split("").reverse().join("")
  loadPromise()
})
</script>

<template>
<GoogleMap
        v-if="loaded"
        mapId="trackTravel"
        :api-promise="apiPromise"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="11"
      >
        <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
          <img src="../assets/train.png" width="50" height="50" />
        </CustomMarker>
        <CustomMarker :options="{ position: origin, anchorPoint: 'BOTTOM_CENTER' }">
          <img src="../assets/station.png" width="50" height="50" />
        </CustomMarker>
        <CustomMarker :options="{ position: destination, anchorPoint: 'BOTTOM_CENTER' }">
          <img src="../assets/station.png" width="50" height="50" />
        </CustomMarker>
      </GoogleMap>
</template>

<style scoped>

</style>
