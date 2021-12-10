<template>
  <mwc-button
    :label="label"
    :disabled="disabled"
    @click="handleClick"
  ></mwc-button>
</template>

<script>
import "@material/mwc-button";

export default {
  name: "CustomButton",
  props: {
    disabled: Boolean,
    value: String,
    label: String
  },
  methods: {
    handleClick() {
      this.$emit("click", this.value);
    }
  }
};
</script>

<style lang="scss">
.mdc-button {
  --mdc-typography-button-text-transform: lowercase;
}
</style>
