<template>
  <div
    v-if="admin"
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
      <div class="text-3xl md:text-5xl font-extrabold">
        Change your password here
      </div>
      <div class="p-4  text-red-500 ">
        Your new password must be different from your previous one
      </div>
    </div>
    <hr>
    <form class="p-0 sm:p-8 md:p-0 lg:p-8" @click.prevent="change()">
      <div class="flex flex-col">
        <VueInput
          label="Old Password"
          placeholder="Old password"
          type="text"
          name="Old_password"
          rule="password"
          classs="w-full h-12"
          :astrix="true"
        />
        <VueInput
          label="New Password"
          placeholder="*********"
          type="password"
          name="New_password"
          rule="password"
          classs="w-full h-12"
          :astrix="true"
        />
        <VueInput
          label="Confirm your new Password"
          placeholder="**********"
          type="password"
          name="Confirm password"
          rule="confirmed:@New_password"
          classs="w-full h-12"
          :astrix="true"
        />
        <VueBtn class="pt-8" name="Change" type="submit" />
      </div>
    </form>
  </div>
    <div v-else class="flex flex-col
      drop-shadow-md
      md:rounded-xl
      bg-white
      min-h-screen
      md:min-h-full md:p-8
      w-full">
  
    <div class="text-4xl md:text-5xl">This is page is not allowed for you</div>

  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { CHANGE_PASSWORD } from "~~/gql/changePassword";
const { handleSubmit, resetForm } = useForm();
const layoutState = useLayout();
const load = ref(false);

const admin = useCookie("admin");
const { mutate: change_password } = useMutation(CHANGE_PASSWORD);
const change = handleSubmit((formValues) => {
    load.value = true;
  console.log(formValues);

  if (formValues.Old_password == layoutState.value.user.password) {
    change_password({
      password: formValues.New_password,
      id: layoutState.value.user.id,
    })
      .then((res) => {
        load.value = false;
        layoutState.value.alert.message = "Change password successfull";
        resetForm();
      })
      .catch((err) => {
        load.value = false;
        console.log("err", err);
        layoutState.value.alert.message = "Please try again";
        layoutState.value.alert.success = false;
        resetForm();
      });
  } else {
    layoutState.value.alert.message = "Your Old password is not correct";
    layoutState.value.alert.success = false;
    resetForm();
  }
});
</script>