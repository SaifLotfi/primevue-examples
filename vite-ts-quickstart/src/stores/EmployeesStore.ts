import axios from 'axios';
import { Employee } from '../types/employee';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEmployeesStore = defineStore('employees', () => {
  const employees = ref<Employee[]>([]);

  const addEmployee = async (employee: Employee) => {
    try {
      const response = await axios.post('http://localhost:5000/employees', employee);
      employees.value.push(response.data);
      console.log(employees.value);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      employees.value = employees.value.filter((employee) => employee.id !== id);
    } catch (error) {
      console.log(error);
    }
  };

  const editEmployee = async (employee: Employee) => {
    try {
      const response = await axios.put(`http://localhost:5000/employees/${employee.id}`, employee);
      const index = employees.value.findIndex((e) => e.id === employee.id);
      if (index !== -1) {
        employees.value[index] = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      employees.value = response.data;
      console.log(employees.value);
    } catch (error) {
      console.log(error);
    }
  };

  return { employees, addEmployee, deleteEmployee, editEmployee, getEmployees };
});

