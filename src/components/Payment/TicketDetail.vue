<script setup>
import { defineProps, ref, watch , watchEffect} from 'vue';
import axios from 'axios';

const props = defineProps({
  discount: {
    type: Number,
    required: true
  },
  totalPassengers: {
    type: Number,
    required: true
  },
  travelId: {
    type: String,
    required: true
  }
});

const travel = ref(null);
const originStation = ref('');
const destinationStation = ref('');
const travelHours = ref('');
const subtotal = ref(0);
const total = ref(0);

const loadTravelData = async (travelId) => {
  try {
    const response = await axios.get(`http://localhost:3000/travels/${travelId}`);
    travel.value = response.data;
    const originResponse = await axios.get(`http://localhost:3000/stations/${travel.value.origin}`);
    originStation.value = originResponse.data.name;
    const destinationResponse = await axios.get(`http://localhost:3000/stations/${travel.value.destination}`);
    destinationStation.value = destinationResponse.data.name;

    const [departure, arrival] = [travel.value.departure, travel.value.arrival].map(time => new Date(`1970-01-01T${time}:00`));
    const diffMs = arrival - departure;
    const diffHrs = Math.floor(diffMs / 3600000);
    const diffMins = Math.floor((diffMs % 3600000) / 60000);
    travelHours.value = `${String(diffHrs).padStart(2, '0')}:${String(diffMins).padStart(2, '0')}`;
  } catch (error) {
    console.error('Error fetching travel data:', error);
  }
};

watch(() => props.travelId, (newTravelId) => {
  if (newTravelId) {
    loadTravelData(newTravelId);
  }
}, { immediate: true });

watchEffect(() => {
  subtotal.value = 800 * props.totalPassengers;
  total.value = subtotal.value - props.discount;
});
</script>

<template>
  <section v-if="travel" class="ticket-details">
    <article class="ticket-card">
      <header class="bold-text">Detalles de la compra</header>
      <div class="summary-details">
        <div class="location-details">
          <div class="location-info">
            <span class="bold-text">Desde</span>
            <span class="city-name bold-text">{{ originStation }}</span>
          </div>
          <span class="light-text">{{ travel.departure }}</span>
        </div>
        <div class="location-details">
          <div class="location-info">
            <span class="bold-text">Hacia</span>
            <span class="city-name bold-text">{{ destinationStation }}</span>
          </div>
          <span class="light-text">{{ travel.arrival }}</span>
        </div>
        <div class="duration light-text">
          <span>Duración: </span>
          <time class="time">{{ travelHours }} <span class="hours">horas</span></time>
        </div>
      </div>
      <div class="payment-seats">
        <div class="payment-seat-row">
          <span class="seat-info">{{ props.totalPassengers }} x Boletos:</span>
          <span class="bold-text">CLP ${{ subtotal }}</span>
        </div>
      </div>
      <div class="discount-row">
        <span>Descuento</span>
        <span class="primary-text">CLP ${{ props.discount }}</span>
      </div>
    </article>
    <footer class="total">
      <div class="total-row">
        <span>Total</span>
        <span>CLP ${{ total }}</span>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.ticket-details {
  width: 100%;
  background-color: #F7D40A;
  border-radius: 15px;
  box-sizing: border-box;
  height: fit-content;
  position: sticky;
  color: #000000;
  top: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.ticket-card {
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  background-color: #ffffff;
}

.bold-text {
  font-weight: bold;
}

.summary-details, .payment-seats {
  margin-top: 15px;
}

.location-details, .discount-row, .total-row, .payment-seat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location-info {
  display: flex;
  flex-direction: column;
}

.total {
  background-color: #f7d40a;
  padding: 15px;
  color: #ffffff;
  border-radius: 0 0 10px 10px;
}

.primary-text {
  color: #f7d40a;
}

.light-text {
  color: #797979;
}
</style>
