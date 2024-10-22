<script setup>

</script>

<template>
  <div class="bar"></div>
  <nav class="progress-bar">
    <span class="number">1</span>
    <span class="number">2</span>
    <span class="number">3</span>
    <span class="number">4</span>
    <span class="number">5</span>
    <span class="number">6</span>
    <span class="number">7</span>
    <span class="number">8</span>
    <span class="number">9</span>
    <span class="number">10</span>
    <span class="number">11</span>
  </nav>
</template>

<style scoped>
.bar {
  position: absolute;
  width: 1195px;
  height: 33px;
  background-color: #3e3e3e;
  border-radius: 50px;
}

.progress-bar {
  display: flex;
  align-items: center;
  gap: 363px;
  position: absolute;
  border-radius: 100px;
  margin: 0 160px;
}

.number {
  width: 33px;
  height: 33px;
  background-color: #f7d40a;
  color: #010101;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-weight: 700;
  font-size: 20px;
}

</style>

