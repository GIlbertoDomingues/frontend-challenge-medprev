<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col">
        <h1 v-html="personData.name" />
        <button class="btn btn-link" @click.prevent="delPerson()">
          Exluir
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="wrapper-card mt-4">
          <form class="form" @submit.prevent="updatedPerson(personData)">
            <div v-if="loading" class="card">
              <div class="card-body">
                <PuSkeleton  :count="3" />
              </div>
            </div>

            <MCard v-if="!loading && personData" title-card="Dados pessoais">
              <template v-slot:content>
                <button class="btn-edit" @click.prevent="disabled = !disabled">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                </button>
                <div class="form-group">
                  <label>ID</label>
                  <input type="text" class="form-control" v-model="personData._id" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Nome</label>
                  <input type="text" class="form-control" v-model="personData.name" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Documento</label>
                  <input type="text" class="form-control" v-model="personData.document" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Data de nascimento</label>
                  <input type="text" class="form-control" v-model="personData.birthday" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Gênero</label>
                  <input type="text" class="form-control" v-model="personData.gender" :disabled="disabled">
                </div>

                <div v-if="!disabled" class="wrap-actions">
                  <button type="submit" class="mui btn btn-primary">Salvar</button>
                </div>
              </template>
            </MCard>
          </form>
        </div>

        <div class="wrapper-card mt-4">
          <form class="form"  @submit.prevent="updatedPerson(personData)">
            <div v-if="loading" class="card">
              <div class="card-body">
                <PuSkeleton  :count="3" />
              </div>
            </div>

            <MCard v-if="!loading && personData" title-card="Contato">
              <template v-slot:content>
                <button class="btn-edit" @click.prevent="disabled = !disabled">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                </button>
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="text" class="form-control" v-model="personData.email" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Celular</label>
                  <input type="text" class="form-control" v-model="personData.cellphone" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Telefone Fixo</label>
                  <input type="text" class="form-control" v-model="personData.phone" :disabled="disabled" />
                </div>

                <div v-if="!disabled" class="wrap-actions">
                  <button type="submit" class="mui btn btn-primary">Salvar</button>
                </div>

                <div v-if="!disabled" class="wrap-actions">
                  <button type="submit" class="mui btn btn-primary">Salvar</button>
                </div>
              </template>
            </MCard>

          </form>
        </div>

        <div class="wrapper-card mt-4">
          <form class="form" @submit.prevent="updatedPerson(personData)">
            <div v-if="loading" class="card">
              <div class="card-body">
                <PuSkeleton  :count="3" />
              </div>
            </div>

            <MCard v-if="!loading && personData.address" title-card="Endereço">
              <template v-slot:content>
                <button class="btn-edit" @click.prevent="disabled = !disabled">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                </button>

                <div class="form-group">
                  <label>CEP</label>
                  <input type="text" class="form-control" v-model="personData.address.zipcode" :disabled="disabled" />
                </div>

                <div class="form-group">
                  <label>Endereço</label>
                  <div class="form-inline">
                    <input type="text" class="form-control" v-model="personData.address.street" :disabled="disabled" />
                    <input type="text" class="form-control" v-model="personData.address.number" :disabled="disabled" />
                  </div>
                </div>

                <div class="form-group">
                  <label>Complemento/Bairro</label>
                  <div class="form-inline">
                    <input type="text" class="form-control" v-model="personData.address.complement" :disabled="disabled" />
                    <input type="text" class="form-control" v-model="personData.address.neighbour" :disabled="disabled" />
                  </div>
                </div>

                <div class="form-group">
                  <label>Estado/Cidade</label>
                  <div class="form-inline">
                    <input type="text" class="form-control" v-model="personData.address.city" :disabled="disabled" />
                    <input type="text" class="form-control" v-model="personData.address.state" :disabled="disabled" />
                  </div>
                </div>

                <div v-if="!disabled" class="wrap-actions">
                  <button type="submit" class="mui btn btn-primary">Salvar</button>
                </div>

              </template>
            </MCard>

          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.title-three {
  font-weight: 800;
}

.form-control:disabled, .form-control[readonly] {
  background-color: transparent;
  border: transparent;
  color: $title-color;
  padding: 0;
  height: auto;
}

.btn-link,
.btn-edit {
  border: none;
  background: transparent;
  color: $gray;
  position: absolute;
  right: 20px;
  top: 20px;

  svg {
    color: $gray;
    height: 18px;
  }

  &:focus {
    outline: none;
    box-shadow: none;

    svg {
      color: black;
    }
  }
}

.btn-link {
  color: red;
  top: 10px;
}

</style>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MPeople',

  data() {
    return {
      idPerson: null,
      disabled: true,
    };
  },

  computed: {
    ...mapState({
      loading: ({ people }) => people.loading,
      personData: ({ people }) => people.personData,
    }),
  },

  mounted() {
    const { id } = this.$route.params;
    this.idPerson = id;
    this.getPeopleId(this.idPerson);
  },

  methods: {
    ...mapActions('people', ['getPeopleId', 'deletePersonId', 'updatedPersonId']),

    delPerson() {
      this.deletePersonId(this.idPerson);
    },

    updatedPerson(personData) {
      this.updatedPersonId({ id: this.idPerson, params: personData });
    },
  },
};
</script>
