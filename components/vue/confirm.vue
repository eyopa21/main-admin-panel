<template>
  <div class="mt-32 pt-32s" v-if="layoutState.showConfirm">
    <div
     
      class="
        
        overflow-y-auto overflow-x-hidden
        fixed
        top-0
        right-0
        left-0
        z-50
        md:inset-0
        
        md:h-full
        mt-32
      "
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      
          <div class="p-6 text-center">
            <ExclamationIcon class="w-20 h-20 text-white mx-auto"/>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Are you sure you want to delete this product?
            </h3>
            <button
              type="button"
              class="
                text-white
                bg-red-600
                hover:bg-red-800
                focus:ring-4 focus:outline-none focus:ring-red-300
                dark:focus:ring-red-800
                font-medium
                rounded-lg
                text-sm
                inline-flex
                items-center
                px-5
                py-2.5
                text-center
                mr-2
              "
            >
              Yes, I'm sure
            </button>
            <button
             @click="layoutState.showConfirm = false"
              type="button"
              class="
                text-gray-500
                bg-white
                hover:bg-gray-100
                focus:ring-4 focus:outline-none focus:ring-gray-200
                rounded-lg
                border border-gray-200
                text-sm
                font-medium
                px-5
                py-2.5
                hover:text-gray-900
                focus:z-10
                dark:bg-gray-700
                dark:text-gray-300
                dark:border-gray-500
                dark:hover:text-white
                dark:hover:bg-gray-600
                dark:focus:ring-gray-600
              "
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ExclamationIcon } from "@heroicons/vue/outline";

const layoutState = useLayout();

</script>