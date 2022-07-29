<template>
  <div>
    <button
      :class="props.classs"
      :type="props.type"
      class="
        bg-transparent
        hover:bg-emeraled-100
        text-blue-dark
        font-semibold
        hover:text-emerald-500
        py-0
        px-4
        border border-emerald-500
        hover:border-transparent
        rounded
      "
    >
     {{props.name}}
    </button>
  </div>
</template>

<script setup> 
const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  classs: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }})

</script>