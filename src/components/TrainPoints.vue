<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from './Card.vue';
import ProgressBar from './ProgressBar.vue';

const items = ref([
  { id: 1, property1: 'claim-1', levelText: 'Nivel 1', pointsText: '30 Puntos' },
  { id: 2, property1: 'claim-2', levelText: 'Nivel 2' },
  { id: 3, property1: 'claim-1', levelText: 'Nivel 3', pointsText: '40 Puntos' },
  { id: 4, property1: 'blocked-1', levelText: 'Nivel 4' },
  { id: 5, property1: 'blocked-2', levelText: 'Nivel 5', pointsText: '50 Puntos' },
  { id: 6, property1: 'blocked-2', levelText: 'Nivel 6' },
  { id: 7, property1: 'blocked-1', levelText: 'Nivel 7', pointsText: '60 Puntos' },
  { id: 8, property1: 'blocked-2', levelText: 'Nivel 8' },
  { id: 9, property1: 'blocked-1', levelText: 'Nivel 9', pointsText: '70 Puntos' },
  { id: 10, property1: 'blocked-2', levelText: 'Nivel 10' },
  { id: 11, property1: 'blocked-1', levelText: 'Nivel 11', pointsText: '80 Puntos' },
]);

const userRewards = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/userRewards/0');
    userRewards.value = response.data.rewards || [];
    items.value = items.value.map(item => ({
      ...item,
      property1: userRewards.value.includes(item.id) ? item.property1.replace('claim', 'acquired') : item.property1
    }));
  } catch (error) {
    console.error('Error loading user rewards:', error);
  } finally {
    loading.value = false;
  }
});

const updateItemProperty = async (index, newValue) => {
  items.value[index].property1 = newValue;
  try {
    userRewards.value.push(items.value[index].id);
    await axios.patch('http://localhost:3000/userRewards/0', { rewards: userRewards.value });
  } catch (error) {
    console.error('Error updating user rewards:', error);
  }
};
</script>

<template>
  <div class="train-points">
    <div class="train-points-container">
      <header class="train-points-header">
        <h1 class="title">Canjea Trenepuntos</h1>
      </header>
      <nav class="scroll-wrapper">
        <div class="content">
          <section class="rewards-container">
            <div class="line"></div>
            <ProgressBar/>
            <div class="rewards" v-if="!loading">
              <Card
                  v-for="(item, index) in items"
                  :key="index"
                  :property1="item.property1"
                  :levelText="item.levelText"
                  :pointsText="item.pointsText"
                  @update:property1="updateItemProperty(index, $event)"
              />
            </div>
            <div v-else>Loading...</div>
          </section>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.train-points {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 15px;
  overflow: hidden;
}

.train-points-container {
  background: rgba(23, 21, 21, 0.4);
  backdrop-filter: blur(3px);
  border-radius: 15px;
  overflow: hidden;
}

.train-points-header {
  padding: 10px 15px;
  width: 100%;
  background-color: #f7d40a;
}

.title {
  margin: 5px;
  color: #010101;
}

.scroll-wrapper {
  width: 1254px;
  height: 603px;
  overflow-x: scroll;
}

.content {
  position: relative;
  top: 55px;
  left: 10px;
}

.rewards-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: absolute;
  padding-right: 10px;
}

.line {
  width: 99.93%;
  height: 33px;
  background-color: #d9d9d9;
  border-radius: 50px;
  margin: 0 0 0 4px;
}

.rewards {
  display: inline-flex;
  align-items: flex-start;
  gap: 35px;
  position: relative;
  flex: 0 0 auto;
}
</style>
