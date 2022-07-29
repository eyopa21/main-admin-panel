<template>
  <div class="w-full">
    <div class="flex flex-row w-auto p-2 ">
      <div
        class="
          flex flex-col
          w-auto
          h-full
          mx-auto
          bg-emerald-400
          pt-0
          pr-0
        
          md:p-4
          md:pt-0
          
          rounded
          hover:bg-gray-400
        "
      >
        <div @click="remove()" class="flex justify-end p-2">
          <TrashIcon class="w-6 h-6 text-red-500" />
        </div>
        <div class="pl-16 pr-4"><UserIcon class="w-8 h-8 text-blue-600" /></div>
        <div class="p-1 md:p-2 md:pr-4">jobnigussie@gmail.com</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { UserIcon } from "@heroicons/vue/outline";
import { TrashIcon } from "@heroicons/vue/outline";

const remove = () => {
  console.log("remove");
};
</script>