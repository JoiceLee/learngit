import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [],
        list: [1,5,8,10,30,50],
        name: '',
        count: 0
    },
    mutations: {
        ADD_ITEM (state, item) {
            this.state.items.push(item);
            console.log(state.items)
        },
    
        DELETE_ITEM (state) {
            state.items.pop();
        },

        increment (state, n = 1) {
            state.count += n;
        }
    },
    actions: {
        increment (context) {
            context.commit('increment');
        },
        asyncIncrement (context) {
            return new Promise(resolve => {
                setTimeout(() => {
                    context.commit('increment');
                    resolve();
                }, 1000)
            });
        }
    },
    getters: {
        filteredList: state => {
            return state.list.filter(item => item < 10);
        },
        listCount: (state, getters) => {
            return getters.filteredList.length;
        }
    }

})
export default store