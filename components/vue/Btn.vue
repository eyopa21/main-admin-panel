<template>
  <div>
    <button
      :type="props.type"
      :class="props.classs"
      class="
        bg-emerald-500
        flex flex-row
        text-white
        active:bg-emerald-600
        font-bold
        uppercase
        text-sm
        px-6
        py-3
        rounded
        shadow
        hover:shadow-lg
        outline-none
        focus:outline-none
        mr-1
        mb-1
        transition-all
        duration-150
      "
    >
      <div class="flex flex-row space-x-8">
        <PencilAltIcon v-if="props.icon == 'test'" class="w-6 h-6" />
        <div class="flex flex-row">
          <VueInnerLoading v-if="props.loader" />
          <div v-else>
            {{ props.name }}
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
<script setup>
import { PencilAltIcon } from "@heroicons/vue/outline";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  classs: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  loader: {
    type: Boolean,
    required: false
  }
});
</script>