<template>
  <div class="project">
    <h2 
      :class="{title: true, 'is-selected': isSelected}" 
      @click="onTitleClick">
      {{ title }}
    </h2>
    <div 
      v-if="isSelected" 
      class="content">
      <h2 class="content-title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <p class="meta">{{ formatTags(codetags) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeItem',
  props: {
    codetags: {
      default: () => {
        return [];
      },
      type: Array
    },
    description: {
      default: '',
      type: String
    },
    id: {
      required: true,
      type: String
    },
    isSelected: {
      default: false,
      type: Boolean
    },
    onClick: {
      required: true,
      type: Function
    },
    slug: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  methods: {
    formatTags(tags) {
      tags = tags.map(tag => {
        return tag.title;
      });
      return tags.join(', ');
    },
    formatLink(slug) {
      return `/code/${slug}`;
    },
    onTitleClick() {
      this.onClick(this.id);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/css/_variables.scss';
$title-width: 40%;
$content-width: 60%;

.project {
  color: #ffffff;
  display: flex;
  flex-shrink: 0;
  margin: 0 0 60px;
  width: 100%;

  .no-js & {
    flex-direction: column;
    margin: 0 0 30px;

    .title {
      display: none;
    }

    .content {
      width: 100%;
    }
  }

  .title {
    color: $secondary-text-color;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 2rem;
    font-weight: 300;
    line-height: 2rem;
    margin: 0;
    padding: 0 60px 0 0;
    width: $title-width;

    &.is-selected {
      color: $primary-text-color;
    }

    &:hover {
      color: $primary-text-color;
    }
  }

  .content {
    flex-direction: column;
    flex-shrink: 0;
    left: $title-width;
    position: absolute;
    top: 0;
    width: $content-width;

    .no-js & {
      position: relative;
      display: block;
    }

    .content-title {
      flex-shrink: 0;
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.4rem;
      margin: 0 0 20px;
      width: 100%;

      .no-js & {
        margin: 0 0 10px;
      }
    }

    .description {
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 1.6rem;
      margin: 0 0 10px;
    }

    .meta {
      color: #bbbbbc;
      font-size: 1.1rem;
      line-height: 1.4rem;
      font-weight: 300;
    }
  }
}
</style>
