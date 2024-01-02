<template>
  <div class="container">
    <div class="box-one">
      <HeroSidebar />
    </div>
    <div class="box-two">
      <span class="header">
        <HeroTopHeader />
      </span>
      <section class="content">
        <router-view />
      </section>
    </div>
  </div>
</template>
<script>
import HeroSidebar from "@/components/common/HeroSidebar.vue";
import HeroTopHeader from "@/components/common/HeroTopheader.vue";
export default {
  components: {
    HeroSidebar,
    HeroTopHeader,
  },
  setup() {},
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 4.5fr;
}
.content {
  margin: 40px 85px;
}
@media only screen and (max-width: 844px) and (min-width: 390px) {
  .container {
    grid-template-columns: none;
  }
  .box-one {
    order: 2;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .content {
    margin: 5px 18px;
  }
}
</style>
