<template>
  <div>
    <FormsEditerProjectsEditForm v-if="editData.editProject" />
    <VueDotLoader class="mt-0 md:mt-48" v-else-if="!editData.editProject && $route.fullPath !== '/projects'"/>
    <!--p>{{ $route.params.id }}</p-->
  </div>
</template>
<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";
import { GET_PROJECT } from "~~/gql/projects/oneProject";
import { useRouter } from "vue-router";
const route = useRoute();
const editData = useEditData();

const projects = ref("");

if (route.params.id) {
 

  const { loading, result, error } = useQuery(GET_PROJECT, {
    id: route.params.id,
  });
  watchEffect(() => {
    if (result.value) {
     
      projects.value = result.value.projects_by_pk;
      editData.value.editProject = projects.value;
      //console.log("one project val", projects.value);
      //console.log("one project vall", editData.value.editProject);
    } else if (error.value) {
      console.log("error.value", error.value);
    }
  });
} else {
  editData.value.editProject = "";
}
</script>