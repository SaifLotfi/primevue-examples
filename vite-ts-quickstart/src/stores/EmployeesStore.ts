import { Employee } from '../types/employee';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    employees.value.push({ ...employee, id: Math.random() });
  };

  const deleteEmployee = (id: number) => {
    employees.value = employees.value.filter((employee) => employee.id !== id);
  };

  const editEmployee = (employee: Employee) => {
    const index = employees.value.findIndex((e) => e.id === employee.id);
    employees.value[index] = employee;
  };

  return { employees, addEmployee, deleteEmployee, editEmployee };
});
