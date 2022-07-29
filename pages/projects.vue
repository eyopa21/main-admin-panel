<template>
  <div class="">
    <div
      class="
        container
        md:pl-24
        flex flex-col
        md:flex-row
        mt-16
        min-h-screen min-w-full
        md:pr-2
      "
    >
      <div
        :class="showAddForm || editData.editProject ? 'hidden md:block' : ''"
        class="flex flex-col w-full md:w-[40%]"
      >
        <div class="ml-2 my-4 mr-4 mb-8">
          <VueInput
            placeholder="Search"
            type="search"
            name="search"
            rule="required"
            class="w-full mr-8 h-12"
            :rounded="true"
          />
        </div>
        <div class="flex flex-row justify-start w-full ml-4 font-bold">
          <div class="flex flex-wrap">
            <div>Name</div>
            <div>
              <ChevronUpIcon class="w-4 h-4" />
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
          <div class="flex flex-wrap pl-28 md:pl-36">
            <div>Description</div>
            <div>
              <ChevronUpIcon class="w-4 h-4" />
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
        </div>
        <hr />
        <div v-for="project in projects" :key="project.key">
          <ListsProjectList :projects="project" />
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div
            v-if="!showAddForm && !editData.editProject"
            class="m-24 block md:hidden"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new mobile"
              type="button"
            />
          </div>
          <div
            v-if="!showAddForm && !editData.editProject"
            class="m-48 hidden md:block"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>
          <div class="md:m-8">
            <FormsAdderAddProjectsForm
              v-if="showAddForm && !editData.editProject"
              @closeAddForm="showAddForm = false"
            />
            <NuxtPage v-if="editData.editProject" />
            <!--FormsEditerProjectsEditForm v-if="editData.editProject" /-->
          </div>
        </div>
      </div>
    </div>

    {{ test }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
const showAddForm = ref(false);
const editData = useEditData();

const test = computed(() => {
  if (editData.value.editProject && showAddForm.value) {
    showAddForm.value = false;
  }
});

const projects = ref([
  {
    title: "title1",
    subtitle: "subtitle1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
    link: "link1",
    image: "https://i.imgur.com/4zSAWJ5.jpeg",
    skills: ["skill1", "skill2", "skill2","skill1", "skill2", "skill2"],
    date: "20/20/20",
  },
  {
    title: "title2",
    subtitle: "subtitle2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    link: "link1",
    image: "https://i.imgur.com/4zSAWJ5.jpeg",
    skills: ["skill1", "skill2", "skill2"],
    date: "20/20/20",
  },
  {
    title: "title3",
    subtitle: "subtitle3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
    link: "link1",
    image: "https://i.imgur.com/4zSAWJ5.jpeg",
    skills: ["skill1", "skill2", "skill2"],
    date: "20/20/20",
  },
  {
    title: "title4",
    subtitle: "subtitle4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with ",
    link: "link1",
    image: "https://i.imgur.com/4zSAWJ5.jpeg",
    skills: ["skill1", "skill2", "skill2"],
    date: "20/20/20",
  },
]);
</script>