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
        <div class="mb-8 -ml-2 text-3xl font-bold underline">
          Add new Skill here
        </div>

        <FormsIconSelector @emit-icon="(n) => (icon = n)" class="w-full" />
        <VueInput
          type="text"
          placeholder="Skill Name"
          name="Skill_Name"
          rule="required"
        />
        <VueInput
          type="text"
          placeholder="Level"
          name="Level"
          rule="required|number:10,100"
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
import { useQuery, useMutation } from "@vue/apollo-composable";
import { ADD_SKILLS } from "~~/gql/skills/addSkills";
const { handleSubmit } = useForm();
const router = useRouter();
const icon = ref();
const load = ref(false);
const { mutate: add_skills } = useMutation(ADD_SKILLS);
const add = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);
  console.log("icon", icon.value);

  console.log(formValues);
  if (icon.value) {
    add_skills({
      icon: icon.value,
      level: formValues.Level,
      skill_name: formValues.Skill_Name,
    })
      .then((res) => {
        load.value = false;
        console.log("res", res.data);
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
  }
});

if (process.client) {
  if (Number(window.screen.width) > 768) {
    //router.push("/");
  }
}
</script>