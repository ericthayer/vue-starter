<template>
  <section class="edit-in-place">
    <div v-if="!inEditMode">{{ value }}</div>
    <input-number
      v-if="inEditMode"
      :value="value"
      @input="handleInput"
    ></input-number>
    <icon-button
      :icon="iconType"
      @click="switchToEditMode"
      data-test-toggle-input-edit
    ></icon-button>
    <icon-button
      v-if="inEditMode"
      icon="check_circle"
      @click="saveChange"
      data-test-save-input-edit
    ></icon-button>
  </section>
</template>

<script>
import IconButton from "./IconButton";
import InputNumber from "./InputNumber.vue";

export default {
  name: "EditInPlaceNumber",
  props: {
    value: Number
  },
  data() {
    return {
      inEditMode: false,
      editedValue: this.value
    };
  },
  components: {
    IconButton,
    InputNumber
  },
  computed: {
    iconType() {
      return this.inEditMode ? "clear" : "edit";
    }
  },
  methods: {
    switchToEditMode() {
      this.inEditMode = !this.inEditMode;
    },
    saveChange() {
      this.$emit("saved", this.editedValue);
      this.inEditMode = false;
    },
    handleInput(value) {
      this.editedValue = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-in-place {
  --mdc-icon-button-size: 1rem;
  --mdc-icon-size: 1rem;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  align-items: center;
  justify-content: center;

  div {
    // margin-top: 0.6rem;
    padding-right: 0.5rem;
  }
}
.mdc-icon-button {
  padding: 0;
}
</style>
