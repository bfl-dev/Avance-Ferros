<script setup>
import { ref, onMounted} from 'vue';
import UserApi from "@/api/UserApi.js";

const user = ref({
  email: '',
  confirmEmail: '',
  phone: ''
});

const logged = ref(false);

onMounted(async () => {
    const userId = window.localStorage.getItem("userID");
    if (userId) {
      try {
        const userHeadResponse = await UserApi.getUser(userId);
        const userDetailResponse = await UserApi.getUserDetails(userId);
        user.value.email = userHeadResponse.data.email;
        user.value.confirmEmail = userHeadResponse.data.email;
        user.value.phone = userDetailResponse.data.emergencyContact;
        logged.value = true;
      } catch (error) {
        console.error('Error loading user data:', error);
        logged.value = false;
      }
    }
});
</script>

<template>
  <div class="user-contact-fields">
    <div class="field">
      <input type="email" id="email" class="input" placeholder="Correo Electrónico" v-model="user.email">
    </div>
    <div class="field">
      <input type="email" id="confirmEmail" class="input" placeholder="Confirmar Correo" v-model="user.confirmEmail">
    </div>
    <div class="field">
      <input type="tel" id="phone" class="input" placeholder="Teléfono" v-model="user.phone">
    </div>
  </div>
</template>

<style scoped>
.user-contact-fields {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 15px;
}
.field {
  flex: 1;
}
.input {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  font-size: 16px;
  font-family: "Inter", serif;
}
.input::placeholder {
  color: #797979;
}
</style>
