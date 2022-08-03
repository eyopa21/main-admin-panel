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
        :class="showAddForm || editData.editProject ? 'hidden md:block' : ''"
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
            @emit-input="(n) => (searchValue = (n))"
          />
        
        </div>
        <div class="flex flex-row justify-start w-full ml-4 font-bold">
          <div class="flex flex-wrap">
            <div>Name</div>
            <div>
              <ChevronUpIcon @click="sortProjectAsc()" class="w-4 h-4" />
              <ChevronDownIcon @click="sortProjectDesc()" class="w-4 h-4" />
            </div>
          </div>
          <div class="flex flex-wrap pl-28 md:pl-36">
            <div>Description</div>
            <div>
              <ChevronUpIcon @click="sortProjectDAsc()" class="w-4 h-4" />
              <ChevronDownIcon @click="sortProjectDDesc()" class="w-4 h-4" />
            </div>
          </div>
        </div>
        <hr />
        <div v-for="project in projects" :key="project.key">
          <ListsProjectList :projects="project" />
        </div>
         <div v-if="!projects">
    <VueSkeleton/>
    </div>
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div class="w-full">
          <div
            v-if="!showAddForm && !editData.editProject"
            class="m-24 block md:hidden"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add "
              type="button"
            />
          </div>
          <div
            v-if="!showAddForm && !editData.editProject"
            class="m-48 hidden md:block"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new "
              type="button"
            />
          </div>
          <div class="md:m-8">
            <FormsAdderAddProjectsForm
              v-if="showAddForm && !editData.editProject"
              @closeAddForm="showAddForm = false"
            />
            <NuxtPage v-if="editData.editProject" />
            <!--FormsEditerProjectsEditForm v-if="editData.editProject" /-->
          </div>
        </div>
      </div>
    </div>

    {{ test }}
<div v-if="searchValue">
{{searchProjects}}
</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { GET_PROJECTS } from "~~/gql/projects/getProjects";
import { SEARCH_PROJECTS } from "~~/gql/projects/searchProjects";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { SORT_PROJECTS_ASC } from "~~/gql/projects/sortProjectsAsc";
const showAddForm = ref(false);
const editData = useEditData();

const test = computed(() => {
  if (editData.value.editProject && showAddForm.value) {
    showAddForm.value = false;
  }
});

const projects = ref("");

const { loading, result, error } = useQuery(GET_PROJECTS);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    projects.value = result.value.projects;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});

const searchValue = ref("");
const searchProjects = computed(() => {
  console.log("search", searchValue.value);
  const { loading, result, error } = useQuery(SEARCH_PROJECTS, {
    search: "%" + searchValue.value + "%",
  });
  watchEffect(() => {
    if (result.value) {
      console.log("result.value", result.value);
      projects.value = result.value.projects;
    } else if (error.value) {
      console.log("error.value", error.value);
    }
  });
});


  const { loading:l, result:r, error:e } = useQuery(SEARCH_PROJECTS, {
    search: "%" + searchValue.value + "%",
  });
 
const search = (n) => {
  console.log("search", searchValue.value);
  //searchValue.value = n;
  watchEffect(() => {
    if (r.value) {
      console.log("result.value", r.value);
      projects.value = r.value.projects;
    } else if (e.value) {
      console.log("error.value", e.value);
    }
  });
};












const type = ref("");

const {
  loading: Tasc_l,
  result: Tasc_r,
  error: Tasc_e,
} = useQuery(SORT_PROJECTS_ASC, {
  type: {
    title: "asc",
  },
});
const sortProjectAsc = (type) => {
  watchEffect(() => {
    if (Tasc_r.value) {
      projects.value = Tasc_r.value.projects;
    } else if (Tasc_e.value) {
      console.log("error.value", Tasc_e.value);
    }
  });
};

const {
  loading: Tdesc_l,
  result: Tdesc_r,
  error: Tdesc_e,
} = useQuery(SORT_PROJECTS_ASC, {
  type: {
    title: "desc",
  },
});
const sortProjectDesc = (type) => {
  watchEffect(() => {
    if (Tdesc_r.value) {
      projects.value = Tdesc_r.value.projects;
    } else if (Tdesc_e.value) {
      console.log("error.value", Tdesc_e.value);
    }
  });
};

const {
  loading: Dasc_l,
  result: Dasc_r,
  error: Dasc_e,
} = useQuery(SORT_PROJECTS_ASC, {
  type: {
    description: "asc",
  },
});
const sortProjectDAsc = () => {
  watchEffect(() => {
    if (Dasc_r.value) {
      projects.value = Dasc_r.value.projects;
    } else if (Dasc_e.value) {
      console.log("error.value", Dasc_e.value);
    }
  });
};
const {
  loading: Ddesc_l,
  result: Ddesc_r,
  error: Ddesc_e,
} = useQuery(SORT_PROJECTS_ASC, {
  type: {
    description: "desc",
  },
});
const sortProjectDDesc = () => {
  watchEffect(() => {
    if (Ddesc_r.value) {
      projects.value = Ddesc_r.value.projects;
    } else if (Ddesc_e.value) {
      console.log("error.value", Ddesc_e.value);
    }
  });
};

definePageMeta({middleware: "navigation-guard"})
</script>