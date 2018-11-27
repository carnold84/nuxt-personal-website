<template>
  <ul class="app-nav">
    <li class="nav-item"><nuxt-link to="/code">Code</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  name: 'AppNav'
};
</script>

<style scoped lang="scss">
@import '@/assets/css/_variables.scss';

.app-nav {
  display: flex;
  list-style: none;
}

.nav-item {
  a,
  a:link,
  a:visited {
    color: $text-color2;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      color: $color1;
    }
  }
}
</style>
