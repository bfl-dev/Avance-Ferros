<script setup>
import '@/styles/admin-content.css'
import AdminTable from "@/components/Admin/AdminTable.vue";
import router from "@/router/index.js";
import UserApi from "@/api/UserApi.js";
import { onMounted, ref} from "vue";
import AdminMiniTable from "@/components/Admin/AdminMiniTable.vue";

let usersHead = ref([]);
let usersDetail = ref([]);

let searchQuery = ref('');
let searchUsersHead = ref([]);
let searchUsersDetail = ref([]);
let searchDetail = ref(false)

let search = () => {
  const searchCosa = searchQuery.value.split('|');
  let searchType = searchCosa[1] === "t" ?? false;
  if (searchType) {
    searchByDetail(searchCosa[0]);

  } else {
    searchByHead(searchCosa[0]);
  }
}

let searchByHead = (query) => {
  UserApi.searchUserHead(query)
    .then(response => {
      response.data.forEach(user => {
        UserApi.getUserDetails(user.id)
          .then(response => {
            searchUsersDetail.value.push(response.data);
          })
          .catch(() => {
            console.log('Error');
          });
        searchUsersHead.value = response.data;
      });
      if (response.data.length === 0) {
        searchUsersHead.value = [];
      }
    })
    .catch(() => {
      console.log('Error');
    });
}

let searchByDetail = (query) => {
  UserApi.searchUserDetail(query)
    .then(response => {
      searchUsersDetail.value = response.data;
      response.data.forEach(user => {
        UserApi.getUser(user.id)
          .then(response => {
            searchUsersHead.value.push(response.data);
          })
          .catch(() => {
            console.log('Error');
          });
      });
    })
    .catch(() => {
      console.log('Error');
    });
}


const update = () => {
  UserApi.getUsers()
    .then(response => {
      usersHead.value = response.data;
    })
    .catch(() => {
      console.log('Error');
    });
  UserApi.getDetails()
    .then(response => {
      usersDetail.value = response.data;
    })
    .catch(() => {
      console.log('Error');
    });
};

onMounted(() => {
  console.log(usersHead, usersDetail);
  update();
});

const addUser = () => {
  router.push(`/admin/baq/users/add`);
}

</script>

<template>
  <div class="content-trains">
    <div class="search-bar">
      <div class="search-bar-title">
        <p>Usuarios</p>
        <small>¿Como funciona el filtro?</small>
      </div>
      <label for=""></label><input type="text" name="" id="" placeholder="Escribe algo" v-model="searchQuery" @input="search">
    </div>
    <div class="add-trip">
      <button type="submit" @click="addUser">Agrege Usuario</button>
    </div>
    <AdminMiniTable :users="searchUsersHead" v-show="searchQuery !== ''" :key="searchQuery"/>
    <AdminTable  :users-detail="usersDetail" :users-head="usersHead" :key="usersDetail" />
    <!-- NO cambiar la key, por alguna razon no funciona con la usersHEad -->
  </div>
</template>

<style scoped>

</style>
