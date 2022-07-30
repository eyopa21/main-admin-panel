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
        pb-4
        min-h-screen
        md:min-h-full
        md:h-full md:ml-4
      "
    >
      <div class="flex justify-between mb-2">
      <div @click="editData.editProject=''"><ArrowCircleLeftIcon class="h-8 w-8 text-black"/></div>
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
      <hr class="mb-4">
      <div v-if="!showForm" class="flex flex-col">
        <div class="flex flex-row">
          <div class="flex flex-col space-y-4 w-[60%]">
            <div class="text-5xl font-bold mb-2">
              {{ editData.editProject.title }}
            </div>
            <div class="w-full">
              <img class="rounded-xl" src="https://i.imgur.com/4zSAWJ5.jpeg" alt="" />
            </div>
          </div>
         
          <div class="w-[40%] h-8 pt-20 grid gap-2 grid-cols-2 ml-2">
            <div
              v-for="skill in editData.editProject.skills"
              :key="skill"
              class="p-0"
            >
              <VueBadge :skill="skill" />
            </div>
          </div>
        </div>
        <div class="font-bold tracking-widest mb-4">
          {{ editData.editProject.subtitle }}
        </div>
        <div>
          {{ editData.editProject.description }}
        </div>
        <div class="flex flex-row text-xs pt-8">
          <div class="mr-2"> created at: 2-/20/20</div>|
          <div class="ml-2">update a: 20/20/20t</div>
        </div>
      </div>
      <form class="pr-2" v-if="showForm" @submit.prevent="add()">
        <div class="flex flex-row">
          <div :class="url ? '' : 'bg-red-300'" class="w-[60%]">
              
            <img class="max-h-32 object-fill h-full w-full" :src="url" alt="" />
          </div>
          <div class="m-4">
            <VueBtn
              @click="selectImage()"
              :name="url ? 'Change Image' : 'Select Image'"
              type="button"
            />
          </div>
        </div>

        <div class="flex flex-row space-x-2 justify-between">
          <VueInput
            placeholder="Title"
            type="text"
            name="Title"
            rule="required"
            classs="w-full h-12"
            class="w-1/2"
            :data="editData.editProject.title"
            @emit-input="(n) => (editForm.title = n)"
          />
          <VueInput
            placeholder="Subtitle"
            type="text"
            name="Subtitle"
            rule="required"
            classs="w-full h-12"
            class="w-1/2"
            :data="editData.editProject.subtitle"
            @emit-input="(n) => (editForm.subtitle = n)"
          />
        </div>
        <VueInput
          :data="editData.editProject.link"
          @emit-input="(n) => (editForm.link = n)"
          placeholder="Link"
          type="text"
          name="Link"
          rule="required"
        />
        <VueInput
          :data="editData.editProject.date"
          @emit-input="(n) => n"
          placeholder="Date"
          type="text"
          name="Date"
          rule="required"
        />
        <VueInput
          placeholder="Description"
          type="text"
          name="Description"
          rule="required"
          :textarea="true"
          :data="editData.editProject.description"
          @emit-input="(n) => (editForm.description = n)"
        />
        <div class="mt-2">
          <label for="chip" class="font-semibold">Skills Used</label>
          <VueChip
            :skills="editData.editProject.skills"
            @emit-skills="(n) => (editForm.skills = n)"
          />
        </div>

        <div class="mt-6 flex flex-row space-x-2">
          <VueBtn name="Update" type="submit" />
          <VueBtn @click="preview()" name="Preview" type="button" />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
const { handleSubmit } = useForm();
const layoutState = useLayout();
const router = useRouter();
const showForm = ref(false);
const editData = useEditData();

const editForm = ref({
  skills: [],
  image: "",
  title: '',
  subtitle: '',
  description: '',
  link: ''
});

const add = handleSubmit((formValues) => {
  console.log(formValues);
  console.log("skills", editForm.value.skills);
  console.log("skills", editForm.value.image);
});

const preview = () => {
layoutState.value.previewData=editForm.value
}



const image = ref();
const url = ref(editData.value.editProject.image);

const selectImage = () => {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();
  input.onchange = (e) => {
    editForm.value.image = e.target.files[0];
    url.value = URL.createObjectURL(editForm.value.image);
  };
};
</script>