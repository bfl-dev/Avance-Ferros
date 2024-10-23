<script setup>
import '@/styles/admin-content.css'
import TrainComponent from "@/components/TrainComponent.vue";
import router from "@/router/index.js";
import UserApi from "@/api/UserApi.js";
import {onMounted, ref} from "vue";

let trainsOnRoute = ref([]);
let trainsPending = ref([]);
let trainsFinished = ref([]);

let trains = ref([]);

let searchQuery = ref("");
let searchedTrains = ref([]);

let filterTrainStatus = (status) => {
  return trains.value.filter(train => train.status === status) ?? [];
}

let reloadTrains= () => {
  UserApi.getTravels()
    .then(response => {
      trains.value = response.data;
      trainsFinished.value = filterTrainStatus("Finalizado");
      trainsPending.value = filterTrainStatus("Pendiente");
      trainsOnRoute.value = filterTrainStatus("En ruta");

    })
    .catch(() => {
      console.log('Error');
    });
}
onMounted(() => {
  reloadTrains()
});

let searchTrains = () => {
  UserApi.searchTrains(searchQuery.value).then( req => {
    searchedTrains.value = req.data;
  });
}

const editTrain= (id) => {
  router.push(`/admin/baq/trains/manage/${id}`);
}
const addTrain = () => {
  router.push(`/admin/baq/trains/add`);
}

</script>

<template>
  <div class="content-trains">
    <div class="search-bar">
      <div class="search-bar-title">
        <p>Trenes</p>
        <small>¿Como funciona el filtro?</small>
      </div>
      <label for=""></label><input type="text" name="" id="" placeholder="Escribe algo" v-model="searchQuery" @input="searchTrains()">
    </div>
    <div class="add-trip">
      <button type="submit" @click="addTrain()">Agende Viaje</button>
    </div>
    <div class="train-trips">
      <div class="train-category" v-show="searchQuery !== ''">
        <p>Busqueda</p>
        <div class="train-container">
          <p v-show="searchedTrains.length < 1"> No se ha encontrado trenes :c  </p>
          <train-component v-for="item in searchedTrains" :travel="item" @click="editTrain(item.id)"></train-component>
        </div>
      </div>
      <div class="train-category">
        <p>Trenes en ruta</p>
        <div class="train-container">
          <p v-show="trainsOnRoute.length < 1"> No se ha encontrado trenes :c  </p>
          <train-component v-for="item in trainsOnRoute" :travel="item" @click="editTrain(item.id)"></train-component>
        </div>
      </div>
      <div class="train-category">
        <p>Trenes Agendados</p>
        <div class="train-container">
          <p v-show="trainsPending.length < 1"> No se ha encontrado trenes :c  </p>
          <train-component v-for="item in trainsPending" :travel="item" @click="editTrain(item.id)"></train-component>
        </div>
      </div>
      <div class="train-category">
        <p>Trenes Finalizados</p>
        <div class="train-container">
          <p v-show="trainsFinished.length < 1"> No se ha encontrado trenes :c  </p>
          <train-component v-for="item in trainsFinished" :travel="item" @click="editTrain(item.id)"></train-component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
