<script setup>
import {onMounted, ref} from "vue";
import router from '@/router/index.js'
import { getCurrentDate } from '@/api/TimeUtils.js'
import { getAllStations } from '@/api/TrainsApi.js'
const stations = ref([])
const origin = ref('')
const destination = ref('')
const date = ref()


function updateOrigin(event) {
  origin.value = stations.value.find(station => station.name === event.target.value);
}

function updateDestination(event) {
  destination.value = stations.value.find(station => station.name === event.target.value);
}

getAllStations().then(response =>{
  for (const station of response['data']){
    stations.value.push(station)
  }
})

onMounted(() => {
  document.getElementById('travel-date').setAttribute('min', getCurrentDate());
});

</script>

<template>
  <div class="tickets">
    <select name="origin" id="origin" class="tickets-select-box" @change="updateOrigin" >
      <option value="" selected disabled>¿De donde partes?</option>
      <option v-for="station of stations" :key="station.id" :disabled="destination===station">{{station.name}}</option>
    </select>
    <select name="destination" id="destination" class="tickets-select-box" @change="updateDestination">
      <option value="" selected disabled>¿A donde vas?</option>
      <option v-for="station of stations" :key="station.id" :disabled="origin === station">{{station.name}}</option>
    </select>
    <input type="date" id="travel-date" name="date" pattern="\d{2}-\d{2}-\d{4}" class="tickets-select-box" v-model="date" :min="getCurrentDate" >
    <button class="tickets-confirm-button" @click="router.push({path:`/select-travel/${origin.id}${destination.id}${date}`})">Buscar</button>
  </div>
</template>

<style scoped>
.tickets{

  overflow: hidden;
  display: flex;
  width: 75%;
  min-width: 666px;
  padding: 0.625rem 1rem;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 0.9375rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  justify-content: space-between;
}

.tickets-select-box{
  opacity: 60%;
  font-family: "Inter";
  font-weight: 500;
  display: flex;
  width: 27%;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  text-align: center;
  font-size: x-large;
}

.tickets-confirm-button{
  color: #000;
  width: 13%;
  font-size: x-large;
  display: flex;
  height: 4rem;
  padding: 0.625rem 1.8125rem;
  justify-content: center;
  align-items: center;
  background: #F7D40A;
  border-radius: 0.9375rem;
}

.standard-text-input{
  height: 2.625rem;
  flex: 1 0 0;
  background: #FFF;
  border-radius: 1.25rem;
}
</style>
