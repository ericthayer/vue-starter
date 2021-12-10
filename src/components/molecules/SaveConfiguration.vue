<template>
  <button
    v-if="isClickable"
    type="button"
    class="btn btn-primary"
    :disabled="isDisabled"
    @click="handleSaveConfiguration"
  >
    Save
  </button>
</template>
<script>
export default {
  name: "SaveConfiguration",
  components: {},
  data() {
    return {
      isClickable: true
    };
  },
  computed: {
    isDisabled() {
      return true;
    }
  },
  methods: {
    handleSaveConfiguration() {
      this.$emit("saveConfiguration");
      // this.isClickable = false
    }
  }
};
</script>
<style lang="scss">
button[disabled] {
  cursor: not-allowed;
}

@media (max-width: 320px) {
  .page__header .btn {
    width: 100vw;
  }
}
</style>
