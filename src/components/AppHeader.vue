<template>
  <header class="header container">
    <button
      class="header__toggler toggler btn"
      :class="{ 'toggler--active': navOpen }"
      @click.stop="$emit('toggleNavbar')"
    >
      <span class="visually-hidden">Open menu</span>
      <div class="toggler__wrapper">
        <span class="toggler__row"
          ><span class="toggler__dot"></span><span class="toggler__line"></span
        ></span>
        <span class="toggler__row"><span class="toggler__line"></span></span>
        <span class="toggler__row"
          ><span class="toggler__line"></span><span class="toggler__dot"></span
        ></span>
      </div>
    </button>
    <div class="header__mode mode">
      <label class="mode__label" for="mode">
        <span
          class="mode__text mode__text--tr"
          :class="{ 'mode__text--show': !!index === currentMode }"
          v-for="(mode, index) in modes"
          :key="mode.id"
          >{{ mode.label }}</span
        >
        <input
          class="mode__input"
          type="checkbox"
          id="mode"
          @change="changeHandler"
          v-model="currentMode"
        />
        <span class="visually-hidden">Choose mode: game or training</span>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["toggleNavbar"],
  props: ["navOpen"],
  data() {
    return { currentMode: false };
  },
  methods: {
    changeHandler() {
      this.$store.dispatch(
        "changeMode",
        this.currentMode ? "game" : "training"
      );
    },
  },
  computed: {
    modes() {
      return [
        { label: "Training", id: "training" },
        { label: "Game", id: "game" },
      ];
    },
  },
};
</script>
