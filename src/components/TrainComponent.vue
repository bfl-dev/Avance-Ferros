<script setup>


const props = defineProps(['travel'])


</script>

<template>
  <div class="train-component">
    <div class="train-component-icon">
      <p><b>Train #</b>{{travel.id}}</p>
      <img src="../assets/icon_train.png" alt="">
      <p><b>Estado</b><br>{{travel.status}}</p>
    </div>
    <div class="train-component-body">
      <div class="train-component-body-row">
        <div class="train-component-body-text-box">
          <p><b>Origen</b></p>
          <p>{{travel.origin.name}}</p>
        </div>
        <div class="train-component-body-text-box">
          <p><b>Destino</b></p>
          <p>{{travel.destination.name}}</p>
        </div>
      </div>
      <div class="train-component-body-row">
        <div class="train-component-body-text-box">
          <p><b>Salida</b></p>
          <p>{{travel.departure}}</p>
        </div>
        <div class="train-component-body-text-box">
          <p><b>Llegada</b></p>
          <p>{{travel.arrival}}</p>
        </div>
      </div>
      <div class="train-component-body-row">
        <div class="train-component-body-text-box">
          <p><b>Pasajeros</b></p>
          <p>{{travel.passengers}}</p>
        </div>
        <div class="train-component-body-text-box"></div>
        <!--este div existe para alinear el componente (a mi tampoco me gusta la idea)-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.train-component{
  text-align: center;
  display: inline-flex;
  padding: 1.125rem 1.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: #FFF;
}

.train-component-body{
  display: flex;
  width: 18.1875rem;
  height: 10.375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3125rem;
}

.train-component-icon{
  display: flex;
  width: 6.89269rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.train-component-body-row{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
  flex: 1 0 0;
  align-self: stretch;
}

.train-component-body-text-box{
  display: flex;
  width: 9.3125rem;
  height: 2.4375rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
