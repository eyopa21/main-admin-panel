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
      <div class="flex flex-col w-[60%] pr-4 h-full">
        <div class="font-bold break-words">{{ timeline.title }}</div>
        <div class="w-full">{{ timeline.description }}</div>
      </div>

      <div class="w-[40%]">{{ timeline.subtitle }}</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const editData = useEditData();
const props = defineProps({
  timeline: {
    type: Object,
    required: true,
  },
});

function preview() {
  console.log("test");
  editData.value.editTimeline = props.timeline;
  router.push(`/timeline/${props.timeline.id}`);
}
</script>