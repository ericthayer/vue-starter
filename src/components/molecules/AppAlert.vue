<template>
  <transition name="fade">
    <div
      v-show="show"
      class="app__alert ps-3 pe-2 pt-2 pb-2 mx-auto"
      :class="calculateAlertLevelClass"
    >
      <div class="d-flex flex-column pt-1 me-4">
        <h2 class="app__alert-title mb-1">{{ alertTitle }}</h2>
        <p class="app__alert-message mb-0">{{ alertMessage }}</p>
      </div>
      <icon-button
        icon="clear"
        class="button--close"
        @click="handleAlertClose($event)"
      />
    </div>
  </transition>
</template>

<script>
import IconButton from "../atoms/IconButton.vue";

export default {
  name: "AppAlert",
  props: {
    alertTitle: String,
    alertMessage: String,
    alertLevel: String,
    show: Boolean
  },
  components: {
    IconButton
  },
  computed: {
    calculateAlertLevelClass() {
      const className = this.alertLevelMap[this.alertLevel];
      return className ? className : this.alertLevelMap.general;
    }
  },
  data() {
    return {
      alertLevelMap: {
        warning: "warning",
        general: "general",
        success: "success",
        danger: "danger"
      },
      transitionName: "fade-enter-active"
    };
  },
  methods: {
    handleAlertClose(event) {
      this.$emit("closeAlert", event);
    }
  },
  watch: {
    alertMessage: function() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.app__alert {
  background: var(--color-grey, #292727);
  color: var(--color-grey-light);
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  grid-column: 1/3;
  grid-row: 1/1;
  justify-content: space-between;
  border-radius: 10px;
  flex-grow: 1;
  // margin-bottom: -4rem;
  max-width: 400px;
  position: absolute;
  top: clamp(1rem, 4vw, 5vw);
  top: 65px;
  right: clamp(1rem, 0.5vmin, 2.5vmin);
  z-index: 1;

  &-title {
    font-size: 1.1em;
  }

  &-message {
    font-size: 0.9em;
  }

  &.success {
    background: rgb(17, 167, 79);
  }
  &.warning {
    background: rgb(212, 182, 45);
  }
  &.danger {
    background: rgb(187, 38, 27);
  }

  p {
    // max-width: 30ch;
    // padding-bottom: 0.125rem;
  }

  &:hover,
  &:focus {
    .button--close {
      opacity: 1;
    }
  }
}

.button--close {
  opacity: 0.3;
  transition: 0.3s ease;
}
</style>
