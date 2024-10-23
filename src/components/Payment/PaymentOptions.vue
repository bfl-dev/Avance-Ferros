<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import UserApi from "@/api/UserApi.js";

const selectedMethod = ref('');
const isLoggedIn = ref(false);
const userPoints = ref(0);
const useTrainPoints = ref(false);
const discountCode = ref('');
const discountApplied = ref(0);
const discountCodes = ref([]);
const useDiscount = ref(false);

const selectMethod = (method) => {
  selectedMethod.value = method;
};

const checkLoginStatus = () => {
  const userId = window.localStorage.getItem("userID");
  if (userId) {
    isLoggedIn.value = true;
    return userId;
  }
  isLoggedIn.value = false;
  return null;
};

const getUserPoints = async (userId) => {
  try {
    const response = await UserApi.getUser(userId);
    userPoints.value = response.data.points;
  } catch (error) {
    console.error('Error fetching user points:', error);
  }
};

const fetchDiscountCodes = async () => {
  try {
    const response = await axios.get('http://localhost:3000/discountCodes');
    discountCodes.value = response.data;
  } catch (error) {
    console.error('Error fetching discount codes:', error);
  }
};

const applyDiscount = () => {
  const code = discountCodes.value.find(dc => dc.code === discountCode.value);
  if (code) {
    discountApplied.value = parseFloat(code.discount);
  } else {
    discountApplied.value = 0;
  }
};

watch(useDiscount, (newValue) => {
  if (newValue) {
    $emit('update-discount', discountApplied.value);
  } else {
    $emit('update-discount', 0);
  }
});

onMounted(() => {
  fetchDiscountCodes();
  const userId = checkLoginStatus();
  if (userId) {
    getUserPoints(userId);
  }
});
</script>

<template>
  <section class="payment-method">
    <header class="payment-banner">
      <div class="payment-text-wrapper">
        <p class="fields-title">Metodo de Pago</p>
      </div>
      <div class="payment-text-wrapper">
        <p class="fields-title">Trene puntos</p>
      </div>
    </header>
    <div class="payment-content">
      <div class="payment-methods">
        <div class="payment-method-item" v-for="method in 4" :key="method">
          <img class="icon" src="/src/assets/webpay.png" alt="">
          <input type="checkbox" :checked="selectedMethod === `webpay${method}`" @change="selectMethod(`webpay${method}`)">
        </div>
      </div>
      <div class="discount-code-container">
        <div class="discount-code-box">
          <input type="text" v-model="discountCode" @input="applyDiscount" placeholder="Código de descuento">
          <p v-if="discountApplied > 0">Descuento de: {{ discountApplied }}</p>
          <div v-if="discountApplied > 0" class="discount-checkbox-container">
            <input type="checkbox" v-model="useDiscount" @change="$emit('update-discount', useDiscount ? discountApplied : 0)">
            <label for="use-discount">Usar descuento</label>
          </div>
        </div>
      </div>
      <div v-if="isLoggedIn" class="train-points-box">
        <p>{{ userPoints }}</p>
        <input type="checkbox" id="yes-or-no" value="1" v-model="useTrainPoints" @change="$emit('update-train-points', useTrainPoints ? userPoints : 0)">
      </div>
      <div v-else class="no-account">
        <p>No tienes cuenta</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.payment-method {
  border-radius: 10px;
  padding: 20px;
}

.payment-banner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.payment-text-wrapper {
  background-color: #f7d40a;
  padding: 10px;
  border-radius: 5px;
}

.fields-title {
  font-weight: bold;
  color: #000;
}

.payment-content {
  display: flex;
  justify-content: space-between;
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 40px;
}

.payment-method-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 150px;
  height: 50px;
  border-radius: 10px;
}

.train-points-box {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 90px;
  padding: 10px;
}

.train-points-box p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.no-account {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 90px;
  padding: 10px;
}

.no-account p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.discount-code-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.discount-code-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.discount-code-box input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.discount-code-box button {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f7d40a;
  border: none;
  cursor: pointer;
}

.discount-checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.discount-code-box p {
  color: green;
  font-weight: bold;
}

input{
  font-family: "Inter", serif;
}
</style>
