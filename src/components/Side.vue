<template>
    <ul>
        <li @click="addItem(Math.random())">增加</li>
        <li @click="deleteItem()">删除</li>
    </ul>
</template>

<script>
import { addItem } from '../vuex/actions'

export default {
    name: 'side',
    data() {
        return {
        }
    },
    methods: {
        addItem: function (content) {
            console.log('add' + ',' + content);
            this.$store.commit('ADD_ITEM', content)
        },
        deleteItem: function () {
            this.$store.commit('DELETE_ITEM')
        }
    }
}
</script>
