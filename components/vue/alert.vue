<template>
  <div class="ml-2">
    <div
    
      class="
       ml-2
        shadow-lg
        mx-auto
        mt-20
        md:ml-8
        w-72
        md:w-96
        max-w-full
        text-sm
        pointer-events-auto
        bg-clip-padding
       
        block
        mb-3
        fixed
        top-0
        left-0
        z-20
      "
    >
      <div
      :class="layoutState.alert.success? 'bg-emerald-500':'bg-red-600'"
        class="
          
          flex
          justify-between
          items-center
          py-2
          
          px-3
          bg-clip-padding
          border-b border-white
       
        "
      >
        <div class="font-bold text-white flex items-center">
          <div class="mr-2">
            <XIcon @click="layoutState.alert.message = ''" class="w-6 h-6" />
          </div>
          <div v-if="layoutState.alert.success">Sucess</div>
          <div v-else>Alert</div>
        </div>
        <div class="flex items-center">
          <p class="text-white opacity-90 text-xs hidden">11 mins ago</p>
          <button
            type="button"
            class="
              btn-close btn-close-white
              box-content
              w-4
              h-4
              ml-2
              text-white
              border-none
              rounded-none
              opacity-50
              focus:shadow-none focus:outline-none focus:opacity-100
              hover:text-white hover:opacity-75 hover:no-underline
            "
          ></button>
        </div>
      </div>

      <div :class="layoutState.alert.success? 'bg-emerald-500':'bg-red-600'" class="p-3 mb-2 md:mb-6  break-words text-white">
        {{ layoutState.alert.message }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { XIcon } from "@heroicons/vue/outline";
const layoutState = useLayout();
</script>