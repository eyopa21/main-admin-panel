<template>
  <div class="flex flex-row justify-between">
    <div class="mt-4 flex flex-row space-x-4 text-sm">
      <input v-model="is_finished" type="checkbox" class="w-4 h-4 mt-1" />
      <div class="text-md" :class="is_finished ? 'line-through' : ''">
        {{ props.todo.todo }}
      </div>
    </div>
    <div @click="deleteTodo()" class="pt-2 mt-2">
      <TrashIcon class="w-4 h-4 text-red-500 hover:w-6 hover:h-6" />
    </div>
    {{ test }}
  </div>
</template>
<script setup>
import { TrashIcon } from "@heroicons/vue/outline";
import { DELETE_TODO } from "~~/gql/todo/deleteTodo";
import { UPDATE_TODO } from "~~/gql/todo/updateTodo";
import { useQuery, useMutation } from "@vue/apollo-composable";
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const { mutate: delete_todo } = useMutation(DELETE_TODO);

const deleteTodo = () => {
  delete_todo({ id: props.todo.id })
    .then((res) => {
      console.log("res", res.data);
      if (process.client) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

const { mutate: update_todo } = useMutation(UPDATE_TODO);

const is_finished = ref(false);
is_finished.value = props.todo.is_finished;
const test = computed(() => {
  console.log("test", is_finished.value);
  if (props.todo) {
    update_todo({ id: props.todo.id, is_finished: is_finished.value })
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
});
</script>