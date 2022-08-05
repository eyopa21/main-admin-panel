<template>
  <div class="w-full h-full flex flex-col items-center mx-auto">
    <div class="w-full px-1">
      <div class="flex flex-col items-center">
        <div class="w-full mx-0">
          <div
            class="my-2 p-1 flex border border-gray-200 bg-white w-full rounded"
          >
            <div class="flex flex-auto flex-wrap">
              <div
                v-for="(select, key) in selected"
                :key="key"
                class="
                  flex
                  justify-center
                  items-center
                  m-1
                  py-1
                  px-2
                  z-8
                  rounded-full
                  text-teal-700
                  bg-teal-100
                  border border-teal-300
                  w-auto
                "
              >
                <div
                  class="
                    text-xs
                    font-normal
                    leading-none
                    max-w-full
                    flex-initial
                  "
                >
                  {{ select.skill_name }}
                </div>
                <div class="flex flex-auto flex-row-reverse">
                  <div>
                    <XIcon
                      @click="unSelect(key)"
                      class="
                        feather feather-x
                        cursor-pointer
                        hover:text-teal-400
                        rounded-full
                        w-4
                        h-4
                        ml-2
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            shadow
            top-100
            bg-white
            w-full
            left-0
            rounded
            max-h-select
            overflow-y-auto
            h-48
          "
        >
          <div class="flex flex-col w-full">
            <div
              v-for="(skill, key) in skills"
              :key="key"
              class="
                cursor-pointer
                w-full
                border-gray-100 border-b
                hover:bg-teal-100
              "
            >
              <div
                @click="select(skill, key)"
                class="
                  flex
                  w-full
                  items-center
                  p-2
                  pl-2
                  border-transparent border-teal-600
                "
                :class="test[key] == true ? 'border-l-2' : ''"
              >
                <div class="w-full items-center flex">
                  <div class="mx-2 text-sm">
                    {{ skill.skill_name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { GET_SKILLS } from "~~/gql/skills/skills";
const emit = defineEmits(["emit-skills"]);
const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  for (let i in props.skills) {
    console.log("i", );
  }
  console.log("test")
});
//console.log("chip", props.skills)

const skills = ref("");

const { loading, result, error } = useQuery(GET_SKILLS);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    skills.value = result.value.skills;
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});
const test = ref([]);
const selected = ref([]);
let selectednames = ref([]);
for (var i in props.skills) {
  selected.value.push(props.skills[i].skill);
  selectednames.value.push(props.skills[i].skill.skill_name);
}
//console.log("selectedvalue", selected.value)
//console.log("names", selectednames.value)

emit("emit-skills", selected.value);
const select = (skill, key) => {
  //console.log("skillllll", skill);
  if (
    selectednames.value.includes(skill.skill_name) ||
    selected.value.includes(skill)
  ) {
    console.log("already selectd");
    test.value[key] = true;
  } else {
    selected.value.push(skill);
    emit("emit-skills", selected.value);
  }
};

const unSelect = (id) => {
  selected.value.splice(id, 1);
  emit("emit-skills", selected.value);
};
</script>

<style>

</style>