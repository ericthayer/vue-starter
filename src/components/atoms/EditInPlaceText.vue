<template>
  <section class="edit-in-place">
    <icon-button :icon="iconType" @click="switchToEditMode"></icon-button>
    <div v-if="!inEditMode">{{ value }}</div>
    <textfield
      v-if="inEditMode"
      :value="value"
      @input="handleInput"
    ></textfield>
    <icon-button
      v-if="inEditMode"
      icon="check_circle"
      @click="saveChange"
    ></icon-button>
  </section>
</template>

<script>
import IconButton from "./IconButton";
import Textfield from "./Textfield.vue";

export default {
  name: "EditInPlaceText",
  props: {
    value: String
  },
  data() {
    return {
      inEditMode: false,
      editedValue: this.value
    };
  },
  components: {
    IconButton,
    Textfield
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
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;

  div {
    margin-top: 0.6rem;
  }
}
</style>
