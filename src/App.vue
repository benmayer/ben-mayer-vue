<template>
  <div id="app" class="site__wrapper">
    <header class="site__header">
      <h1 class="site__title"><a href="/">ben mayer</a></h1>
      <div class="site__nav">
        <ul class="nav-section nav-section__pages">
          <li v-for="item in navigation">
           <router-link :to="{ name: item, params: {} }">{{item}}</router-link>
          </li>
        </ul>
          <ul class="nav-section nav-section__contact">
            <li><a href="http://twitter.com/mayer_ben" class="fa fa-twitter" rel="me">Twitter</a></li>
            <li><a href="http://instagram.com/mayer_ben" class="fa fa-instagram" rel="me">Instagram</a></li>
        </ul>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      navigation: ['Home', 'About'],
    };
  },
};
</script>

<style lang="sass">
  @import './style/main';
</style>

