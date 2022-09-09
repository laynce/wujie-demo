<template>
  <div>
    <h4>敬请期待vue子应用登场...</h4>
    <WujieVue width="100%" height="100%" name="sub-vue" :url="vUrl"></WujieVue>
  </div>
</template>

<script setup>
const vUrl = "http://localhost:8080/";
</script>

<style lang="scss" scoped></style>
