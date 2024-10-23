<script setup>
import { onMounted, ref } from 'vue'
import TravelWrapper from '@/components/TravelInfo/TravelWrapper.vue'
import VueSlider from "vue-3-slider-component";
import { convertToTime, convertToMinutes, getCurrentDate } from '../api/TimeUtils.js'
import { getAllTravels, getStation } from '@/api/TrainsApi.js'
import NavBar from '@/components/Payment/NavBar.vue'
const props = defineProps({
  origin:String,
  destination:String,
  date:String
})
const localDate = ref(props.date)
const slidervalue = ref([360,1410])
const sliderText = ref('08:00 - 23:25')
const originStation = ref('')
const destinationStation = ref('')
const travels = ref([])

getStation(props.origin).then(response => {
  originStation.value = response['data']
})
getStation(props.destination).then(response => {
  destinationStation.value = response['data']
})

getAllTravels().then(response =>{
  for (const travel of response['data']){
    travels.value.push(travel)
  }
})


function visible(ride){
  return ride.date === localDate.value &&
    ride.status === "Pendiente" &&
    ride.origin === originStation.value.id &&
    ride.destination === destinationStation.value.id &&
    slidervalue.value[0]<=convertToMinutes(ride.departure) &&
    slidervalue.value[1]>=convertToMinutes(ride.departure)
}

onMounted(() => {
  document.getElementById('travel-date').setAttribute('min', getCurrentDate());
});
</script>

<template>


  <div class="select-ticket">
    <NavBar :highlight-index="0"></NavBar>
    <div class="content">
      <div class="filters">
        <p>Fecha de Salida:</p>
        <input type="date" id="travel-date" name="date" class="tickets-select-box" v-model="localDate" :min="getCurrentDate" >
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
          @change="sliderText = `${convertToTime(slidervalue[0])} - ${convertToTime(slidervalue[1])}`"/>
        <div class="from-to">Desde:<br />Estacion {{originStation.name}}<br /><br />Hacia:<br />Estacion {{destinationStation.name}}</div>
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
          v-show="visible(travel)"></TravelWrapper>
      </div>
    </div>
  </div>

</template>

<style scoped>
.tickets-select-box{

  font-weight: 500;
  display: flex;
  width: fit-content;
  height: 100%;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  text-align: center;
  font-size: large;
}
.select-ticket {
  display: flex;
  flex-direction: column;
  font-family: "Inter";
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
    box-shadow: 0 4px 4px #00000040;
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
    padding: 0 5rem;
    border-radius: 20px;
    border: 1px solid;
}
</style>
