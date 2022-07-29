<template>
  <div @click="preview()">
    <div class="flex flex-row w-full border-y-1 border-black align-middle p-4 hover:bg-gray-400">
      <div class="flex flex-col w-full h-full">
        <div class="font-bold">{{timeline.incident}}</div>
        <div >{{timeline.location}}</div>
      </div>

      <div class="w-full">{{timeline.year}}</div>
    </div>
  </div>
</template>
<script setup>
const editData = useEditData()
const props = defineProps({
  timeline: {
    type: Object,
    required: true,
  }})

function preview(){
    console.log("test")
    editData.value.editTimeline = props.timeline;
}


</script>