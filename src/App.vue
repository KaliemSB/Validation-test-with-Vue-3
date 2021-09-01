<template>
  <router-view/>
</template>

<style>
  * {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    height: 100vh;
  }
  #app {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
        "form hero";
    height: 100vh;
  }
</style>
