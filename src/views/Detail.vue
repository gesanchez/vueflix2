<template>
  <div class="container px-4 mx-auto" v-if="movie">
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1">
        <img :src="movie.poster" :alt="movie.title" />
      </div>
      <div>
        <p class="text-6xl">{{ movie.title }}</p>
        <p class="text-left mt-5 font-bold">Descripci&oacute;n:</p>
        <p class="text-left">{{ movie.overview }}</p>
        <div class="text-center mt-5">
          <button
            type="button"
            class="rounded bg-black text-white p-2 w-20"
            @click="back"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  async created() {
    const { id } = this.$route.params;
    try {
      await this.$store.dispatch('SELECT_MOVIE', id);
    } catch (e) {
      this.$router.push('/404');
    }
  },
  methods: {
    back() {
      this.$router.push('/');
    },
  },
  computed: {
    movie() {
      return this.$store.getters.GET_SELECTED_MOVIE;
    },
  },
});
</script>
