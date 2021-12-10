<template>
  <div id="app" class="app__container d-flex">
    <div class="content-wrap">
      <app-alert
        :alertLevel="$store.state.alert.level"
        :alertTitle="$store.state.alert.title"
        :alertMessage="$store.state.alert.message"
        :show="$store.state.alert.active"
        @closeAlert="closeAlert"
      />
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
            <save-configuration disabled="" />
          </div>
        </div>
      </header>

      <main id="main" class="main-content">
        <router-view />
      </main>
      <app-footer />
    </div>
  </div>
</template>

<script>
import "./assets/scss/styles.scss";

import AppTitle from "./components/molecules/AppTitle.vue";
import AppAlert from "./components/molecules/AppAlert.vue";
import AppFooter from "./components/molecules/AppFooter.vue";
import SaveConfiguration from "./components/molecules/SaveConfiguration.vue";

export default {
  name: "AppName",
  components: {
    AppTitle,
    AppAlert,
    SaveConfiguration,
    AppFooter
  },
  methods: {
    closeAlert() {
      this.$store.dispatch("unsetMessage");
    }
  }
};
</script>

<style lang="scss"></style>
