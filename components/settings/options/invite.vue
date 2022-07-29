<template>
  <div
    class="
      flex flex-col
      drop-shadow-md
      md:rounded-xl
      
      bg-white
      min-h-screen
      md:min-h-full
      md:p-8
      w-full
    "
  >
    <div class="w-full grid grid-cols-2 lg:grid-cols-3 md:gap-1">
      <div v-for="i in 5" :key="i">
        <ListsInvitesList />
      </div>
    </div>
    <div class="w-full  md:ml-4 pt-16 ">
  
      <VueBtn
        v-if="!showForm"
        @click="showForm = true"
        name="Click here to Add new"
        type="button"
        class="w-full flex justify-center md:justify-end"
      />
  
      <form class="w-full" @submit.prevent="invite()">
        <div
          v-if="showForm"
          class="
            flex flex-col
            min-w-0
            break-words
            bg-gray-200
            w-full
            mb-6
            shadow-lg
            p-8
          "
        >
          <div>Insert the email you want to invite</div>
          <VueInput
            placeholder="The email here..."
            type="text"
            name="Email"
            rule="email"
            class="w-full"
          />
          <div class="flex flex-row">
            <VueBtn name="Invite" type="submit" class="mt-4" />
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
                pt-6
              "
              type="button"
              @click="showForm=false"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "vee-validate";

const showForm = ref(false);

const { handleSubmit } = useForm();
const invite = handleSubmit((formValues) => {
  console.log(formValues);
});
</script>