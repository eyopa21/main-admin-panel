<template>
  <div>
    <form @submit.prevent="add()">
      <div
        class="
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          md:mb-6
          shadow-lg
          rounded-2xl
          p-8
          h-screen
          md:h-full
        "
      >

        <div class="p-8">
          <VueInput
            type="text"
            placeholder="Incident"
            name="Incident"
            rule="required"
          />
          <VueInput
            type="text"
            placeholder="Place"
            name="Place"
            rule="required"
          />
          <VueInput
            type="text"
            placeholder="Year"
            name="Year"
            rule="required"
          />

          <div class="mt-6 flex flex-row space-x-2">
            <VueBtn name="Add" type="submit" />
            <button
              class="
                text-red-500
                background-transparent
                font-bold
                uppercase
                px-6
                py-2
                text-sm
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-100
              "
              type="button"
              @click="$emit('closeAddForm')"
            >
              Close
            </button>
          </div>
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

const add = handleSubmit((formValues) => {
  console.log(formValues);
});

if (process.client) {
  if (Number(window.screen.width) > 768) {
    //router.push("/");
  }
}
</script>