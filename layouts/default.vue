<template>
  <div id="app-wrapper">
    <app-header />
    <div class="app-content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-family: 'Open Sans', Roboto, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: 'Montserrat', Roboto, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}

a,
a:link,
a:visited {
  text-decoration: none;
}

#app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;

  .app-content {
    flex-grow: 1;
  }
}

/* #__layout {
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 0;
} */
</style>
