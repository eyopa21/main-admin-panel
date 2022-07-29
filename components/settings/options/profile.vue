<template>
  <div>
    <div
      class="
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mb-6
        shadow-lg
       
        min-h-screen
        md:min-h-full
      "
    >
      <form @submit.prevent="update()">
        <div class="m-8">
          <div class="max-w-2xl mx-auto">
            <div class="flex flex-col-reverse md:flex-row">
              <div class="flex items-center space-x-4">
                <div @click="selectImage()" class="relative z-0">
                  <img
                    class="w-20 h-20 md:w-36 md:h-36 rounded-full object-fit"
                    :src="url"
                    alt=""
                  />
                  <span
                    class="
                      bottom-0
                      left-7
                      absolute
                      border-white
                      dark:border-gray-800
                      rounded-full
                      ml-8
                      md:ml-20
                    "
                    ><CameraIcon class="w-8 h-8 text-bg_color"
                  /></span>
                </div>
              </div>
              <div class="md:m-auto text-xl font-bold">Edit your personal information here</div>
            </div>
          </div>

          <div class="flex flex-row space-x-2 justify-between">
            <VueInput
              placeholder="Full Name"
              type="text"
              name="Name"
              rule="required"
              classs="w-full h-12"
              class="w-1/2"
            />
            <VueInput
              placeholder="Logo Name"
              type="text"
              name="Logo"
              rule="required"
              classs="w-full h-12"
              class="w-1/2"
            />
          </div>
          <VueInput
            placeholder="Location"
            type="text"
            name="Location"
            rule="required"
            classs="w-full h-12"
          />
          <VueInput
            placeholder="Password"
            type="password"
            name="password"
            rule="password"
            classs="w-full h-12"
          />
        </div>
        <div class="m-8">
          <VueBtn name="Update" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { CameraIcon } from "@heroicons/vue/outline";
const { handleSubmit } = useForm();
const update = handleSubmit((formValues) => {
  console.log(formValues);
});

const image = ref();

const url = ref(
  "https://firebasestorage.googleapis.com/v0/b/gbi-date.appspot.com/o/images%2Feyobaaaaaaaaa.jpg?alt=media&token=fcd6b46e-51ab-434f-97dd-70ae19761d06"
);
const selectImage = () => {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();
  input.onchange = (e) => {
    image.value = e.target.files[0];
    url.value = URL.createObjectURL(image.value);
  };
};
</script>