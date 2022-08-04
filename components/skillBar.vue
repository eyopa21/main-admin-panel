<template>
  <div class="text-black text-sm">
   {{props.skill.level}}%
  </div>
  <div :class="props.classs" class=" max-w-md w-auto  h-2 bg-white  rounded-full">
    <div
      class="h-full rounded-l-full bg-emerald-500"
       :style="{ width: `${props.skill.level}%` }"
     
      
    ></div>
  </div>


</template>
<script setup>

const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
  classs: {
    type: String,
    required: false
  }})



</script>