<template>
  <div>
    <img src="../assets/logo.jpg" alt="Holu">
  </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<style scoped>
    div {
        grid-area: 'hero';

        display: flex;
        align-items: center;
        justify-content: center;

        background-color:#28479A;
    }

    img {
        width: 37.5rem;
    }
</style>
