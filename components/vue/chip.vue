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
                  {{ select }}
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
              v-for="(skill, key) in props.skills"
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
                  border-transparent border-l-2 border-teal-600
                "
              >
                <div class="w-full items-center flex">
                  <div class="mx-2 text-sm">
                    {{ skill }}
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
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const emit = defineEmits(["emit-skills"]);
const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
});

const skills = ref([
  {
    skill_name: "hello",
    level: 50,
  },
  {
    skill_name: "hello",
    level: 50,
  },
  {
    skill_name: "hello",
    level: 50,
  },
  {
    skill_name: "hello",
    level: 50,
  },
  {
    skill_name: "hello",
    level: 50,
  },
]);
const selected = ref([]);
for (var i in props.skills) {
  selected.value.push(props.skills[i]);
}
emit("emit-skills", selected.value);
const test = ref(false);
const select = (skill, key) => {
  if (selected.value.includes(skill)) {
    console.log("already selectd");
    test.value = true;
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
.top-100 {
  top: 100%;
}
.bottom-100 {
  bottom: 100%;
}
.max-h-select {
  max-height: 300px;
}
</style>