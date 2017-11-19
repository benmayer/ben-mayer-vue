<template>
  <!-- Default Tempalte -->
  <div class="site__wrapper">
    <header class="site__header">
      <h1 class="site__title"><a href="/">ben mayer</a></h1>
      <div class="site__nav">
        <ul class="nav-section nav-section__pages">
          <li v-for="item in navigation">
           <nuxt-link :to="{ name: item.url }">{{item.name}}</nuxt-link>
          </li>
        </ul>
          <ul class="nav-section nav-section__contact">
            <li><a href="http://twitter.com/mayer_ben" class="fa fa-twitter" rel="me">Twitter</a></li>
            <li><a href="http://instagram.com/mayer_ben" class="fa fa-instagram" rel="me">Instagram</a></li>
        </ul>
      </div>
    </header>
    <nuxt />
    <site-footer/>
</div>
</template>


<script>
import SiteFooter from '~/components/Footer.vue'

export default {
  name: 'app',
  components: {
    SiteFooter
  },
  data () {
    return {
      navigation: [{name: 'Home', url: 'index'}, {name: 'About', url: 'about'}]
    }
  }
}
</script>

<style >
  @import '../assets/css/main.css';
</style>
<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: #744d82;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #744d82;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #744d82;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
