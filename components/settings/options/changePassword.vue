<template>
  <div
    class="
      flex flex-col
      min-w-0
      break-words
      bg-white
      w-full
      mb-6
      shadow-lg
      md:rounded-xl
      p-8
      min-h-screen
      md:min-h-full
    "
  >
  <div class="mb-8">
    <div class="text-3xl md:text-5xl text white font-bold">
      Change your password here
    </div>
    <div class="p-4">Your new password must be different from your previous one</div>
  </div>
  <form @click.prevent="change()">
    <div class="flex flex-col">
      <VueInput
        label="Old Password"
        placeholder="Old password"
        type="text"
        name="Old password"
        rule="required"
        classs="w-full h-12"
        :astrix="true"
      />
      <VueInput
       label="New Password"
        placeholder="*********"
        type="password"
        name="New password"
        rule="required"
        classs="w-full h-12"
        :astrix="true"
      />
      <VueInput
       label="Confirm your new Password"
        placeholder="**********"
        type="password"
        name="Confirm password"
        rule="confirmPassword"
        classs="w-full h-12"
        :astrix="true"
      />
      <VueBtn class="pt-8" name="Change" type="submit"/>
    </div>
    </form>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
const { handleSubmit } = useForm();
const change = handleSubmit((formValues) => {
  console.log(formValues);
});


</script>