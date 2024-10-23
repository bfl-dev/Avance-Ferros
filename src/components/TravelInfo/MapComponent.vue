<script setup>

import { CustomMarker, GoogleMap, Polyline } from 'vue3-google-map'
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
const zoom = ref(11.8)
const pastRoute = ref([])
const futureRoute = ref([])

const routeDrawn = ref(false)
const routeDone = {
  path: pastRoute.value,
  geodesic: true,
  strokeColor: '#0000FF',
  strokeOpacity: 1.0,
  strokeWeight: 4,
}
const routeUpcoming = {
  path: futureRoute.value,
  geodesic: true,
  strokeColor: '#FFFF00',
  strokeOpacity: 1.0,
  strokeWeight: 4,
}
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
    console.log(props.travel)
    if (props.travel.status === "En ruta"){
      center.value = map.value.find(value => value.id === Math.round((parseInt(origin.value.id)+parseInt(destination.value.id))/2).toString())
    } else if (props.travel.status === "Pendiente"){
      center.value = origin.value
      zoom.value = zoom.value-1
    } else {
      center.value = destination.value
      zoom.value = zoom.value-1
    }
    createRoute()
    origin.value = origin.value.location
    center.value = center.value.location
    destination.value = destination.value.location
  })

}

function loadMap(){
  zoom.value = zoom.value-(2.4*(Math.abs(parseInt(props.travel.origin)-parseInt(props.travel.destination))/8))
  console.log(zoom.value)
  getAllNodes().then(nodesResponse =>{
    map.value = nodesResponse['data']
    loadStations()
  })
}

function createRoute(){
  let lowNode = Math.min(parseInt(origin.value.id), parseInt(destination.value.id))
  let highNode = Math.max(parseInt(origin.value.id), parseInt(destination.value.id))
  for (const node of map.value){
    if (parseInt(node.id) >= lowNode && parseInt(node.id) <= highNode){
      if (parseInt(center.value.id) > parseInt(node.id)){
        pastRoute.value.push(node.location)
      } else if (parseInt(center.value.id) === parseInt(node.id)) {
        futureRoute.value.push(node.location)
        pastRoute.value.push(node.location)
      } else {
        futureRoute.value.push(node.location)
      }

    }
  }
  routeDrawn.value = true
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
        :zoom="zoom"
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
        <Polyline v-if="routeDrawn" :options="routeDone" />
        <Polyline v-if="routeDrawn" :options="routeUpcoming" />
      </GoogleMap>
</template>

<style scoped>

</style>
