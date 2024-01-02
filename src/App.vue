<template>
  <router-view v-if="layout === 'general'" />
  <LandingPage v-else />
</template>
<script>
import { ref } from "vue";
import LandingPage from "@/layout/LandingPage.vue";
export default {
  components: {
    LandingPage,
  },
  setup() {
    const layout = ref(null);
    return {
      layout,
    };
  },
};
</script>
