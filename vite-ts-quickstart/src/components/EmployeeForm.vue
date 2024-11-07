<script setup lang="ts">
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from 'primevue/usetoast';
import { z } from 'zod';
import { storeToRefs } from 'pinia';
import { useFormStore } from '../stores/formStore';

const toast = useToast();

const emit = defineEmits();

const store = useFormStore();

const { firstName, lastName, email, salary, valid, form, isEdit } =
  storeToRefs(store);

const initialValues = ref({
  firstName,
  lastName,
  email,
  salary,
});

const resolver = ref(
  zodResolver(
    z.object({
      firstName: z.string().min(1, { message: 'First name is required.' }),
      lastName: z.string().min(1, { message: 'Last name is required.' }),
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Invalid email address.' }),
      salary: z.string().min(1, { message: 'Salary is required.' }),
    })
  )
);

const onFormSubmit = ({ valid, values }: { valid: boolean; values: any }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: 'Form is submitted.',
      life: 3000,
    });
  }
  console.log('from form ,values',values)
  emit('submit', values);
};
</script>

<template>
  <div class="card flex justify-center">
    <Form
      v-slot="$form"
      :resolver="resolver"
      :initialValues="initialValues"
      class="flex flex-col gap-4 w-full sm:w-56"
      @submit="onFormSubmit" 
    >
      <div class="flex flex-col gap-1">
        <InputText
          name="firstName"
          type="text"
          placeholder="First Name"
          fluid
        />
        <Message
          v-if="$form.firstName?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.firstName.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1">
        <InputText name="lastName" type="text" placeholder="Last Name" fluid />
        <Message
          v-if="$form.lastName?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.lastName.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1">
        <InputText name="email" type="text" placeholder="Email" fluid />
        <Message
          v-if="$form.email?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.email.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1">
        <InputText name="salary" type="number" placeholder="Salary" fluid />
        <Message
          v-if="$form.salary?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.salary.error?.message }}</Message
        >
      </div>
      <Button type="submit" severity="secondary" label="Submit" />
    </Form>
  </div>
</template>
