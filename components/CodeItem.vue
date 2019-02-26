<template>
  <div class="code-item">
    <nuxt-link
      :class="{title: true, 'is-selected': isSelected}"
      :to="formatLink(slug)">
      <h2>{{ title }}</h2>
    </nuxt-link>
    <div
      v-if="isSelected"
      class="content">
      <h2 class="content-title">{{ title }}</h2>
      <p class="content-description">{{ description }}</p>
      <p class="content-meta"><span>Tags:</span> {{ formatTags(codetags) }}</p>
      <a
        :href="url"
        class="view-btn"
        rel="noopener"
        target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24">
          <path
            d="M0 0h24v24H0z"
            fill="none"/>
          <path
            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
          />
        </svg>
        <span class="text">View</span>
      </a>
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
    source_origin: {
      default: null,
      type: String
    },
    source_url: {
      default: null,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    url: {
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
@import '@/assets/css/_breakpoint.scss';

.code-item {
  --title-width: 40%;
  --content-width: 60%;

  color: var(--text-color-alt2);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 0 34px;
  width: 100%;

  @include breakpoint('mobile') {
    --title-width: 100%;
    --content-width: 100%;
    margin: 0 0 20px;
  }

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
    color: var(--text-color-alt2);
    cursor: pointer;
    display: block;
    flex-shrink: 0;
    margin: 0;
    padding: 0 60px 0 0;
    transition: all 500ms ease;
    width: var(--title-width);

    h2 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 2.8rem;
    }

    &.is-selected {
      color: var(--text-color-alt1);
    }

    &:hover {
      color: var(--text-color-alt1);
    }

    @include breakpoint('mobile') {
      margin: 0 0 10px;
      padding: 0;
    }
  }

  .content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    left: var(--title-width);
    position: absolute;
    top: 0;
    width: var(--content-width);

    .no-js & {
      position: relative;
      display: block;
    }

    @include breakpoint('mobile') {
      left: 0;
      position: relative;
      display: block;
    }
  }

  .content-title {
    color: var(--text-color-alt1);
    flex-shrink: 0;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin: 0 0 10px;
    width: 100%;

    .no-js & {
      margin: 0 0 10px;
    }

    @include breakpoint('mobile') {
      display: none;
    }
  }

  .content-description {
    color: var(--text-color-alt2);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;
    margin: 0 0 10px;
  }

  .content-meta {
    span {
      color: var(--text-color-alt3);
    }

    color: var(--text-color-alt2);
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.4rem;
    margin: 0 0 30px;

    @include breakpoint('mobile') {
      margin: 0 0 15px;
    }
  }

  .view-btn {
    align-items: center;
    background-color: transparent;
    border: none;
    color: var(--text-color-alt1);
    display: flex;
    fill: var(--text-color-alt1);
    font-size: 1.2rem;
    font-weight: 400;
    justify-content: center;
    line-height: 1.4rem;

    svg {
      margin: 1px 8px 0 0;
    }

    &:hover {
      color: var(--color1);
      fill: var(--color1);
    }

    @include breakpoint('mobile') {
      display: inline-flex;
    }
  }
}
</style>
