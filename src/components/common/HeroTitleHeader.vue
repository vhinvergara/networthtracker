<template>
  <div class="container">
    <h4>
      {{ title }}
    </h4>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
  setup() {},
};
</script>
<style scoped>
.container {
  margin: 20px 0px;
}
.container h4 {
  font-weight: 600;
  color: rgb(158, 155, 155);
}
</style>
