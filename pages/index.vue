<template>
  <div class="wrapper">
    <div class="content">
      <section class="section">
        <h1 class="heading">{{ home.title }}</h1>
        <h2 class="sub-heading">{{ home.sub_title }}</h2>
        <p class="paragraph">{{ home.description }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue';

export default {
  /* async asyncData({ app }) {
    let data = await app.$axios.$post('http://localhost:1337/graphql', {
      query: `{
        homedescriptions {
          _id
          description
          sub_title
          title
        }
      }`
    });
    const homedescription = data.data.homedescriptions[0];
    return {
      homedescription
    };
  }, */
  async asyncData({ params, store }) {
    if (store.state.home === undefined) {
      await store.dispatch('getHome');
    }

    return {
      home: store.state.home
    };
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
