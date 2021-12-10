<template>
  <mwc-icon-button class="icon-button" @click="handleClick">
    <add-icon v-if="isAdd"></add-icon>
    <edit-icon v-if="isEdit"></edit-icon>
    <trash-icon v-if="isTrash"></trash-icon>
    <save-icon v-if="isSave"></save-icon>
    <clear-icon v-if="isClear"></clear-icon>
  </mwc-icon-button>
</template>

<script>
import "@material/mwc-icon-button";
import EditIcon from "./EditIcon";
import TrashIcon from "./TrashIcon";
import SaveIcon from "./SaveIcon";
import ClearIcon from "./ClearIcon";
import AddIcon from "./AddIcon.vue";

export default {
  name: "IconButton",
  props: {
    icon: String,
    disabled: Boolean
  },
  components: {
    EditIcon,
    TrashIcon,
    SaveIcon,
    ClearIcon,
    AddIcon
  },
  computed: {
    isAdd() {
      return this.icon == "add";
    },
    isEdit() {
      return this.icon == "edit";
    },
    isTrash() {
      return this.icon == "trash";
    },
    isSave() {
      return this.icon == "check_circle";
    },
    isClear() {
      return this.icon == "clear";
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped></style>
