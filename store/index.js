import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      code: undefined,
      home: undefined
    }),
    mutations: {
      setCode(state, code) {
        state.code = code;
      },
      setHome(state, home) {
        state.home = home;
      }
    },
    actions: {
      async getCode({ commit }) {
        await this.$axios.get('/data/code.json').then(res => {
          if (res.status === 200) {
            commit('setCode', res.data);
          }
        });
      },
      async getHome({ commit }) {
        await this.$axios.get('/data/home.json').then(res => {
          if (res.status === 200) {
            commit('setHome', res.data[0]);
          }
        });
      }
    }
  });
};

export default createStore;
