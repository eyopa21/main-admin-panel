<template>
  <div>
    <div
      class="
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        md:mb-6
        shadow-lg
         md:rounded-lg
        p-2
        sm:p-8
       
        md:p-2
        lg:p-8
        pt-4
        md:pt-4
        h-screen
        md:h-full
      "
    >
      <div class="flex justify-between mb-2">
        <div @click="editData.editTimeline = '', router.push('/timeline')">
          <ArrowCircleLeftIcon class="h-8 w-8 text-black" />
        </div>
        <div class="flex flex-row space-x-2">
          <VueOutlineBtn
            @click="showForm = !showForm"
            :name="showForm ? 'Close' : 'Edit'"
            type="button"
            classs=""
          />
          <VueOutlineBtn
            @click="deleteTimeline(editData.editTimeline)"
            name="Delete"
            type="button"
            classs="border-red-500 hover:border-transparent text-red-700 hover:bg-red-400  hover:text-red-500"
          />
        </div>
      </div>
      <hr class="mb-8" />
      <div class="flex flex-col mb-4">
        <div class="flex flex-col space-y-2">
          <div class="uppercase tracking-wide text-2xl md:text-4xl font-bold">
            {{ editData.editTimeline.title }}
          </div>
          <div>
            {{ editData.editTimeline.description }}:
            <span class="font-bold">{{ editData.editTimeline.subtitle }} </span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-row justify-end text-xs pt-8 md:-mr-4">
          <div class="mr-1 font-light">
            created at: {{ editData.editTimeline.created_at.split("T", 1)[0] }}
          </div>
          <div class="font-bold">
          |
          </div>
          <div class="ml-1 font-light">
            Last update on:
            {{ editData.editTimeline.updated_at.split("T", 1)[0] }}
          </div>
        </div>
      </div>
      <hr />
      <div class="md:p-8">
        <form v-if="showForm" @submit.prevent="update()">
          <VueInput
            type="text"
            placeholder="Incident"
            name="Incident"
            rule="required"
            :data="editData.editTimeline.title"
            @emit-input="(n) => data.title = n"
          />
          <VueInput
            type="text"
            placeholder="Place"
            name="Place"
            rule="required"
            :data="editData.editTimeline.subtitle"
            @emit-input="(n) => data.subtitle = n"
          />
          <VueInput
            type="text"
            placeholder="Year"
            name="Year"
            rule="required"
            :data="editData.editTimeline.description"
            @emit-input="(n) => data.description = n"
          />

          <div class="mt-6 flex flex-row space-x-2">
            <VueBtn name="Update" type="submit" :loader="load" :disable="getDisable"/>
            <!--VueBtn
              @click="discard()"
              name="Discard"
              type="button"
              classs="bg-red-400 hover:bg-red-500 active:bg-red-600"
            /-->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { UPDATE_TIMELINE } from "~~/gql/timeline/updateTimeline";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { DELETE_TIMELINE } from "~~/gql/timeline/deleteTimeline";
const { handleSubmit } = useForm();
const router = useRouter();
const editData = useEditData();
const showForm = ref(false);
const layoutState = useLayout();
const load = ref(false);
const data = ref({
  title: "",
  subtitle: "",
  description: ''
});
const { mutate: update_timeline } = useMutation(UPDATE_TIMELINE);
const update = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);

  update_timeline({
    id: editData.value.editTimeline.id,
    title: formValues.Incident,
    subtitle: formValues.Place,
    description: formValues.Year,
  })
    .then((res) => {
      load.value = false;
      console.log("res", res.data);
      if (process.client) {
        window.location.reload();
      }
    })
    .catch((err) => {
      load.value = false;
      console.log("err", err);
      layoutState.value.alert.message = "PLease try again";
      layoutState.value.alert.success = false;
    });
});

if (process.client) {
  if (Number(window.screen.width) > 768) {
    //router.push("/");
  }
}

const discard = () => {
  editData.value.editTimeline = "";
};

const { mutate: delete_timeline } = useMutation(DELETE_TIMELINE);

const deleteTimeline = (timeline) => {
    const test = ref(timeline.title)
    test.value.toString();
    console.log(test.value.bold())
    
  var value = prompt(
    `This Action cannot be undone, PLease type  "${timeline.title}"  to delete`
  );
  if (value == timeline.title) {
    delete_timeline({
      id: timeline.id,
    })
      .then((res) => {
        if (process.client) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};


const getDisable = computed(() => {
  if (
    data.value.title == editData.value.editTimeline.title &&
    data.value.subtitle == editData.value.editTimeline.subtitle &&
    data.value.description == editData.value.editTimeline.description
    
  ) {
    console.log("change nedd");
    return true;
  } else {
    return false;
    console.log("good");
  }
});
</script>