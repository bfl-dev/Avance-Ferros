<script setup>
defineProps({ seats: Object })
</script>

<template>
  <div class="seats-component">
    <div class="seats-component-icon">
      <img src="../../assets/seat%20default.png" v-for="seat of seats.seats.split('-')" :key="seat"/>
    </div>
    <div class="seats-component-body">
      <div class="seats-component-body-row">
        <div class="seats-component-body-text-box">
          <p><b>Numero de asientos:</b></p>
          <p>{{seats.seats.split('-').length }}</p>
        </div>
        <div class="seats-component-body-text-box">
          <p><b>Asientos:</b></p>
          <p>{{seats.seats.split('-').join(',') }}</p>
        </div>
      </div>
      <div class="seats-component-body-row">
        <div class="seats-component-body-text-box">
          <p><b>Precio:</b></p>
          <p>{{seats.price}} CLP</p>
        </div>
        <button class="receipt-button"><b>Ver Comprobante</b></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.seats-component {
  text-align: center;
  display: inline-flex;
  padding: 1.125rem 1.75rem;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 0.9375rem;
  gap: 2.09rem;
}

.seats-component-icon {
  display: flex;
  width: 4.75rem;
  align-items: center;
  align-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.seats-component-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3125rem;
}

.seats-component-body-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
}

.seats-component-body-text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}

.receipt-button {
  font-size: 1.25rem;
  display: flex;
  height: 2.75rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
}
</style>
