<template>
  <div class="wrapper">
    <div class="content">
      <section class="section">
        <h1 class="heading">Chris Arnold</h1>
        <h2 class="sub-heading">UI Designer and Developer</h2>
        <p class="paragraph">I'm Chris Arnold, a designer and developer from Christchurch, New Zealand. I like to write clean, elegant code and partner it with clean, beautiful design and well thought out, user-friendly interfaces. I work mainly in Javascript, HTML and CSS and enjoy exploring new frameworks, tools and, mostly, new  paradigms in code, design and UX.</p>
      </section>
    </div>
  </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue';

export default {
  async asyncData({ app }) {
    let data = await app.$axios.$get(
      `http://localhost:1337/code?_sort=order:asc`
    );
    return { code: data };
  },
  components: {
    ListItem
  },
  head: {
    title: 'Chris Arnold - Designer and Developer',
    meta: [{ hid: 'description', name: 'description', content: '' }]
  },
  transition: {
    mode: 'in-out'
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/_variables.scss';

.wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 1340px;
  padding: 0 220px;
}

.heading {
  font-size: 5rem;
  font-weight: 400;
  line-height: 5.5rem;
  margin: 0 0 15px;
}

.sub-heading {
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin: 0 0 25px;
}

.paragraph {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  margin: 0 0 10px;
  text-align: justify;
}

.section {
  margin: 0 0 40px;
}
</style>
