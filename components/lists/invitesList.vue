<template>
  <div class="w-full">
    <div class="flex flex-row w-auto p-2">
      <div
        class="
          flex flex-col
          w-auto
          h-full
          mx-auto
          bg-gray-100
          pt-0
          pr-0
          md:pt-0
          hover:bg-gray-300
          drop-shadow-md
        "
      >
        <div @click="deleteInvites(props.invites)" class="flex justify-end p-1">
          <TrashIcon class="w-6 h-6 text-red-500" />
        </div>
        <div class="p-3 md:p-4">
          <div class="pl-12 md:pl-16 pr-4">
            <UserIcon class="w-8 h-8 text-blue-600" />
          </div>
          <div class="p-1 md:p-2 text-xs md:text-sm">
            {{ props.invites.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { DELETE_INVITES } from "~~/gql/inviites/deleteInvites";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { UserIcon } from "@heroicons/vue/outline";
import { TrashIcon } from "@heroicons/vue/outline";
const props = defineProps({
  invites: {
    type: Object,
    required: true,
  },
});

const { mutate: delete_Invites } = useMutation(DELETE_INVITES);

const deleteInvites = (invites) => {
  var value = prompt(`This Action cannot be undone, PLease type ${invites.email} to delete`);

  if (value == invites.email) {
    delete_Invites({
      id: invites.id,
    })
      .then((res) => {
        if (process.client) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }else{
    console.log("cancelled")
  }
};
</script>