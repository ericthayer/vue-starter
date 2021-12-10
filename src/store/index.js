import Vue from "vue";
import Vuex from "vuex";
// import Api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: "Web Component Template",
    alert: {
      message: "This is a message",
      title: "default alert title",
      level: null,
      timeToDisplay: 5000,
      active: false
    }
  },
  mutations: {
    unsetAlert(state) {
      const { alert } = state;
      alert.active = false;
      Vue.set(state, "alert", alert);
    }
  },
  actions: {
    setMessage({ commit, state, dispatch }, alert) {
      commit("setAlertMessage", alert);
      setTimeout(() => dispatch("unsetMessage"), state.alert.timeToDisplay);
    },
    unsetMessage({ commit }) {
      commit("unsetAlert");
    }
  }
});
