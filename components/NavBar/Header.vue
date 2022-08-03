<template>
  <div>
    <div class="flex flex-col w-full pl-0 md:space-y-4">
      <header
        class="w-full shadow-lg bg-white dark:bg-slate-700 items-center h-16"
      >
        <div
          class="
            relative
            z-20
            flex flex-row
            justify-between
            h-full
            px-3
            mx-auto
            flex-center
            mt-4
          "
        >
          <div class="">
            <ArrowCircleRightIcon
              v-if="!layoutState.showSideBar"
              @click="layoutState.showSideBar = true"
              class="w-6 h-6 ml-10 text-white hidden md:block"
            />
            <ArrowCircleLeftIcon
              v-if="layoutState.showSideBar"
              @click="layoutState.showSideBar = false"
              class="w-6 h-6 ml-52 text-white hidden md:block"
            />
            <ArrowCircleLeftIcon
              v-if="!layoutState.closeSidebar"
              @click="layoutState.closeSidebar = true"
              class="w-6 h-6 ml-10 text-white block md:hidden"
            />
            <MenuIcon
              v-if="layoutState.closeSidebar"
              @click="layoutState.closeSidebar = false"
              class="w-6 h-6 ml-2 text-white block md:hidden"
            />
          </div>
          
          <div class="flex flex-row" v-if="layoutState.user">
            <img
              :src="layoutState.user.picture"
              class="mx-auto w-8 h-8 rounded-full mr-2"
            />
            <div class="text-gray-200 font-bold justify-center">
              {{layoutState.user.name}}
              <div class="flex justify-end text-xs">{{getDate}}</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<script setup>
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline";
import { ArrowCircleRightIcon } from "@heroicons/vue/outline";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { MenuIcon } from "@heroicons/vue/outline";
import { onMounted } from "vue";

const layoutState = useLayout();
const closeSideBar = ref(false);

var date = new Date();
const getDate = computed(() => {
  console.log("date", date);
  return date.toUTCString();
});


</script>