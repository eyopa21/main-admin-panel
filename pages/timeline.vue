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
      <div
        :class="showAddForm || editData.editTimeline ? 'hidden md:block' : ''"
        class="
          flex flex-col
          w-full
          md:w-[40%] md:border-r-[1px] md:pr-2 md:border-gray-200
        "
      >
        <div class="ml-2 my-4 mr-4 mb-8">
          <VueInput
            placeholder="Search"
            type="search"
            name="search"
            class="w-full mr-8 h-12"
            :rounded="true"
            @emit-input="(n) => (searchValue = n)"
          />
        </div>
        <div class="flex flex-row justify-around -ml-8 sm:-ml-24 md:-ml-8  lg:-ml-12 w-full  font-bold">
          <div class="flex flex-wrap"> 
            <div>Incident</div>
            <div>
              <ChevronUpIcon @click="sortTimelinesAsc()" class="w-4 h-4" />
              <ChevronDownIcon @click="sortTimelinesDesc()" class="w-4 h-4" />
            </div>
          </div>
          <div class="flex flex-wrap ">
            <div>Year</div>
            <div>
              <ChevronUpIcon @click="sortTimelinesSAsc()" class="w-4 h-4" />
              <ChevronDownIcon @click="sortTimelinesSDesc()" class="w-4 h-4" />
            </div>
          </div>
        </div>
        <hr />
        <div v-for="timeline in timelines" :key="timeline">
          <ListsTimelineList :timeline="timeline" />
        </div>
        <div v-if="!timelines">
          <VueSkeleton />
        </div>
      </div>
      <div  class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div
            v-if="!showAddForm && !editData.editTimeline && $route.fullPath == '/timeline'"
            class="mt-24 flex justify-center md:hidden"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new"
              type="button"
            />
          </div>
          <div
            v-if="!showAddForm && !editData.editTimeline && $route.fullPath == '/timeline'"
            class="mt-48 hidden md:flex justify-center"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>
          <div class="md:m-8">
            <FormsAdderAddTimelineForm
              v-if="showAddForm && !editData.editTimeline"
              @closeAddForm="showAddForm = false"
            />
            <NuxtPage  />
            <!--FormsEditerTimelineEditForm v-if="editData.editTimeline" /-->
          </div>
        </div>
      </div>
    </div>

    {{ test }}
    <div>
      {{ searchTimeline }}
    </div>
  </div>
</template>
<script setup>
import { ref, onUpdated } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { GET_TIMELINE } from "~~/gql/timeline/getTimeline";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { SEARCH_TIMELINES } from "~~/gql/timeline/searchTimeline";
import { SORT_TIMELINE } from "~~/gql/timeline/sortTimeline";
const showAddForm = ref(false);
const editData = useEditData();
const loader = ref(false);
const timelines = ref("");

const test = computed(() => {
  if (editData.value.editTimeline && showAddForm.value) {
    showAddForm.value = false;
  }
});
onUpdated(() => {
 if (process.client) {
    window.scrollTo(0, 0);
  }
})


const { loading, result, error } = useQuery(GET_TIMELINE);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    timelines.value = result.value.timeline;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});

const searchValue = ref("");

const searchTimeline = computed(() => {
  loader.value = true;
  console.log("search", searchValue.value);
  const { loading, result, error } = useQuery(SEARCH_TIMELINES, {
    search: "%" + searchValue.value + "%",
  });
  watchEffect(() => {
    if (result.value) {
      loader.value = false;
      console.log("result.value", result.value);
      timelines.value = result.value.timeline;
    } else if (error.value) {
      loader.value = false;
      console.log("error.value", error.value);
    }
  });
});

const {
  loading: Tasc_l,
  result: Tasc_r,
  error: Tasc_e,
} = useQuery(SORT_TIMELINE, {
  type: {
    title: "asc",
  },
});
const sortTimelinesAsc = (type) => {
  loader.value = true;
  watchEffect(() => {
    if (Tasc_r.value) {
      loader.value = false;
      timelines.value = Tasc_r.value.timeline;
    } else if (Tasc_e.value) {
      loader.value = false;
      console.log("error.value", Tasc_e.value);
    }
  });
};
const {
  loading: Tdesc_l,
  result: Tdesc_r,
  error: Tdesc_e,
} = useQuery(SORT_TIMELINE, {
  type: {
    title: "desc",
  },
});
const sortTimelinesDesc = (type) => {
  loader.value = true;
  watchEffect(() => {
    if (Tdesc_r.value) {
      loader.value = false;
      timelines.value = Tdesc_r.value.timeline;
    } else if (Tdesc_e.value) {
      loader.value = false;
      console.log("error.value", Tdesc_e.value);
    }
  });
};

const {
  loading: Dasc_l,
  result: Dasc_r,
  error: Dasc_e,
} = useQuery(SORT_TIMELINE, {
  type: {
    subtitle: "asc",
  },
});
const sortTimelinesSAsc = () => {
  loader.value = true;
  watchEffect(() => {
    if (Dasc_r.value) {
      loader.value = false;
      timelines.value = Dasc_r.value.timeline;
    } else if (Dasc_e.value) {
      loader.value = false;
      console.log("error.value", Dasc_e.value);
    }
  });
};
const {
  loading: Ddesc_l,
  result: Ddesc_r,
  error: Ddesc_e,
} = useQuery(SORT_TIMELINE, {
  type: {
    subtitle: "desc",
  },
});
const sortTimelinesSDesc = () => {
  loader.value = true;
  watchEffect(() => {
    if (Ddesc_r.value) {
      loader.value = false;
      timelines.value = Ddesc_r.value.timeline;
    } else if (Ddesc_e.value) {
      loader.value = false;
      console.log("error.value", Ddesc_e.value);
    }
  });
};

definePageMeta({ middleware: "navigation-guard" });
</script>