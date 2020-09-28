<template>
  <div class="card mt-3">
    <div class="card-body">
      <h3 v-html="titleCard"/>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MCard',
  props: {
    titleCard: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
