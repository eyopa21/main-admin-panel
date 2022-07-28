<template>
  <div
    class="
      flex flex-col
      md:flex-row
      drop-shadow-md
      border-2
      md:m-4
      p-4
      md:p-8
      w-full
    "
  >
    <div class="w-full md:w-1/2">
      <div v-for="i in 5" :key="i">
        <ListsInvitesList />
      </div>
    </div>
    <div class="w-full md:w-1/2 m-auto md:ml-4 pt-8 md:pt-0">
      <VueBtn
        v-if="!showForm"
        @click="showForm = true"
        name="Click here to Add new"
        type="button"
      />
      <form @submit.prevent="invite()">
        <div
          v-if="showForm"
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
          <VueBtn name="Invite" type="submit" class="mt-4" />
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