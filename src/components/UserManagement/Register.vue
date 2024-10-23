<script setup>

import '../../styles/login-overlay.css'

import { computed, ref } from 'vue'
import UserApi from '@/api/UserApi.js'
import router from '@/router/index.js'

let user = ref('')
let email = ref('')
let pass = ref('')

let passCheck = ref('')

const isFormValid = computed(() => {
  return user.value && email.value && pass.value && passCheck.value && pass.value === passCheck.value;
});

const register = () => {

  if (isFormValid.value) {

    const userData = {
      name: user.value,
      email: email.value,
      password: pass.value
    };

    UserApi.postUser(userData).then(response => {
      UserApi.postUserDetails(response.data.id ,{}).then(() => {
        console.log('Usuario creado');
      }).catch(() => {
        console.log('Error');
      });
      window.localStorage.setItem("userID", response.data.id);
      router.push('/').then(() => {
        router.go(0);
      });

    }).catch((reason) => {
      console.log(reason);
    });
  }
}
</script>

<template>
  <div class="popup-overlay" id="register">
    <div class="overlay-content">

      <div class="close-container">
        <router-link to="/"><span>⨉</span></router-link>
      </div>

      <div class="section-header">Registrate</div>


      <form class="form-container" @submit.prevent="register">

        <div class="section-body">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email">
          </div>
          <div class="input-group">
            <label for="username">Usuario</label>
            <input type="text" id="username" name="username" v-model="user">
          </div>
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" v-model="pass">
          </div>
          <div class="input-group">
            <label for="password">Confirmar Contraseña</label>
            <input type="password" id="pass-check" v-model="passCheck">
          </div>
        </div>

        <!-- No entiendo pero bueno, ya fue-->
      </form>
      <div class="blk-container">
        <p v-if="!isFormValid">Rellene todos los campos</p>
        <p v-if="pass.value !== passCheck.value & !isFormValid">Las contraseñas no coinciden</p>
        <button type="submit" :disabled="!isFormValid" @click="register()">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.blk-container {
  display: contents;
  justify-content: center;
  align-items: center;
  height: 2rem;
  color: red;
}
</style>
