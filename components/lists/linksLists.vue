<template>
  <div @click="editData.editLinks=props.link" class="">
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
        <img
                class="w-12 h-12"
                src="../../../assets/icons/facebook.svg"
                alt=""
              />

        <div class="flex flex-col">
          <div class="font-semibold text-md">{{props.link.name}}</div>
          <div>{{props.link.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  link: {
    type: Object,
    required: true,
  }})


const editData = useEditData()
const router = useRouter();


</script>
