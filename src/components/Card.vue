<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  property1: {
    type: String,
    validator: value => ["claim-1", "claim-2", "acquired-1", "acquired-2"].includes(value),
  },
  className: {
    type: String,
    default: "",
  },
  levelText: {
    type: String,
    default: "Nivel n",
  },
  pointsText: {
    type: String,
    default: "30 Puntos",
  },
});

const emit = defineEmits(['update:property1']);

const handleButtonClick = () => {
  if (props.property1 === 'claim-1') {
    emit('update:property1', 'acquired-1');
  } else if (props.property1 === 'claim-2') {
    emit('update:property1', 'acquired-2');
  }
};
</script>

<template>
  <div :class="['item-card', props.property1, props.className]">
    <h1 class="text-wrapper">{{ props.levelText }}</h1>
    <div class="status">
      <span v-if="['acquired-1', 'acquired-2'].includes(props.property1)">Adquirido</span>
      <span v-if="['claim-1', 'claim-2'].includes(props.property1)">Disponible</span>
    </div>
    <div class="image" />
    <div class="reward">
      <span v-if="['claim-1', 'acquired-1'].includes(props.property1)">{{ props.pointsText }}</span>
      <span v-if="['claim-2', 'acquired-2'].includes(props.property1)">Cupon de Hospedaje</span>
    </div>
    <div class="frame" v-if="['claim-1', 'claim-2', 'acquired-2'].includes(props.property1)">
      <button v-if="['claim-1', 'claim-2'].includes(props.property1)" class="button" @click="handleButtonClick">
        <div class="state-layer">
          <span class="label-text">Reclamar</span>
        </div>
      </button>
      <span v-if="props.property1 === 'acquired-2'" class="code-text">TRAIN50-OFFER</span>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 440px;
  padding: 10px;
  width: 360px;
}
.text-wrapper {
  color: #000;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}
.status {
  color: #000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  width: 120px;
}
.image {
  background-position: 50% 50%;
  background-size: cover;
  height: 228px;
  width: 222px;
}
.reward {
  color: #000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  width: 218px;
}
.frame {
  height: 40px;
}
.button {
  all: unset;
  align-items: center;
  background-color: #f7d40a;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
}
.state-layer {
  padding: 10px 24px;
  width: 100%;
}
.label-text {
  font-family: "Inter-Regular", Helvetica;
  color: #010101;
}
.code-text{
  color: #010101;
}
.item-card.acquired-1,
.item-card.acquired-2 {
  background-color: #f7d40a;
  border: 4px solid #f7d40a;
}
.item-card.claim-1,
.item-card.claim-2 {
  background-color: #ffffffcc;
  border: 4px solid #f7d40a;
}
.item-card .image {
  background-color: #000000b0;
  max-height: 181px;
}
.item-card.claim-1 .image,
.item-card.claim-2 .image{
  background-image: url("https://images4-f.ravelrycache.com/uploads/Medaami/933815727/Gekko_Amigurumi_small2.jpg");
}
</style>
