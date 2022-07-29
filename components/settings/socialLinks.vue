<template>
  <div class="">
    <div class="flex flex-col md:flex-row">
      <div
        :class="showAddForm || editData.editLinks ? 'hidden md:block' : ''"
        class="flex flex-col w-full md:w-[40%]"
      >
        <div v-for="(link, key) in links" :key="key">
          <ListsLinksLists :link="link" />
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div
            v-if="!showAddForm && !editData.editLinks"
            class="m-24 block md:hidden"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new mobile"
              type="button"
            />
          </div>
          <div
            v-if="!showAddForm && !editData.editLinks"
            class="m-32 hidden md:block"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>

          <div class="md:mx-8">
            <FormsAdderAddLinks
              v-if="showAddForm && !editData.editLinks"
              @closeAddForm="showAddForm = false"
            />

            <FormsEditerLinksEdit v-if="editData.editLinks" />
          </div>
        </div>
      </div>
    </div>
    {{test}}
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
const editData = useEditData();

const showAddForm = ref(false);

const links = ref([
  {
    name: "facebook",
    value: "facebbok1.com",
  },
  {
    name: "facebook",
    value: "facebbok2.com",
  },
  {
    name: "facebook",
    value: "facebbok3.com md:rounded-2xl md:rounded-2xl",
  },
]);
const test = computed(() => {
  if (editData.value.editLinks && showAddForm.value) {
    showAddForm.value = false;
  }
})
</script>