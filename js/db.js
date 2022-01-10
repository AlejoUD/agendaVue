import './firebase';

import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';
import { namesref } from './firebase';

Vue.use(VueFire);

new Vue({
    el: '#app',
    render: h => h(app)
})

export default {
    data(){
        return{
            nombre: '',
            telefono: '',
            email: ''
        }
    },
    methods: {
        enviarContacto(){
            namesref.push({nombre: this.nombre, telefono: this.telefono, email: this.email})
        },
        eliminarContacto(){
            namesref.push(null)
        }
    }
}
