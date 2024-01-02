import { createStore } from "vuex";
import persistedStateVuex from "persisted-state-vuex";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [persistedStateVuex.init],
});
