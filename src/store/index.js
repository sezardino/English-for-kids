import { createStore } from "vuex";
import mode from "./mode";
import categories from "./categories";
import game from "./game";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { mode, categories, game },
});
