<template>
  <div class="">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col w-full md:w-[40%]">
        <img class="h-32 object-contain md:h-full" src="../../assets/img/Update-pana.png" alt="" />
      </div>
      <div class="flex-wrap  w-full md:w-[60%]">
        <div
          class="
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-lg
            rounded
            h-full
            p-8
          "
        >
          <div class="text-3xl tracking-wide font-semibold uppercase underline">
            Change your backround here
          </div>
          <div class="flex flex-col mt-6 pb-4">
            <div class="uppercase font-semibold text-sm">background color</div>

            <div class="p-8 bg-red-500 mr-16 h-32"></div>
            <div class="flex flex-row mt-8">
              <VueBtn name="Change bg color" type="button" />
              <VueBtn
                name="Reset to default"
                type="button"
                classs="bg-red-500 hover:bg-600 active:bg-red-700 text-xs"
              />
            </div>
          </div>
          <hr>
                    <div class="flex flex-col mt-6">
            <div class="uppercase font-semibold text-sm">Primary color</div>

            <div class="p-8 bg-red-500 mr-16 h-32"></div>
            <div class="flex flex-row mt-8">
              <VueBtn name="Change primary color" type="button" />
              <VueBtn
                name="Reset to default"
                type="button"
                classs="bg-red-500 hover:bg-600 active:bg-red-700 text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ test }}
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
    value: "facebbok3.com",
  },
]);
const test = computed(() => {
  if (editData.value.editLinks && showAddForm.value) {
    showAddForm.value = false;
  }
});
</script>