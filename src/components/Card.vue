<script>
import axios from 'axios';

export default {
  props: {
    property1: {
      type: String,
      required: true,
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
  },
  emits: ['update:property1'],
  methods: {
    async handleButtonClick() {
      if (this.property1 === 'claim-1') {
        try {
          const pointsToAdd = parseInt(this.pointsText.split(' ')[0], 10);

          const response = await axios.get('http://localhost:3000/userHead/0');
          const currentPoints = parseInt(response.data.points, 10);

          const newPoints = currentPoints + pointsToAdd;

          await axios.patch('http://localhost:3000/userHead/0', { points: newPoints.toString() });

          this.$emit('update:property1', 'acquired-1');
        } catch (error) {
          console.error('Error updating points:', error);
        }
      } else if (this.property1 === 'claim-2') {
        this.$emit('update:property1', 'acquired-2');
      }
    }
  }
};
</script>

<template>
  <div :class="['item-card', property1, className]">
    <h1 class="text-wrapper">{{ levelText }}</h1>
    <div class="status">
      <span v-if="['acquired-1', 'acquired-2'].includes(property1)">Adquirido</span>
      <span v-if="['claim-1', 'claim-2'].includes(property1)">Disponible</span>
      <span v-if="['blocked-1', 'blocked-2'].includes(property1)">Bloqueado</span>
    </div>
    <div class="image" />
    <div class="reward">
      <span v-if="['claim-1', 'acquired-1', 'blocked-1'].includes(property1)">{{ pointsText }}</span>
      <span v-if="['claim-2', 'acquired-2', 'blocked-2'].includes(property1)">Cupon de Hospedaje</span>
    </div>
    <div class="frame" v-if="['claim-1', 'claim-2', 'acquired-2', 'blocked-1', 'blocked-2'].includes(property1)">
      <button v-if="['claim-1', 'claim-2'].includes(property1)" class="button" @click="handleButtonClick">
        <div class="state-layer">
          <span class="label-text">Reclamar</span>
        </div>
      </button>
      <span v-if="property1 === 'acquired-2'" class="code-text">TRAIN50-OFFER</span>
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
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}
.status {
  color: #000;
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
  color: #010101;
}
.code-text {
  color: #010101;
}
.item-card.acquired-1,
.item-card.acquired-2 {
  background-color: #f7d40a;
  border: 4px solid #f7d40a;
}
.item-card.claim-1,
.item-card.claim-2,
.item-card.blocked-1,
.item-card.blocked-2 {
  background-color: #ffffffcc;
  border: 4px solid #f7d40a;
}
.item-card .image {
  background-color: #000000b0;
  max-height: 181px;
}
.item-card.claim-1 .image,
.item-card.claim-2 .image,
.item-card.blocked-1 .image,
.item-card.blocked-2 .image {
  background-image: url("https://images4-f.ravelrycache.com/uploads/Medaami/933815727/Gekko_Amigurumi_small2.jpg");
}
</style>
