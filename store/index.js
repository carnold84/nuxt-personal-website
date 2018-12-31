import Vuex from 'vuex';

import data from '../data';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      code: data.code,
      home: data.home,
      site: data.site
    }),
    mutations: {
      setCode(state, code) {
        state.code = code;
      },
      setData(state, data) {
        state.code = data.code;
        state.home = data.home;
        state.site = data.site;
      },
      setHome(state, home) {
        state.home = home;
      }
    },
    actions: {
      async getCode({ commit }) {
        await this.$axios.get('./data/code.json').then(res => {
          if (res.status === 200) {
            commit('setCode', res.data);
          }
        });
      },
      async getData({ commit }) {
        await this.$axios.get('./data/data.json').then(res => {
          if (res.status === 200) {
            commit('setData', res.data);
          }
        });
      },
      async getHome({ commit }) {
        await this.$axios.get('./data/home.json').then(res => {
          if (res.status === 200) {
            commit('setHome', res.data);
          }
        });
      } /* ,
      async nuxtServerInit({ commit }, { req }) {
        await this.$axios.get('./data/data.json').then(res => {
          if (res.status === 200) {
            commit('setData', res.data);
          }
        });
      } */
    }
  });
};

export default createStore;
