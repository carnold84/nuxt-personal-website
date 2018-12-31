<template>
  <div id="app-wrapper">
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
:root {
  --color1: #a8c10a;
  --color-alt1: #1c2227;
  --text-color1: #333333;
  --text-color2: #666666;
  --text-color3: #999999;
  --text-color-alt1: #ffffff;
  --text-color-alt2: #a6b2b9;
  --text-color-alt3: #627077;
}

html {
  box-sizing: border-box;
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;
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
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;
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
