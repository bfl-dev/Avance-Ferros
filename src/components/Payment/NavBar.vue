<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  highlightIndex: {
    type: Number,
    default: 0
  }
});

const navItems = ['Servicios', 'Asientos', 'Pago', 'Confirmacion'];
</script>

<template>
  <div class="nav-bar">
    <p v-for="(item, index) in navItems" :key="index" class="nav-text" :style="index === highlightIndex ? 'background-color: #f7d40a; color: #000000' : ''">
      {{ item }}
    </p>
  </div>
</template>

<style scoped>
.nav-text {
  display: flex;
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  border-radius: 25px;
  box-shadow: 0px 4px 4px #00000040;
  font-weight: 600;
  color: #ffffff;
}
.nav-bar {
  display: flex;
  min-height: 43px;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
}
</style>
