$(document).ready(function () {
    $('#telefono').mask('000-000-0000');
});

let txtNombre = document.getElementById('txtNombre');
txtNombre.focus();

const app = new Vue({
    el: '#app',
    data: {
        contactos: [],
        contactoNombre: '',
        contactoEmail: '',
        contactoTelefono: '',
        seleccionado: false,
    },
    methods: {
        limpiar: function () {
            this.contactoNombre = '';
            this.contactoEmail = '';
            this.contactoTelefono = '';
        },

        agregarContacto: function () {
            if (
                this.contactoNombre === '' ||
                this.contactoEmail === '' ||
                this.contactoTelefono === ''
                
            ) {
                alert('Tienes que rellenar todos los campos.');
            } else {
                this.contactos.push({
                    nombre: this.contactoNombre,
                    email: this.contactoEmail,
                    telefono: this.contactoTelefono,
                });

                this.limpiar();
                localStorage.setItem('agenda-vue', JSON.stringify(this.contactos));
                let txtNombre = document.getElementById('txtNombre');
                txtNombre.focus();
            }
        },


        mostrarContacto: function (index) {
            if (this.contactoNombre === '') {
                document.getElementById('boton-submit').disabled = true;
                this.contactos[index].seleccionado = true;
                this.contactoNombre = this.contactos[index].nombre;
                this.contactoTelefono = this.contactos[index].telefono;
                this.contactoEmail = this.contactos[index].email;
            } else {
                this.editarContacto(index);
                this.contactos[index].seleccionado = false;
                document.getElementById('boton-submit').disabled = false;
            }
        },


        editarContacto: function (index) {
            this.contactos[index].nombre = this.contactoNombre;
            this.contactos[index].email = this.contactoEmail;
            this.contactos[index].telefono = this.contactoTelefono;
            this.btnEdicion = 'Editar';
            this.limpiar();

            localStorage.setItem('agenda-contactos', JSON.stringify(this.contactos));
        },


        eliminar: function (index) {
            this.contactos.splice(index, 1);
            localStorage.setItem('agenda-contactos', JSON.stringify(this.contactos));
        },
    },
 

    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('agenda-contactos'));
        console.log(datosDB);

        if (datosDB === null) {
            this.contactos = [];
        } else {
            this.contactos = datosDB;
        }
    },
});