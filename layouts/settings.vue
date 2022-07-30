<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/3 flex flex-col">
      <div class="text-5xl pb-4 border-b-2 border-red-500 font-bold pt-2">
        Options
      </div>

      <div
        class="
          my-4
          md:my-4 md:mr-4
          flex flex-row
          md:flex-col
          space-x-2
          md:space-x-0 md:space-y-4
          mx-3
        "
      >
        <div class="w-1/2 md:w-full">
          <button
            @click="toggleTabs('/settings')"
            :class="{
              'text-white bg-gray-500': $route.fullPath === '/settings',
              '  bg-transparent': $route.fullPath !== '/settings',
            }"
            class="
              font-semibold
              hover:text-white
              py-3
              px-4
              md:pr-16
              border border-white
              rounded
              text-left
              hover:bg-gray-500
              w-full
            "
          >
            <div class="flex flex-row">
              <PencilAltIcon class="w-6 h-6" />
              <div class="uppercase hidden md:block">
                Edit your personal Info
              </div>
            </div>
          </button>
        </div>
        <div class="w-1/2 md:w-full">
          <button
            @click="toggleTabs('/settings/general/invite')"
            :class="{
              'text-white bg-gray-500': $route.fullPath === '/settings/general/invite',
              '  bg-transparent': $route.fullPath !== '/settings/general/invite',
            }"
            class="
              font-semibold
              hover:text-white
              py-3
              px-4
              md:pr-16
              border border-white
              rounded
              text-left
              hover:bg-gray-500
              w-full
            "
          >
            <div class="flex flex-row">
              <UserAddIcon class="w-6 h-6" />
              <div class="uppercase hidden md:block">Invite as an Admin</div>
            </div>
          </button>
        </div>
        <div class="w-1/2 md:w-full">
          <button
            @click="toggleTabs('/settings/general/change')"
            :class="{
              'text-white bg-gray-500': $route.fullPath === '/settings/general/change',
              '  bg-transparent': $route.fullPath !== '/settings/general/change',
            }"
            class="
              font-semibold
              hover:text-white
              py-3
              px-4
              md:pr-16
              border border-white
              rounded
              text-left
              hover:bg-gray-500
              w-full
            "
          >
            <div class="flex flex-row">
              <LockClosedIcon class="w-6 h-6" />
              <div class="uppercase hidden md:block">Change Your password</div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="md:ml-4 w-full md:w-2/3">
      <!--option content-->

            <div class="tab-content tab-space">
        <div  :class="[$route.fullPath == '/settings' ? 'block' : 'hidden']">
          <SettingsOptionsProfile />
        </div>
        <div  :class="[$route.fullPath == '/settings/general/invite' ? 'block' : 'hidden']">
          <SettingsOptionsInvite />
        </div>
        <div  :class="[$route.fullPath == '/settings/general/change' ? 'block' : 'hidden']">
          <SettingsOptionsChangePassword />
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { UserIcon } from "@heroicons/vue/outline";
import { PencilAltIcon } from "@heroicons/vue/outline";
import { UserAddIcon } from "@heroicons/vue/outline";
import { LockClosedIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";
const router = useRouter();

const openTab = ref("");
const toggleTabs = (number) => {
  openTab.value = number;
  router.push(number);
};
</script>