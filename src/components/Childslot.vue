<template>
    <div class="container">
        <p>slot</p>
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="main">
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Childslot',
    data() {
        return {}
    },
    mounted: function() {
        var header = this.$slots.header;
        var main = this.$slots.default;
        var footer = this.$slots.footer;
        console.log(footer);
        console.log(footer[0].elm.innerHTML);
    }
}
</script>

<style>
.container{
    border:1px solid #000;
}
</style>

