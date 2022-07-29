<template>
  <div @click="preview()" class="">
    <div class="flex flex-row w-full border-y-1 border-black align-middle p-4 hover:bg-gray-400">
      <div class="flex flex-row space-x-4 w-full h-full">
        <img class="w-12 h-12" src="https://i.imgur.com/XHO7CaG.jpeg" alt="" />
        <div class="pt-3">{{props.skills.name}}</div>
      </div>

      <div class="w-full pt-2"><SkillBar :skill="props.skills"/></div>
    </div>
  </div>
</template>

<script setup>
const editData = useEditData()
const props = defineProps({
  skills: {
    type: Object,
    required: true,
  }})

function preview(){
    console.log("test")
    editData.value.editSkill = props.skills;
   
}


</script>