<template>
  <section class="section-list">
    <ul class="section-list__list">
      <li
        class="section-list__item"
        v-for="card in categories"
        :key="card.slug"
      >
        <router-link
          :to="'/categories/' + card.slug"
          class="section-list__link"
        >
          <CategoryCard :data="card" />
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import { mapGetters } from "vuex";

export default {
  components: { CategoryCard },
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>
