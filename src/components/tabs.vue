<template>
    <div class="tabs">
        <p>This is tab</p>
        <div class="tabs-bar">
          <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)" :key="item.key">
            {{ item.label }}
          </div>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: [String, Number]
        }
    },
    data: function() {
        return {
            currentValue: this.value,
            navList: []
        }
    },
    methods: {
        tabCls: function(item) {
            this.show = item.name === this.currentValue;
            return ['tabs-tab',{'tabs-tab-active':this.show}]
        },
        getTabs: function() {
            return this.$children.filter(function(item) {
                return item.$options.name === 'pane';
            })
        },
        updateNav:function() {
            this.navList = [];
            var _this = this;

            this.getTabs().forEach(function(pane, index) {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });
                if(!pane.name) pane.name = index;
                if(index === 0) {
                    if(!_this.currentValue) {
                        _this.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus () {
            console.log('触发状态更新');
            var tabs = this.getTabs();
            var _this = this;

            tabs.forEach(function(tab) {
                console.log('遍历成功'+tab.name +','+_this.currentValue);
                var b = tab.name == _this.currentValue;
                console.log('tab.name === _this.currentValue = '+ b);
                console.log(tab.className);
                return tab.show = b;
            })
        },
        handleChange: function(index) {
            console.log(index);
            var nav = this.navList[index];
            console.log(nav);
            var name = nav.name;
            console.log(name);
            this.currentValue = name;
            this.$emit('input', name);
            this.$emit('on-click', name);
        }
    },
    watch: {
        value: function(val) {
            this.currentValue = val;
        },
        currentValue: function() {
            console.log('currentValue改变');
            this.updateStatus();
        }
    }
}
</script>

<style>
.tabs{
    font-size:14px;
    color:#657180;
}
.tabs-bar:after{
    content:'';
    display:block;
    width:100%;
    height:1px;
    background:#d7dde4;
    margin-top:-1px;
}
.tabs-tab{
    display:inline-block;
    padding:4px 16px;
    margin-right:6px;
    background:#fff;
    border:1px solid #000;
    cursor:pointer;
    position:relative;

}
.tabs-tab-active{
    color:#3399ff;
    border-top:1px solid #3399ff;
    border-bottom: 1px solid #fff;
}
.tabs-tab-active:before{
    content:'';
    display:block;
    height:1px;
    background:#3399ff;
    position:absolute;
    top:0;
    left:0;
    right:0;
}
.tabs-content{
    position:relative;
    text-align:center;
    width:250px;
    margin:auto;
    padding:8px 0;
}


</style>
