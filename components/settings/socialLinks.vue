<template>
  <div class="">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col w-full md:w-[40%]">
        <div v-for="i in 8" :key="i">
          <ListsLinksLists />
        </div>
      </div>
<div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div v-if="!showForm" class="m-24 md:m-48">
            <VueBtn @click="showForm = true" name="Click here to add new " type="button" />
          </div>
          <div class="m-8 hidden md:block">
            <FormsAddForm v-if="showForm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const showForm = ref(false)
</script>