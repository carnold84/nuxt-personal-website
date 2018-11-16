<template>
  <transition name="reveal">
    <div class="wrapper">
      <h1 class="page-title">Code / Experiments and Projects</h1>
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
  async asyncData({ app, params }) {
    let data = await app.$axios.$post('http://localhost:1337/graphql', {
      query: `{
        codes(where: {
          visible: true
        }) {
          _id
          codetags {
            title
          }
          description
          slug
          source_url
          source_origin
          title
          url
        }
      }`
    });

    const code = data.data.codes;
    return {
      code,
      selectedProject: code[0]._id
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

.page-title {
  color: #bbbbbc;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  margin: 0 0 60px;
  text-transform: uppercase;

  .no-js & {
    margin: 0 0 30px;
  }
}
</style>
