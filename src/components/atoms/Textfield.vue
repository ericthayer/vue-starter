<template>
  <mwc-textfield
    :label="label"
    @input="handleInput($event.target.value)"
    :value="value"
    :placeholder="placeholder"
    data-test-search-keywords
  ></mwc-textfield>
</template>

<script>
import "@material/mwc-textfield";

export default {
  name: "Textfield",
  props: {
    label: String,
    value: String,
    placeholder: String
  },
  methods: {
    handleInput(input) {
      this.$emit("input", input);
    }
  }
};
</script>
