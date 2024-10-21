<script setup>

import { ref } from 'vue'
import {convertToTime, convertToMinutes} from '@/api/TimeUtils.js'
import router from '@/router/index.js'

const props = defineProps({travel:Object})

const duration = ref('00:30')
const price = ref('800 CLP')


duration.value = convertToTime(convertToMinutes(props.travel.arrival)-convertToMinutes(props.travel.departure))
</script>

<template>
  <div class="data" @click="router.push({path:`/select-seats/${props.travel.id}`})">
      <p class="value">{{props.travel.departure}}</p>
      <p class="value">{{props.travel.arrival}}</p>
      <p class="value">{{duration}}</p>
      <p class="value">{{props.travel.passengers.split('').filter(value => value=="0").length}}</p>
      <p class="value">{{price}}</p>
  </div>

</template>

<style scoped>
.data {
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  background-color: #f7d40a;
  border-radius: 20px;
  justify-content: space-between;
  transition: background-color 0.42s ease;
}
.data:hover{
  background-color: #c9ac06;
}

.value {
  display: flex;
  justify-content: center;
  padding: 4px 41px;
  flex: 1;
  background-color: #ffffff;
  border-radius: 25px;
}
</style>
