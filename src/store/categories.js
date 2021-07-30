const categories = {
    state: { categories: null, currentCategory: null },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories;
        },
    },
    getters: {
        categories(state) {
            // console.log(state.categories);
            return state.categories;
        },
    },
    actions: {
        setCategories({ commit }, categories) {
            commit("setCategories", categories);
        },
    },
};

export default categories;
