<script setup>
import { ref } from 'vue';
import Card from './Card.vue';
import ProgressBar from './ProgressBar.vue';

const items = ref([
  { property1: 'claim-1', levelText: 'Nivel 1', pointsText: '30 Puntos' },
  { property1: 'claim-2', levelText: 'Nivel 2', pointsText: 'Cupon de Hospedaje' },
  { property1: 'claim-1', levelText: 'Nivel 3', pointsText: '40 Puntos' },
  { property1: 'claim-2', levelText: 'Nivel 4', pointsText: 'Cupon de Hospedaje' },
  { property1: 'claim-1', levelText: 'Nivel 5', pointsText: '50 Puntos' },
  { property1: 'claim-2', levelText: 'Nivel 6', pointsText: 'Cupon de Hospedaje' },
  { property1: 'claim-1', levelText: 'Nivel 7', pointsText: '60 Puntos' },
  { property1: 'claim-2', levelText: 'Nivel 8', pointsText: 'Cupon de Hospedaje' },
  { property1: 'claim-1', levelText: 'Nivel 9', pointsText: '70 Puntos' },
  { property1: 'claim-2', levelText: 'Nivel 10', pointsText: 'Cupon de Hospedaje' },
  { property1: 'claim-1', levelText: 'Nivel 11', pointsText: '80 Puntos' },
]);

const updateItemProperty = (index, newValue) => {
  items.value[index].property1 = newValue;
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
            <div class="rewards">
              <Card
                  v-for="(item, index) in items"
                  :key="index"
                  :property1="item.property1"
                  :levelText="item.levelText"
                  :pointsText="item.pointsText"
                  @update:property1="updateItemProperty(index, $event)"
              />
            </div>
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
