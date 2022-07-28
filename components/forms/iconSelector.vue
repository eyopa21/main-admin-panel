<template>
  <div
    class="
      flex flex-col
      min-w-0
      break-words
      bg-gray-200
      w-full
      mb-6
      shadow-lg
      rounded
      p-4
    "
  >
    <VueInput
      placeholder="Search icons"
      type="search"
      name="Search"
      rule="required"
      classs="w-full h-12"
      class="mb-2"
    />
    <ul
      class="
        px-4
        md:px-16
       
        dark:border-gray-700
        w-full
        grid grid-cols-4
        md:grid-cols-6
        gap-0
      "
    >
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '1' }"
        @click="item = '1'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '1' }"
        @click="item = '1'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '1' }"
        @click="item = '1'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '1' }"
        @click="item = '1'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '1' }"
        @click="item = '1'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '1' }"
        @click="item = '1'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '2' }"
        @click="item = '2'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '3' }"
        @click="item = '3'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '4' }"
        @click="item = '4'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '5' }"
        @click="item = '5'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <HomeIcon class="w-8 h-8 text-red-600" />
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '6' }"
        @click="item = '6'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          viewBox="88.428 12.828 107.543 207.085"
        >
          <path
            fill="#3c5a9a"
            d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
          />
        </svg>
      </li>
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === '7' }"
        @click="item = '7'"
        class="
          py-3
          px-4
          border border-gray-200
          dark:border-gray-700
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
      >
        <div v-html="a"></div>
      </li>
    </ul>
    {{ test }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { HomeIcon } from "@heroicons/vue/outline";
const item = ref(0);

const a = ref(
  '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="88.428 12.828 107.543 207.085"><path fill="#3c5a9a" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/></svg>'
);
</script>
