<template>
    <div>
        <p>这是一个数字输入框组件</p>
        <input type="text" :value="currentValue" @keyup="handleChange">
        {{ currentValue }}
        <button @click="handleDown" :disabled="currentValue <= min">-</button>
        <button @click="handleUp" :disabled="currentValue >= max">+</button>
    </div>
</template>

<script>
function isValueNumber(value) {

            return !isNaN(parseInt(value));
        }


export default {
    name: 'input-number',
    data: function() {
        return {currentValue: this.value}
    },
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    watch: {
        currentValue: function(val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value: function(val) {
            this.updateValue(val);
        }
    },
    methods: {
        handleDown: function() {
            // console.log(this.currentValue);
            if(this.currentValue <= this.min) {
                this.currentValue=this.min;
                return;
            }else if(this.currentValue > this.max) {
                this.currentValue=this.max;
                return;
            }else{
                this.currentValue -= 1;
            }

        },
        handleUp: function() {
            if(this.currentValue >= this.max) {
                this.currentValue = this.max;
                return;
            }else if(this.currentValue < this.min) {
                this.currentValue=this.min;
                return;
            }else{
                this.currentValue += 1;
            }

        },
        updateValue: function(val) {
            if(val > this.max) val = this.max;
            if(val < this.min) val = this.min;
            this.currentValue = val;
        },
        handleChange: function(event) {
            var val = event.target.value.trim();
            console.log(val);
            this.currentValue = val;
            var max = this.max;
            var min = this.min;

            if(isValueNumber(val)) {
                val = parseInt(val);
                this.currentValue = val;

                if(val > max) {
                    this.currentValue = max;
                }else if(val < min) {
                    this.currentValue = min;
                }
            }else{
                event.target.value = 0;
                this.currentValue = 0;
            }

            if(event.keyCode === 38) {
                this.handleUp();
            }else if(event.keyCode === 40) {
                this.handleDown();
            }
        }
    },
    mounted: function() {
        this.updateValue(this.value);
    }
    
}
</script>

