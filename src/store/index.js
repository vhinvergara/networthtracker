import { createStore } from "vuex";
import persistedStateVuex from "persisted-state-vuex";
export default createStore({
  state: {
    titlePages: "Dashboard",
    isLoading: false,
  },
  getters: {},
  mutations: {
    firstFunction() {},
  },
  actions: {},
  modules: {},
  plugins: [persistedStateVuex.init],
});
