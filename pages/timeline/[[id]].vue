<template>
    <div >
       <FormsEditerTimelineEditForm v-if="editData.editTimeline"/>
           <VueDotLoader class="mt-0 md:mt-48" v-else-if="!editData.editTimeline && $route.fullPath !== '/timeline'"/>
    </div>
</template>
<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";

import { useRouter } from "vue-router";
import { GET_ONE_TIMELINE } from "~~/gql/timeline/oneTimeline";
const route = useRoute();
const editData = useEditData();

const timeline = ref("");

if (route.params.id) {
  const { loading, result, error } = useQuery(GET_ONE_TIMELINE, {
    id: route.params.id,
  });
  watchEffect(() => {
    if (result.value) {
     
      timeline.value = result.value.timeline_by_pk;
      editData.value.editTimeline = timeline.value;
    } else if (error.value) {
      console.log("error.value", error.value);
    }
  });
} else {
  editData.value.editTimeline = "";
}
</script>