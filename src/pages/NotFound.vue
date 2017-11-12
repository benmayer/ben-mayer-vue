<template>
  <div class="site-page page__notfound">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      msg: 'Damn, you got lost.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../style/main';
</style>
