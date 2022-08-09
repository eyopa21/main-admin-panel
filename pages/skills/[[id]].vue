<template>
  <div>
    <FormsEditerSkillsEditForm v-if="editData.editSkill" />
     <VueDotLoader class="mt-0 md:mt-48" v-else-if="!editData.editSkill && $route.fullPath !== '/skills'"/>
  </div>
</template>

<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";

import { useRouter } from "vue-router";
import { GET_SKILL } from "~~/gql/skills/oneSkill";
const route = useRoute();
const editData = useEditData();

const skill = ref("");

if (route.params.id) {
  const { loading, result, error } = useQuery(GET_SKILL, {
    id: route.params.id,
  });
  watchEffect(() => {
    if (result.value) {
     
      skill.value = result.value.skills_by_pk;
      editData.value.editSkill = skill.value;
    } else if (error.value) {
      console.log("error.value", error.value);
    }
  });
} else {
  editData.value.editSkill = "";
}
</script>