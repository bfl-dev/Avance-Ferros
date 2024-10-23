<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PurchaseDetail from '@/components/Confirmation/PurchaseDetail.vue';
import { getTravel } from '@/api/TrainsApi.js';
import NavBar from "@/components/Payment/NavBar.vue";

const route = useRoute();
const userTripId = ref(route.params.userTrip);
const userTrip = ref(null);
const travel = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:3000/userTrip/${userTripId.value}`);
        userTrip.value = response.data;
        const travelResponse = await getTravel(userTrip.value.travelId);
        travel.value = travelResponse.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
  <div class="confirmation-container">
    <NavBar :highlightIndex="3" />
    <div v-if="userTrip && travel">
      <div class="confirmation-message">
        <div class="message-header">
          <span class="checkmark">✓</span>
          <h1 class="message-title">Reserva confirmada, gracias por tu compra.</h1>
        </div>
        <p>Tu código de viaje es {{ userTrip.id }}</p>
        <div class="email-info">
          <span class="icon-envelope">📧</span>
          <p>Te enviamos un e-mail con los detalles de tu viaje y tu pasaje adjunto (formato .pdf)</p>
        </div>
        <div class="download-section">
          <button class="download-button">Descarga tu(s) pasaje(s) aquí</button>
        </div>
      </div>
      <h2 class="purchase-title">Detalle de la Compra</h2>
      <PurchaseDetail :travel="travel" :userTrip="userTrip"/>
    </div>
    <div v-else>
      <p>Error</p>
    </div>
  </div>
</template>

<style scoped>
.confirmation-container {
  display: flex;
  flex-direction: column;
  gap: 31px;
  width: 67.5%;
  min-width: 790px;
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 20px;
  margin: auto;
}

.confirmation-message {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.message-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-title {
  font-size: 1.5rem;
  color: #000000;
  font-weight: bold;
}

.checkmark {
  color: green;
  font-size: 24px;
  margin-right: 10px;
}

.email-info, .download-section {
  margin-top: 20px;
}

.icon-envelope {
  font-size: 20px;
}

.download-button {
  background: #F7D40A;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.purchase-title {
  font-size: 1.5rem;
  color: #000000;
  font-weight: bold;
}
</style>
