<template>
  <div
    class="container md:pl-24 flex flex-wrap mt-16 min-h-screen min-w-full md:pr-2"
  >
    <div class="w-full">
      <ul
        class="
          flex
          mb-0
          md:w-1/2
          list-none
          flex-wrap
          pt-3
          pb-4
          flex-row
          justify-start
          w-full
          ml-1
        "
      >
        <li class="mr-2 flex-auto text-center">
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
            @click="toggleTabs('/settings')"
            :class="[
              $route.fullPath == '/settings' || $route.fullPath == '/settings/general/invite' || $route.fullPath == '/settings/general/change'
                ? 'text-white bg-emerald-600'
                : 'text-emerald-600 bg-white',
            ]"
          >
            <CogIcon class="w-8 h-8" />
            <div class="hidden md:block">General</div>
          </a>
        </li>
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
            @click="toggleTabs('/settings/sociallinks')"
            :class="[
              $route.fullPath == '/settings/sociallinks'
                ? 'text-white bg-emerald-600'
                : 'text-emerald-600 bg-white',
            ]"
          >
            <UserGroupIcon class="w-8 h-8" />
            <div class="hidden md:block">Social Links</div>
          </a>
        </li>
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
            @click="toggleTabs('/settings/prefer')"
            :class="[
              $route.fullPath == '/settings/prefer'
                ? 'text-white bg-emerald-600'
                : 'text-emerald-600 bg-white',
            ]"
          >
            <AdjustmentsIcon class="w-8 h-8" />
            <div class="hidden md:block">Preferences</div>
          </a>
        </li>
      </ul>
      <div>
        <hr />
        <div class="md:px-4 md:py-5 flex-auto">
          <NuxtLayout
            :name="
              $route.fullPath == '/settings' ||
              $route.fullPath == '/settings/general/invite' ||
               $route.fullPath == '/settings/general/change'
                ? 'settings'
                : 'default'
            "
          >
            <NuxtPage />
          </NuxtLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { HomeIcon } from "@heroicons/vue/outline";
import { CogIcon } from "@heroicons/vue/outline";

import { UserGroupIcon } from "@heroicons/vue/outline";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { LightBulbIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";
const router = useRouter();
const openTab = ref("");
const toggleTabs = (number) => {
  openTab.value = number;
  router.push(number);
};
</script>