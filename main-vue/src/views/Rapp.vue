<template>
  <div>
    <h4>敬请期待react子应用登场...</h4>
    <WujieVue
      width="100%"
      height="100%"
      name="sub-react"
      :url="rUrl"
    ></WujieVue>
  </div>
</template>

<script setup>
const rUrl = "http://localhost:9000/";
</script>

<style lang="scss" scoped></style>
