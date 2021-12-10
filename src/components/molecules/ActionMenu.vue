<template>
  <div class="menu dropdown pt-1">
    <icon-button
      v-if="!menuIsEmpty"
      id="domainDropdownMenuButton"
      :icon="handleIconClass"
      class="icon-sm mx-auto"
      @click="handleShowMenu"
    />
    <ul
      v-show="menuIsActive"
      id="required-menu"
      class="list list__dropdown-menu"
      aria-labelledby="domainDropdownMenuButton"
    >
      <li
        v-for="domain in domains"
        :key="domain.name"
        class="dropdown-item"
        @click="handleAddDomainToStage(stage.stage, domain)"
      >
        <a href="#">{{ domain.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import IconButton from "../atoms/IconButton.vue";

export default {
  name: "ActionMenu",
  components: { IconButton },
  props: {
    item: Object,
    items: Array
  },
  data() {
    return {
      menuIsActive: false
    };
  },
  computed: {
    menuIsEmpty() {
      if (this.domains.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    handleIconClass() {
      if (this.menuIsActive) {
        return "clear";
      } else {
        return "add";
      }
    }
  },
  methods: {
    handleAddDomainToStage(stage, domain) {
      this.$emit("domainAddedToStage", stage, domain.id);
      if (this.domains.length == 1) {
        this.menuIsActive = false;
      }
    },
    handleShowMenu() {
      this.menuIsActive = !this.menuIsActive;
    },
    handleCloseMenu(event) {
      if (!this.$el.contains(event.target)) {
        this.menuIsActive = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleCloseMenu);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleCloseMenu);
  }
};
</script>
<style lang="scss">
.list {
  &__dropdown-menu {
    background: #fff;
    box-shadow: 2px 2px 30px 0 rgba(#000, 0.4);
    border-radius: 10px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    margin-bottom: 0;
    position: absolute;
    text-align: left;
    z-index: 1;
  }
}

.dropdown-item {
  &.active,
  &:active {
    a {
      color: #fff;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
