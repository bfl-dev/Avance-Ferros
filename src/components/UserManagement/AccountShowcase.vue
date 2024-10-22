<script setup>
import '@/styles/account.css';
import {onMounted, ref} from 'vue';
import UserApi from '@/api/UserApi.js'
import TrainComponent from '@/components/TrainComponent.vue'
import router from '@/router/index.js'


let user = ref(Object);
let userDetails = ref(Object);
let travels = ref([]);
let userTravels = ref(Array);


const travelEditor = () => {
  router.push('/account-editor')
}

const getUserTravels = () => {
  UserApi.getTravels().then( req => {
    userTravels.value = req.data
      .filter( travel => travels.value.find( t => t.travelId === travel.id));
  });
}

onMounted(() => {
  UserApi.getUser(window.localStorage.getItem("userID")).then(response => {
    user.value = response.data;
  }).catch(() => {
  });
  UserApi.getUserDetails(window.localStorage.getItem('userID')).then( req => {
    userDetails.value = req.data;
  });
  UserApi.getTravelsByUser(0).then( req => {
    travels.value = req.data;
  });
  getUserTravels();
});

const filterByStatus = (status) => {
  userTravels.value = userTravels.value.filter( travel => travel.status === status);
}

//TODO: HACER QUE FUNCIONEN LOS FILTROS Y VER EL DETALLE DEL VIAJE
</script>

<template>
  <section class="page-body">
    <div class="left-column">
      <img class="profile-pic" :src="userDetails.profilePic" alt="">
      <div class="name-and-bio">
        <h1 class="name">{{ userDetails.names + ' ' + userDetails.lastNames }}</h1>
        <p class="username">{{ user.name }}</p>
        <p class="bio">{{ userDetails.bio }}</p>
      </div>
      <button class="edit-profile" @click="travelEditor" >Editar Perfil</button>
    </div>
    <div class="right-column">
      <div class="metrics">
        <div class="metrics-header">
          <p>Metrics:</p>
        </div>
        <div class="metrics-body">
          <div class="kilometers">
            <p>Kilometros recorridos:</p>
            <p class="ammount">{{ user.kilometers }}</p>
          </div>
          <div class="available-points">
            <p>Kilometros recorridos:</p>
            <p class="ammount">{{user.points}}</p>
          </div>
        </div>
      </div>
      <div class="your-trips">
        <div class="your-trips-header">
          <p>Tus Viajes:</p>
        </div>
        <div class="your-trips-filters">
          <div class="filters-title">
            <p>Filtros:</p>
          </div>
          <div class="your-trips-filters-container">
            <a @click='filterByStatus("En ruta")'>En Ruta</a>
          </div>
          <div class="your-trips-filters-container">
            <a @click='filterByStatus("Pendiente")'>Agendados</a>
          </div>
          <div class="your-trips-filters-container">
            <a @click="filterByStatus('Finalizado')">Finalizados</a>
          </div>
          <div class="your-trips-filters-container">
            <a @click="getUserTravels()">Limpiar</a>
          </div>
        </div>
        <div class="your-trips-body">
          <div class="your-trips-container">
            <train-component v-for="item in userTravels" :travel="item"></train-component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
