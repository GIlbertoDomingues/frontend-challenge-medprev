/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */

import {
  getPeople, deletePerson, getPerson, sendPerson, updatedPerson,
} from '../../services/people';
import router from '../../router';

const state = {
  listPeople: [],
  loading: false,
  personData: {},
};

const mutations = {
  TOGGLE_LOADING_PEOPLE(state, payload = false) {
    state.loading = !!payload;
  },
  SET_PEOPLE_LIST(state, payload) {
    state.listPeople = payload;
  },
  SET_PERSON(state, payload) {
    state.personData = payload;
  },
};

const actions = {
  getAllPeople({ commit }) {
    commit('TOGGLE_LOADING_PEOPLE', true);
    getPeople().then((res) => {
      this.people = res.map((person) => ({
        id: person._id,
        name: person.name,
        document: person.document,
        email: person.email ? person.email : '--',
        phone: person.phone ? person.phone : '--',
        city: person.address.city ? person.address.city : '--',
        state: person.address.state ? person.address.state : '--',
      }));

      commit('SET_PEOPLE_LIST', this.people);
      commit('TOGGLE_LOADING_PEOPLE', false);
    }).catch((e) => {
      this.erros = e;
      commit('TOGGLE_LOADING_PEOPLE', false);
    });
  },

  getPeopleId({ commit }, id) {
    commit('TOGGLE_LOADING_PEOPLE', true);
    getPerson(id)
      .then((res) => {
        this.personData = res;
        commit('SET_PERSON', this.personData);
        commit('TOGGLE_LOADING_PEOPLE', false);
      }).catch((e) => {
        this.erros = e;
        router.push({ name: 'Home' });
      });
  },

  deletePersonId({ commit }, id) {
    commit('TOGGLE_LOADING_PEOPLE', true);
    deletePerson(id)
      .then(() => {
        alert('Usuário exluido com sucesso!');
        router.push({ name: 'Home' });
        commit('TOGGLE_LOADING_PEOPLE', false);
      }).catch((e) => {
        this.erros = e;
      });
  },

  sendNewPerson({ commit }, params) {
    commit('TOGGLE_LOADING_PEOPLE', true);
    sendPerson(params)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        router.push({ name: 'Home' });
        commit('TOGGLE_LOADING_PEOPLE', false);
      }).catch((e) => {
        this.erros = e;
      });
  },

  updatedPersonId({ commit }, params) {
    commit('TOGGLE_LOADING_PEOPLE', true);
    updatedPerson(params)
      .then(() => {
        alert('Usuário atualizado!');
        commit('TOGGLE_LOADING_PEOPLE', false);
      }).catch((e) => {
        this.erros = e;
      });
  },

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
