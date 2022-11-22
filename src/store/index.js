import Vue from "vue";
import Vuex from "vuex";
import common from "@/common/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ...common,
  },
});
