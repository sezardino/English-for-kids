const mode = {
    state: { mode: "training" },
    mutations: {
        setMode(state, mode) {
            state.mode = mode;
        },
    },
    getters: {
        mode(state) {
            return state.mode;
        },
    },
    actions: {
        changeMode({ commit }, mode) {
            commit("setMode", mode);
        },
    },
};

export default mode;
