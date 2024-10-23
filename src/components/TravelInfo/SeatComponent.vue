<script setup>
import { ref } from 'vue'

const props = defineProps({seat:Object})

const emit = defineEmits(['flip'])
const selected = ref(false)
function update(){
  selected.value= !selected.value
  emit('flip')
}
const localSeat = ref(props.seat.status)
</script>

<template>
  <div class="seat-wrapper">
    <div class="seat-container">
      <p class="number">{{seat.id}}</p>
      <div class="seat" v-if="localSeat==='0'" @click="update">
        <img class="seat-image" src="../../assets/Libre.png" v-show="!selected">
        <img class="seat-image" src="../../assets/Seleccionado.png" v-show="selected">
      </div>
      <div class="seat" v-if="localSeat==='1'">
        <img class="seat-image" src="../../assets/Ocupado.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
.seat-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
}

.seat-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.number {
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.seat {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 56px;
  max-height: 56px;
}

.seat-image {
  z-index: 1;
  max-width: 56px;
  max-height: 56px;
}
</style>






