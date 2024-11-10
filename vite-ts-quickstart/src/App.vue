<script setup lang="ts">
import { ref } from 'vue';
import EmployeeForm from './components/EmployeeForm.vue';
import { Toast } from 'primevue';
import EmployeeCards from './components/EmployeeCards.vue';
import { useEmployeesStore } from './stores/EmployeesStore';
import { useFormStore } from './stores/formStore';
import { storeToRefs } from 'pinia';

const items = ref([
  {
    label: 'Crud App',
    icon: 'pi pi-prime',
  },
]);

const employeeStore = useEmployeesStore();

const formStore = useFormStore();

const { employees } = storeToRefs(employeeStore);
const { isEdit, id } = storeToRefs(formStore);

const handleFormSubmit = (values: any) => {
  if (isEdit.value) {
    employeeStore.editEmployee({ ...values, id: id.value });
    isEdit.value = false;
  } else {
    employeeStore.addEmployee(values);
  }
};

const handleDeleteEmployee = (id: number) => {
  employeeStore.deleteEmployee(id);
};

// const handleEditEmployee = (employee: any) => {

// }
</script>

<template>
  <Toast />
  <div class="card">
    <Menubar :model="items" />
  </div>

  <header>
    <div class="wrapper">
      <EmployeeForm @submit="handleFormSubmit" />
    </div>
  </header>
  <EmployeeCards @delete="handleDeleteEmployee" :employees="employees" />
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
