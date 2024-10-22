<script setup>

import { CustomMarker, GoogleMap } from 'vue3-google-map'
import { Loader } from '@googlemaps/js-api-loader';
import { ref } from 'vue'
import { getKey } from '@/api/MapsApi.js'
import { getAllNodes, getAllStations } from '@/api/TrainsApi.js'


const props = defineProps({travel:Object})
const API_KEY = ref('MAPS_KEY')
const apiPromise = ref()
const loaded = ref(false)
const center = ref()
const origin = ref()
const destination = ref()
const map = ref()

function loadPromise(){
  let loader =  new Loader({
  apiKey: API_KEY.value,
  version: 'weekly',
  libraries: ['maps'],
})
  apiPromise.value= loader.load()
  loaded.value = true
}
function loadStations(){
  getAllStations().then(stationsResponse =>{
    for (const station of stationsResponse['data']){
      if (station.id === props.travel.origin){
        origin.value = map.value.find(value => value.id === station.location)
      }
      if (station.id === props.travel.destination){
        destination.value = map.value.find(value => value.id === station.location)
      }
    }
    center.value = map.value.find(value => value.id === Math.round((parseInt(origin.value.id)+parseInt(destination.value.id))/2).toString()).location
    origin.value = origin.value.location
    destination.value = destination.value.location
  })

}

function loadMap(){
  getAllNodes().then(nodesResponse =>{
    map.value = nodesResponse['data']
    loadStations()
  })
}



function fetch(){
  getKey().then(response=>{
    API_KEY.value = response.data.split("").reverse().join("")
    loadMap()
    loadPromise()
})
}

fetch()
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
          <img src="../../assets/train.png" width="50" height="50" />
        </CustomMarker>
        <CustomMarker :options="{ position: origin, anchorPoint: 'BOTTOM_CENTER' }">
          <img src="../../assets/station.png" width="50" height="50" />
        </CustomMarker>
        <CustomMarker :options="{ position: destination, anchorPoint: 'BOTTOM_CENTER' }">
          <img src="../../assets/station.png" width="50" height="50" />
        </CustomMarker>
      </GoogleMap>
</template>

<style scoped>

</style>
