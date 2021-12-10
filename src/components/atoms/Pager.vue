<template>
  <pagination
    v-model="page"
    :records="this.$store.getters.getSearchedKeywords.length"
    :per-page="this.$store.state.keywordsPerPage"
    :options="paginationOptions"
    @paginate="paginate($event)"
    @nextChunk="nextChunk($event)"
  />
</template>

<script>
import Pagination from "vue-pagination-2";

export default {
  name: "Pager",
  components: {
    Pagination
  },
  data() {
    return {
      page: 1,
      paginationOptions: {
        chunk: 5
      }
    };
  },
  methods: {
    paginate(pageNumber) {
      this.$emit("pageNumberChanged", pageNumber);
    },
    nextChunk(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss">
.VuePagination {
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .pagination {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding-left: 0;
  }

  .page-item {
    height: var(--page-item-size);
    width: var(--page-item-size);

    &.disabled .page-link {
      background-color: transparent;
    }
  }

  .page-link {
    background-color: transparent;
    height: var(--page-item-size);
    width: var(--page-item-size);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.15rem 0.5rem;

    &:not(.active) {
      border: 0;
    }

    &.active {
      background: var(--color-link--primary);
      // border-radius: 50%;
      color: currentColor;
    }

    &:hover,
    &:focus {
      cursor: pointer;
    }
  }

  &__count.VuePagination__count {
    color: var(--color-grey);
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }
}
</style>
