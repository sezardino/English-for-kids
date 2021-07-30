<template>
  <section class="section-list">
    <ul class="section-list__list">
      <li class="section-list__item" v-for="item in list" :key="item.word">
        <Card
          :data="item"
          @gues="guesHandler"
          :class="{
            disabled: gameList && !gameList.includes(item),
          }"
        />
      </li>
    </ul>
    <button
      class="section-list__button"
      v-if="mode === 'game' && !gameList"
      @click="startGameHandler"
    >
      Start game
    </button>
    <button
      class="section-list__button"
      v-if="currentWord && gameList.length"
      @click="repeatHandler"
    >
      Repeat word
    </button>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  components: { Card },
  computed: {
    ...mapGetters(["categories", "mode", "game", "gameList", "currentWord"]),

    list() {
      const list = this.categories;
      return list.find((item) => item.slug === this.$route.params.id)?.cards;
    },
  },
  methods: {
    startGameHandler() {
      this.$store.dispatch("startGame", this.list);
    },

    guesHandler(data) {
      if (this.game) {
        this.$store.dispatch("guessHandler", data);
      }
    },
    repeatHandler() {
      this.$store.dispatch("playCurrentWord");
    },
  },

  watch: {
    mode(mode) {
      if (mode === "training") {
        this.$store.commit("endGame");
      }
    },
    list() {
      this.$store.commit("endGame");
    },
  },
};
</script>
