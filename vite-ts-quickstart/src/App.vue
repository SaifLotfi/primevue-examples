<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const items = ref([
  {
    label: 'Crud App',
    icon: 'pi pi-prime',
  },
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items" />
  </div>

  <header>
    <div class="wrapper">
      <HelloWorld />
    </div>
  </header>
</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
header {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  padding-left: 30px;
}
</style>
