<template>
  <div class="container px-4 mx-auto">
    <div class="mt-4 mb-4">
      <TheSearch v-model="search"></TheSearch>
    </div>
    <div class="grid grid-cols-4 gap-6">
      <div class="shadow mb-4" v-for="movie in getMovies" :key="movie.id" @click="viewDetail(movie.id)">
        <TheMovie :title="movie.title" :poster="movie.poster"></TheMovie>
      </div>
    </div>
    <div class="mt-4 mb-4 text-center" v-if="showMore">
      <button
        type="button"
        class="rounded bg-black text-white text-center w-40 p-1"
        @click="getMore"
      >
        Mostrar m&aacute;s
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheSearch from '../components/TheSearch.vue';
import TheMovie from '../components/TheMovie.vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      search: '',
      timer: 0,
    };
  },
  components: {
    TheSearch,
    TheMovie,
  },
  created() {
    this.$store.dispatch('SEARCH_MOVIES', '');
  },
  methods: {
    getMore() {
      this.$store.dispatch('SEARCH_MORE');
    },
    async viewDetail(id: string) {
      try {
        await this.$store.dispatch('SELECT_MOVIE', id);
        this.$router.push(`/detalle/${id}`);
      } catch (e) {
        this.$router.push('/404');
      }
    },
  },
  watch: {
    search(val: string) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = 0;
      }
      this.timer = setTimeout(() => {
        this.$store.dispatch('SEARCH_MOVIES', val);
      }, 600);
    },
  },
  computed: {
    getMovies() {
      return this.$store.getters.GET_MOVIES;
    },
    showMore() {
      return this.$store.getters.SHOWMORE;
    },
  },
});
</script>
