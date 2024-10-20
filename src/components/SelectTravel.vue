<script setup>
import { ref } from 'vue'
import axios from 'axios'
import TravelWrapper from '@/components/TravelWrapper.vue'
import VueSlider from "vue-3-slider-component";
import {convertToTime, convertToMinutes} from '../api/TimeUtils.js'
const props = defineProps({
  origin:String,
  destination:String
})
const slidervalue = ref([360,1410])
const sliderText = ref('08:00 - 23:25')
const originStation = ref('')
const destinationStation = ref('')
const travels = ref([])

axios.get('http://localhost:3000/stations').then(response =>{
  for (const station of response.data){
    if (station.id === props.origin){
      originStation.value = station
    }
    if (station.id === props.destination){
      destinationStation.value = station
    }
  }
  axios.get('http://localhost:3000/travels').then(response =>{
  for (const ride of response.data){
    if (ride.status === "Pendiente" && ride.origin === originStation.value.id && ride.destination === destinationStation.value.id){
      travels.value.push(ride)
    }
  }
})
})

function updateTime() {
  sliderText.value = `${convertToTime(slidervalue.value[0])} - ${convertToTime(slidervalue.value[1])}`
}


</script>

<template>


  <div class="select-ticket">
    <div class="nav-bar">
      <p class="nav-text" style="background-color: #f7d40a; color: #000000">Servicios</p>
      <p class="nav-text">Asientos</p>
      <p class="nav-text">Pasajeros</p>
      <p class="nav-text">Pago</p>
    </div>
    <div class="content">
      <div class="filters">
        <p>Hora de Salida:</p>
        <p>{{sliderText}}</p>
        <VueSlider
          tooltip="none"
          v-bind="{processStyle:{backgroundColor:'#f7d40a'}}"
          v-model="slidervalue"
          class="slider"
          :interval=5
          :max=1410
          :min=360
          :height="8"
          :width="180"
          @change="updateTime"/>
        <div class="from-to">Desde:<br />Estacion {{originStation["name"]}}<br /><br />Hacia:<br />Estacion {{destinationStation["name"]}}</div>
      </div>
      <div class="trains-container">
        <div class="information-bar">
          <div>Salida</div>
          <div>Llegada</div>
          <div>Duración</div>
          <div>Asientos</div>
          <div>Precio</div>
        </div>
        <TravelWrapper
          v-for="travel of travels"
          :key="travel.id"
          :travel="travel"
          v-show="slidervalue[0]<=convertToMinutes(travel.departure) && slidervalue[1]>=convertToMinutes(travel.departure)"></TravelWrapper>
      </div>
    </div>
  </div>

</template>

<style scoped>

.select-ticket {
  display: flex;
  flex-direction: column;

  align-items: center;

  color: #000000;
  background-color: #FFF;

  height: 62vh;
  width: 1150px;
  gap: 28px;
  padding: 1rem 2rem;
  border-radius: 20px;
}

.nav-bar {
    display: flex;
    height: 43px;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
}

.nav-text {
    display: flex;
    width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    border-radius: 25px;
    box-shadow: 0px 4px 4px #00000040;
    font-weight: 600;
    color: #ffffff;
}


.content {
    display: inline-flex;
    align-items: flex-start;
    gap: 31px;
}

.filters {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 18px 20px;
    flex: 0 0 auto;
    background-color: #f0f0f0;
    border-radius: 10px;
}



.search-again {
  display: flex;
  margin: 12px 0;
  justify-content: center;
  font-weight: 600;
  position: relative;
  width: 162px;
  height: 41px;
  background-color: #f7d40a;
  border-radius: 20px;
  align-items: center;
}

.from-to {
    margin: -1px 10px 10px 10px;
    text-align: center;
    line-height: 16px;
}

.trains-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.information-bar {
    display: flex;
    width: 100%;
    height: 36px;
    align-items: center;
    justify-content: space-between;
  padding: 0rem 5rem;
    border-radius: 20px;
    border: 1px solid;
}
</style>
