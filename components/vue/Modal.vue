<template>
  <div
    :class="layoutState.showModal ? 'visible top-[25%] ' : 'invisible top-0'"
  >
    <div
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        duration-100
        -mt-64
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            md:w-128
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--header-->
          <div
            class="
              flex
              items-start
              justify-between
              p-5
              border-b border-solid border-blueGray-200
              rounded-t
            "
          >
            <h3 class="text-3xl font-semibold">Forgot your password?</h3>
          </div>
          <!--body-->
          <form @submit.prevent="forgetPassword()">
            <div class="relative p-6 flex-auto">
              <div class="text-sm">Email</div>
              <VueInput
                name="email"
                rule="email"
                placeholder="Email"
                type="text"
              />
            </div>
            <!--footer-->
            <div
              class="
                flex
                items-center
                justify-end
                p-6
                border-t border-solid border-blueGray-200
                rounded-b
              "
            >
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
                @click="layoutState.showModal = false"
              >
                Close
              </button>
              <button
                class="
                  bg-emerald-500
                  text-white
                  active:bg-emerald-600
                  font-bold
                  uppercase
                  text-sm
                  px-6
                  py-3
                  rounded
                  shadow
                  hover:shadow-lg
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-100
                "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="opacity-50 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script setup>
import { XIcon } from "@heroicons/vue/outline";
import { useForm } from "vee-validate";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { FORGOT_PASSWORD } from "~~/gql/forgotPassword";
const layoutState = useLayout();
const { handleSubmit, resetForm } = useForm();

const { mutate: forgot_password } = useMutation(FORGOT_PASSWORD);
const forgetPassword = handleSubmit((formValues) => {
  console.log(formValues);

  forgot_password({
    email: formValues.email,
  })
    .then((res) => {
      layoutState.value.alert.message =
        "We have send your password to your email";
      layoutState.value.showModal = false;
      resetForm();
    })
    .catch((err) => {
      console.log("err", err);
      layoutState.value.alert.message = "Please try again";
      layoutState.value.alert.success = false;
    });
});
</script>