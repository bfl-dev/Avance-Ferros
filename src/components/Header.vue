<script setup>
import logo from './icons/logo.vue'
import {ref} from "vue";

const logged = ref(false)

</script>

<template>
  <header class="page-header">
    <logo></logo>
    <a href="tracking.html">Sigue tu viaje</a>
    <a href="#">Conocenos</a>
    <a href="traveler-points.html" v-show="logged">Canjea Trenepuntos</a>
    <div class="logged" id="logged" v-show="logged">
      <div class="user">
        <img src='../assets/User.png'>
        <p>strawberry</p>
      </div>

      <img src="../assets/Log out.png" @click="logged=false">
    </div>
    <div class="off" id="off" v-show="!logged">
      <div class="button-group">
        <button class="session-button" style="background-color: #DEDEDE;">Crear Cuenta</button>
        <button class="session-button" style="background-color: #F7D40A;" @click="logged=true">Iniciar Sesion</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
a{
  text-decoration: none;
  color: #FFFFFF;
  font-size: large;
}
.page-header{
  font-family: "Inter";
  color: #FFF;
  display: flex;
  height: 6.625rem;
  padding: 0rem 3.8125rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background: rgba(23, 21, 21, 0.40);
  backdrop-filter: blur(3px);
}

.logged{
  display: flex;
  width: 9.375rem;
  height: 2.5rem;
  padding: 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  visibility: v-bind(logged);
}
.user{
  display: flex;
  width: 9.375rem;
  height: 2.5rem;
  padding: 0.375rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.00);
}

.session-button{
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid #2C2C2C;
}

.button-group{
  display: flex;
  width: 19.75rem;
  height: 5.75rem;
  align-items: center;
  gap: 16px;
}
</style>