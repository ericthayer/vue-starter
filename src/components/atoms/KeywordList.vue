<template>
  <div class="keyword-list d-flex flex-wrap">
    <a
      v-for="keyword in keywords"
      :key="keyword.id"
      href="#"
      class="keyword px-2 py-1"
      >{{ keyword.id }}</a
    >
  </div>
</template>
<script>
export default {
  name: "KeywordList",
  components: {},
  props: {
    keywords: Array
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss">
.keyword-list {
  gap: 1.5rem;
}
.keyword {
  background: var(--color-grey-light);
  border-radius: 4px;
  color: var(--color-link);
  font-family: monospace;
  // font-size: 1rem;
  font-weight: 500;
  line-height: 1.1;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover,
  &:focus {
    background: var(--color-link);
    color: var(--color-grey-light);
  }
}
</style>
