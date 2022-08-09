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
        class="
          flex flex-col
          w-full
          md:w-[50%]
          lg:w-[40%]
          md:border-r-[1px] md:pr-2 md:border-gray-200
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
        <div
          v-if="skills"
          class="
            flex flex-row
            justify-start
            space-x-32
            sm:space-x-48
            md:space-x-32
            ml-8
            w-auto
            font-bold
          "
        >
          <div class="flex flex-wrap">
            <div>Name</div>
            <div>
              <ChevronUpIcon @click="sortSkillsAsc()" class="w-4 h-4" />
              <ChevronDownIcon @click="sortSkillsDesc()" class="w-4 h-4" />
            </div>
          </div>
          <div class="flex flex-wrap sm:pl-16 ">
            <div>Level</div>
            <div>
              <ChevronUpIcon @click="sortSkillsLAsc()" class="w-4 h-4" />
              <ChevronDownIcon @click="sortSkillsLDesc()" class="w-4 h-4" />
            </div>
          </div>
        </div>
        <hr />

        <div v-for="skill in skills" :key="skill">
          <ListsSkillsList :skills="skill" />
        </div>
        <div class="w-auto" v-if="!skills || loader">
          <VueSkeleton />
        </div>
      </div>
      <div class="flex-wrap w-full md:w-[50%] lg:w-[60%]">
        <div class="w-full">
          <div
            v-if="!showAddForm && !editData.editSkill"
            class="flex justify-center mt-16 md:hidden"
          >
            <VueBtn
              @click="showAddForm = true"
              name="Click here to add new"
              type="button"
            />
          </div>
          <div
            v-if="!showAddForm && !editData.editSkill"
            class="mt-48 hidden md:flex justify-center"
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
    <div>
      {{ searchSkill }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { onMounted, onUnmounted } from "@vue/composition-api";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { GET_SKILLS } from "~~/gql/skills/skills";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { SEARCH_SKILLS } from "~~/gql/skills/searchSkills";
import { SORT_SKILLS } from "~~/gql/skills/sortSkills";
const showAddForm = ref(false);
const router = useRouter();
const editData = useEditData();

const searchValue = ref("");
const loader = ref(false);

const test = computed(() => {
  if (editData.value.editSkill && showAddForm.value) {
    showAddForm.value = false;
  }
});

const skills = ref("");

const { loading, result, error } = useQuery(GET_SKILLS);
watchEffect(() => {
  if (result.value) {
    //console.log("result.value", result.value);
    skills.value = result.value.skills;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});

const searchSkill = computed(() => {
  loader.value = true;
  const { loading, result, error } = useQuery(SEARCH_SKILLS, {
    search: "%" + searchValue.value + "%",
  });
  //console.log("search", searchValue.value);
  watchEffect(() => {
    if (result.value) {
      //console.log("result.value", result.value);

      skills.value = result.value.skills;
      loader.value = false;
    } else if (error.value) {
      console.log("error.value", error.value);
      loader.value = false;
    }
  });
});

const {
  loading: Tasc_l,
  result: Tasc_r,
  error: Tasc_e,
} = useQuery(SORT_SKILLS, {
  type: {
    skill_name: "asc",
  },
});
const sortSkillsAsc = (type) => {
  loader.value = true;
  watchEffect(() => {
    if (Tasc_r.value) {
      skills.value = Tasc_r.value.skills;
      loader.value = false;
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
} = useQuery(SORT_SKILLS, {
  type: {
    skill_name: "desc",
  },
});
const sortSkillsDesc = (type) => {
  loader.value = true;
  watchEffect(() => {
    if (Tdesc_r.value) {
      skills.value = Tdesc_r.value.skills;
      loader.value = false;
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
} = useQuery(SORT_SKILLS, {
  type: {
    level: "asc",
  },
});
const sortSkillsLAsc = () => {
  loader.value = true;
  watchEffect(() => {
    if (Dasc_r.value) {
      skills.value = Dasc_r.value.skills;
      loader.value = false;
    } else if (Dasc_e.value) {
      console.log("error.value", Dasc_e.value);
      loader.value = false;
    }
  });
};
const {
  loading: Ddesc_l,
  result: Ddesc_r,
  error: Ddesc_e,
} = useQuery(SORT_SKILLS, {
  type: {
    level: "desc",
  },
});
const sortSkillsLDesc = () => {
  loader.value = true;
  watchEffect(() => {
    if (Ddesc_r.value) {
      skills.value = Ddesc_r.value.skills;
      loader.value = false;
    } else if (Ddesc_e.value) {
      console.log("error.value", Ddesc_e.value);
      loader.value = false;
    }
  });
};

definePageMeta({ middleware: "navigation-guard" });
</script>