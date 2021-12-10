<template>
  <mwc-textfield
    type="number"
    :label="label"
    :value="value"
    :placeholder="placeholder"
    min="0"
    @input="handleInput($event.target.value)"
    data-test-input-required-to-pass
  ></mwc-textfield>
</template>

<script>
import "@material/mwc-textfield";

export default {
  name: "Textfield",
  props: {
    label: String,
    value: Number,
    placeholder: String
  },
  methods: {
    handleInput(input) {
      this.$emit("input", input);
    }
  }
};
</script>
