<template>
  <div class="site__nav">
    <ul class="menu-list">
      <li 
        class="menu-list-item"
        v-for="(item, key) of items" 
        :key="key"
      >
        <nuxt-link 
          :to="item.to" 
          exact-active-class="is-active"
        >
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>

<style>
.logo {
  display: block;
}
.site__nav {
  display: flex;
}
.site__nav a {
  display: flex;
  padding: 0.5em;
  min-width: 6em;
  text-decoration: none;
  justify-content: space-evenly;

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
.site__section {
  width: 100%;
  height:600px;
  background:#efefef;
  padding-top:120px;
}
.menu-list {
  display: flex;
  padding: 0;
  list-style-type: none;
}
.menu-list-item {
  display: flex;
  justify-content: space-evenly;
}
</style>
