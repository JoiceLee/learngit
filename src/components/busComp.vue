<无法使用。。。。不会>
<template>
<div>
    <button @click="handleEvent">传递事件</button>
</div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {
        handleEvent: function() {
            bus.$emit('on-message', '来自组件buscomp的内容');
        }
    }
}


</script>

