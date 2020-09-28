<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th
          v-for="(head, i) in thead"
          :key="i"
          v-html="head.label"
          :class="head.name === 'state' ? 'align-right' : ''"
        />
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td v-for="(item, k) in thead" :key="k">
          <PuSkeleton />
        </td>
      </tr>
      <tr v-for="(items, i) in data" v-else :key="i" class="table-lines td-link">
        <router-link
          :key="k"
          :class="k === 'id' ? 'hidden' : '' || k === 'state' ? 'align-right' : ''"
          :to="{ name: 'people', params: { id: items.id } }"
          v-for="(item, k) in items"
          tag="td"
          v-html="item"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MTable',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    thead: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },

};
</script>

<style lang="scss">
@import '@/assets/sass/_variables.scss';

.table.table-striped  {
  thead th {
    background: transparent;
    color: $title-color;
    padding: 15px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    border-bottom: 1px solid $border-color;
    border-left: none;

    &.align-right { text-align: right; }
  }

  tbody {
    tr {
      vertical-align: baseline;
      &.td-link { cursor: pointer; }
      &:hover { background-color: $lighter-gray; }
      &:nth-of-type(odd) { background-color: $lighter-gray; }
    }

    td {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: $text-color;
      padding: 15px;

      &.hidden {
        display: none;
      }

      &.align-right {
        text-align: right;
      }

      .name {
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        color: $text-color;
      }
    }
  }
}
</style>
