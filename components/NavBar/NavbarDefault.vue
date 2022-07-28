<template>
  <div class="w-64 bg-white dark:bg-slate-700">
    <div class="flex flex-col sm:flex-row sm:justify-around">
      <div class="w-72 h-screen">
        <div class="flex flex-col justify-start mx-6 pl-2">
          <img
            class="h-10 w-10 rounded-full"
            src="https://i.imgur.com/XHO7CaG.jpeg"
          />
          <span class="text-gray-600 dark:text-gray-300 text-xl font-bold">
            Eyoba
          </span>
        </div>
        <nav class="px-6">
          <NuxtLink
            to="/"
            class="
              hover:text-gray-800 hover:bg-gray-100
              flex
              items-center
              p-2
              my-4
              transition-colors
              dark:hover:text-white dark:hover:bg-gray-600
              duration-200
              rounded-lg
            "
            :class="[
              $route.fullPath == '/'
                ? 'text-white bg-gray-600'
                : 'text-gray-400',
            ]"
          >
            <DatabaseIcon class="w-6 h-6" />
            <span class="mx-4 text-lg font-normal"> Dashboard </span>
            <span class="flex-grow text-right"> </span>
          </NuxtLink>
          <NuxtLink
            to="/content"
            class="
              hover:text-gray-800 hover:bg-gray-100
              flex
              items-center
              p-2
              my-4
              transition-colors
              dark:hover:text-white dark:hover:bg-gray-600
              duration-200
              rounded-lg
            "
            :class="[
              $route.fullPath == '/content'
                ? 'text-white bg-gray-600'
                : 'text-gray-400',
            ]"
          >
            <NewspaperIcon class="w-6 h-6" />
            <span class="mx-4 text-lg font-normal"> Page Contents </span>
            <span class="flex-grow text-right"> </span>
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="
              hover:text-gray-800 hover:bg-gray-100
              flex
              items-center
              p-2
              my-4
              transition-colors
              dark:hover:text-white dark:hover:bg-gray-600
              duration-200
              rounded-lg
            "
            :class="[
              $route.fullPath == '/projects'
                ? 'text-white bg-gray-600'
                : 'text-gray-400',
            ]"
          >
            <BriefcaseIcon class="w-6 h-6" />
            <span class="mx-4 text-lg font-normal"> Projects </span>
            <span class="flex-grow text-right">
              <button
                type="button"
                class="w-6 h-6 text-xs rounded-full text-white bg-red-500"
              >
                <span class="p-1"> 7 </span>
              </button>
            </span>
          </NuxtLink>
          <NuxtLink
            to="/skills"
            class="
              hover:text-gray-800 hover:bg-gray-100
              flex
              items-center
              p-2
              my-4
              transition-colors
              dark:hover:text-white dark:hover:bg-gray-600
              duration-200
              rounded-lg
            "
            :class="[
              $route.fullPath == '/skills'
                ? 'text-white bg-gray-600'
                : 'text-gray-400',
            ]"
          >
            <LightBulbIcon class="w-6 h-6" />
            <span class="mx-4 text-lg font-normal"> Skills </span>
            <span class="flex-grow text-right"> </span>
          </NuxtLink>
          <NuxtLink
            to="/timeline"
            class="
              hover:text-gray-800 hover:bg-gray-100
              flex
              items-center
              p-2
              my-4
              transition-colors
              dark:hover:text-white dark:hover:bg-gray-600
              duration-200
              rounded-lg
            "
            :class="[
              $route.fullPath == '/timeline'
                ? 'text-white bg-gray-600'
                : 'text-gray-400',
            ]"
          >
            <ClockIcon class="w-6 h-6" />
            <span class="mx-4 text-lg font-normal"> TimeLines </span>
            <span class="flex-grow text-right"> </span>
          </NuxtLink>
          <NuxtLink
            to="/settings"
            class="
              hover:text-gray-800 hover:bg-gray-100
              flex
              items-center
              p-2
              my-4
              transition-colors
              dark:hover:text-white dark:hover:bg-gray-600
              duration-200
              rounded-lg
            "
            :class="[
              $route.fullPath == '/settings'
                ? 'text-white bg-gray-600'
                : 'text-gray-400',
            ]"
          >
            <CogIcon class="w-6 h-6" />
            <span class="mx-4 text-lg font-normal"> Settings </span>
            <span class="flex-grow text-right"> </span>
          </NuxtLink>
        </nav>
        <div class="absolute bottom-0 my-10">
          <NuxtLink
            to="/login"
            class="
              hover:text-gray-800 hover:bg-gray-100
              dark:hover:text-white dark:hover:bg-gray-600
              transition-colors
              duration-200
              flex
              items-center
              py-2
              pl-4
              pr-16
              -mt-20
              ml-8
              rounded-lg
            "
          >
            <LogoutIcon class="w-6 h-6" />
            <span class="mx-4 font-medium text-white"> Logout </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DatabaseIcon } from "@heroicons/vue/outline";
import { LightBulbIcon } from "@heroicons/vue/outline";
import { CogIcon } from "@heroicons/vue/outline";
import { BriefcaseIcon } from "@heroicons/vue/outline";
import { ClockIcon } from "@heroicons/vue/outline";
import { NewspaperIcon } from "@heroicons/vue/outline";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { LogoutIcon } from "@heroicons/vue/outline";
</script>