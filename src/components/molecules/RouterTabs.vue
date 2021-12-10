<template>
  <div class="router-tabs d-flex ms-auto">
    <div class="container d-flex p-0">
      <router-link
        :to="requiredActions"
        class="btn btn-text"
        data-test-tab-button-required
        >Required</router-link
      >
      <router-link
        :to="availableActions"
        class="btn btn-text"
        data-test-tab-button-available
        >Available</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "RouterTabs",
  computed: {
    clientId() {
      return this.$route.query.clientId;
    },
    courseId() {
      return this.$route.query.courseId;
    },
    requiredActions() {
      return `/required-actions?clientId=${this.clientId}&courseId=${this.courseId}`;
    },
    availableActions() {
      return `/available-actions?clientId=${this.clientId}&courseId=${this.courseId}`;
    }
  }
};
</script>
<style lang="scss">
.router-tabs {
  background: #fff;

  .btn:not(.router-link-active) {
    color: #999;
  }

  .btn {
    &:hover,
    &:focus,
    &.router-link-active {
      box-shadow: inset 0 0 30px 0 var(--color-brand-green-dark);
      color: var(--color-grey-light);
      background: var(--color-brand-green-dark);
    }
  }
}

.router-link-active {
  background: #ddd;
  border: 0;
}
</style>
