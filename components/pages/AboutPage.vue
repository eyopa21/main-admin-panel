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
          />
          <VueInput
            placeholder="Description"
            type="text"
            name="Description"
            rule="required"
            classs="w-full "
            label="Description"
            :textarea="true"
          />
          <VueBtn name="Update" type="submit" class="pt-8" />
        </div>
      </form>

      <!--VueBtn name="homepage" type="button" icon="test" classs="py-6 rounded-2xl "/-->
    </div>
    <div class="w-full md:w-1/2">
      <div
        class="flex flex-col bg-bg_color w-full mb-6 shadow-lg rounded-2xl p-8"
      >
        <div class="flex flex-col">
          <div class="text-7xl font-bold text-primary mb-12">Header</div>
          <div class="text-secondary pb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
            Letraset sheets containing 
          </div>
        </div>
      </div>

      <!--VueBtn name="homepage" type="button" icon="test" classs="py-6 rounded-2xl "/-->
    </div>
  </div>
</template>
<script setup>
import { useForm } from "vee-validate";
const { handleSubmit } = useForm();
const updateContent = handleSubmit((formValues) => {
  console.log(formValues);
});




</script>