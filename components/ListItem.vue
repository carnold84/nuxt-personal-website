<template>
  <nuxt-link 
    :to="to" 
    class="link">
    <span class="main-link">{{ title }}</span>
    <span class="sub-links">
      <span 
        v-for="tag in tags" 
        :key="tag._id" 
        class="sub-link">{{ tag.title }}</span>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    to: {
      required: true,
      type: String
    },
    tags: {
      default: () => {
        return [];
      },
      type: Array
    },
    title: {
      required: true,
      type: String
    }
  }
};
</script>


<style scoped lang="scss">
@import '@/assets/css/_breakpoint.scss';

.link {
  display: flex;
  align-items: flex-end;
  text-decoration: none;

  @include breakpoint('mobile') {
    margin: 0 0 20px;
  }

  @include breakpoint('tablet') {
    margin: 0 0 30px;
  }
}
.main-link {
  color: rgba(0, 0, 0, 0.8);
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.8rem;
  text-decoration: none;

  @include breakpoint('mobile') {
    margin: 0;
  }

  @include breakpoint('tablet') {
    margin: 0 10px 0 0;
  }
}
.sub-links {
  @include breakpoint('mobile') {
    display: block;
    margin: 3px 0 0;
  }

  @include breakpoint('tablet') {
    &:before {
      color: rgba(0, 0, 0, 0.3);
      content: '/ ';
    }
  }
}
.sub-link {
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.1rem;
  font-weight: 400;
  text-decoration: none;
  text-transform: lowercase;

  &:not(:last-child):after {
    content: ',';
  }

  @include breakpoint('mobile') {
    display: block;
    margin: 3px 0 0;
  }

  @include breakpoint('tablet') {
    display: inline;
    margin: 0 8px 0 0;
  }
}
</style>
