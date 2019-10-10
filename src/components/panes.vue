<template>
<transition name="contentshow">
    <div class="panes" v-show="show">
        <slot></slot>
    </div>
</transition>
</template>

<script>
export default {
    name: 'pane',
    data: function() {
        return {show: true}
    },
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    },
    mounted () {
        this.updateNav();
    }
}
</script>

<style>
.panes{
    position:absolute;
    top:0;
    left:50%;
    margin-left:-42px
}
.contentshow-enter-active, .contentshow-leave-active {
   transform:translateX(0);
    transition:all 1s linear;
}
.contentshow-enter /* .fade-leave-active, 2.1.8 版本以下 */ {
  transform:translateX(250px);
  transition:all .1s linear;
}
 .contentshow-leave-to{
     transform:translateX(0);
     opacity:0;
  transition:all 1s linear;
 }
    
</style>


