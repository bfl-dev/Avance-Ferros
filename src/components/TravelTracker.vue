<script setup>
import { ref } from 'vue'
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
import { Loader } from '@googlemaps/js-api-loader';
import axios from 'axios'
import TrainComponent from '@/components/TrainComponent.vue'

const API_KEY = ref('')
const apiPromise = ref()
const loaded = ref(false)
const requested = ref(false)
const travel = ref()
const code = ref('')
const center = ref('')

function fetch(){
  let train = ''
  axios.get('http://localhost:3000/travels/'+code.value).then(response =>{
    train = {
      id:response.data["id"],
      status:response.data["status"],
      origin:response.data["origin"],
      destination:response.data["destination"],
      arrival:response.data["arrival"],
      departure:response.data["departure"],
      passengers:response.data["passengers"]
    }
    axios.get('http://localhost:3000/stations/'+train.origin).then(response =>{
      train.origin = response.data
      axios.get('http://localhost:3000/stations/'+train.destination).then(response =>{
        train.destination = response.data
        center.value = {
          lat: ((train.destination.location.lat+train.origin.location.lat)/2),
          lng: ((train.destination.location.lng+train.origin.location.lng)/2)
        }
        travel.value=train
        requested.value = true
    })})
  })
}

function loadPromise(){
  apiPromise.value =  new Loader({
  apiKey: API_KEY.value,
  version: 'weekly',
  libraries: ['maps'],
}).load();
  loaded.value = true
}

axios.get('http://localhost:3000/key').then(response=>{
  API_KEY.value = response.data.split("").reverse().join("")
  loadPromise()
})




</script>

<template>
  <div class="travel-search">
    <div class="travel-search-header">
      <h3>Ingrese su codigo de viaje:</h3>
    </div>
    <div class="travel-search-body">
      <input class="standard-text-input" type="text" id="travel-code" name="travel-code" v-model="code">
      <button class="travel-search-confirm" @click="fetch">Buscar</button>
    </div>
    <div class="travel-search-content" v-if="requested">
      <GoogleMap v-if="loaded&&requested" :api-promise="apiPromise" style="width: 100%; height: 500px" :center="center" :zoom="10">
        <AdvancedMarker :options="{ position: center, label: 'L', title: 'LADY LIBERTY' }" :pin-options="{ background: '#FBBC04' }"></AdvancedMarker>
      </GoogleMap>
      <train-component :travel='travel' ></train-component>
    </div>
  </div>
</template>

<style scoped>
.standard-text-input{
    height: 2.625rem;
    flex: 1 0 0;
    background: #FFF;
    border-radius: 1.25rem;
}
.travel-search{
  color: #2c3e50;
    font-family: "Monocraft Nerd Font";

    display: flex;
    width: 80%;
    padding-bottom: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(2px);
}

.travel-search-header{
    display: flex;
    padding: 1rem 1rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    background: #F7D40A;
    border-radius: 1.25rem 1.25rem 0rem 0rem;

}

.travel-search-body{
    display: flex;
    padding: 0rem 1.25rem;
    align-items: flex-start;
    gap: 0.8125rem;
    align-self: stretch;
    justify-content: space-between;
}

.travel-search-confirm{
    display: flex;
    width: 17.5%;
    height: 2.625rem;
    padding: 0.125rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
}

.travel-search-content{
    display: flex;
    overflow: auto;
    padding: 0.625rem 1.25rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
}

.travel-search-map-container{
    display: flex;
    width: 50%;
    overflow: auto;
    padding: 1.25rem;
    background-color: #9a9a9a;
    border-radius: 0.9375rem;
}

.travel-search-travel-container{
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.9375rem;
    flex: 1 0 0;
    align-self: stretch;
}
</style>
