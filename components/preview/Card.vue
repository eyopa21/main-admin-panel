<template>
  <div class="mx-auto  mb-3">
    <div
      class="
        bg-bg_color
        rounded-lg
        border border-gray-200
        shadow-md
        dark:bg-gray-800 dark:border-gray-700
      "
    >
      <div class="flex flex-row">
        <img class="rounded-t-lg px-5 py-2 h-64 w-3/4" :src="url" alt="image" />
        <div class="flex flex-col mt-2 space-y-0 md:space-y-2 pr-2">
          <div class="text-white">Skills used</div>
          <div v-for="skill in layoutState.previewData.skills" :key="skill">
            <VueBadge :skill="skill" />
          </div>
        </div>
      </div>

      <div class="p-5 flex flex-col">
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-primary
            dark:text-white
          "
        >
         {{ layoutState.previewData.title}}
        </h5>

        <div class="text-xs font-bold text-white mt-1 mb-2">
           {{ layoutState.previewData.subtitle}}
        </div>
        
        <p class="mb-3 font-normal h-full  text-secondary dark:text-gray-400">
          {{ layoutState.previewData.description}}
        </p>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const layoutState = useLayout();


const url = ref("");


</script>