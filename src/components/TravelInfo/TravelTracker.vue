<script setup>
import { ref } from 'vue'

import TrainComponent from '@/components/TrainComponent.vue'
import MapComponent from '@/components/TravelInfo/MapComponent.vue'
import SeatsComponent from '@/components/TravelInfo/SeatsComponent.vue'
import { getTravel, getTicket } from '@/api/TrainsApi.js'
const requested = ref(false)
const travel = ref()
const code = ref('')
const seats = ref('')
const travelCodeSubmitted = ref(false)

function setTracker(id){
  getTravel(id).then(response =>{
    travel.value = response['data']
    requested.value = true
  })
}
function confirmCode(){
  if (code.value.charAt(0)==='T'){
    getTicket(code.value).then(response =>{
      seats.value = response['data']
      console.log(seats.value.travelId)
      setTracker(seats.value.travelId)
      travelCodeSubmitted.value = true
    })
  } else {
    setTracker(code.value)
  }
}
</script>

<template>
  <div class="travel-search">
    <div class="travel-search-header">
      <h3>Ingrese su codigo de viaje:</h3>
    </div>
    <div class="travel-search-body">
      <input class="standard-text-input" type="text" id="travel-code" name="travel-code" v-model="code">
      <button class="travel-search-confirm" @click="confirmCode()">Buscar</button>
    </div>
    <div class="travel-search-content" v-if="requested">
      <MapComponent :travel="travel" :key="travel.id"></MapComponent>
      <div class="travel-search-travel-container">
        <train-component :travel='travel' :key="travel.id"></train-component>
        <seats-component v-if="travelCodeSubmitted" :seats="seats" :key="code"></seats-component>
      </div>
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
    font-family: "Inter";
  font-weight: 800;
  font-size: larger;
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
    border-radius: 1.25rem 1.25rem 0 0;

}

.travel-search-body{
    display: flex;
    padding: 0 1.25rem;
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

.travel-search-travel-container{
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
}
</style>
