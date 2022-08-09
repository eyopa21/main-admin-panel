<template>
  <div @click="preview()" class="">
    <div
      class="
        flex flex-row
        w-full
        border-y-1 border-black
        align-middle
        p-4
        hover:bg-gray-400
      "
    >
      <div class="flex flex-row space-x-4 w-full h-full">
        <div
          v-if="props.skills.iconSvg"
          class="w-12 h-12"
          v-html="props.skills.iconSvg.svg"
        ></div>

        <div class="pt-3 break-words w-28 truncate">{{ props.skills.skill_name }}</div>
      </div>

      <div class="w-full pt-2"><SkillBar :skill="props.skills" /></div>
    </div>
  </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
const editData = useEditData();
const router = useRouter();
const props = defineProps({
  skills: {
    type: Object,
    required: true,
  },
});

function preview() {
  console.log("test");
  editData.value.editSkill = props.skills;
  editData.value.check = props.skills;
  router.push(`/skills/${props.skills.id}`);
}
</script>