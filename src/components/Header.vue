<script setup>
import logo from './icons/logo.vue'
import {ref} from "vue";
import UserApi from '@/api/UserApi'
import router from '@/router/index.js'

const logged = ref(false)

let user = ref(Object);

UserApi.getUser(window.localStorage.getItem("userID")).then(response => {
  user.value = response.data;
  logged.value = true;
}).catch(() => {
  logged.value = false;
})

const logout = () => {
  window.localStorage.removeItem("userID");
  logged.value = false;
  router.push('/')
  }

const travelShow = () => {
  router.push('/account-showcase')
  }

  //TODO:Comprobar que falta
</script>

<template>
  <header class="page-header">
    <RouterLink to='/'><logo></logo></RouterLink>
    <RouterLink to="/tracker">Sigue tu viaje</RouterLink>
    <RouterLink to="/kkk">Conocenos</RouterLink>
    <router-link to="/redeem-points" v-show="logged">Canjea Trenepuntos</router-link>
    <div class="logged" id="logged" v-show="logged">
      <div class="user" @click="travelShow()">
        <img src='../assets/User.png'>
        <p>{{user.name}}</p>
      </div>

      <img src="../assets/Log out.png" @click="logout()">
    </div>
    <div class="off" id="off" v-show="!logged">
      <div class="button-group">
        <router-link to="/flow/register">
          <button class="session-button" style="background-color: #DEDEDE;">Crear Cuenta</button>
        </router-link>
        <router-link to="/flow/login">
          <button class="session-button"  style="background-color: #F7D40A;" >Iniciar Sesion</button>
        </router-link>
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
  height: 2.5rem;
  padding: 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  visibility: v-bind(logged);
}
.user{
  display: flex;
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
