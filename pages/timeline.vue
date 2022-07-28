<template>
  <div class="">
    <div
      class="
        container
        md:pl-24
        flex flex-col
        md:flex-row
        mt-16
        min-h-screen min-w-full
        pr-2
      "
    >
      <div class="flex flex-col w-full md:w-[40%]">
        <div class="ml-2 my-4 mr-4 mb-8">
          <VueInput
            placeholder="Search"
            type="search"
            name="search"
            rule="required"
            class="w-full mr-8 h-12"
            :rounded="true"
          />
        </div>
        <div class="flex flex-row justify-start w-full ml-4 font-bold">
          <div class="flex flex-wrap">
            <div>Incident</div>
            <div>
              <ChevronUpIcon class="w-4 h-4" />
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
          <div class="flex flex-wrap pl-24 md:pl-32">
            <div>Year</div>
            <div>
              <ChevronUpIcon class="w-4 h-4" />
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
        </div>
        <hr />
        <div v-for="i in 8" :key="i">
          <ListsTimelineList />
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div class="m-24 block md:hidden">
            <VueBtn
              @click="addNew()"
              name="Click here to add new "
              type="button"
            />
          </div>
          <div v-if="!showForm" class="m-48 hidden md:block">
            <VueBtn
              @click="showForm = true"
              name="Click here to add new "
              type="button"
            />
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
const showForm = ref(false);
</script>