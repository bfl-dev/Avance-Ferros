<script setup>

import { CustomMarker, GoogleMap } from 'vue3-google-map'
import { Loader } from '@googlemaps/js-api-loader';
import { ref } from 'vue'
import axios from 'axios'
const props = defineProps({travel:Object})
const API_KEY = ref('MAPS_KEY')
const apiPromise = ref()
const loaded = ref(false)
const center = ref()
const origin = ref()
const destination = ref()
const stations = ref([])

axios.get('http://localhost:3000/nodes').then(response =>{
  for (const station of response.data){
    stations.value.push(station)
  }
})
function loadPromise(){
  let loader =  new Loader({
  apiKey: API_KEY.value,
  version: 'weekly',
  libraries: ['maps'],
})
  apiPromise.value= loader.load()
  loaded.value = true
}

function fetch(){
  axios.get('http://localhost:3000/key').then(response=>{
  API_KEY.value = response.data.split("").reverse().join("")

  axios.get('http://localhost:3000/nodes/'+props.travel.destination.location).then(response =>{
    destination.value = response.data.location
    axios.get('http://localhost:3000/nodes/'+props.travel.origin.location).then(response =>{
      origin.value = response.data.location
      let centernode = Math.round((parseInt(props.travel.destination.location)+parseInt(props.travel.origin.location))/2).toString()
      axios.get('http://localhost:3000/nodes/'+centernode).then(response =>{
        console.log(props.travel.destination.location)
        center.value = response.data.location
        loadPromise()
      })
    })
  })
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
