<script setup>

import {onMounted, ref} from "vue";
import UserApi from "@/api/UserApi.js";

const emits = defineEmits(['navbarStatus']);

const admin = ref({});

const openNavbar = () => {
  emits('navbarStatus');
}

const getAdmin = () => {
  UserApi.getAdmin(window.localStorage.getItem('adminID'))
    .then(response => {
      console.log(response.data);
      admin.value = response.data;
      console.log(admin.value);
    })
    .catch((reason) => {
      console.log('reason', reason);
    });
}

onMounted(() => {
  getAdmin();
});

</script>

<template>
    <nav class="navbar">
      <svg @click="openNavbar()" xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.28574C0 1.10228 0.9594 0.142883 2.14286 0.142883H27.8571C29.0406 0.142883 30 1.10228 30 2.28574C30 3.4692 29.0406 4.4286 27.8571 4.4286H2.14286C0.9594 4.4286 0 3.4692 0 2.28574Z" fill="#80858D"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 11.8166 0.9594 10.8572 2.14286 10.8572H27.8571C29.0406 10.8572 30 11.8166 30 13C30 14.1835 29.0406 15.1429 27.8571 15.1429H2.14286C0.9594 15.1429 0 14.1835 0 13Z" fill="#80858D"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 23.7143C0 22.5308 0.9594 21.5714 2.14286 21.5714H27.8571C29.0406 21.5714 30 22.5308 30 23.7143C30 24.8978 29.0406 25.8571 27.8571 25.8571H2.14286C0.9594 25.8571 0 24.8978 0 23.7143Z" fill="#80858D"/>
      </svg>
      <div class="user">
        <img :src="admin.image" alt="">
        <p>{{ admin.name }}</p>
      </div>
    </nav>
</template>

<style scoped>

.navbar
{
  display: flex;
  width: 100%;
  height: 72px;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background: #E4E0E0;
}

.user
{
  display: flex;
  padding: 0 10px;
  align-items: center;
  gap: 8px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.user img
{
  height: 40px;
  width: auto;
  border-radius: 50%;
}
</style>
