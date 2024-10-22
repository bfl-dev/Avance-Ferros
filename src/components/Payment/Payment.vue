<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/Payment/NavBar.vue';
import UserDataFields from '@/components/Payment/UserDataFields.vue';
import TicketDetail from '@/components/Payment/TicketDetail.vue';
import CountdownTimer from '@/components/Payment/CountdownTimer.vue';
import PaymentOptions from '@/components/Payment/PaymentOptions.vue';
import UserContactsFields from "@/components/Payment/UserContactsFields.vue";

const route = useRoute();
const travelId = ref('');
const seats = ref([]);
const discount = ref(0);
const highlightIndex = 2;

onMounted(() => {
  const travelData = route.params.travelID.split('-');
  travelId.value = travelData[0];
  seats.value = travelData.slice(1).map(seat => {
    let seatNumber = parseInt(seat, 10);
    let wagon = 1;
    if (seatNumber > 80 && seatNumber <= 160) {
      wagon = 2;
      seatNumber -= 80;
    } else if (seatNumber > 160 && seatNumber <= 240) {
      wagon = 3;
      seatNumber -= 160;
    }
    return { wagon, seat: seatNumber };
  });
});

const updateTrainPoints = (points) => {
  discount.value = points;
};
</script>

<template>
  <div class="payment-page-container">
    <NavBar :highlightIndex="highlightIndex" />
    <div class="payment-content-wrapper">
      <section class="passenger-info-section">
        <header class="payment-header">
          <h2 class="title">Información de los pasajeros</h2>
          <CountdownTimer class="timer" />
        </header>
        <article class="passenger-data" v-for="(seat, index) in seats" :key="index">
          <div class="passenger-banner">
            <div class="passenger-text-wrapper">
              <h3 class="fields-title">Bagon {{ seat.wagon }}</h3>
            </div>
            <div class="passenger-text-wrapper">
              <h3 class="fields-title">Asiento {{ seat.seat }}</h3>
            </div>
          </div>
          <UserDataFields :loadUserData="index === 0"/>
        </article>
        <article class="buyer-data">
          <div class="buyer-banner">
            <div class="buyer-text-wrapper">
              <h3 class="fields-title">Datos del comprador</h3>
            </div>
          </div>
          <UserDataFields :loadUserData="true"/>
          <UserContactsFields/>
        </article>
        <PaymentOptions @update-train-points="updateTrainPoints" />
      </section>
      <section class="ticket-detail-wrapper">
        <TicketDetail :discount="discount" :travelId="travelId" :totalPassengers="seats.length"/>
        <button class="payment-button">Pagar</button>
      </section>
    </div>
  </div>
</template>

<style scoped>
.payment-page-container {
  display: flex;
  flex-direction: column;
  gap: 31px;
  width: 67.5%;
  min-width: 790px;
  background-color: #ffffff;
  padding: 1rem 2rem;
  max-height: 62vh;
  border-radius: 20px;
  overflow-y: auto;
  scrollbar-width: none;
}
.title{
  font-size: 1.5rem;
  font-weight: bold;
}
.payment-content-wrapper {
  display: flex;
  width: 100%;
  gap: 20px;
  margin: 0 auto;
  box-sizing: border-box;
}

.payment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #010101;
}

.passenger-info-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 75%;
  padding: 20px;
  border-radius: 15px;
  box-sizing: border-box;
}

.passenger-data, .buyer-data {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-sizing: border-box;
}

.passenger-banner, .buyer-banner {
  display: flex;
  height: 50px;
  align-items: center;
  gap: 28px;
  padding: 0 13px;
  box-sizing: border-box;
}

.passenger-text-wrapper, .buyer-text-wrapper {
  padding: 10px;
  background-color: #f7d40a;
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.fields-title {
  color: #000000;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
}

.timer {
  margin-left: auto;
}

.ticket-detail-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  padding: 0 0 30px 0;
}

.payment-button {
  height: 2.8125rem;
  background: #CD071E;
  border-radius: 1.5625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-size: x-large;
}
</style>
