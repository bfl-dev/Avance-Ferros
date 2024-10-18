<script setup>

</script>

<template>
  <div class="logo-container" onclick="window.location.href = 'index.html';">
    <img src='../../assets/Logo Small.png' class="default">
    <img src='../../assets/Logo Default.png' class="hovered">
  </div>
</template>

<style scoped>
.logo-container {
  position: relative;
  width: 53px;
  height: 53px;
  overflow: hidden;
  transition: width 0.25s ease;
}

.logo-container img {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.42s ease;
}

.logo-container img.default {
  width: 53px;
  height: 53px;
  z-index: 2;
}

.logo-container img.hovered {
  width: 184px;
  height: 53px;
  transform: translateX(-100%);
  transform-origin: left;
  z-index: 1;
}

.logo-container:hover {
  width: 184px;
}

.logo-container:hover img.hovered {
  transform: translateX(0);
}
</style>
