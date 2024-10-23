<script setup>
import { ref } from 'vue'
import router from '@/router/index.js'
import UserApi from '@/api/UserApi.js'

let username = ref('')
let password = ref('')

const logIn = () => {
  UserApi.logAdmin(username.value, password.value).then((req) => {
    window.localStorage.setItem("adminID", req.data[0].id);
    router.push('/admin/')
  }).catch(() => {
    alert('Usuario o contraseña incorrectos');
  });
}

</script>

<template>
  <div class="bg-image"></div>
  <div class="bg-text">
    <img src="@/assets/Logo%20Small.png" alt="">
    <p>Iniciar Sesión</p>
    <label for="2"></label><input type="text" name="Hola" id="2" placeholder="Usuario" v-model="username">
    <label for="1"></label><input type="password" name="" id="1" placeholder="Contraseña" v-model="password" >
    <button type="button" @click="logIn()">Iniciar Sesion</button>
  </div>
</template>

<style scoped>
body, html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
  margin: 0;
  background-color: #2C2C2C;
  font-family: "Inter", serif;
}

.bg-image {
  /* The image used */
  background-image: url("@/assets/0tren2.jpg");

  /* Add the blur effect */
  filter: blur(0px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;
  width: 100%;
  position: absolute;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200%;
}

/* Position text in the middle of the page/image */
.bg-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: fit-content;
  text-align: center;
  gap: 15px;
  padding: 20px;
  border-radius: 10px;
}

.bg-text p{
  background-color: rgba(0,0,0,0%);
  color: white;
  /* Black w/opacity/see-through */
}
.bg-text input{
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  border-radius: 15px;
  border-style: none;
  padding: 5px 10px;
}

.bg-text button{
  background-color: #F7D40A;
  border-style: none;
  width: fit-content;
  padding: 10px;
  border-radius: 15px;
}

</style>
