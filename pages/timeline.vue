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
        md:pr-2
      "
    >
      <div :class="showAddForm||editData.editTimeline ? 'hidden md:block' : ''"
      
      class="flex flex-col w-full md:w-[40%]">
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
        <div v-for="timeline in timelines" :key="timeline">
          <ListsTimelineList :timeline="timeline" />
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div v-if="!showAddForm && !editData.editTimeline" class="m-24 block md:hidden">
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new mobile"
              type="button"
            />
          </div>
          <div v-if="!showAddForm && !editData.editTimeline" class="m-48 hidden md:block">
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>
          <div class=" md:m-8">
            <FormsAdderAddTimelineForm
              v-if="showAddForm && !editData.editTimeline"
              @closeAddForm="showAddForm = false"
            />
            <NuxtPage v-if="editData.editTimeline"  />
            <!--FormsEditerTimelineEditForm v-if="editData.editTimeline" /-->
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
const showAddForm = ref(false);
const editData = useEditData();

const timelines = ref([{
    incident: 'incident1',
    year: '2010-2010',
    location: 'bahirdar'
},
{
    incident: 'incident2',
    year: '2010-2010',
    location: 'bahirdar'
},
{
    incident: 'incident3',
    year: '2010-2010',
    location: 'bahirdar'
},
{
    incident: 'incident4',
    year: '2010-2010',
    location: 'bahirdar'
}])



const test = computed(() => {
  if (editData.value.editTimeline && showAddForm.value) {
    showAddForm.value = false;
  }
});
</script>