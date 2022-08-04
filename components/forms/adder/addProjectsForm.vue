<template>
  <div>
    <form @submit.prevent="add()">
      <div
        class="
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          md:mb-6
          shadow-lg
          md:rounded-2xl
          p-8
          min-h-screen
          md:h-full
        "
      >
        <div class="flex flex-row">
          <div
            :class="url ? 'bg-transparent' : 'bg-red-300'"
            class="bg-red-300 w-[60%]"
          >
            <div
              :class="url ? 'hidden' : 'block'"
              class="
                flex
                justify-center
                items-center
                w-full
                h-48
                bg-gray-300
                rounded
                dark:bg-gray-700
              "
            >
              <svg
                class="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path
                  d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                />
              </svg>
            </div>
            <img
              :class="url ? 'block' : 'hidden'"
              class="h-48 object-fill w-full"
              :src="url"
              alt=""
            />
          </div>
          <div class="m-4">
            <VueBtn
              @click="selectImage()"
              :name="url ? 'Change Image' : 'Select Image'"
              type="button"
            />
          </div>
        </div>

        <div class="flex flex-row space-x-2 justify-between">
          <VueInput
            placeholder="Title"
            type="text"
            name="Title"
            rule="required"
            classs="w-full h-12"
            class="w-1/2"
          />
          <VueInput
            placeholder="Subtitle"
            type="text"
            name="Subtitle"
            rule="required"
            classs="w-full h-12"
            class="w-1/2"
          />
        </div>
        <VueInput placeholder="Link" type="text" name="Link" rule="required" />

        <VueInput
          placeholder="Description"
          type="text"
          name="Description"
          rule="required"
          :textarea="true"
        />
        <div class="mt-2">
          <label for="chip" class="font-semibold">Skills Used</label>
          <VueChip @emit-skills="(n) => (skills = n)" />
        </div>

        <div class="mt-6 flex flex-row space-x-2">
          <VueBtn name="Add" type="submit" :loader="load"/>

          <button
            class="
              text-red-500
              background-transparent
              font-bold
              uppercase
              px-6
              py-2
              text-sm
              outline-none
              focus:outline-none
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-100
            "
            type="button"
            @click="$emit('closeAddForm')"
          >
            Close
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { STORE_IMAGE } from "~~/gql/storeImage";
import {
  DefaultApolloClient,
  provideApolloClient,
  useQuery,
  useMutation,
} from "@vue/apollo-composable";
import { ADD_PROJECTS } from "~~/gql/projects/addProjects";
import { ADD_SKILL_PROJECT } from "~~/gql/projects/addProjectSkill";
const layoutState = useLayout();
const { handleSubmit, isSubmitting } = useForm();
const router = useRouter();
const image = ref();
const url = ref("");
const base64 = ref("");
const skills = ref([]);
const load = ref(false);

const { mutate: store_image } = useMutation(STORE_IMAGE);
const { mutate: add_projects } = useMutation(ADD_PROJECTS);
const { mutate: add_project_skill } = useMutation(ADD_SKILL_PROJECT);

const add = handleSubmit((formValues) => {
   load.value = true;
  console.log(formValues);
  console.log("ski", skills.value);

  console.log("base", base64.value);
  store_image({ base64: base64.value })
    .then((res) => {
      //console.log("res", res.data.storeImage.url);
      add_projects({
        title: formValues.Title,
        subtitle: formValues.Subtitle,
        description: formValues.Description,
        link: formValues.Link,
        pricture: res.data.storeImage.url,
      })
        .then((res) => {
          for (let skill in skills.value) {
            add_project_skill({
              project_id: res.data.insert_projects_one.id,
              skill_id: skills.value[skill].id,
            })
              .then((res) => {
                 load.value = false;
                console.log("err", res.data);
                layoutState.value.alert.message = "project added successfully";
                if (process.client) {
                  window.location.reload();
                }
              })
              .catch((err) => {
                console.log("err", err.message);
                 load.value = false;
                 layoutState.value.alert.message = "PLease try again";
                 layoutState.value.alert.success = false;
              });
          }
        })
        .catch((err) => {
           load.value = false;
          console.log("err", err);
          layoutState.value.alert.message = "PLease try again";
          layoutState.value.alert.success = false;
        });
    })
    .catch((err) => {
       load.value = false;
      console.log("err", err);
      layoutState.value.alert.message = "PLease try again";
      layoutState.value.alert.success = false;
    });
});
const selectImage = () => {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();
  input.onchange = (e) => {
    image.value = e.target.files[0];
    url.value = URL.createObjectURL(image.value);
    let reader = new FileReader();
    reader.readAsDataURL(image.value);
    reader.onload = function () {
      base64.value = reader.result.split(",")[1];
      console.log("base", base64.value);
    };
  };
};
</script>