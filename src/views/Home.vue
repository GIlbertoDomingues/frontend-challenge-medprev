<template>
  <div class="container">
    <div class="row">
      <div class="col mt-5">
        <m-table :thead="thead" :data="listPeople" :loading="loading" />
        <m-pagination
          v-if="false"
          :btn-click-prev="prevPage"
          :disabled-prev="disabledPrev"
          :btn-click-next="nextPage"
          :disabled-next="disabledNext"
        ></m-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MHome',
  data() {
    return {
      thead: [
        { label: 'Nome/Razão social', name: 'name' },
        { label: 'CPF/CNPJ', name: 'document' },
        { label: 'Email', name: 'email' },
        { label: 'Telefone', name: 'phone' },
        { label: 'Cidade', name: 'city' },
        { label: 'Estado', name: 'state' },
      ],
    };
  },

  computed: {
    ...mapState({
      loading: ({ people }) => people.loading,
      listPeople: ({ people }) => people.listPeople,
    }),
  },

  mounted() {
    this.getAllPeople();
  },

  methods: {
    ...mapActions('people', ['getAllPeople']),
  },
};
</script>
