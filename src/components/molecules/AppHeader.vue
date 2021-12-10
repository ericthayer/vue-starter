<template>
  <header class="page__header d-flex py-0">
    <div
      class="
          container-fluid
          d-flex
          flex-wrap
          justify-content-between
          px-0
        "
    >
      <app-title :title="$store.state.appTitle" />

      <div class="d-flex">
        <!-- <save-configuration disabled="" hidden="hidden" /> -->
      </div>
    </div>
  </header>
</template>

<script>
import AppTitle from "./AppTitle.vue";
// import SaveConfiguration from "./SaveConfiguration.vue";

export default {
  name: "AppHeader",
  components: { AppTitle },
  data() {
    return {};
  }
};
</script>
<style lang="scss"></style>
