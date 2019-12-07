import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    choices: ['rock', 'paper', 'scissors'],
    computerChoice: '',
    userChoice: '',
    isUserWinner: false,
    showResult: false,
  },
  mutations: {
    setIsUserWinner(state, choices) {
      let isUserWinner;
      if (
        choices.userChoice === 'rock'
        && choices.computerChoice === 'scissor'
      ) {
        isUserWinner = true;
      } else if (
        choices.userChoice === 'paper'
        && choices.computerChoice === 'rock'
      ) {
        isUserWinner = true;
      } else if (
        choices.userChoice === 'scissors'
        && choices.computerChoice === 'paper'
      ) {
        isUserWinner = true;
      } else if (choices.userChoice === choices.computerChoice) {
        isUserWinner = false;
      } else {
        isUserWinner = false;
      }
      // return this.isUserWinner;
      state.isUserWinner = isUserWinner;
    },
  },
  actions: {
    playGame({ commit, state }, userSelection) {
      const computerChoice = state.choices[Math.floor(Math.random() * state.choices.length)];
      const userChoice = userSelection;

      console.log(userChoice, computerChoice, state.isUserWinner);
      commit('setIsUserWinner', { computerChoice, userChoice });
      // this.checkWinner();
      // this.showResult = !this.showResult;
    },
  },
  modules: {},
});
