<script setup>

import TravelGuide from '@/components/TravelDetails.vue'
</script>

<template>
  <div class="page-body">
    <div class="slogan-box">
      <h1 class="slogan">Viaja por tren. Rapido y Puntual.</h1>
    </div>
    <TravelGuide></TravelGuide>
  </div>
</template>

<style scoped>
.slogan-box{
  display: flex;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background: rgba(29, 27, 17, 0.65);
  backdrop-filter: blur(5px);
  border-radius: 0.9375rem;

}

.slogan{
  font-size: 4.375rem;
  font-weight: 700;
  color: #FBBC05;
  background: linear-gradient(90deg, #F7D40A 0%, #FBBC05 100%);
  background-clip: text;
}
.page-body{
  margin-top: 6.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.25rem;
}
</style>
