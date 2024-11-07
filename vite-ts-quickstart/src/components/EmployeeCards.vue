<script setup lang="ts">
import { computed } from 'vue';
import type { Employee } from '../types/employee';
import { useFormStore } from '../stores/formStore';
import { storeToRefs } from 'pinia';

const store = useFormStore();

const props = defineProps<{
  employees: Employee[];
}>();

const emit = defineEmits<{
  (e: 'delete', id: number): void;
}>();

const employees = computed(() => {
  return props.employees;
});

const deleteEmployee = (id: number) => {
  emit('delete', id);
};

const editEmployee = (employee: Employee) => {
  const { firstName, lastName, email, salary, valid, isEdit, id } =
    storeToRefs(store);
  id.value = employee.id;
  firstName.value = employee.firstName;
  lastName.value = employee.lastName;
  email.value = employee.email;
  salary.value = employee.salary;
  valid.value = false;
  isEdit.value = true;
};
</script>

<template>
  <Card
    v-for="employee in employees"
    :key="employee.id"
    style="width: 25rem; overflow: hidden"
  >
    <template #title>{{ employee.firstName }}</template>
    <template #subtitle>{{ employee.lastName }}</template>
    <template #content>
      <p class="m-0">{{ employee.email }}</p>
      <p class="m-0">{{ employee.salary }}</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button
          label="Delete"
          severity="danger"
          @click="deleteEmployee(employee.id)"
          class="w-full"
        />

        <Button label="Save" class="w-full" />
      </div>
    </template>
  </Card>
</template>
