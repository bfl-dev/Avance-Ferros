<script setup>
import { ref } from 'vue';
import { getStation } from '@/api/TrainsApi.js';

const props = defineProps({
  travel: Object,
  userTrip: Object,
});

const origin = ref('');
const destination = ref('');
const paymentDate = ref(new Date().toLocaleDateString());

getStation(props.travel.origin).then(response => {
  origin.value = response.data;
});
getStation(props.travel.destination).then(response => {
  destination.value = response.data;
});
</script>

<template>
  <div class="purchase-detail">
    <div class="purchase-detail-body">
      <div class="detail-row">
        <div>
          <img src="/src/assets/Logo Default.png" alt="">
        </div>
        <div class="detail-column">
          <p class="label">Origen:</p>
          <p>{{ origin.name }}</p>
          <p>{{ props.travel.departure }}</p>
        </div>
        <div class="detail-column">
          <p class="label">Destino:</p>
          <p>{{ destination.name }}</p>
          <p>{{ props.travel.arrival }}</p>
        </div>
        <div class="detail-column">
          <p class="label">Fecha:</p>
          <p>{{ props.travel.date.split('-').reverse().join('-') }}</p>
        </div>
        <div class="detail-column">
          <p class="label">Asientos:</p>
          <p>{{ props.userTrip.seats.split('-').join(', ') }}</p>
        </div>
      </div>
    </div>
    <div class="payment-detail">
      <div>
        <h3 class="payment-title">Total Pagado: {{ props.userTrip.price }} CLP</h3>
      </div>
      <div class="payment-info">
        <p>Método Usado: Webpay</p>
        <p>Fecha de Pago: {{ paymentDate }}</p>
        <p>Código de Viaje: {{ props.userTrip.id }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.purchase-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.purchase-detail-body {
  display: flex;
  flex-direction: row;
  gap: 1.3125rem;
  width: 100%;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
  padding: 0.5rem 3rem;
  border-radius: 0.9375rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0;
}

.detail-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  min-height: 100px;
}

.payment-detail {
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;
  padding: 1.3125rem;
  border-radius: 0.9375rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.payment-title {
  font-size: 1.5rem;
  color: #000000;
  font-weight: bold;
}

.payment-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.payment-info p {
  margin: 0;
}

.label {
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
}

img {
  max-width: 100px;
  margin-right: 1rem;
}
</style>
