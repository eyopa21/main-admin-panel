<template>
  <div>
    <div>
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
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const layoutState = useLayout();
</script>