<template>
  <div class="card">
    <img :src="data.img" :alt="data.name" class="card__img" />
    <h3 class="card__title">{{ data.label }}</h3>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
