import { randomizeArr } from "@/utils";
import { SOUNDS } from "@/utils/constants";

const game = {
    state: {
        game: false,
        gameList: null,
        currentWord: null,
    },
    mutations: {
        startGame(state, array) {
            state.game = true;
            state.gameList = array;
        },

        endGame(state) {
            state.game = false;
            state.gameList = null;
            state.currentWord = null;
        },

        gameList(state, payload) {
            state.gameList = payload;
        },

        nextWord(state) {
            console.log(state.currentWord);
            state.currentWord = state.gameList[0];
            console.log({ gameList: state.gameList });
            console.log(state.currentWord);
        },

        shiftGameList(state) {
            state.gameList.shift();
        },
    },
    getters: {
        game(state) {
            return state.game;
        },
        gameList(state) {
            return state.gameList;
        },
        currentWord(state) {
            return state.currentWord;
        },
    },
    actions: {
        playAudio(_, src) {
            const audio = new Audio(src);
            audio.play();
        },

        playCurrentWord({ getters, dispatch }) {
            dispatch("playAudio", getters.currentWord.audioSrc);
        },

        startGame({ commit, dispatch }, array) {
            commit("startGame", randomizeArr(array));
            dispatch("gameStep");
        },

        endGame({ dispatch, commit }) {
            commit("endGame");
            dispatch("playAudio", SOUNDS.SUCCESS);
        },

        async gameStep({ commit, getters, dispatch }) {
            if (getters.currentWord) {
                commit("shiftGameList");
            }
            if (getters.gameList.length === 0) {
                dispatch("endGame");
            } else {
                await commit("nextWord");
                console.log(getters.currentWord);
                dispatch("playCurrentWord");
            }
        },

        checkWord({ getters }, data) {
            if (data.word === getters.currentWord.word) {
                return true;
            } else {
                return false;
            }
        },

        async guessHandler({ dispatch }, data) {
            const answer = await dispatch("checkWord", data);
            console.log(answer);
            const sound = answer ? SOUNDS.CORRECT : SOUNDS.WRONG;
            dispatch("playAudio", sound);
            if (answer) {
                setTimeout(() => {
                    dispatch("gameStep");
                }, 400);
            }
        },
    },
};

export default game;
