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
          md:p-8
          h-screen
          md:h-full
        "
      >
        <div class="m-4 text-3xl font-bold underline">Add new timeline here</div>
        <div class="p-8 pt-4">
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
import { ADD_TIMELINE } from "~~/gql/timeline/addTImeline";
import { useQuery, useMutation } from "@vue/apollo-composable";
const { handleSubmit } = useForm();
const router = useRouter();
const layoutState = useLayout()


  const { mutate: add_timeline } = useMutation(ADD_TIMELINE);
const add = handleSubmit((formValues) => {
  console.log(formValues);

  add_timeline({
    title: formValues.Incident,
    subtitle: formValues.Place,
    description: formValues.Year
  })
    .then((res) => {
      console.log("res", res.data);
        if (process.client) {
            window.location.reload();
          }
    })
    .catch((err) => {
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