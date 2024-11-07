import { Employee } from '../types/employee';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    console.log(employee)
    employees.value.push({...employee,id:Math.random()});
    console.log(employees.value);
  };

  const deleteEmployee = (id: number) => {
    employees.value = employees.value.filter((employee) => employee.id !== id);
  };

  return { employees,addEmployee,deleteEmployee };
});
