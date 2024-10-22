<script setup>
import TrainComponent from "@/components/TrainComponent.vue";
import AdminTrainTable from "@/components/Admin/Popups/AdminTrainTable.vue";

const props = defineProps({ id: String})

const placeholder =
  {
    "id": "100",
    "status": "Pendiente",
    "origin": "1",
    "destination": "5",
    "departure": "10:00",
    "arrival": "13:00",
    "passengers": 14
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
          <TrainComponent :travel="placeholder" />
          <div class="options-container">
            <a class="save-account">Editar</a>
            <a class="delete-account">Eliminar</a>
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
