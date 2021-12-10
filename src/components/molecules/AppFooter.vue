<template>
  <footer class="app__footer">
    <div
      class="container  d-flex flex-wrap align-items-center justify-content-between py-2"
    >
      <small>&copy; {{ this.date.getFullYear() }} Health Scholars</small>
      <small class="motto">Future-ready. Real-to-Life Training.</small>
      <div class="footer-nav">
        <a href="https://simnext.zendesk.com/hc/en-us/" class="mx-1"
          ><small>Help Desk</small></a
        >
        <span class="px-1"></span>
        <a href="https://simnext.zendesk.com/hc/en-us/requests/new" class="mx-1"
          ><small>Report Bug</small></a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
  data() {
    return {
      date: new Date()
    };
  }
};
</script>
<style lang="scss">
.app__footer {
  border-top: 1px solid var(--color-grey-light);
  color: var(--color-grey-medium);
  font-size: 0.875em;
  grid-column: 1/3;
  grid-row: 3/3;

  @media (max-width: 540px) {
    .container {
      flex-direction: column;
      flex-wrap: nowrap !important;
      justify-content: center !important;
    }
  }
}

.footer-nav {
  padding-left: 1rem;

  a {
    color: var(--color-grey-medium);
    text-decoration: none;
  }
}

.motto {
  color: #222;
  font-size: 1em;
  font-style: italic;
  padding-left: 0.5rem;
}
</style>
