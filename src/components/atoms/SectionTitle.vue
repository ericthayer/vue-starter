<template>
  <h2 :class="calculateClasses" data-test-section-title><slot></slot></h2>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    center: Boolean
  },
  computed: {
    calculateClasses() {
      let classes = "";
      if (this.center) classes += "center";
      if (this.h3) classes += "h3";

      return classes;
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.7rem;
  width: 100%;
}

.center {
  text-align: center;
}
</style>
