<template>
  <div>
    <div
      class="
        flex flex-col
        min-w-0
        break-words
        sm:p-8
        md:p-0
        lg:p-8
        bg-white
        w-full
        rounded-xl
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
                    v-if="data.picture && !url"
                    class="
                      w-20
                      h-20
                      md:w-36
                      bg-slate-700
                      md:h-36
                      rounded-full
                      object-fit
                    "
                    :src="data.picture"
                    alt="profile pic"
                  />
                  <img
                    v-if="url"
                    class="w-20 h-20 md:w-36 md:h-36 rounded-full object-fit"
                    :src="url"
                    alt="profile pic"
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
              <div
                class="
                  md:m-auto
                  pl-2
                  text-xl
                  md:text-2xl
                  text-emerald-500
                  font-bold
                  uppercase
                "
              >
                Edit your personal information here
              </div>
            </div>
          </div>

          <div class="flex flex-row space-x-2 justify-between md:mt-8">
            <VueInput
              placeholder="Full Name"
              type="text"
              name="Name"
              rule="required"
              classs="w-full h-12"
              class="w-1/2"
              :data="data.name"
              label="Full Name"
              :astrix="true"
            />
            <VueInput
              placeholder="Logo Name"
              type="text"
              name="Logo"
              rule="required"
              classs="w-full h-12"
              class="w-1/2"
              :data="data.logo"
              label="Logo Name"
              :astrix="true"
            />
          </div>
          <VueInput
            placeholder="Location"
            type="text"
            name="Location"
            rule="required"
            classs="w-full h-12"
            :data="data.location"
            label="Location"
            :astrix="true"
          />
        </div>
        <div class="m-8">
          <VueBtn name="Update" type="submit" :loader="load" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { CameraIcon } from "@heroicons/vue/outline";
import { GET_USER } from "~~/gql/user/getUser";
import { UPDATE_USER } from "~~/gql/user/updateUser";
import { STORE_IMAGE } from "~~/gql/storeImage";

import { useQuery, useMutation } from "@vue/apollo-composable";
const { handleSubmit } = useForm();
const base64 = ref("");
const load = ref(false);
const image = ref();
const data = ref("");
const url = ref("");
const layoutState = useLayout();
const { mutate: store_image } = useMutation(STORE_IMAGE);

const { mutate: update_user } = useMutation(UPDATE_USER);
const update = handleSubmit((formValues) => {
  load.value = true;
  console.log(formValues);
  if (base64.value) {
    store_image({ base64: base64.value })
      .then((res) => {
        console.log("res.data.storeImage.url", res.data.storeImage.url);
        update_user({
          id: data.value.id,
          logo: formValues.Logo,
          name: formValues.Name,
          picture: res.data.storeImage.url,
          location: formValues.Location,
        })
          .then((res) => {
            load.value = false;
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
      })
      .catch((err) => {
        load.value = false;
        layoutState.value.alert.message = "PLease try again";
        layoutState.value.alert.success = false;
        console.log("Err", err.message);
      });
  } else {
    update_user({
      id: data.value.id,
      logo: formValues.Logo,
      name: formValues.Name,
      picture: data.value.picture,
      location: formValues.Location,
    })
      .then((res) => {
        load.value = false;
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
  }
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

const { loading, result, error } = useQuery(GET_USER);
watchEffect(() => {
  if (result.value) {
    console.log("result.value user", result.value);
    data.value = result.value.user[0];
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});
</script>