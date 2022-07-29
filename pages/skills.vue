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
        md:pr-2
      "
    >
      <div
        :class="showAddForm || editData.editSkill ? 'hidden md:block' : ''"
        class="flex flex-col w-full md:w-[40%]"
      >
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
        <div v-for="skill in skills" :key="skill">
          <ListsSkillsList :skills="skill"/>
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div
            v-if="!showAddForm && !editData.editSkill"
            class="m-24 block md:hidden"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new mobile"
              type="button"
            />
          </div>
          <div
            v-if="!showAddForm && !editData.editSkill"
            class="m-48 hidden md:block"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>

          <div class="md:m-8">
            <FormsAdderAddSkillsForm
              v-if="showAddForm && !editData.editSkill"
              @closeAddForm="showAddForm = false"
            />
            <NuxtPage v-if="editData.editSkill" />
            <!--FormsEditerSkillsEditForm v-if="editData.editSkill" /-->
          </div>
        </div>
      </div>
    </div>

    {{ test }}
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



const skills = ref([{
    name: 'skill1',
    level: '50'
},
{
    name: 'skill12',
    level: '50'
},
{
    name: 'skill13',
    level: '50'
},
{
    name: 'skill14',
    level: '50'
},
{
    name: 'skill15',
    level: '50'
}])

const test = computed(() => {
  if (editData.value.editSkill && showAddForm.value) {
    showAddForm.value = false;
  }
});
</script>