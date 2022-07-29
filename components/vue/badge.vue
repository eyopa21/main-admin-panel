<template>
  <div
    class="
      bg-light_bg
      h-4
      p-1
      w-full
      mb-4
      md:mb-0
      rounded-md
      flex
      items-center
      justify-center
    "
  >
    <div class="focus:outline-none flex items-center">
      <div class="h-1 w-1 rounded-full bg-gray-700 dark:bg-gray-400 mr-1"></div>
      <span class="text-xs text-gray-700 dark:text-gray-400 font-normal"
        >{{skill}}</span
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skill: {
    type: String,
    required: true
  }
})
</script>