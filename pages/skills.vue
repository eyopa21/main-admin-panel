<template>

  <div class="w-full">

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
            <div>Name</div>
            <div>
              <ChevronUpIcon class="w-4 h-4" />
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
          <div class="flex flex-wrap pl-28 md:pl-36">
            <div>Level</div>
            <div>
              <ChevronUpIcon class="w-4 h-4" />
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
        </div>
        <hr />
        <div v-for="i in 8" :key="i">
          <ListsSkillsList />
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div v-if="!showAddForm" class="m-24 block md:hidden">
            <VueBtn
              @click="showAddForm=true"
              name="Click here to add new mobile"
              type="button"
            />
          </div>
          <div v-if="!showAddForm && !editData" class="m-48 hidden md:block">
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>
          <div class="m-8 hidden md:block">
            <FormsAddSkillsForm v-if="showAddForm && !editData" @closeAddForm="showAddForm=false"/>
            <FormsEditForm v-if="editData" />
          </div>
        </div>
      </div>
    </div>
  
  <div class="block md:hidden" v-if="showAddForm"><ModalsAddModal @closeAddForm="showAddForm=false"/>
</div>
{{test}}
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
const showAddForm = ref(false);
const router = useRouter();
const editData = useEditData();
//const showAddModal = ref(false)

const test = computed(() => {
    if(editData.value && showAddForm.value){
        showAddForm.value = false
    }
})
</script>