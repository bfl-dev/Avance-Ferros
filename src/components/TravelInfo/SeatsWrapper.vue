<script setup>
import SeatComponent from '@/components/TravelInfo/SeatComponent.vue';
import { ref } from 'vue';

const props = defineProps({ seats: String, cabinShow: String });
const localSeats = ref([])
const emits = defineEmits(['submit'])
defineExpose({submit})

function submit(){
  let i = compactExport()
  emits('submit',{i})
}

function processSeats() {
  let counter = 0
  for (const value of props.seats.split('')){
    counter++
    localSeats.value.push({id:counter, status:value})
  }
  let cabins = []
  while (localSeats.value.length>0){
    cabins.push(localSeats.value.splice(0,80))
  }
  localSeats.value = cabins
}

processSeats()

function compactExport(){
  let reference = props.seats.split('')
  let seats = []
  for (const cabin of localSeats.value){
    for (const seat of cabin){
      if (reference[seat.id-1] !== seat.status){
        seats.push(seat)
      }
    }
  }
  return seats
}

</script>


<template>
  <div class="train">
    <div class="cabin" v-show="cabinShow===localSeats.indexOf(cabin).toString()" v-for="cabin of localSeats" :key="localSeats.indexOf(cabin)">
      <SeatComponent class="seat" v-for="seat of cabin" :seat="seat" :key="seat.id" @flip="function(){
        if (seat.status==='0'){
          seat.status='1'
        } else {
          seat.status='0'
        }
      }"></SeatComponent>
    </div>
  </div>
</template>



<style scoped>
.train{
  width: 100%;
}
.cabin{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 240px;
  width: 100%;
}
</style>


