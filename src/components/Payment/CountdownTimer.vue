<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const initialMinutes = 10;
const initialSeconds = 10;

const minutes = ref(initialMinutes);
const seconds = ref(initialSeconds);

const formattedTime = computed(() => {
  const min = String(minutes.value).padStart(2, '0');
  const sec = String(seconds.value).padStart(2, '0');
  return `${min}:${sec}`;
});

let timer;
const router = useRouter();

const startTimer = () => {
  timer = setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        clearInterval(timer);
        router.push('/');
      } else {
        minutes.value--;
        seconds.value = 59;
      }
    } else {
      seconds.value--;
    }
  }, 1000);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="countdown-counter" style="position: relative;">
    <img src="/src/assets/time.png" class="clock-over" alt="clock-over">
    <span class="timer-text">{{ formattedTime }}</span>
  </div>
</template>

<style scoped>
.countdown-counter {
  display: flex;
  align-items: center;
  gap: 5px;
}

.clock-over {
  width: 25px;
  height: 25px;
}

.timer-text {
  font-size: 1.5rem;
  color: #F7D40A;
}
</style>
