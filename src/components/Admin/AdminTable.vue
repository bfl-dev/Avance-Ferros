<script setup>
import {onMounted, ref} from 'vue';
import router from "@/router/index.js";

const props = defineProps( ['usersHead','usersDetail']);

let userData = ref([]);

const mapUserData = () => {
  props.usersHead.forEach(user => {
    let userDetail = props.usersDetail.find(detail => detail.id === user.id);
    userData.value.push({
      id: user.id,
      name: userDetail.names,
      rut: userDetail.rut,
      email: user.email,
      number: userDetail.phone,
      username: user.name
    });
  });
}

onMounted(() => {
  mapUserData();
});

const editUser = (id) => {
  router.push(`/admin/baq/users/edit/${id}`);
}


</script>

<template>
  <table id="table">
    <thead>
    <tr>
      <th class="checkbox"><label>
        <input type="checkbox">
      </label></th>
      <th>Nombre</th>
      <th>Rut</th>
      <th>Email</th>
      <th>Numero</th>
      <th>Username</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in userData" :key="user.id">
      <td class="checkbox"><label>
        <input type="checkbox">
      </label></td>
      <td>{{ user.name }}</td>
      <td>{{ user.rut }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.number }}</td>
      <td>{{ user.username }}</td>
      <td><button class="button" @click="editUser(user.id)">Ver Más</button></td>
    </tr>
    <tr>
      <td colspan="7">Viendo {{ userData.length }} personas</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
* {
  color: black;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f3f4f6;
}

tr:hover {
  background-color: #f5faff;
}

.selected-row {
  background-color: #e5faff;
}

.status {
  color: #ff4d4f;
  background-color: #fff2f0;
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 12px;
  border: 1px solid #ffccc7;
}

.action {
  color: #13c2c2;
  cursor: pointer;
}

.button {
  background: linear-gradient(to right, #525631, #166918);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #005bb5;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.checkbox {
  text-align: center;
}

.view-more {
  padding: 15px 0;
  text-align: left;
}
/*Verticaly align icon and name*/
.icon-name {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
