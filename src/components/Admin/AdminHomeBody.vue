<script setup>

import AdminTable from "@/components/Admin/AdminMiniTable.vue";
import TrainComponent from "@/components/TrainComponent.vue";
import router from "@/router/index.js";
import {onMounted, ref} from "vue";
import UserApi from "@/api/UserApi.js";

const routeOnTrains = ref([]);
const users = ref([]);

const addTrain = () => {
  router.push(`/admin/baq/trains/add`);
}

const addUser = () => {
  router.push(`/admin/baq/users/add`);
}

onMounted(() => {
  UserApi.searchTrains("En ruta").then( req => {
    routeOnTrains.value = req.data;
  });
  UserApi.searchUserHead("_limit=5").then( req => {
    users.value = req.data;
  });
})

</script>

<template>
  <div class="content-panel">
    <div class="button-frame">
      <button type="button" @click="addTrain()">Agendar Viaje</button>
      <button type="button" @click="addUser()">Agregar Usuario</button>
    </div>
    <div class="trains">
      <p>Trenes en ruta</p>
      <div class="train-box">
        <train-component v-for="item in routeOnTrains" :travel="item"></train-component>
      </div>
    </div>
    <div class="user-admin-container">
      <p>Usuarios Registrados</p>
      <AdminTable :users="users"></AdminTable>
    </div>
  </div>
</template>

<style scoped>
.content-panel
{
  color:black;
  display: flex;
  width: 100%;
  padding: 20px 100px ;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
}

.button-frame
{
  display: flex;
  height: 41px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;

}

.button-frame button
{
  display: flex;
  padding: 5px 34px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  background: #F7D40A;
  border-style: none;
}

.trains
{
  display: flex;
  height: auto;
  padding: 35px 31px 72px 31px;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 10px;
  background: #D9D9D9;
}
.train-box
{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 15px;
  overflow-x: scroll;
}
::-webkit-scrollbar
{
  display: none;
}

.user-admin-container{
  display: flex;
  padding: 2rem 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 10px;
  background: #D9D9D9;
}

</style>
