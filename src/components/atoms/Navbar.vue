<template>
  <mwc-top-app-bar>
    <div slot="title">
      <router-link to="/">{{ title }}</router-link>
    </div>
  </mwc-top-app-bar>
</template>

<script>
import "@material/mwc-top-app-bar";
export default {
  name: "top-navbar",
  props: {},
  computed: {
    title() {
      return this.$store.state.appTitle;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
