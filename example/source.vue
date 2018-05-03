<template lang="pug">
div(ok)
  h1(:class="$style.red") hello
</template>

<script>
export default {
  data () {
    return {
      msg: 'fesfff'
    }
  }
}
</script>

<style module>
.red {
  color: red;
}
</style>
