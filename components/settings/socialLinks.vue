<template>
  <div class="">
    <div class="flex flex-col md:flex-row">
      <div
        :class="showAddForm || editData.editLinks ? 'hidden md:block' : ''"
        class="flex flex-col w-full md:w-[40%] md:border-r-[1px]"
      >
        <div v-for="(link, key) in links" :key="key">
          <ListsLinksLists :link="link" />
        </div>
          <div v-if="!links">
    <VueSkeleton/>
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
              name="Click here to add new"
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
    {{ test }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { GET_LINKS } from "~~/gql/links/getLinks";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { SEARCH_LINKS } from "~~/gql/links/searchLinks";
const editData = useEditData();

const showAddForm = ref(false);

const test = computed(() => {
  if (editData.value.editLinks && showAddForm.value) {
    showAddForm.value = false;
  }
});

const links = ref("");

const { loading, result, error } = useQuery(GET_LINKS);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    links.value = result.value.social_links;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});
</script>