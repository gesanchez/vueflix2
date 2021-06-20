<template>
  <div>
    <div class="mb-5 mt-5">
      <TheHeader />
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import TheHeader from './components/TheHeader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TheHeader,
  },
});
</script>
