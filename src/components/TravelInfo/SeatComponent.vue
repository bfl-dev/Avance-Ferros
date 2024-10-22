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
  <div class="seat" v-if="localSeat==='0'" @click="update">
    <img class="seat" src="../../assets/Libre.png" v-show="!selected">
    <img class="seat" src="../../assets/Seleccionado.png" v-show="selected">
  </div>
  <div class="seat" v-if="localSeat==='1'">
    <img class="seat" src="../../assets/Ocupado.png" >
  </div>

</template>


<style scoped>
.seat {
  display: flex;
  width: 100%;
  max-height: 56px;
  max-width: 56px;
}
</style>

