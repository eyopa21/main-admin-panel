<template>
  <div
    v-if="admin"
    class="
      flex flex-col
      drop-shadow-md
      md:rounded-xl
      bg-white
      min-h-screen
      md:min-h-full md:p-8
      w-full
    "
  >
    <div class="text-3xl font-bold underline mb-4 pl-4 md:pl-0 pt-2 md:pt-0">
      Invite List
    </div>
    <div class="w-full grid grid-cols-2 lg:grid-cols-3 md:gap-1">
      <div v-for="invite in invites" :key="invite">
        <ListsInvitesList :invites="invite" />
      </div>
    </div>
    <div class="w-full md:ml-4 pt-16">
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
            <VueBtn name="Invite" type="submit" class="mt-4" :loader="load"/>
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
              @click="showForm = false"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
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
import { ref } from "vue";
import { useForm } from "vee-validate";
import { GET_INVITES } from "~~/gql/inviites/getInvites";
import { INVITE_USER } from "~~/gql/inviites/addInvites";

import { useQuery, useMutation } from "@vue/apollo-composable";
const showForm = ref(false);
const layoutState = useLayout();
const admin = useCookie("admin");
const load = ref(false);

const { mutate: invite_user } = useMutation(INVITE_USER);
const { handleSubmit } = useForm();
const invite = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);

  invite_user({
    email: formValues.Email,
  })
    .then((res) => {
      load.value = false;
      if (process.client) {
        window.location.reload();
      }
    })
    .catch((err) => {
      load.value = false;
      console.log("err", err.status);
      if (
        err.message ===
        'Uniqueness violation. duplicate key value violates unique constraint "invites_email_key"'
      ) {
        layoutState.value.alert.message = "The user has already invited";
        layoutState.value.alert.success = false;
      } else {
        layoutState.value.alert.message = "PLease try again";
        layoutState.value.alert.success = false;
      }
    });
});

const invites = ref("");
const { loading, result, error } = useQuery(GET_INVITES);
watchEffect(() => {
  if (result.value) {
    console.log("result.value user", result.value);
    invites.value = result.value.invites;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});
</script>