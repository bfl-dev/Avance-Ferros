<script setup>
import AdminHeader from "@/components/Admin/AdminHeader.vue";
import AdminSidebar from "@/components/Admin/AdminSidebar.vue";
import {onMounted, ref} from "vue";
import router from "@/router/index.js";

const isSidebarActive = ref(false)

const changeNavbar = () => {
  isSidebarActive.value = !isSidebarActive.value;
}
const checkAdmin = () => {
  if (!window.localStorage.getItem("adminID")) router.push('/admin/login');
}

onMounted(() => {
  checkAdmin();
})

</script>

<template>
  <div class="landing">
    <div class="sidebar-container">
      <AdminSidebar id="sidebar" v-if="isSidebarActive"></AdminSidebar>
    </div>
    <div class="content-container">
      <AdminHeader @navbar-status="changeNavbar()"></AdminHeader>
      <router-view name="content"></router-view>
    </div>
  </div>
  <div class="overlay">
    <router-view name="overlay"></router-view>
  </div>
</template>

<style scoped>
.landing {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255);
  gap: 0;
  overflow-x: hidden;
}

.content-container {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}

.sidebar-container{
  display: flex;
}

</style>
