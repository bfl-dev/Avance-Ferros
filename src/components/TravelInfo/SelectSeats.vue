<script setup>
import axios from 'axios'
import { ref } from 'vue'

const props = defineProps({travelId:String})
const travel = ref()
axios.get('http://localhost:3000/travels/'+props.travelId).then(response =>{
  travel.value = response.data
})
</script>

<template>
<div class="select-ticket">
    <div class="nav-bar">
      <p class="nav-text">Servicios</p>
      <p class="nav-text" style="background-color: #f7d40a; color: #000000">Asientos</p>
      <p class="nav-text">Pasajeros</p>
      <p class="nav-text">Pago</p>
    </div>

    <div class="cabin">
        <img src="/assets/left-cabin-selected.png" class="cabin">
        <img src="/assets/mid-cabin.png" class="cabin">
        <img src="/assets/right-cabin.png" class="cabin">
    </div>

    <div class="seats">

    </div>
    <div class="nav-bar">
        <img src="/assets/Ocupado.png">
        <p class="nav-text" style="background-color: #f7d40a; color: #000000">Ocupado</p>
        <img src="/assets/Libre.png">
        <p class="nav-text" style="background-color: #f7d40a; color: #000000">Libre</p>
        <img src="/assets/Seleccionado.png">
        <p class="nav-text" style="background-color: #f7d40a; color: #000000">Seleccionado</p>
        <button class="seats-confirm" >Confirmar</button>
    </div>
  </div>
</template>

<style scoped>
.select-ticket {
    margin: auto;
    margin-top: 3rem;
    display: flex;
    width: 68.8125rem;
    height: 36rem;
    padding: 0rem 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
    background: #FFF;
    border-radius: 1.25rem;
}

.select-ticket .nav-bar {
    margin-top: -2rem;
    display: flex;
    height: 43px;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
}



.nav-text {
    width: fit-content;
    display: flex;
    min-width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    border-radius: 25px;
    box-shadow: 0px 4px 4px #00000040;
    font-weight: 600;
    color: #ffffff;
}


.seats{
    display: flex;
    width: 66.3125rem;
    padding: 1.1875rem 16px 1.1875rem 0.3125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.4375rem;
    border-radius: 1.25rem;
    background: #F0F0F0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.seats-confirm{
    display: flex;
    height: 2.8125rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex: 1 0 0;
    background: #CD071E;
    border-radius: 1.5625rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    font-size: x-large;
    padding: 1rem 2rem;
}
</style>
