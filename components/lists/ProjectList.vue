<template>
  <div @click="preview()">
    <div
      class="
        flex flex-row
        w-full
        border-y-1 border-black
        align-middle
        p-4
        hover:bg-gray-400
      "
    >
      <div class="flex flex-row space-x-4 w-full h-full">
        <img class="w-12 h-12" :src="props.projects.pricture" alt="" />
        <div class="pt-3">{{ props.projects.title }}</div>
      </div>

      <div class="w-full h-12 overflow-y-hidden">
        {{ props.projects.description }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  projects: {
    type: Object,
    required: true,
  },
});

const editData = useEditData();
const router = useRouter();

function preview() {
  console.log("test");
  editData.value.editProject = props.projects;
  router.push(`/projects/${props.projects.id}`);
}
</script>