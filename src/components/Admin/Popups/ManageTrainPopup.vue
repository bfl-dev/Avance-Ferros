<script setup>
import TrainComponent from "@/components/TrainComponent.vue";
import AdminTrainTable from "@/components/Admin/Popups/AdminTrainTable.vue";
import {onMounted, ref} from "vue";
import UserApi from "@/api/UserApi.js";
import {getTravel} from "@/api/TrainsApi.js";
import MapComponent from "@/components/TravelInfo/MapComponent.vue";
import router from "@/router/index.js";

const props = defineProps(['id'])


const requested = ref(false)
const travel = ref()

getTravel(props.id).then(response =>{
  travel.value = response['data']
  requested.value = true
})

const travelEdit = () => {
  router.push(`/admin/baq/trains/edit/${props.id}`)
}

const deleteTravel = () => {
  UserApi.deleteTravel(props.id)
  router.push('/admin/trains').then(() => {
    router.go(0)
  })
}



</script>

<template>
  <div class="popup-overlay" id="user">
    <div class="overlay-content">
      <div class="close-container">
        <router-link to="/admin/trains"><span>⨉</span></router-link>
      </div>
      <div class="editor-container">
        <div class="train-editor">
          <div class="travel" v-if="requested">
            <train-component :travel='travel' :key="travel.id"></train-component>
          </div>
          <div class="options-container">
            <a class="save-account" @click="travelEdit">Editar</a>
            <a class="delete-account" @click="deleteTravel">Eliminar</a>
          </div>
        </div>
        <AdminTrainTable :id/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay-content {
  display: flex;
  width: auto;
  max-height: 1000px;
}
.editor-container {
  display: flex;
  gap: 1rem;
}

.train-editor{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.options-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
