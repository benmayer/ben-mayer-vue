<template>
  <div class="site__wrapper">
    <header 
      class="site__header navbar" 
      role="navigation"
    >
      <Logo />
      <Nav 
        v-bind:items=pages
      ></Nav>
    </header>

    <section class="site__content">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Nav from '~/components/Nav'

export default {
  components: {
    Logo,
    Nav,
  },
  data() {
    return {
      pages: [
        {
          title: 'Home',
          to: { name: 'index' }
        },
        {
          title: 'About',
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
}
.site__header {
  display: flex;
  position: fixed;
  top: 20px;
  left: 10%;
  right: 10%;
  padding: 0.5em;
  background: #fff;
  border: 1px solid #f4f4f4;
  background-color: rgba(255,255,255,0.99);
  box-shadow: 0px 3px 8px -4px rgba(0,0,0,0.15);
  z-index: 10;

  justify-content: space-between;
  align-items: baseline;
}

</style>
