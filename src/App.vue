<template>
  <Login/>
  <Container/>
</template>

<script>
import Login from './components/Login.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Login,
    Container
  }
}
</script>

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
