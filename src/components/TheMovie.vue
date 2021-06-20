<template>
  <div class="the-movie">
    <div
      class="the-movie__banner"
      :style="{ backgroundImage: 'url(' + poster + ')' }"
    ></div>
    <h4 class="m-4">{{ title }}</h4>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheMovie',
  props: {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="css" scoped>
.the-movie {
  cursor: pointer;
}
.the-movie__banner {
  height: 200px;
  background-size: cover;
  background-position: center center;
  background-repeat: none;
}
</style>
