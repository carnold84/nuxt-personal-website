<template>
  <transition name="reveal">
    <div class="wrapper">
      <header class="page-header">
        <div class="content-left">
          <div class="logo">
            <app-logo/>
          </div>
          <h1 class="page-title">
            Code
            <span class="sub-title">/ Experiments and Projects</span>
          </h1>
        </div>
        <nuxt-link 
          class="close-button" 
          to="/">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </nuxt-link>
      </header>
      <div class="container">
        <code-item
          v-for="project in code.data"
          :codetags="project.codetags"
          :description="project.description"
          :id="project._id"
          :is-selected="isSelected(project._id)"
          :key="project._id"
          :on-click="onCodeClick"
          :slug="project.slug"
          :source-url="project.source_url"
          :source-origin="project.source_origin"
          :title="project.title"
          :url="project.url"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import CodeItem from '~/components/CodeItem.vue';

export default {
  async asyncData({ params, store }) {
    /* if (store.state.code === undefined) {
      await store.dispatch('getCode');
    } */

    const code = store.state.code;

    let selectedProject = undefined;

    if (code && code.data && code.data.length > 0) {
      selectedProject = code.data[0]._id;

      if (params.slug) {
        const project = code.data.filter(item => {
          return item.slug === params.slug;
        });
        selectedProject = project[0]._id;
      }
    }

    return {
      code,
      selectedProject,
      site: store.state.site
    };
  },
  components: {
    AppLogo,
    CodeItem
  },
  head() {
    return {
      title: `${this.site.meta.title} - ${this.code.meta.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.code.meta.description
        }
      ]
    };
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
@import '@/assets/css/_breakpoint.scss';

.wrapper {
  background-color: var(--color-alt1);
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding: 60px;
  position: absolute;
  transition: all 500ms ease-in-out;
  width: 100%;
  z-index: 1;

  @include breakpoint('mobile') {
    padding: 30px;
  }

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

  @include breakpoint('mobile') {
    padding: 0 30px;
  }
}

.page-header {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  margin: 0 0 60px;
  width: 100%;

  .no-js & {
    margin: 0 0 30px;
  }

  .logo {
    margin: 0 30px 0 0;
  }

  .content-left {
    align-items: center;
    display: flex;
    fill: var(--text-color-alt1);
  }
}

.page-title {
  color: var(--text-color-alt1);
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  .sub-title {
    color: var(--text-color-alt2);

    @include breakpoint('mobile') {
      display: none;
    }
  }
}

.close-button {
  align-items: center;
  display: flex;
  fill: var(--text-color-alt2);

  &:hover {
    fill: var(--text-color-alt1);
  }
}
</style>
