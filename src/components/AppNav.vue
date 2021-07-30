<template>
  <nav class="nav" :class="{ 'nav--show': show }">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link active-class="nav__link--active" to="/" class="nav__link"
          >Home</router-link
        >
      </li>
      <li class="nav__item" v-for="link of links" :key="link.slug">
        <router-link
          active-class="nav__link--active"
          :to="'/categories/' + link.slug"
          class="nav__link"
          >{{ link.label }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["show", "links"],
};
</script>
