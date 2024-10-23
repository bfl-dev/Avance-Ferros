<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const userTripId = ref(route.params.userTrip);
const userTrip = ref(null);

onMounted(async () => {
    const response = await axios.get(`http://localhost:3000/userTrip/${userTripId.value}`);
    userTrip.value = response.data;
});
</script>

<template>
  <div>
    <h1>Confirmación de Viaje</h1>
    <div v-if="userTrip">
      <p>ID del Viaje: {{ userTrip.travelId }}</p>
      <p>Asientos: {{ userTrip.seats }}</p>
      <p>Precio Total: {{ userTrip.price }}</p>
    </div>
    <div v-else>
      <p>Cargando</p>
    </div>
  </div>
</template>

<style scoped>

</style>
