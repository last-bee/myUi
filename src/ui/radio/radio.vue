<template>
    <div class="radioList">
        <label v-for = "option in options" slot="title" class="radiolist-label">
            <span
                :class="{'is-right': align === 'right'}"
                class="radio">
                <input
                    class="radio-input"
                    type="radio"
                    v-model="currentValue"
                    >
            <span class="radio-core">{{currentValue}}</span>
        </span>
        </label>
    </div>
</template>
<script>
export default {
    props:{
        align: String,
        options: {
            type: Array,
            required: true
        },
        value: String
    },
    data(){
        return{
            currentValue: this.value
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },

        currentValue(val) {
        this.$emit('input', val);
        }
    },
}
</script>
<style scoped>
.radiolist-label{
    display: block;
    padding: 20px 10px;
}
.radio-input{
    display: none;
}
.radio-input:checked + .radio-core{
    /* display: none; */
    background-color: blue;
    border-color: blue;
}
.radio-core{
    box-sizing: border-box;
    display: inline-block;
    background-color: #ffffff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.radio-core::after {
    content: " ";
    border-radius: 100%;
    position: absolute ;
    top:5px ;
    left:5px;
    width: 8px;
    height: 8px;
    transition: transform .2s;
    transform: scale(0);
}
.radio-input[disabled] + radio-core {
    background-color: grey;
    border-color: #ccc;
}
</style>
