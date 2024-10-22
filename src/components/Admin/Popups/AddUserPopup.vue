<script setup>
import '@/styles/login-overlay.css';
import {ref} from 'vue';
import UserApi from '@/api/UserApi.js';
import router from '@/router/index.js';

const username = ref('');
const email = ref('');
const names = ref('');
const rut = ref('');
const lastNames = ref('');

const createUser = () => {
    const userHead = {
      username: username.value,
      email: email.value,
      password: rut.value,
    };

    router.push('/admin/users');
};
</script>

<template>
  <div class="popup-overlay" id="user">
    <div class="overlay-content">
      <div class="close-container">
        <router-link to="/admin/users"><span>⨉</span></router-link>
      </div>
      <div class="section-header">Agregar Usuario</div>
      <div class="section-body">
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="input-group">
          <label for="name">Nombres</label>
          <input type="text" id="name" v-model="name">
        </div>
        <div class="input-group">
          <label for="lastname">Apellidos</label>
          <input type="text" id="lastname" v-model="lastNames">
        </div>
        <div class="input-group">
          <label for="rut">Rut</label>
          <input type="text" id="rut" v-model="rut">
        </div>
      </div>
      <button type="button" @click="createUser">Crear Cuenta</button>
    </div>
  </div>
</template>

<style scoped>
</style>
