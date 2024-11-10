import { defineStore } from "pinia";
import { ref } from "vue";

export const useFormStore = defineStore("form", () => {
  const form = ref(null);
  const valid = ref(false);
  const id = ref<number|null>(null);
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const salary = ref<string>('');
  const isEdit = ref(false);

  const setInitialState = () => {
    id.value = null;
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    salary.value = '';
    isEdit.value = false;
  };

  return { form, valid,id, firstName, lastName, email, salary, isEdit, setInitialState };
});
