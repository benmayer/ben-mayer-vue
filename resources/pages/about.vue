{{{{raw}}}}
<template>
  <div class="site-page page__about">
    <h1>{{ msg }}</h1>
  </div>
</template>
{{{{/raw}}}}
<script>
export default {
  asyncData ({ req }) {
    return {
      name: 'About',
      msg: `About Me - rendered ${req ? 'server' : 'client'}-side`
    }
  },
  head () {
    return {
      title: `Ben Mayer - About Page (${this.name}-side)`
    }
  }
}
</script>
