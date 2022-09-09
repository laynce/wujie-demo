<script setup></script>

<template>
  <header>
    <div class="wrapper">
      <h3>无界微前端</h3>
      <nav>
        <RouterLink to="/vue-app">子应用vue</RouterLink>
        <RouterLink to="/react-app">子应用react</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>
