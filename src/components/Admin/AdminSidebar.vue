<script setup>
import router from "@/router/index.js";

const logOut = () => {
  window.localStorage.removeItem("adminID");
  router.push('/admin/login');
}
</script>

<template>
  <div id="mySidenav" class="sidenav">
    <img src="@/assets/Logo%20Default.png" alt="">
    <router-link to="/admin">Panel</router-link>
    <router-link to="/admin/trains">Trenes</router-link>
    <router-link to="/admin/users">Usuarios</router-link>
    <a class="delete-account" @click="logOut()">Log Out</a>
  </div>
</template>

<style scoped>
.sidenav {
  width: 240px; /* Set the width of the sidebar */
  height: 100%;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
   /* Place content 60px from the top */
}

/* The navigation menu links */
.sidenav a {
  width: 100%;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: flex;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav img {
  display: compact;
  height: 72px;
}
</style>
