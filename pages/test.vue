<template>
  <div>
    <h1 class="text-7xl m-32" @click="layoutState.showModal = true">test</h1>

    <VueSearch />
    <VueConfirm />

    <div class="m-64">
      <div
        class="
          inline-block
          w-8
          h-8
          border-t-8 border-t-indigo-500
          rounded-full
          animate-spin
        "
      ></div>
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const layoutState = useLayout();
</script>