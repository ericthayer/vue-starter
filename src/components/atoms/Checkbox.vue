<template>
  <mwc-formfield :label="label">
    <mwc-checkbox
      :name="name"
      :label="label"
      :value="value"
      :checked="isChecked"
      @change="handleChange"
    ></mwc-checkbox>
  </mwc-formfield>
</template>

<script>
import "@material/mwc-formfield";
import "@material/mwc-checkbox";
import "@material/mwc-ripple";

export default {
  name: "Checkbox",
  props: {
    label: String,
    name: String,
    value: String,
    checked: Boolean
  },
  data() {
    return {
      isChecked: this.checked
    };
  },
  methods: {
    handleChange() {
      this.isChecked = !this.isChecked;
      const data = {
        isChecked: this.isChecked,
        value: this.value
      };
      this.$emit("change", data);
    }
  }
};
</script>
