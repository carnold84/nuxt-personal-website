<template>
  <transition name="reveal">
    <div class="wrapper">
      <header class="page-header">
        <h1 class="page-title">Code / Experiments and Projects</h1>
        <nuxt-link
          class="close-button"
          to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </nuxt-link>
      </header>
      <div class="container">
        <code-item
          v-for="project in code"
          :codetags="project.codetags"
          :description="project.description"
          :id="project._id"
          :is-selected="isSelected(project._id)"
          :key="project._id"
          :on-click="onCodeClick"
          :slug="project.slug"
          :title="project.title"/>
      </div>
    </div>
  </transition>
</template>

<script>
import CodeItem from '~/components/CodeItem.vue';

export default {
  async asyncData({ params, store }) {
    if (store.state.code === undefined) {
      await store.dispatch('getCode');
    }

    const code = store.state.code;

    let selectedProject = undefined;

    if (code && code.length > 0) {
      selectedProject = code[0]._id;

      if (params.slug) {
        const project = code.filter(item => {
          return item.slug === params.slug;
        });
        selectedProject = project[0]._id;
      }
    }

    return {
      code,
      selectedProject
    };
  },
  components: {
    CodeItem
  },
  methods: {
    isSelected(id) {
      return this.selectedProject === id;
    },
    onCodeClick(id) {
      this.selectedProject = id;
    }
  },
  transition: {
    mode: 'in-out'
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/_variables.scss';

.wrapper {
  background-color: $primary-color-alt;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
  padding: 60px;
  position: absolute;
  transition: all 500ms ease-in-out;
  width: 100%;
  z-index: 1;

  &.page-enter-active,
  &.page-leave-active {
    clip-path: circle(200% at 100% 0);
  }

  &.page-enter,
  &.page-leave-to {
    clip-path: circle(25px at 100% 0);
  }

  .no-js & {
    margin: 0 0 40px;
  }
}

.container {
  position: relative;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 60px;
  width: 100%;

  .no-js & {
    margin: 0 0 30px;
  }
}

.page-title {
  color: $secondary-alt-text-color;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.close-button {
  fill: $secondary-alt-text-color;

  &:hover {
    fill: $primary-alt-text-color;
  }
}
</style>
