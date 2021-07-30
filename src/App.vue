<template>
  <main>
    <AppNav :show="navOpen" :links="categories" />
    <div @click="checkNavbar">
      <AppHeader @toggleNavbar="navOpen = !navOpen" :navOpen="navOpen" />
      <div class="container">
        <h1>Training & Play</h1>
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import AppNav from "@/components/AppNav.vue";
import AppHeader from "@/components/AppHeader.vue";
import data from "./data/cards";
export default {
  components: { AppNav, AppHeader },
  data() {
    return { navOpen: false, mode: false };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
    checkNavbar() {
      if (this.navOpen) {
        this.navOpen = false;
      }
    },
  },
  computed: {
    ...mapGetters(["categories"]),

    links() {
      return data.map(({ label, slug }) => ({ label, slug }));
    },

    route() {
      return this.$route;
    },
  },

  watch: {
    route() {
      this.checkNavbar();
    },
  },

  mounted() {
    this.$store.dispatch("setCategories", data);
  },
};
</script>
