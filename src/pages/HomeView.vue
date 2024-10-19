<script setup>
import FerrosHeader from "@/components/Header.vue";
</script>

<template>
  <div class="landing">
    <header>
      <FerrosHeader></FerrosHeader>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>

.landing{
  display: flex;
  flex-direction: column;
  overflow: auto;
  position:absolute;
  height:100%;
  width:100%;

  font-family: "Inter",serif;
  background-image: url("@/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

</style>
