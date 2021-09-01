<template>
  <div>
    <img v-bind:src="Avatar" alt="">
    <p>{{Name}}</p>
  </div>
</template>

<script>
  import { onMounted} from 'vue';

  export default {
    data () {
      return {
        Avatar: this.$store.user.avatar,
        Name: this.$store.user.name
      }
    },
    setup() {

      onMounted(() => {

      })
    }
  }
</script>