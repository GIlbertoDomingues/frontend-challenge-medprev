<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1>Novo Usuário</h1>
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col-sm-4">
        <div id="preview" class="wrap-preview">
          <input class="input-file" type="file" @change="onFileChange" />
          <img v-if="person.photo" :src="person.photo" />
        </div>
      </div>
      <div class="col-sm-6">
        <form action="" class="form" @submit.prevent="sendPerson(person)">
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="fisica" value="Pessoa física" v-model="person.type" class="custom-control-input">
            <label class="custom-control-label" for="fisica">Pessoa Física</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="juridica" value="Pessoa Juridica" v-model="person.type" class="custom-control-input">
            <label class="custom-control-label" for="juridica">Pessoa Jurídica</label>
          </div>

          <MCard v-if="person.type === 'Pessoa física'" title-card="Dados pessoais">
            <template v-slot:content>
              <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" v-model="person.name" placeholder="Digite seu nome">
              </div>

              <div class="form-group">
                <label for="document">CPF</label>
                <input type="text" class="form-control" id="document" v-model="person.document" placeholder="000.000.000-00" v-mask="'###.###.###-##'" >
              </div>

              <div class="form-group">
                <label for="gender">Sexo</label>
                <select class="form-control" id="gender" v-model="person.gender">
                  <option>Feminino</option>
                  <option>Masculino</option>
                  <option>Outro</option>
                </select>
              </div>

              <div class="form-group">
                <label for="birthday">Data de Nascimento</label>
                <input type="text" class="form-control" id="birthday" v-model="person.birthday" placeholder="00/00/0000" v-mask="'##/##/####'">
              </div>
            </template>
          </MCard>

          <MCard v-if="person.type === 'Pessoa Juridica'" title-card="Dados Jurídica">
            <template v-slot:content>
              <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" v-model="person.name" placeholder="Digite seu nome">
              </div>

              <div class="form-group">
                <label for="companyname">Razão social</label>
                <input type="text" class="form-control" id="companyname" v-model="person.companyname" placeholder="Digite sua razão social">
              </div>

              <div class="form-group">
                <label for="document">CNPJ</label>
                <input type="text" class="form-control" id="document" v-model="person.document" placeholder="00.000.000/0000-00" v-mask="'##.###.###/####-##'" >
              </div>
            </template>
          </MCard>

          <MCard title-card="Contato">
            <template v-slot:content>
              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="person.email" placeholder="Digite seu e-mail">
              </div>
              <div class="form-group">
                <label for="phone">Telefone</label>
                <input type="text" class="form-control" id="phone" v-model="person.phone" placeholder="Digite telefone" v-mask="['(##) ####-####', '(##) #####-####']">
              </div>
              <div class="form-group">
                <label for="cellphone">Celular</label>
                <input type="text" class="form-control" id="cellphone" v-model="person.cellphone" placeholder="Digite celular" v-mask="['(##) ####-####', '(##) #####-####']">
              </div>
            </template>
          </MCard>

          <MCard title-card="Endereço">
            <template v-slot:content>
              <div class="form-group">
                <label for="zipcode">CEP</label>
                <div class="row">
                  <div class="col-sm-5">
                    <input type="text" class="form-control" id="zipcode" v-model="person.address.zipcode" placeholder="00000-000" v-mask="'#####-###'">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="street">Endereço/Número</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="street" v-model="person.address.street">
                  <input type="number" class="form-control col-sm-3" id="number" v-model="person.address.number">
                </div>
              </div>

               <div class="form-group">
                <label for="complement">Complemento/Bairro</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="complement" v-model="person.address.complement">
                  <input type="text" class="form-control" id="neighbour" v-model="person.address.neighbour">
                </div>
              </div>
              <div class="form-group">
                <label for="city">Estado/Cidade</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="city" v-model="person.address.city">
                  <input type="text" class="form-control" id="state" v-model="person.address.state">
                </div>
              </div>
            </template>
          </MCard>

          <div class="wrap-actions">
            <router-link to="/" class="mui btn btn-link">Voltar</router-link>
            <button type="submit" class="mui btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/images/avatar-placeholder.png';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      person: {
        type: 'Pessoa física',
        name: null,
        document: null,
        companyname: null,
        gender: null,
        birthday: null,
        email: null,
        phone: null,
        cellphone: null,
        photo: image,
        address: {
          zipcode: null,
          street: null,
          number: null,
          complement: null,
          neighbour: null,
          city: null,
          state: null,
        },
      },
    };
  },

  computed: {
    ...mapState({
      loading: ({ people }) => people.loading,
    }),
  },

  methods: {
    ...mapActions('people', ['sendNewPerson']),

    onFileChange(e) {
      const file = e.target.files[0];
      this.person.photo = URL.createObjectURL(file);
    },

    sendPerson(person) {
      this.sendNewPerson(person);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.wrap-preview {
  border: 1px solid $gray;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin: 20px auto;
  width: 250px;

  &::before {
    content: 'Upload';
    background: $green;
    font-size: 16px;
    color: $white;
    font-weight: 700;
    padding: 8px 12px;
    position: absolute;
    left: -50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ease-out 150ms;
  }

  &:hover {
    opacity: .7;

    &::before {
      left: 50%;
      transition: ease 250ms;
      opacity: 1;
    }
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }

  .input-file {
    cursor: pointer;
    height: 100%;
    position: absolute;
    opacity: 0;
    width: 100%;
  }
}

</style>
