<template>
  <div>
    <h1 class="text-7xl m-32" @click="layoutState.showModal = true">test</h1>
    <ListsProjectList/>
    <VueSearch/>
 
    <ModalsAddModal/>
  </div>
</template>
<script setup>
import { ref } from "vue";

const layoutState = useLayout();
</script>