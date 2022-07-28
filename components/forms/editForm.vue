<template>
  <div>
    <form @submit.prevent="update()">
      <div
        class="
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          mb-6
          shadow-lg
          rounded-2xl
          p-8
          h-full
        "
      >
        <VueInput
          type="text"
          placeholder="Email"
          name="test"
          rule="required"
          class="w-full"
        />
        <VueInput type="text" placeholder="Email" name="test" rule="required" />
        <VueInput type="text" placeholder="Email" name="test" rule="required" />
        <VueInput type="text" placeholder="Email" name="test" rule="required" />
        <div class="mt-6 flex flex-row space-x-2">
          <VueBtn name="Update" type="submit" />
          <VueBtn @click="discard()" name="Discard" type="button" classs="bg-red-400 hover:bg-red-500 active:bg-red-600"/>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
const { handleSubmit } = useForm();
const router = useRouter();
const editData = useEditData()


const update = handleSubmit((formValues) => {
  console.log(formValues);
});

if (process.client) {
  if (Number(window.screen.width) > 768) {
    //router.push("/");
  }
}

const discard = () => {
    editData.value = ''
}
</script>