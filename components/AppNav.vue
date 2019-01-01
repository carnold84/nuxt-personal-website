<template>
  <ul class="app-nav">
    <li class="nav-item">
      <nuxt-link
        to="/code"
        title="Code"
      >Code</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNav'
};
</script>

<style scoped lang="scss">
.app-nav {
  display: flex;
  list-style: none;
}

.nav-item {
  a,
  a:link,
  a:visited {
    color: var(--text-color2);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;

    &:hover {
      color: var(--color1);
    }
  }
}
</style>
