<template>
  <div v-if="config" :class="test" class="">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col w-full md:w-[40%]">
        <img
          class="h-32 object-contain md:h-full"
          src="../../assets/img/Update-pana.png"
          alt=""
        />
      </div>
      <div class="flex-wrap w-full md:w-[60%]">
        <div
          class="
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-lg
            rounded
            h-full
            p-8
          "
        >
          <div class="text-3xl tracking-wide font-semibold uppercase underline">
            Change your backround here
          </div>
          <ClientOnly>
            <form @submit.prevent="changePreference()">
              <div class="flex flex-col mt-6 pb-4">
                <div class="uppercase font-semibold text-sm">
                  background color
                </div>

                <div :class="test" class="p-8 mr-16 h-32">
                  <VueInput
                    name="Background_Color"
                    type="color"
                    rule="required"
                    classs="w-full h-full"
                    :data="config.bg_color"
                    @emit-input="(n) => (test = n)"
                  />
                </div>
              </div>

              <hr />
              <div class="flex flex-col mt-6">
                <div class="uppercase font-semibold text-sm">Primary color</div>

                <div :class="`bg-[${config.bg_color}]`" class="p-8 mr-16 h-32">
                  <VueInput
                    name="Primary_Color"
                    type="color"
                    rule="required"
                    classs="w-full h-full"
                  />
                </div>
                <div class="flex flex-row mt-8">
                  <VueBtn name="Change primary color" type="submit" />
                  <VueBtn
                    @click="selectColor()"
                    name="Reset to default"
                    type="button"
                    classs="bg-red-500 hover:bg-600 active:bg-red-700 text-xs"
                  />
                </div>
              </div>
            </form>
          </ClientOnly>
        </div>
      </div>
    </div>

    {{ getColor }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { useForm } from "vee-validate";
import { UPDATE_CONFIG } from "~~/gql/config/updateConfig";
import { GET_CONFIG } from "~~/gql/config/getConfig";
const layoutState = useLayout();

const { handleSubmit } = useForm();
const { mutate: update_config } = useMutation(UPDATE_CONFIG);
const changePreference = handleSubmit((formValues) => {
  console.log(formValues);

  update_config({
    bg_color: `bg-[${formValues.Background_Color}]`,
    primary_color: `bg-[${formValues.Primary_Color}]`,
  })
    .then((res) => {
      layoutState.value.alert.message = "changes applied";
      if (process.client) {
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log("err", err);
      layoutState.value.alert.message = "Please try again";
      layoutState.value.alert.success = false;
      resetForm();
    });
});

const config = ref("");
const test = ref("");

const { loading, result, error } = useQuery(GET_CONFIG);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    config.value = result.value.config[0];
    console.log("config", config.value.bg_color);
    test.value = config.value.bg_color;
    console.log("test", test.value);
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});

const color = ref("");

const getColor = computed(() => {
  console.log("color", color.value);
});

const selectColor = () => {
  console.log("select");

  const input = document.createElement("input");
  input.type = "color";
  input.click();
  color.value = input.value;
  input.onInput(function () {
    console.log("val", input.value);
  });
};
const reset = () => {};
</script>