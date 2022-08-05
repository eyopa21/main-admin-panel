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
        truncate
      "
    >
      <div class="flex justify-between mb-2">
        <div @click="editData.editSkill = ''">
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
            @click="deleteSkill(editData.editSkill.id)"
            name="Delete"
            type="button"
            classs="border-red-500 hover:border-transparent text-red-700   hover:text-red-500"
          />
        </div>
      </div>
      <hr class="mb-8" />
      <div class="flex flex-row justify-between break-words">
        <div class="flex flex-col">
          <div class="flex flex-row space-x-4">
            <div>
              <div
                v-if="editData.editSkill.iconSvg"
                class="w-20 h-20"
                v-html="editData.editSkill.iconSvg.svg"
              ></div>
            </div>

            <div
              class="text-2xl md:text-4xl pt-4 w-auto break-words font-semibold"
            >
              {{ editData.editSkill.skill_name }}
            </div>
          </div>

          <div class="pl-4">
            <SkillBar :skill="editData.editSkill" classs="bg-gray-300" />
          </div>
        </div>
      </div>
      <div class="flex flex-row  justify-end md:ml-32 text-xs pt-8 md:-mr-4">
        <div class="mr-1 font-light">
          created at: {{ editData.editSkill.created_at.split("T", 1)[0] }}
        </div>
        <div class="font-bold">
        |
        </div>
        <div class="ml-1 font-light">
          last Update on: {{ editData.editSkill.updated_at.split("T", 1)[0] }}
        </div>
      </div>
      <hr class="mb-4" />
      <div class="p-2">
        <form v-if="showForm" @submit.prevent="update()">
          <VueInput
            type="text"
            placeholder="Skill Name"
            name="Skill_Name"
            rule="required"
            :data="editData.editSkill.skill_name"
            @emit-input="(n) => n"
          />
          <VueInput
            type="number"
            placeholder="Level"
            name="level"
            rule="number:10,100"
            :data="editData.editSkill.level"
            @emit-input="(n) => n"
          />

          <div class="mt-6 flex flex-row space-x-2">
            <VueBtn name="Update" type="submit" :loader="load"/>
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
import { UPDATE_SKILLS } from "~~/gql/skills/updateSkills";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { DELETE_SKILLS } from "~~/gql/skills/deleteSkills";
import { DELETE_SKILL_PROJECT } from "~~/gql/skills/deleteProjectSkill";

const { handleSubmit } = useForm();
const router = useRouter();
const editData = useEditData();
const showForm = ref(false);
const load = ref(false);

const { mutate: update_skills } = useMutation(UPDATE_SKILLS);
const update = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);

  update_skills({
    id: editData.value.editSkill.id,
    skill_name: formValues.Skill_Name,
    level: formValues.level,
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

const { mutate: delete_skills } = useMutation(DELETE_SKILLS);
const { mutate: delete_skill_project } = useMutation(DELETE_SKILL_PROJECT);
const deleteSkill = (id) => {
  var value = prompt(
    `This Action cannot be undone, PLease type "${editData.value.editSkill.skill_name}" to delete`
  );
  if (value == editData.value.editSkill.skill_name) {
    delete_skill_project({
      skill_id: editData.value.editSkill.id,
    })
      .then((res) => {
        delete_skills({
          id: id,
        })
          .then((res) => {
            if (process.client) {
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};
</script>