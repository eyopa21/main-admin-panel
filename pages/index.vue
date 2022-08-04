<template>
  <div class="flex flex-col  pb-32 bg-emerald-400 h-96 md:h-80">
    <div
      class="flex md:p-24 ml-2  pb-12 pt-24 md:pb-8 w-2/3 md:w-[40%] flex-col md:flex-row md:space-x-4"
    >
      <div
        class="
          min-w-0
          flex flex-col
          break-words
          bg-gray-200
          w-full
          md:w-full
          h-auto
          p-4
          shadow-lg
          rounded-xl
        "
      >
        <div class="flex flex-row justify-between">
          <div>
            <div class="font-semibold font-xl uppercase">total views</div>
            <div class="text-xl font-extrabold pl-1">
              {{ data[d.getMonth() - 1] }}
            </div>
          </div>
          <div>
            <div><EyeIcon class="w-8 h-8/>" /></div>
          </div>
        </div>
        <div class="mt-8 flex flex-row">
          {{ percent }}%
          <ArrowSmDownIcon v-if="difference < 0" class="w-6 h-6 text-red-400" />
          <ArrowSmUpIcon v-if="difference > 0" class="w-6 h-6 text-green-500" />
          <div class="">
          form last month
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between mx-4 md:pl-32 md:mr-8"
    >
      <div v-if="data" class="w-full md:w-[60%]">
        <!--button @click="shuffleData">Shuffle</button-->
        <div
          class="
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            p-8
            pt-4
            shadow-lg
            rounded-xl
          "
        >
          <div class="font-bold text-3xl md:text-4xl">Number of views</div>
          
          <div class="w-full">
            <BarChart class="h-64" v-bind="barChartProps" />
          </div>
        </div>
        {{ getData }}
      </div>
      <div v-if="data" class="w-full md:w-1/3 mt-8 md:mt-0">
        <!--button @click="shuffleData">Shuffle</button-->
        <div
          class="
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            p-8
            shadow-lg
            rounded-xl
          "
        >
          <div class="uppercase text-2xl font-bold">to do here</div>
          <hr class="mt-4" />
          <div v-if="todos" class="flex flex-col">
            <div
              v-for="todo in todos"
              :key="todo.id"
              class=""
            >
                <VueTodo :todo="todo"/>
            </div>
          </div>
          <form @submit.prevent="addTodo()">
            <div class="flex flex-row justify-between w-full space-x-2">
              <VueInput
                placeholder="todo here"
                type="text"
                classs="h-8"
                :small="true"
                name="Todo"
                rule="required"
                class="w-full"
              />
              <VueOutlineBtn
                name="Add"
                type="submit"
                class="mt-4"
                classs="py-[3px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon } from "@heroicons/vue/outline";
import { ArrowSmDownIcon } from "@heroicons/vue/outline";
import { ArrowSmUpIcon } from "@heroicons/vue/outline";
import { BarChart, useBarChart } from "vue-chart-3";
import { GET_VIEWERS } from "~~/gql/viewers/getViewers";
import { GET_TODO } from "~~/gql/todo/getTodo";
import { ADD_TODO } from "~~/gql/todo/addTodo";
import { useQuery, useMutation } from "@vue/apollo-composable";

import { useForm } from "vee-validate";
const { handleSubmit } = useForm();
const { mutate: add_todo } = useMutation(ADD_TODO);
const addTodo = handleSubmit((formValues) => {
  console.log(formValues);

  add_todo({ todo: formValues.Todo })
    .then((res) => {
      console.log("res", res.data);
       if (process.client) {
            window.location.reload();
          }
    })
    .catch((err) => {
      console.log("err", err);
    });
});
const checked = ref(false);
const views = ref("");

const difference = ref(0);
const percent = ref(0);

const d = new Date();

const data = ref([]);

const getData = computed(() => {
  for (let i in views.value) {
    data.value.push(views.value[i].count);
  }
  // return data

  difference.value =
    data.value[d.getMonth() - 1] - data.value[d.getMonth() - 2];
  console.log("diff", difference.value);
  percent.value = (difference.value / data.value[d.getMonth() - 1]) * 100;
});

const chartData = computed(() => ({

  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep", 
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "scale 1:1",
      data: data.value,
      backgroundColor: [
        "#77CEFF",
        "#0079AF",
        "#123E6B",
        "#97B0C4",
        "#A5C8ED, #77CEFF",
        "#0079AF",
        "#123E6B",
        "#97B0C4",
        "#A5C8ED, #77CEFF",
        "#0079AF",
      ],
    },
  ],
}));

const { barChartProps, barChartRef } = useBarChart({
  chartData,
});

function shuffleData() {
  data.value = shuffle(data.value);
}

const { loading, result, error } = useQuery(GET_VIEWERS);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    views.value = result.value.viewers;

    console.log("views.value", views.value[0]);
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});

const todos = ref("");

const {
  loading: todo_loading,
  result: todo_result,
  error: todo_error,
} = useQuery(GET_TODO);
watchEffect(() => {
  if (todo_result.value) {
    console.log("result.value", todo_result.value);
    todos.value = todo_result.value.todo;
  } else if (todo_error.value) {
    console.log("error.value", error.value);
  }
});


definePageMeta({middleware: "navigation-guard"})
</script>

