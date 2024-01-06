<template>
  <div class="container">
    <div class="box-one">
      <HeroSidebar @passRoutes="getDetails" />
    </div>
    <div class="box-two">
      <span class="header">
        <HeroTopHeader />
        <div id="swalhtml"></div>
      </span>
      <section class="content">
        <hero-title-header :title="titlePages"></hero-title-header>
        <router-view />
      </section>
    </div>
  </div>
</template>
<script>
import HeroSidebar from "@/components/common/HeroSidebar.vue";
import HeroTopHeader from "@/components/common/HeroTopheader.vue";
import { ref } from "vue";

export default {
  components: {
    HeroSidebar,
    HeroTopHeader,
  },
  setup() {
    const titlePages = ref("Dashboard");
    const getDetails = (val) => {
      titlePages.value = val;
    };
    return {
      getDetails,
      titlePages,
    };
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 4.5fr;
}
.content {
  margin: 30px 75px;
}
@media only screen and (max-width: 844px) and (min-width: 390px) {
  .container {
    grid-template-columns: none;
  }
  .box-one {
    order: 2;
    position: fixed;
    clear: both;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .content {
    margin: 5px 18px;
    margin-bottom: 75px;
  }
}
</style>
