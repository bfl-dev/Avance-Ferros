<script setup>
import { ref, onMounted, defineProps } from 'vue';
import UserApi from "@/api/UserApi.js";

const props = defineProps({
  loadUserData: {
    type: Boolean,
    default: false
  }
});

const user = ref({
  names: '',
  lastNames: '',
  rut: '',
});

const logged = ref(false);

onMounted(async () => {
  if (props.loadUserData) {
    const userId = window.localStorage.getItem("userID");
    if (userId) {
      try {
        const response = await UserApi.getUserDetails(userId);
        user.value = response.data;
        logged.value = true;
      } catch (error) {
        console.error('Error loading user data:', error);
        logged.value = false;
      }
    }
  }
});
</script>

<template>
  <div class="user-contact-fields">
    <div class="field">
      <select class="input" name="documento" id="documento">
        <option value="" selected disabled>Tipo de Documento</option>
        <option value="RUT">RUT</option>
        <option value="DNI/Pasaporte">DNI/Pasaporte</option>
      </select>
    </div>
    <div class="field">
      <input type="rut" id="rut" role="combobox" class="input" placeholder="Rut" v-model="user.rut">
    </div>
    <div class="field">
      <input class="input" placeholder="Nombre" v-model="user.names">
    </div>
    <div class="field">
      <input class="input" placeholder="Apellido" v-model="user.lastNames">
    </div>
    <div class="field">
      <select class="input" name="nacionalidad" id="nacionalidad">
        <option value="" selected disabled>Nacionalidad</option>
        <option value="Chile">Chile</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Peru">Peru</option>
        <option value="España">España</option>
        <option value="Dinamarca">Dinamarca</option>
        <option value="Venezuela">Venezuela</option>
      </select>
    </div>
  </div>
</template>

<style>
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
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-family: "Inter", serif;
}
.input::placeholder {
  color: #797979;
}
</style>
