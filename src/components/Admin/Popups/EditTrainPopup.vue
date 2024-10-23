<script setup>
import '@/styles/login-overlay.css';
import {onMounted, ref} from 'vue';
import UserApi from '@/api/UserApi.js';
import router from '@/router/index.js';

const props = defineProps(['id'])


let stations = ref([])

onMounted(() => {
  UserApi.getStations().then( req => {
    stations.value = req.data;
  });
  UserApi.getTravel(props.id).then( req => {
    const train = req.data;
    status.value = train.status;
    travelDate.value = train.date;
    departure.value = train.departure;
    arrival.value = train.arrival;
    origin.value = train.origin;
    destination.value = train.destination;
    passengers.value = train.passengers;
  });
  console.log(props.id)
});


let status = ref('');
let travelDate = ref('');
let departure = ref('');
let arrival = ref('');
let origin = ref('');
let destination = ref('');
let date = ref('');
let passengers = ref('');



const updateTravel = () => {
  UserApi.putTravel(props.id,{
    date: travelDate.value,
    departure: departure.value,
    origin: origin.value,
    destination: destination.value,
    arrival: arrival.value,
    status: status.value,
    passengers: passengers.value
  });
  router.push(`/admin/baq/trains/manage/${props.id}`).then(() => {
      router.go(0);
  });
};
</script>

<template>
  <div class="popup-overlay" id="train">
    <div class="overlay-content">

      <div class="close-container">
        <router-link to="/admin/baq/trains/manage/{{id}}"><span>⨉</span></router-link>
      </div>

      <div class="section-header">Edite los parámetros del viaje</div>
      <div class="section-body">
        <div class="input-group">
          <label for="status">Estado del Tren</label>
          <input type="text" id="status" v-model="status">
        </div>
        <div class="input-group">
          <label for="date">Fecha del Viaje</label>
          <input type="date" id="date" v-model="travelDate">
        </div>
        <div class="input-group">
          <label for="departure">Hora de Salida</label>
          <input type="time" id="departure" v-model="departure">
        </div>
        <div class="input-group">
          <label for="arrival">Hora de llegada</label>
          <input type="time" id="arrival" v-model="arrival">
        </div>
        <div class="input-group">
          <label for="origin">Origen</label>
          <select id="origin" v-model="origin">
            <option value="" selected disabled>¿De donde partes?</option>
            <option v-for="station of stations" :value="station.id" :key="station.id" :disabled="destination===station">{{station.name}}</option>
          </select>
        </div>
        <div class="input-group">
          <label for="destination">Destino</label>
          <select id="destination" v-model="destination">
            <option value="" selected disabled>¿A donde vas?</option>
            <option v-for="station of stations" :value="station.id" :key="station.id" :disabled="origin === station">{{station.name}}</option>
          </select>
        </div>
      </div>
      <button type="button" @click="updateTravel">Agendar Viaje</button>
    </div>
  </div>
</template>

<style scoped>
</style>
