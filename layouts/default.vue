<template>
  <div class="bg-gray-300">
    <div
      class="fixed w-full top-0 left-0 z-20"
      :class="[$route.fullPath == '/login' ? 'hidden' : 'block']"
    >
      <NavBarHeader @resize="onResize()" />
      <NavBarNavbarCollapsed
        v-if="!layoutState.showSideBar && !layoutState.closeSidebar"
        @click="close()"
        class="absolute"
      />
      <NavBarNavbarDefault
        class="hidden md:block"
        @click="layoutState.showSideBar = false"
        v-if="layoutState.showSideBar"
      />
    </div>
<VueModal />
<VueConfirm/>
<PreviewModal/>
    <slot />
    

  </div>
</template>
<script setup>
import { ref } from "vue";

const layoutState = useLayout();

const close = () => {
  if (process.client) {
    if (Number(window.screen.width) < 768) {
      layoutState.value.closeSidebar = true;
    }
  }
};

const onResize = () => {
  layoutState.value.closeSidebar = false;
  layoutState.value.showSideBar = false;
  console.log("on resize");
};
if (process.client) {
  window.addEventListener("resize", onResize);
}
</script>