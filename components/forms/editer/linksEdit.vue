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
        md:p-8
        pt-4
        md:pt-4
        h-screen
        md:h-full
      "
    >
      <div class="flex justify-between mb-2">
        <div @click="editData.editLinks = ''">
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
            @click="deleteLinks(editData.editLinks)"
            name="Delete"
            type="button"
            classs="border-red-500 hover:border-transparent text-red-700 hover:bg-red-400  hover:text-red-500"
          />
        </div>
      </div>
      <hr class="mb-8" />
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <div class="flex flex-row space-x-4">
            <div>
              <div
                v-if="editData.editLinks.iconSvg"
                class="w-20 h-20"
                v-html="editData.editLinks.iconSvg.svg"
              ></div>
            </div>
            <div class="flex flex-col pt-2">
              <div class="text-5xl font-semibold">
                {{ editData.editLinks.name }}
              </div>
              <div class="underline">{{ editData.editLinks.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <hr class="mt-4 mb-4" />
      <div class="p-2">
        <form v-if="showForm" @submit.prevent="update()">
          <VueInput
            type="text"
            placeholder="Social Links Name"
            name="Link_Name"
            rule="required"
            :data="editData.editLinks.name"
            @emit-input="(n) => data.name = n"
          />
          <VueInput
            type="text"
            placeholder="Value"
            name="Value"
            rule="required"
            :data="editData.editLinks.value"
            @emit-input="(n) => data.value = n"
          />

          <div class="mt-6 flex flex-row space-x-2">
            <VueBtn name="Update" type="submit" :loader="load" :disable="getDisable"/>
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
import { UPDATE_LINKS } from "~~/gql/links/updateLinks";
import { DELETE_LINKS } from "~~/gql/links/deleteLinks";

import { useQuery, useMutation } from "@vue/apollo-composable";
const { handleSubmit } = useForm();
const router = useRouter();
const editData = useEditData();
const showForm = ref(false);
const load = ref(false)
const data = ref({
  name: "",
  value: ""
});
const { mutate: update_links } = useMutation(UPDATE_LINKS);
const update = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);

  update_links({
    id: editData.value.editLinks.id,
    name: formValues.Link_Name,
    value: formValues.Value,
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

const discard = () => {
  editData.value.editSkill = "";
};

const { mutate: delete_links } = useMutation(DELETE_LINKS);
const deleteLinks = (links) => {
  load.value = true;
  var value = prompt(
    `This Action cannot be undone, PLease type ${links.name} to delete`
  );
  if (value == links.name) {
    delete_links({
      id: links.id,
    })
      .then((res) => {
        load.value = false;
        if (process.client) {
          window.location.reload();
        }
      })
      .catch((err) => {
        load.value = true;
        layoutState.value.alert.message = "PLease try again";
      layoutState.value.alert.success = false;
        console.log(err.message);
      });
  }
};

const getDisable = computed(() => {
  if (
    data.value.name == editData.value.editLinks.name &&
    data.value.value == editData.value.editLinks.value
  ) {
    console.log("change nedd");
    return true;
  } else {
    return false;
    console.log("good");
  }
});
</script>