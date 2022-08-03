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
      md:rounded
      p-4
    "
  >
    <VueInput
      placeholder="Search icons"
      type="search"
      name="Search"
      classs="w-full h-12"
      class="mb-2"
      @emit-input="(n) => (searchValue = n)"
    />
    <ul
      class="
        px-4
        md:px-16
        dark:border-gray-700
        w-full
        grid grid-cols-3
        md:grid-cols-6
        gap-0
      "
    >
      <li
        :class="{ 'bg-indigo-500 text-gray-100': item === icon.id }"
        @click="select(icon.id)"
        class="
          py-3
          px-4
          border-b-0
          list-none
          rounded-sm
          hover:text-white hover:bg-indigo-500
          w-16
        "
        v-for="icon in icons"
        :key="icon"
      >
        <div>
          <div class="w-8 h-8" v-html="icon.svg"></div>
        </div>
      </li>
    </ul>

    <div v-if="searchValue">
      {{ searchIcons }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { HomeIcon } from "@heroicons/vue/outline";
import { GET_ICONS } from "~~/gql/icons/getIcons";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { SEARCH_ICONS } from "~~/gql/icons/searchIcons";
const item = ref(0);

const icons = ref("");

const { loading, result, error } = useQuery(GET_ICONS);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    icons.value = result.value.icons;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});
const emit = defineEmits(["emit-icon"]);
const select = (id) => {
  item.value = id;
  emit("emit-icon", item.value);
};
const searchValue = ref("");

const searchIcons = computed(() => {
  console.log("search", searchValue.value);
  const { loading, result, error } = useQuery(SEARCH_ICONS, {
    search: "%" + searchValue.value + "%",
  });
  watchEffect(() => {
    if (result.value) {
      console.log("result.value", result.value);
      icons.value = result.value.icons;
    } else if (error.value) {
      console.log("error.value", error.value);
    }
  });
});
</script>
