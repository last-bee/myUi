<template>
    <transition name="toast-pop">
        <div class="toast" v-show='visible' :class="customClass">
            <span class="toast-text">{{message}}</span>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
      message: String,
      position: {
        type: String,
        default: 'middle'
      },
      className: {
        type: String,
        default: ''
      },
    },
    data(){
        return{
            visible: false
        } 
    },
    computed:{
        customClass() {
            var classes = [];
            switch (this.position) {
            case 'top':
                classes.push('is-placetop');
                break;
            case 'bottom':
                classes.push('is-placebottom');
                break;
            default:
                classes.push('is-placemiddle');
            }
            classes.push(this.className);
            return classes.join(' ');
        }
    }
}
</script>

<style>
.toast{
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transition: opacity .3s linear;
}
.toast-text {
    font-size: 14px;
    display: block;
    text-align: center;
    padding:10px;
}
      
.toast-pop-enter ,.toast-pop-leave-active{
    opacity: 0;
}
.is-placetop{
    top:50px;
    left: 50%;
    transform: translate(-50%,0)
}
.is-placebottom{
    top:50px;
    left: 50%;
    transform: translate(-50%,0)
}
.is-placemiddle{
     top:50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
</style>
