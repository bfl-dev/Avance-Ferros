<script setup>
import { ref } from 'vue';

const props = defineProps(['tripID']);

const users = ref([
  { id: 1, name: 'User 1', email: 'email@email.email', kilometers: 100  },
  { id: 2, name: 'User 2', email: 'email@email.email', kilometers: 200  },
  { id: 3, name: 'User 3', email: 'email@email.email', kilometers: 150  }
]);

//TODO: GET REAl DATA
</script>

<template>
  <table id="table">
    <thead>
      <tr>
        <th class="checkbox">
            <label><input type="checkbox"></label>
        </th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Kilometros </th>
        <th>Acciones</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="checkbox">
            <label><input type="checkbox"></label>
        </td>
        <td class="icon-name">
          <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic"> {{ user.name }}
        </td>
        <td><span>{{ user.email }}</span></td>
        <td><span>{{ user.kilometers }}Km</span></td>
        <td><button class="button">"Reembolsar"</button></td>
        <td><button class="button">Editar</button></td>
      </tr>
      <tr>
        <td colspan="5"> <router-link to="/admin/users">Ver mas...</router-link></td>
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
  padding: 10px 25px;
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
