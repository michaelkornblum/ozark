import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registeredUsers: [],
    currentUser: {},
    users: 0,
  },
  getters: {
    firstUser: state => state.registeredUsers.length === 0,
    users: state => state.users,
    findUser: state => id => state.registeredUsers.filter(user => user.id == id)[0]
  },
  mutations: {
    registerUser(state, payload) {
      state.registeredUsers.push(payload);
      state.currentUser = payload;
    },
    addUser(state){
      state.users++;
    },
  },
  actions: {
    registerUser({ commit }, payload) {
      commit('registerUser', payload);
    },
    addUser({ commit }) {
      commit('addUser');
    },
  }
});
