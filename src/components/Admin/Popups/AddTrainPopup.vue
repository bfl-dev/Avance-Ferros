<script setup>
import '@/styles/login-overlay.css';
import {onMounted, ref} from 'vue';
import UserApi from '@/api/UserApi.js';
import router from '@/router/index.js';

let stations = ref([])

onMounted(() => {
  UserApi.getStations().then( req => {
    stations.value = req.data;
  }
)});


let travelDate = ref('');
let travelTime = ref('');
let origin = ref('');
let departure = ref('');



const scheduleTravel = () => {
  UserApi.postTravel({
    date: travelDate.value,
    departure: travelTime.value,
    origin: origin.value,
    destination: departure.value
  });
  router.push('/admin/trains').then(() => {
      router.go(0);
  });
};  
</script>

<template>
  <div class="popup-overlay" id="train">
    <div class="overlay-content">

      <div class="close-container">
        <router-link to="/admin/trains"><span>⨉</span></router-link>
      </div>

      <div class="section-header">Ingrese parámetros del viaje</div>
      <div class="section-body">
        <div class="input-group">
          <label for="date">Fecha del Viaje</label>
          <input type="date" id="date" v-model="travelDate">
        </div>
        <div class="input-group">
          <label for="time">Hora de Salida</label>
          <input type="time" id="time" v-model="travelTime">
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
          <select id="destination" v-model="departure">
            <option value="" selected disabled>¿A donde vas?</option>
            <option v-for="station of stations" :value="station.id" :key="station.id" :disabled="origin === station">{{station.name}}</option>
          </select>
        </div>
      </div>
      <button type="button" @click="scheduleTravel">Agendar Viaje</button>
    </div>
  </div>
</template>

<style scoped>
</style>
