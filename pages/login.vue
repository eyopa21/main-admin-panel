<template>
  <div class="px-4">
    <div
      class="
        flex
        md:flex-row
        flex-col
        text-center
        md:text-left
        h-screen
        justify-center
        items-center
        lg:ml-48
        md:ml-32
      "
    >
      <div class="flex flex-col w-full mb-8">
        <div class="flex flex-row">
          <AdjustmentsIcon class="w-12 h-12 text-light_bg" />

          <h1 class="text-5xl text-gray-800 font-bold mb-4">My admin</h1>
        </div>
        <p class="w-full mx-auto md:mx-0 text-gray-500">
          Control and monitor your website data from here.
        </p>
        <img
          src="../assets/img/login-vector.png"
          alt="login"
          class="w-128 h-96 hidden md:block"
        />
      </div>

      <div class="w-full mx-auto md:mx-0">
        <div class="bg-white p-10 flex flex-col shadow-xl rounded-2xl md:mr-16">
          <h2 class="text-2xl font-bold text-gray-800 text-left mb-8">
            Login here ...
          </h2>
          <form @click.prevent="login()">
            <div class="flex flex-col mb-4 space-y-8 pr-2">
              <VueInput
                placeholder="Email"
                type="text"
                name="email"
                rule="email"
                classs="w-full h-12"
              />
              <VueInput
                placeholder="Password"
                type="password"
                name="password"
                rule="password"
                classs="w-full h-12"
              />
           

              <div class="ml-1 -pt-4">
              <NuxtLink to="/">
                <VueBtn name="Login" type="submit" />
              </NuxtLink>
              </div>
            </div>

            <div class="flex flex-row justify-between -ml-2 space-x-8">
              <button
                class="
                  w-full
                  text-center
                  font-medium
                  text-gray-500
                  hover:underline
                "
              >
                Login via invite link
              </button>
              <button
              type="button"
                class="
                  w-full
                  text-center
                  font-medium
                  text-gray-500
                  hover:underline
                "
                 @click="layoutState.showModal = true"
              >
                Forgot password!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PencilAltIcon } from "@heroicons/vue/outline";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { useForm } from "vee-validate";
const { handleSubmit } = useForm();
const login = handleSubmit((formValues) => {
  console.log(formValues);
});


const layoutState = useLayout();
</script>