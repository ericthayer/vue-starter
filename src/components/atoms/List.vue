<template>
  <mwc-list>
    <mwc-list-item v-for="(item, index) in items" :key="item.$index">
      <icon-button
        :icon="icon"
        @click="handleDelete(item, index)"
        data-test-delete-list-item
      ></icon-button>
      <span class="item">{{ item }}</span>
    </mwc-list-item>
  </mwc-list>
</template>

<script>
import "@material/mwc-list";
import IconButton from "./IconButton";

export default {
  name: "List",
  components: {
    IconButton
  },
  props: {
    items: Array,
    icon: String
  },
  methods: {
    handleDelete(item, index) {
      this.$emit("delete", {
        item,
        index
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  line-height: 3.5rem;
}
</style>
