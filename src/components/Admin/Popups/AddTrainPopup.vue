<script setup>
import '@/styles/login-overlay.css';
import {ref} from 'vue';
import UserApi from '@/api/UserApi.js';
import router from '@/router/index.js';

const travelDate = ref('');
const travelTime = ref('');
const origin = ref('');
const destination = ref('');
const train = ref('');

const scheduleTravel = () => {
  // Implement the logic to schedule the travel
  console.log({
    travelDate: travelDate.value,
    travelTime: travelTime.value,
    origin: origin.value,
    destination: destination.value,
    train: train.value,
  });
  // Example: Redirect to another page after scheduling
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
            <option value="Victoria">Victoria</option>
            <option value="PUA">PUA</option>
            <option value="Perquenco">Perquenco</option>
            <option value="Quillem">Quillem</option>
            <option value="Lautaro">Lautaro</option>
            <option value="Lautaro Centro">Lautaro Centro</option>
            <option value="Pillanlelbun">Pillanlelbun</option>
            <option value="Cajon">Cajon</option>
            <option value="Temuco">Temuco</option>
          </select>
        </div>
        <div class="input-group">
          <label for="destination">Destino</label>
          <select id="destination" v-model="destination">
            <option value="Victoria">Victoria</option>
            <option value="PUA">PUA</option>
            <option value="Perquenco">Perquenco</option>
            <option value="Quillem">Quillem</option>
            <option value="Lautaro">Lautaro</option>
            <option value="Lautaro Centro">Lautaro Centro</option>
            <option value="Pillanlelbun">Pillanlelbun</option>
            <option value="Cajon">Cajon</option>
            <option value="Temuco">Temuco</option>
          </select>
        </div>
        <div class="input-group">
          <label for="train">Tren</label>
          <select id="train" v-model="train">
            <option value="F35">F-35 Lightning II</option>
            <option value="F22">F-22 Raptor</option>
            <option value="suhakuto">Super Hakuto</option>
          </select>
        </div>
      </div>
      <button type="button" @click="scheduleTravel">Agendar Viaje</button>
    </div>
  </div>
</template>

<style scoped>
</style>
