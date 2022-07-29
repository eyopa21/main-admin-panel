<template>
  <div>
    <h1 class="text-7xl m-32" @click="layoutState.showModal = true">test</h1>
    
    <VueSearch/>
    <VueConfirm/>
   
   <div>
          <li class="-mb-px mr-2 flex-auto text-center">
          <a
            class="
              text-xs
              font-bold
              uppercase
              px-5
              py-3
              shadow-lg
              rounded
              block
              leading-normal
            "
          
            :class="{
              'text-emerald-600 bg-white': true,
              'text-white bg-emerald-600': false,
            }"
          >
            <HomeIcon class="w-8 h-8" />
            <div class="hidden md:block">General</div>
          </a>
        </li>
   </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const layoutState = useLayout();
</script>