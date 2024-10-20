<script setup>
import { ref } from 'vue'
import axios from 'axios'

const travelID = ref('FE-123235837')
const lol = 'http://localhost:3000/travels/'+travelID.value
axios.get(lol)
</script>

<template>

</template>

<style scoped>

</style>
