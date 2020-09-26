<template>
  <div>
    <m-header />
    <main class="main-page" id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import MHeader from '@/components/Header/index.vue';

export default {
  components: {
    MHeader,
  },
};
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';
</style>
