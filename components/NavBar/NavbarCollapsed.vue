<template>
  <div >
    <div class="flex flex-row h-screen">
      <nav
        class="
          bg-white
          dark:bg-slate-700
          w-20
          h-screen
          justify-between
          flex flex-col
        
        "
      >
        <div class="mt-4 mb-10">
          <NuxtLink to="/">
            <img
            v-if="layoutState.user.picture"
              :src="layoutState.user.picture"
              class="rounded-full w-10 h-10 mb-3 mx-auto"
            />
          </NuxtLink>
          <div class="mt-10">
            <ul>
              <li class="my-8 text-center">
                <NuxtLink to="/">
                  <span>
                    <DatabaseIcon
                      class="
                        
                        text-gray-500
                        dark:text-gray-300
                        mx-auto
                        hover:text-gray-800
                        dark:hover:text-white
                        transition-colors
                        duration-200
                      " 
                      :class="[$route.fullPath == '/' ? ' w-12 h-12' : 'h-6 w-6']"
                    />
                  </span>
                </NuxtLink>
              </li>
              <li class="my-8 text-center">
                <NuxtLink to="/content">
                  <span>
                    <NewspaperIcon
                      class="
                       
                        text-gray-500
                        dark:text-gray-300
                        mx-auto
                        hover:text-gray-800
                        dark:hover:text-white
                        transition-colors
                        duration-200
                      "
                      :class="[$route.fullPath == '/content' ? ' w-12 h-12' : 'h-6 w-6']"
                    />
                  </span>
                </NuxtLink>
              </li>
              <li class="my-8 text-center">
                <NuxtLink to="/projects">
                  <span>
                    <BriefcaseIcon
                      class="
                       
                        text-gray-500
                        dark:text-gray-300
                        mx-auto
                        hover:text-gray-800
                        dark:hover:text-white
                        transition-colors
                        duration-200
                      "
                      :class="[$route.fullPath == '/projects' ? ' w-12 h-12' : 'h-6 w-6']"
                    />
                  </span>
                </NuxtLink>
              </li>
              <li class="my-8 text-center">
                <NuxtLink to="/skills">
                  <span>
                    <LightBulbIcon
                      class="
                       
                        text-gray-500
                        dark:text-gray-300
                        mx-auto
                        hover:text-gray-800
                        dark:hover:text-white
                        transition-colors
                        duration-200
                      "
                      :class="[$route.fullPath == '/skills' ? ' w-12 h-12' : 'h-6 w-6']"
                    />
                  </span>
                </NuxtLink>
              </li>
              <li class="my-8 text-center">
                <NuxtLink to="/timeline">
                  <span>
                    <ClockIcon
                      class="
                       
                        text-gray-500
                        dark:text-gray-300
                        mx-auto
                        hover:text-gray-800
                        dark:hover:text-white
                        transition-colors
                        duration-200
                      "
                      :class="[$route.fullPath == '/timeline' ? ' w-12 h-12' : 'h-6 w-6']"
                    />
                  </span>
                </NuxtLink>
              </li>
              <li class="my-8 text-center">
                <NuxtLink to="/settings">
                  <span>
                    <CogIcon
                      class="
                        
                        text-gray-500
                        dark:text-gray-300
                        mx-auto
                        hover:text-gray-800
                        dark:hover:text-white
                        transition-colors
                        duration-200
                      "
                      :class="[$route.fullPath == '/settings' ? ' w-12 h-12' : 'h-6 w-6']"
                    />
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="mb-4">
          <NuxtLink @click="logout()" class="">
            <span>
              <LogoutIcon
                class="h-36 w-8 text-gray-300 mx-auto hover:text-primary"
              />
            </span>
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { LogoutIcon } from "@heroicons/vue/outline";
import { DatabaseIcon } from "@heroicons/vue/outline";
import { LightBulbIcon } from "@heroicons/vue/outline";
import { CogIcon } from "@heroicons/vue/outline";
import { BriefcaseIcon } from "@heroicons/vue/outline";
import { ClockIcon } from "@heroicons/vue/outline";
import { NewspaperIcon } from "@heroicons/vue/outline";
import { AdjustmentsIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";
const cookie = useCookie('isLoggedIn')
const admin = useCookie('admin');
const router = useRouter();

const layoutState = useLayout();

const logout = () => {
  console.log("loggoing out")
  cookie.value = null;
  admin.value = null;
  router.push('/login')
}

</script>