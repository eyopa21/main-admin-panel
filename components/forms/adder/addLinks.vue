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
          mb-6
          shadow-lg
          md:rounded-2xl
          p-4
          md:p-8
          h-full
          min-h-screen
          md:min-h-full
        "
      >
        <div class="mb-8 -ml-2 text-3xl font-bold underline">
          Add new Social link here
        </div>
        <FormsIconSelector @emit-icon="(n) => (icon = n)" class="w-full" />
        <VueInput
          type="text"
          placeholder="Social Link Name"
          name="Link_Name"
          rule="required"
        />
        <VueInput
          type="text"
          placeholder="Value"
          name="Value"
          rule="required"
        />

        <div class="mt-6 flex flex-row space-x-2">
          <VueBtn name="Add" type="submit" :loader="load"/>
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
    </form>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { ADD_LINKS } from "~~/gql/links/addLinks";
import { useQuery, useMutation } from "@vue/apollo-composable";
const router = useRouter();
const { handleSubmit } = useForm();

const icon = ref("");
const load = ref(false)

const { mutate: add_links } = useMutation(ADD_LINKS);
const add = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);
  add_links({
    icon: icon.value,
    name: formValues.Link_Name,
    value: formValues.Value,
  })
    .then((res) => {
      load.value = false;
       if (process.client) {
            window.location.reload();
          }
    })
    .catch((err) => {
      load.value = false;
      console.log("err", err);
      layoutState.value.alert.message = "PLease try again";
      layoutState.value.alert.success = false;
    });
});

if (process.client) {
  if (Number(window.screen.width) > 768) {
    //router.push("/");
  }
}
</script>