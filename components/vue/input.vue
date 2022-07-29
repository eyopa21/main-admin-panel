<template>
  <div class="flex flex-col justify-start mt-2 z-0">
    <div class="mb-2 flex flex-row font-semibold">
      {{ props.label }}<span v-if="props.astrix">*</span>
    </div>

    <div class="flex flex-col items-end relative">
      <p
        class="
          text-red-600 text-sm
          absolute
          -top-[10px]
          bg-white
          mr-1
          px-1
          rounded-lg
          z-10
        "
      >
        {{ errorMessage }}
      </p>
      <div class="relative w-full">
        <textarea
          v-if="props.textarea"
          :class="{
            'border-red-500 focus:border-red-500': errorMessage,
          }"
          class="
            ml-1
            px-3
            py-2
            text-sm
            leading-tight
            text-gray-700
            border
            rounded
            shadow
            outline-none
            w-full
          "
          cols="5"
          rows="5"
          v-model="value"
          @input="$emit('emit-input', value)"
          :name="props.name"
          :type="props.type"
          :placeholder="props.placeholder"
        >
        </textarea>
        <input
          v-if="!props.textarea"
          :class="{
            'border-red-500 focus:border-red-500': errorMessage,
            'rounded-full':props.rounded,
            'rounded': !props.rounded
           
        
          }"
          class="
            ml-1
            px-3
            py-2
            text-sm
            leading-tight
            text-gray-700
            border
           
            shadow
            w-full
            h-12
            outline-none
          "
          v-model="value"
          @input="$emit('emit-input', value)"
          :name="props.name"
          :type="props.type"
          :placeholder="props.placeholder"
        />
      </div>
    </div>
    {{changeData}}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";

const emit = defineEmits(["emit-input"]);

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    class: String,
    required: false,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  rule: {
    type: String,
    required: false,
  },
  classs: {
    type: String,
    required: false,
  },
  data: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  rounded: {
    type: Boolean,
    required: false
  },
  astrix: {
    type: Boolean,
    default: false
  }
});

const { value, errorMessage } = useField(props.name, props.rule);
const changeData = computed(() => {

    if (props.data) {
        const data = ref(props.data);
  value.value = data.value;
  emit("emit-input", data.value);
}
    })
</script>