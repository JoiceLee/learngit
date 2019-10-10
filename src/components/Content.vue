<template>
    <div class="container">
        <ul v-for="item in items" :key="item.key">
            <li>{{ item }}</li>
        </ul>
        <div>{{ list }}</div>
        <div>{{ count }}</div>
        <p>{{ actionCount }}</p>
        <button @click = "handleActionIncrement">action + 1</button>
        <button @click = "handleAsyncIncrement">async + 1</button>
        
    </div>
</template>

<script>
import { addItem } from '../vuex/actions'



export default {
    data() {
        return {

        }
    },
    computed: {
        items: function () {
           return this.$store.state.items
        },
        list: function () {
            // return this.$store.state.list.filter(item => item < 10)
            return this.$store.getters.filteredList;
        },
        count: function () {
            return this.$store.getters.listCount;
        },
        actionCount: function () {
            return this.$store.state.count;
        },

    },
    methods: {
        handleActionIncrement: function() {
            this.$store.dispatch('increment')
        },
        handleAsyncIncrement: function() {
            this.$store.dispatch('asyncIncrement').then(() => {
                console.log(this.$store.state.count);
            });
        }
    }
}
</script>
