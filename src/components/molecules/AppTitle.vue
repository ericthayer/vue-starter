<template>
  <div class="app__title d-flex">
    <div class="app__title-logo d-flex align-items-center px-3">
      <img
        src="../../assets/media/images/healthscholars-tree-icon-dark-green.svg"
        alt=""
        class="hs-logo flex-grow-1"
      />
    </div>
    <p class="m-0 my-auto ps-3 fs-6" title="Configuration Assistance Tool">
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="scss" scoped>
abbr[title] {
  text-decoration: none;
}

.app__title-logo {
  background: #eee;
  box-shadow: inset -1px 0 0 #ddd;
  min-height: 50px;
}

.hs-logo {
  height: 30px;
}
</style>
