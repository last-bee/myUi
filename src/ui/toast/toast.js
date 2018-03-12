import Vue from 'vue';
import toast from '@/ui/toast/toast.vue'; 
const ToastConstructor = Vue.extend(toast);
let toastPool = []
let getAnInstance = () => {
    // if(toastPool.length > 0){
    //     let instance = toastPool[0]
    //     toastPool.splice(0,1)
    //     return instance
    // }
    return new ToastConstructor({
        el: document.createElement('div')
    });
};
// let returnAnInstance = instance => {
//     if(instance){
//         toastPool.push(instance)
//     }
// }
ToastConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;
    // returnAnInstance(this);
};
let removeDom = event => {
    console.log(toastPool)
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
};
let Toast = (options = {}) => {
    let duration = options.duration || 3000;
    let instance = getAnInstance();
    instance.closed = false;
   clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    document.body.appendChild(instance.$el);
   
    Vue.nextTick(function() {
     
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        ~duration && (instance.timer = setTimeout(function() {
            console.log('123333')
            if (instance.closed) return;
            instance.close();
        }, duration));
    });
    return instance;
}
export default Toast;