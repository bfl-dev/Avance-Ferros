<script setup>
import FerrosHeader from "@/components/Header.vue";
import TravelGuide from "@/components/SelectTravel.vue";
</script>

<template>
  <div class="landing">
    <header><FerrosHeader></FerrosHeader></header>
    <div class="page-body">
      <div class="slogan-box">
        
        <h1 class="slogan">Viaja por tren. Rapido y Puntual.</h1>
      </div>
      <TravelGuide></TravelGuide>
    </div>
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
.landing{
  display: flex;
  flex-direction: column;
  overflow: auto;
  position:absolute;
  height:100%;
  width:100%;

  font-family: "Inter";
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
