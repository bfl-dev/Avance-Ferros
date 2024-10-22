<script setup>
import '../../styles/login-overlay.css';
import {ref} from 'vue';
import UserApi from '@/api/UserApi.js'
import router from '@/router/index.js'

import { GoogleLogin } from 'vue3-google-login'

const client_id = "client_id";
let email = ref('');
let password = ref('');


const login = () => {
  UserApi.logUser(email.value, password.value).then(response => {
    window.localStorage.setItem("userID", response.data[0].id);
    router.push('/').then(() => {
      router.go(0);
    })
  }).catch(() => {
    console.log("Error");
  });
}

const callback = (response) => {
  console.log("do something ", response);
}

//TODO: Gestion de errores
</script>

<template>

  <div class="popup-overlay" id="login">
    <div class="overlay-content">

      <div class="close-container">
        <router-link to="/"><span>⨉</span></router-link>
      </div>

      <div class="section-header">Inicia Sesion</div>

      <GoogleLogin :callback="callback" :client-id="client_id"></GoogleLogin>
      <div class="separator">
        <p>- ó -</p>
      </div>

      <form class="form-container" @submit.prevent="login">
        <div class="section-body">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email">
          </div>
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password" v-model="password">
          </div>
        </div>
        <button type="submit" @click="login()">Iniciar Sesion</button>
      </form>

    </div>
  </div>

</template>

<style scoped>
@import '../../styles/login-overlay.css';

</style>
