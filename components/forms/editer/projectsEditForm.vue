<template>
  <div v-if="editData.editProject">
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
        pb-4
        min-h-screen
        md:min-h-full md:h-full md:ml-4
      "
    >
      <div class="flex justify-between mb-2">
        <div @click="editData.editProject = '',router.push('/projects')">
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
            @click="deleteProject()"
            name="Delete"
            type="button"
            classs="border-red-500 hover:border-transparent text-red-700 hover:bg-red-400  hover:text-red-500"
          />
        </div>
      </div>
      <hr class="mb-4" />
      <div v-if="!showForm" class="flex flex-col">
        <div class="flex flex-row">
          <div class="flex flex-col space-y-4 w-full md:w-[60%]">
            <div class="text-2xl md:text-3xl font-bold mb-2">
              {{ editData.editProject.title }}
            </div>
            <div class="w-full">
              <img
                class="rounded border border-gray-200 h-32 w-full sm:h-60"
                :src="editData.editProject.pricture"
                alt=""
              />
            </div>
          </div>

          <div
            class="
              w-[40%]
              md:mt-4
              lg:mt-0
              h-8
              pt-20
              grid
              gap-2
              grid-cols-2
              ml-2
            "
          >
            <div
              v-for="skill in editData.editProject.project_skills"
              :key="skill"
              class="p-0"
            >
              <VueBadge :skill="skill.skill" />
            </div>
          </div>
        </div>
        <div class="font-bold tracking-widest mt-2 mb-4">
          {{ editData.editProject.subtitle }}
        </div>
        <div>
          {{ editData.editProject.description }}
        </div>
        <div class="flex flex-row text-xs pt-8">
          <div class="mr-2">
            created at: {{ editData.editProject.created_at.split("T", 1)[0] }}
          </div>
          <div class="font-bold">|</div>
          <div class="ml-2">
            Last update on:
            {{ editData.editProject.updated_at.split("T", 1)[0] }}
          </div>
        </div>
      </div>
      <form class="pr-2" v-if="showForm" @submit.prevent="update()">
        <div class="flex flex-row">
          <div :class="url ? '' : 'bg-red-300'" class="w-[60%]">
            <img
              class="
                h-32
                md:h-48
                object-cover
                rounded
                border border-gray-200
                w-full
              "
              :src="url"
              alt=""
            />
          </div>
          <div class="m-4 -mr-4">
            <VueBtn
              @click="selectImage()"
              :name="url ? 'Change' : 'Select'"
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
            :data="editData.editProject.title"
            @emit-input="(n) => (editForm.title = n)"
          />
          <VueInput
            placeholder="Subtitle"
            type="text"
            name="Subtitle"
            rule="required"
            classs="w-full h-12"
            class="w-1/2"
            :data="editData.editProject.subtitle"
            @emit-input="(n) => (editForm.subtitle = n)"
          />
        </div>
        <VueInput
          :data="editData.editProject.link"
          @emit-input="(n) => (editForm.link = n)"
          placeholder="Link"
          type="text"
          name="Link"
          rule="required"
        />

        <VueInput
          placeholder="Description"
          type="text"
          name="Description"
          rule="required"
          :textarea="true"
          :data="editData.editProject.description"
          @emit-input="(n) => (editForm.description = n)"
        />
        <div class="mt-2">
          <label for="chip" class="font-semibold">Skills Used</label>
          <VueChip
            :skills="editData.editProject.project_skills"
            @emit-skills="(n) => (editForm.skills = n)"
          />
        </div>

        <div class="mt-6 flex flex-row space-x-2">
          <VueBtn
            name="Update"
            type="submit"
            :loader="load"
            :disable="getDisable"
          />
          <VueBtn @click="preview()" name="Preview" type="button" />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import {onUnmounted} from 'vue'
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline";
import { useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { UPDATE_PROJECTS } from "~~/gql/projects/updateProjects";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { STORE_IMAGE } from "~~/gql/storeImage";
import { ADD_SKILL_PROJECT } from "~~/gql/projects/addProjectSkill";
import { UPDATE_SKILL_PROJECT } from "~~/gql/projects/updateProjectSkill";
import { DELETE_PROJECTS } from "~~/gql/projects/deleteProject";
import { DELETE_PROJECT_SKILL } from "~~/gql/projects/deleteProjectSkill";

const props = defineProps(['project'])
console.log("proooo", props.project)
const { handleSubmit } = useForm();
const layoutState = useLayout();
const router = useRouter();
const showForm = ref(false);
const editData = useEditData();
//editData.value = props.project
const load = ref(false);

onUnmounted(() => {
//console.log("unmounted");
//editData.value.editProject = ''
})

const base64 = ref("");
const editForm = ref({
  skills: [],
  image: "",
  title: "",
  subtitle: "",
  description: "",
  link: "",
});

const { mutate: update_projects } = useMutation(UPDATE_PROJECTS);

const { mutate: store_image } = useMutation(STORE_IMAGE);
const { mutate: add_project_skill } = useMutation(ADD_SKILL_PROJECT);

const update = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);
  console.log("skills", editForm.value.skills);
  console.log("skills", editForm.value.image);
  if (base64.value) {
    store_image({ base64: base64.value })
      .then((res) => {
        //layoutState.value.alert.message = "You have successfully add a photo";
        console.log("res", res.data.storeImage.url);

        update_projects({
          id: editData.value.editProject.id,
          title: formValues.Title,
          subtitle: formValues.Subtitle,
          description: formValues.Description,
          link: formValues.Link,
          pricture: res.data.storeImage.url,
        })
          .then((res) => {
            console.log("res", res.data);

            for (let skill in editForm.value.skills) {
              add_project_skill({
                project_id: editData.value.editProject.id,
                skill_id: editForm.value.skills[0].id,
              })
                .then((res) => {
                  console.log("err", res.data);
                  layoutState.value.alert.message =
                    "project updated successfully";
                })
                .catch((err) => {
                  load.value = false;
                  console.log("err", err.message);
                  layoutState.value.alert.message =
                    "project updating not successfull";
                  layoutState.value.alert.success = false;
                });
              load.value = false;
              if (process.client) {
                window.location.reload();
              }
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
  } else {
    update_projects({
      id: editData.value.editProject.id,
      title: formValues.Title,
      subtitle: formValues.Subtitle,
      description: formValues.Description,
      link: formValues.Link,
      pricture: editData.value.editProject.pricture,
    })
      .then((res) => {
        load.value = false;
        console.log("res", res.data);
        delete_project_skill({
          project_id: editData.value.editProject.id,
        })
          .then((res) => {
            for (let skill in editForm.value.skills) {
              add_project_skill({
                project_id: editData.value.editProject.id,
                skill_id: editForm.value.skills[skill].id,
              })
                .then((res) => {
                  console.log("err", res.data);
                  layoutState.value.alert.message =
                    "project updated successfully";
                })
                .catch((err) => {
                  console.log("err", err.message);
                  layoutState.value.alert.message =
                    "project updating not successfull";
                  layoutState.value.alert.success = false;
                });
            }
            if (process.client) {
              window.location.reload();
            }
            load.value = false;
          })
          .catch((err) => {
            load.value = false;
            layoutState.value.alert.message = "PLease try again";
            layoutState.value.alert.success = false;
            console.log(err, "errrrrr");
          });
      })
      .catch((err) => {
        console.log("err", err);
        layoutState.value.alert.message = "PLease try again";
        layoutState.value.alert.success = false;
      });
  }
});

    const url = ref(editData.value.editProject.pricture);
const preview = () => {
    const temp = ref({
        image: url.value,
        data: editForm.value
    })
  layoutState.value.previewData = temp.value;
};

const image = ref();

const selectImage = () => {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();
  input.onchange = (e) => {
    editForm.value.image = e.target.files[0];
    url.value = URL.createObjectURL(editForm.value.image);
    if (editForm.value.image) {
      let reader = new FileReader();
      reader.readAsDataURL(editForm.value.image);
      reader.onload = function () {
        base64.value = reader.result.split(",")[1];
        console.log("base", base64.value);
      };
    }
  };
};

const { mutate: delete_project } = useMutation(DELETE_PROJECTS);
const { mutate: delete_project_skill } = useMutation(DELETE_PROJECT_SKILL);
const deleteProject = () => {
  var value = prompt(
    `This Action cannot be undone, PLease type  "${editData.value.editProject.title}" to delete`
  );
  if (value == editData.value.editProject.title) {
    delete_project_skill({
      project_id: editData.value.editProject.id,
    })
      .then((res) => {
        delete_project({
          id: editData.value.editProject.id,
        })
          .then((res) => {
            console.log("deleteed");

            if (process.client) {
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log("err", err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};

const getDisable = computed(() => {
  const temp = ref([]);
  for (let i in editData.value.editProject.project_skills) {
    temp.value.push(editData.value.editProject.project_skills[i].skill)
   // console.log("skk", editData.value.editProject.project_skills[i].skill);
  }

  console.log("sk", editForm.value.skills);
   console.log("temp", temp.value);

  if (
    editForm.value.title == editData.value.editProject.title &&
    editForm.value.subtitle == editData.value.editProject.subtitle &&
    editForm.value.description == editData.value.editProject.description &&
    editForm.value.link == editData.value.editProject.link &&
    editForm.value.image == "" && arrayEquals(temp.value, editForm.value.skills)
  ) {
    console.log("change nedd");
    return true;
  } else {
    return false;
    console.log("good");
  }
});
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
</script>