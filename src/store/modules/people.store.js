/* eslint-disable no-shadow */
import {
  getPeople, deletePerson, getPerson, sendPerson,
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
      console.log('res :>> ', res);
      this.people = res.map((person) => ({
        // eslint-disable-next-line no-underscore-dangle
        id: person._id,
        name: person.name,
        document: person.document,
        email: person.email ? person.email : '--',
        phone: person.phone ? person.phone : '--',
        city: person.city ? person.city : '--',
        state: person.state ? person.state : '--',
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
        console.log('res :>> ', res);
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
      .then((res) => {
        console.log('res delete :>> ', res);
        router.push({ name: 'Home' });
        commit('TOGGLE_LOADING_PEOPLE', false);
      }).catch((e) => {
        this.erros = e;
      });
  },

  sendNewPerson({ commit }, params) {
    commit('TOGGLE_LOADING_PEOPLE', true);
    sendPerson(params)
      .then((res) => {
        console.log('res Save :>> ', res);
        router.push({ name: 'Home' });
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
