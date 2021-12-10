<template>
  <mwc-formfield :label="label">
    <mwc-radio
      :name="name"
      :label="label"
      :value="value"
      :checked="checked"
      @change="handleChange($event.target.checked)"
    ></mwc-radio>
  </mwc-formfield>
</template>

<script>
import "@material/mwc-formfield";
import "@material/mwc-radio";
import "@material/mwc-ripple";

export default {
  name: "Radio",
  props: {
    label: String,
    name: String,
    value: String,
    checked: Boolean
  },
  methods: {
    handleChange(isChecked) {
      const data = {
        isChecked,
        value: this.value
      };
      this.$emit("change", data);
    }
  }
};
</script>
