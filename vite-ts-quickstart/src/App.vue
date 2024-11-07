<script setup lang="ts">
import { ref } from 'vue';
import EmployeeForm from './components/EmployeeForm.vue';
import { Toast } from 'primevue';
import EmployeeCards from './components/EmployeeCards.vue';
import { Employee } from './types/employee';
import { useEmployeesStore } from "./stores/EmployeesStore";
import { useFormStore } from "./stores/formStore";
import { storeToRefs } from "pinia";

const items = ref([
  {
    label: 'Crud App',
    icon: 'pi pi-prime',
  },
]);

const employeeStore = useEmployeesStore();

const formStore = useFormStore();

const { employees } = storeToRefs(employeeStore);

</script>

<template>
  <Toast />
  <div class="card">
    <Menubar :model="items" />
  </div>

  <header>
    <div class="wrapper">
      <EmployeeForm @submit="employeeStore.addEmployee" />
    </div>
  </header>
  <EmployeeCards @delete="employeeStore.deleteEmployee" :employees="employees" />
</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
header {
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  padding-left: 30px;
}
</style>
