<template>
  <div>
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
        pt-4
        h-screen
        md:h-full
      "
    >
      <div class="flex justify-between mb-2">
      <div @click="editData.editTimeline=''"><ArrowCircleLeftIcon class="h-8 w-8 text-black"/></div>
        <div class="flex flex-row space-x-2">
          <VueOutlineBtn
            @click="showForm = !showForm"
            :name="showForm ? 'Close' : 'Edit'"
            type="button"
            classs=""
          />
          <VueOutlineBtn
          @click="layoutState.showConfirm = true"
            name="Delete"
            type="button"
            classs="border-red-500 hover:border-transparent text-red-700 hover:bg-red-400  hover:text-red-500"
          />
        </div>
      </div>
      <hr class="mb-8">
      <div class="flex flex-col mb-4">
        <div class="flex flex-col space-y-2">
          <div class="uppercase tracking-wide text-4xl font-bold">
            {{ editData.editTimeline.incident }}
          </div>
          <div>
            {{ editData.editTimeline.location }}:
            <span>{{ editData.editTimeline.year }} </span>
          </div>
        </div>
      </div>
      <div>
       <div class="flex flex-row justify-end text-xs ">
          <div class="mr-2"> created at: 2-/20/20</div>|
          <div class="ml-2">update a: 20/20/20t</div>
        </div>
      </div>
      <hr />
      <div class="md:p-8">
        <form v-if="showForm" @submit.prevent="update()">
          <VueInput
            type="text"
            placeholder="Incident"
            name="Incident"
            rule="required"
            :data="editData.editTimeline.incident"
            @emit-input="(n) => n"
          />
          <VueInput
            type="text"
            placeholder="Place"
            name="Place"
            rule="required"
            :data="editData.editTimeline.location"
            @emit-input="(n) => n"
          />
          <VueInput
            type="text"
            placeholder="Year"
            name="Year"
            rule="required"
            :data="editData.editTimeline.year"
            @emit-input="(n) => n"
          />

          <div class="mt-6 flex flex-row space-x-2">
            <VueBtn name="Update" type="submit" />
            <VueBtn
              @click="discard()"
              name="Discard"
              type="button"
              classs="bg-red-400 hover:bg-red-500 active:bg-red-600"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
const { handleSubmit } = useForm();
const router = useRouter();
const editData = useEditData();
const showForm = ref(false);

const update = handleSubmit((formValues) => {
  console.log(formValues);
});

if (process.client) {
  if (Number(window.screen.width) > 768) {
    //router.push("/");
  }
}

const discard = () => {
  editData.value.editTimeline = "";
};
</script>