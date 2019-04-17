<template>
  <div class="site__wrapper">
    <header class="site__header navbar" role="navigation">
      <logo class="site__title" name="Vue Logo" />
      <nav class="site__nav">
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>

    <section class="site__content">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      items: [
        {
          title: 'Map',
          icon: 'map',
          to: { name: 'index' }
        },
        {
          title: 'About',
          icon: 'lightbulb',
          to: { name: 'about' }
        }
      ]
    }
  }
}
</script>

<style type="text/css">
.site__wrapper {
  font-family: $font-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text-main;
  padding-top: 100px;
}
.site__header {
  display: block;
  position: fixed;
  top: 20px;
  left: 10%;
  right: 10%;
  padding: 0.5em;
  background: #fff;
  border: 1px solid #f4f4f4;
  z-index: 10;
}
.site__title {
  margin: 0;
  font-weight: 100;
  font-size: 1.5em;
  text-decoration: none;
}
.site__nav {
  display: flex;
}
.site__nav a {
  position: relative;
  text-decoration: none;
}
.site__nav .router-link-exact-active:after {
  content: '';
  display: block;
  margin: auto;
  width: 3px;
  height: 3px;
  border-radius: 1000px;

  background-color: currentColor;
}
.nav-section {
  display: inline-block;
  margin: auto;
}
</style>
