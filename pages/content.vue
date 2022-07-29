<template>
  <div
    class="container md:pl-24 flex flex-wrap mt-16 min-h-screen min-w-full pr-2"
  >
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-start w-full md:w-2/3 ml-1">
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
            @click="toggleTabs(1)"
            :class="{
              'text-emerald-600 bg-white': openTab !== 1,
              'text-white bg-emerald-600': openTab === 1,
            }"
          >
            <HomeIcon class="w-8 h-8" />
            <div class="hidden md:block">Homepage</div>
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
            @click="toggleTabs(2)"
            :class="{
              'text-emerald-600 bg-white': openTab !== 2,
              'text-white bg-emerald-600': openTab === 2,
            }"
          >
            <UserIcon class="w-8 h-8" />
            <div class="hidden md:block">AboutPage</div>
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
            @click="toggleTabs(3)"
            :class="{
              'text-emerald-600 bg-white': openTab !== 3,
              'text-white bg-emerald-600': openTab === 3,
            }"
          >
            <LightBulbIcon class="w-8 h-8" />
            <div class="hidden md:block">Skillspage</div>
          </a>
        </li>

        <li class="-mb-px mr-2 last:mr-2 flex-auto text-center">
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
            @click="toggleTabs(4)"
            :class="{
              'text-emerald-600 bg-white': openTab !== 4,
              'text-white bg-emerald-600': openTab === 4,
            }"
          >
            <PhoneIncomingIcon class="w-8 h-8" />
            <div class="hidden md:block">Contactpage</div>
          </a>
        </li>
      </ul>
      <div>
      <hr>
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div :class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <PagesHomePage />
            </div>
            <div :class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <PagesAboutPage />
            </div>
            <div :class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <PagesSkillsPage />
            </div>
            <div :class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <PagesContactPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { HomeIcon } from "@heroicons/vue/outline";
import { UserIcon } from "@heroicons/vue/outline";
import { PhoneIncomingIcon } from "@heroicons/vue/outline";
import { LightBulbIcon } from "@heroicons/vue/outline";

const openTab = ref(1);
const toggleTabs = (number) => {
  openTab.value = number;
};
</script>