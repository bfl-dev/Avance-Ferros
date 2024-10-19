<script setup>
import '../styles/login-overlay.css';
</script>

<template>

  <div class="popup-overlay" id="login">
    <div class="overlay-content">

      <div class="close-container">
        <router-link to="/"><span>⨉</span></router-link>
      </div>

      <div class="section-header">Inicia Sesion</div>

      <div class="separator">
        <p>- ó -</p>
      </div>

      <form class="form-container" @submit.prevent="login">
        <div class="section-body">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
          </div>
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="password">
          </div>
        </div>
        <button type="submit" @click="login">Iniciar Sesion</button>
      </form>

    </div>
  </div>

</template>

<style scoped>
@import 'src/styles/login-overlay.css';

</style>
