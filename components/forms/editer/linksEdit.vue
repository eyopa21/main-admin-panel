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
        md:rounded-2xl
        p-2
        md:p-8
        pt-4
         md:pt-4
        h-screen
        md:h-full
      "
    >
      <div class="flex justify-between mb-2">
        <div @click="editData.editLinks = ''">
          <ArrowCircleLeftIcon class="h-8 w-8 text-black" />
        </div>
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
      <hr class="mb-8" />
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <div class="flex flex-row space-x-4">
            <div>
               <img
                class="w-20 h-20"
                src="../../../assets/icons/facebook.svg"
                alt=""
              />
            </div>
            <div class="flex flex-col pt-2">
              <div class="text-5xl font-semibold">Facebook</div>
              <div class="underline">facebook.com</div>
            </div>
          </div>
        </div>
      </div>
    
      <hr class="mt-4 mb-4" />
      <div class="p-2">
        <form v-if="showForm" @submit.prevent="update()">
          <VueInput
            type="text"
            placeholder="Social Links Name"
            name="Link Name"
            rule="required"
            :data="editData.editLinks.name"
            @emit-input="(n) => n"
          />
          <VueInput
            type="text"
            placeholder="Value"
            name="Value"
            rule="required"
            :data="editData.editLinks.value"
            @emit-input="(n) => n"
          />

          <div class="mt-6 flex flex-row space-x-2">
            <VueBtn name="Update" type="submit" />
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

const discard = () => {
  editData.value.editSkill = "";
};
</script>