<template>
  <div class="wrapper">
    <app-header/>
    <div class="content">
      <section class="section">
        <h1 class="heading">{{ home.title }}</h1>
        <p class="paragraph">{{ home.description }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
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
    /* if (store.state.home === undefined) {
      await store.dispatch('getHome');
    } */

    return {
      home: store.state.home,
      site: store.state.site
    };
  },
  components: {
    AppHeader,
    ListItem
  },
  head() {
    return {
      title: `${this.site.meta.title} - ${this.home.meta.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.home.meta.description
        }
      ]
    };
  },
  transition: {
    mode: 'in-out'
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/_variables.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  max-width: 1340px;
  padding: 0 220px;

  @include breakpoint('mobile') {
    padding: 0 60px;
  }

  @include breakpoint('tablet') {
    padding: 0 100px;
  }
}

.heading {
  font-size: 6rem;
  font-weight: 700;
  line-height: 6rem;
  margin: 0 0 25px;
}

.sub-heading {
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin: 0 0 25px;

  @include breakpoint('mobile') {
    font-size: 5.2vw;
    line-height: 5.2vw;
  }
}

.paragraph {
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.2rem;
  margin: 0 0 10px;
  text-align: justify;

  @include breakpoint('mobile') {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  @include breakpoint('tablet') {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
}

.section {
  margin: 0 0 40px;
}
</style>
