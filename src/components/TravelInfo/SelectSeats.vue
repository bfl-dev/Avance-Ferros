<script setup>
import axios from 'axios'
import { ref } from 'vue'
import SeatsWrapper from '@/components/TravelInfo/SeatsWrapper.vue'
import router from '@/router/index.js'
const props = defineProps({travelId:String})
const travel = ref()
const cabinSelection = ref('0')
const loaded = ref(false)
const seatsWrapper = ref(null)
axios.get('http://localhost:3000/travels/'+props.travelId).then(response =>{
  travel.value = response.data
  loaded.value = true
})

function confirmSubmition(){
  seatsWrapper.value.submit()
}
function submitSeats(args){
  let string = `/payment/${props.travelId}`
  for (const seat of args){
    string+=`${seat.id}`
  }
  router.push({path:string})
}
</script>

<template>
<div class="select-seats">
    <div class="nav-bar">
      <p class="nav-text">Servicios</p>
      <p class="nav-text" style="background-color: #f7d40a; color: #000000">Asientos</p>
      <p class="nav-text">Pasajeros</p>
      <p class="nav-text">Pago</p>
    </div>
    <div class="cabin-selector">
      <img src="../../assets/left-cabin.png" class="cabin" @click="cabinSelection='0'" v-show="cabinSelection!=='0'" />
      <img src="../../assets/left-cabin-selected.png" class="cabin" @click="cabinSelection='0'" v-show="cabinSelection==='0'" />
      <img src="../../assets/mid-cabin.png" class="cabin" @click="cabinSelection='1'" v-show="cabinSelection!=='1'" />
      <img src="../../assets/mid-cabin-selected.png" class="cabin" @click="cabinSelection='1'" v-show="cabinSelection==='1'"/>
      <img src="../../assets/right-cabin.png" class="cabin" @click="cabinSelection='2'" v-show="cabinSelection!=='2'" />
      <img src="../../assets/right-cabin-selected.png" class="cabin" @click="cabinSelection='2'" v-show="cabinSelection==='2'"/>
    </div>
    <SeatsWrapper ref="seatsWrapper" v-if="loaded" :seats="travel.passengers" :cabin-show="cabinSelection" :key="travel.id" @submit="args => {
      submitSeats(args)
    }"></SeatsWrapper>
    <div class="nav-bar">
        <img src="../../assets/Ocupado.png">
        <p class="nav-text" style="background-color: #f7d40a; color: #000000">Ocupado</p>
        <img src="../../assets/Libre.png">
        <p class="nav-text" style="background-color: #f7d40a; color: #000000">Libre</p>
        <img src="../../assets/Seleccionado.png">
        <p class="nav-text" style="background-color: #f7d40a; color: #000000">Seleccionado</p>
        <button class="seats-confirm" @click="confirmSubmition()">Confirmar</button>
    </div>
  </div>
</template>

<style scoped>
.select-seats {
  margin: 3rem auto auto;
  display: flex;
  height: 50%;
  width: 63%;
  padding: 2rem 2rem;
  flex-direction: column;
  justify-content: space-between;
  min-width: 790px;
  flex-shrink: 0;
  background: #FFF;
  border-radius: 1.25rem;
}

.nav-bar {
  display: flex;
  min-height: 56px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}


.cabin-selector{
  display: flex;
  justify-content: center;
}
.nav-text {
    width: fit-content;
    display: flex;
    min-width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    border-radius: 25px;
    box-shadow: 0px 4px 4px #00000040;
    font-weight: 600;
    color: #ffffff;
}


.seats-confirm{
  width: 100%;
  max-width: 200px;
  display: flex;
  height: 2.8125rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  background: #CD071E;
  border-radius: 1.5625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-size: x-large;
  padding: 1rem 2rem;
}
</style>
