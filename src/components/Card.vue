<template>
  <div
    class="card"
    :class="{ 'card--clicked': rotated }"
    @click="clickHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <div class="card__front">
      <img :src="data.image" :alt="data.word" class="card__img" />
      <div class="card__footer">
        <div class="card__wrapper" v-if="mode === 'training'">
          <p class="card__word">{{ data.translation }}</p>
          <button
            class="card__button"
            @click.stop="rotated = true"
            v-if="mode === 'training'"
          >
            Translate
          </button>
        </div>
      </div>
    </div>
    <div class="card__back">
      <img :src="data.image" :alt="data.word" class="card__img" />
      <div class="card__footer">
        <div class="card__wrapper" v-if="mode === 'training'">
          <p class="card__word">{{ data.word }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["data"],
  data() {
    return { rotated: false };
  },
  computed: { ...mapGetters(["mode"]) },
  methods: {
    clickHandler() {
      if (this.mode === "training" && this.data.audioSrc) {
        const audio = new Audio(this.data.audioSrc);
        audio.play();
      } else if (this.mode === "game") {
        this.$emit("gues", this.data);
      }
    },
    submitHandler() {
      if (this.guess === this.data.word) {
        this.guessed = true;
        this.guess = "";
      } else {
        this.guessed = false;
      }
    },
    mouseLeaveHandler() {
      if (this.rotated) {
        this.rotated = false;
      }
    },
  },
};
</script>
