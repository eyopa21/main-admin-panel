<template>
  <div class="flex flex-col-reverse md:flex-row md:space-x-2">
    <div class="w-full md:w-1/2">
      <form @submit.prevent="updateContent()">
        <div
          class="
            flex flex-col
            break-words
            bg-white
            w-full
            mb-6
            shadow-lg
            rounded-2xl
            p-8
          "
        >
          <VueInput
            placeholder="Header"
            type="text"
            name="Header"
            rule="required"
            classs="w-full h-12"
            label="Header"
            :data="data.header"
            @emit-input="(n) => (data.header = n)"
          />
          <VueInput
            placeholder="Description"
            type="text"
            name="Description"
            rule="required"
            classs="w-full "
            label="Description"
            :textarea="true"
            :data="data.description"
            @emit-input="(n) => (data.description = n)"
          />
          <VueBtn name="Update" type="submit" class="pt-8" :loader="load" />
        </div>
      </form>

      <!--VueBtn name="homepage" type="button" icon="test" classs="py-6 rounded-2xl "/-->
    </div>
    <div class="w-full md:w-1/2">
      <div
        class="
          flex flex-col
          bg-bg_color
          w-full
          mb-6
          shadow-lg
          rounded-2xl
          p-8
          break-words
        "
      >
        <div class="flex flex-col">
          <div class="text-3xl md:text-5xl font-bold text-primary mb-12">
            {{ data.header }}
          </div>
          <div class="text-secondary pb-2">
            {{ data.description }}
          </div>
        </div>
      </div>

      <!--VueBtn name="homepage" type="button" icon="test" classs="py-6 rounded-2xl "/-->
    </div>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";

import { useQuery, useMutation } from "@vue/apollo-composable";
import { GET_CONTACTPAGE } from "~~/gql/getContactpage";
import { UPDATE_CONTACTPAGE } from "~~/gql/pages/updateContactpage";
const { handleSubmit } = useForm();
const layoutState = useLayout();
const load = ref(false);
const data = ref({
  header: "",
  description: "",
});
const { mutate: update_homePage } = useMutation(UPDATE_CONTACTPAGE);
const updateContent = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);
  update_homePage({
    header: formValues.Header,
    description: formValues.Description,
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

const { loading, result, error } = useQuery(GET_CONTACTPAGE);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value.contactPage);
    data.value.header = result.value.contactPage[0].header;
    data.value.description = result.value.contactPage[0].description;
  } else if (error.value) {
    console.log("error.value", error.value);
    layoutState.value.alert.message = "Connection error please try again";
    layoutState.value.alert.success = false;
  }
});
</script>