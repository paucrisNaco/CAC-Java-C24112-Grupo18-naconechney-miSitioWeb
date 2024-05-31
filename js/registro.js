// todo se ejecuta cuando el DOM se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    // selecciona el formulario del dom
    const formulario = document.querySelector('form');
    // --------------------------------------------------------------
    // Función para mostrar error
    const mostrarError = (input, mensaje) => {
        // Acceder al div contenedor más cercano
        const divPadre = input.closest('div');
        // Encontrar o crear el elemento error-text
        let errorText = divPadre.querySelector('.error-text');
        if (!errorText) {
            errorText = document.createElement('div');
            errorText.className = 'error-text';
            divPadre.appendChild(errorText);
        }
        // Agregar la clase de error al elemento padre
        divPadre.classList.add('error');
        // Agregar mensaje de error
        errorText.textContent = mensaje;
    }
    // --------------------------------------------------------------
    // Eliminar mensaje de error
    const eliminarError = input => {
        // acceder al la etiqueta contenedora
        const divPadre = input.parentNode;
        // eliminar la clase de error del elemento padre/contenedor
        divPadre.classList.remove('error');
        // encontramos el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        // eliminamos el elemento error-text si existe
        if (errorText) {
            divPadre.removeChild(errorText);
        }
    }
    // ---------------------------------------------------------------------
    //funcion para corroborar si los campos estan completos para quitar error
    formulario.querySelectorAll('input').forEach(input => {
        // se activa cuando el valor de un elemento del formulario cambia y se sale del elemento 
        input.addEventListener('change', () => {
            // obtenemos el valor del campo seleccionado
            const valor = input.value.trim();//elimina cualquier espacio en blanco al principio y al final del valor obtenido.
            // condicion para evaluar
            if (valor !== '') {
                eliminarError(input);
            }
        })
    });
    // ----------------------------------------------------------------
    // Función para validar un correo electrónico utilizando una expresión regular
    function isEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);//devuelve true si la cadena coincide con el patrón de la expresión regular
    }
    // Función para validar un nombre utilizando una expresión regular
    function isNombre(nombre) {
        const expresionRegular = /^[A-Za-z\s]+$/;
        return expresionRegular.test(nombre);//devuelve true si la cadena coincide con el patrón de la expresión regular
    }
    // Función para validar la contraseña utilizando una expresión regular
    function isContraseña(contraseña) {
        const expresionRegular=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return expresionRegular.test(contraseña);
    }
    // ----------------------------------------------------------------
    // funcion para validar el campo de email
    function validarEmail(campoId, mensaje) {
        // obtenemos elemento mediante id
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();

        // si el campo esta vacio
        if (email === '') {
            //establecemos mensaje de error
            mostrarError(campo, 'El correo electronico es obligatorio');
            // indicamos que la validacion ha fallado
            return false
        } else if (!isEmail(email)) {
            //establecemos mensaje de error 
            mostrarError(campo, mensaje);
            // indicamos que la validacion ha fallado
            return false
        } else {
            // si es valido eliminamos cualquier error
            eliminarError(campo);
            // indicamos que la validacion es exitosa
            return true
        }
    }
    // funcion para validar el campo nombre
    function validarNombre(campoId, mensaje) {
        // obtenemos elemento mediante id
        const campo = document.getElementById(campoId);
        const nombre = campo.value.trim();

        // si el campo esta vacio
        if (nombre === '') {
            //establecemos mensaje de error
            mostrarError(campo, 'El nombre es obligatorio');
            // indicamos que la validacion ha fallado
            return false
        } else if (!isNombre(nombre)) {
            //establecemos mensaje de error 
            mostrarError(campo, mensaje);
            // indicamos que la validacion ha fallado
            return false
        } else {
            // si es valido eliminamos cualquier error
            eliminarError(campo);
            // indicamos que la validacion es exitosa
            return true
        }
    }
    // Función para validar una contraseña
    function validarContraseña(campoId, mensaje) {
        // Obtenemos el elemento mediante su id
        const campo = document.getElementById(campoId);
        const contraseña = campo.value.trim();

        // Verificamos si la contraseña cumple con las reglas
        if (contraseña === '') {
            // Si la contraseña está vacía, mostramos un mensaje de error
            mostrarError(campo, 'La contraseña es obligatoria');
            return false; // Indicamos que la validación ha fallado
        } else if (contraseña.length < 8) {
            // Si la contraseña tiene menos de 8 caracteres, mostramos un mensaje de error
            mostrarError(campo, 'La contraseña debe tener al menos 8 caracteres');
            return false; // Indicamos que la validación ha fallado
        } else if (!isContraseña(contraseña)) {
            // Si la contraseña no cumple con los criterios de complejidad, mostramos un mensaje de error
            mostrarError(campo, mensaje);
            return false; // Indicamos que la validación ha fallado
        } else {
            // Si la contraseña es válida, eliminamos cualquier error y la validación tiene éxito
            eliminarError(campo);
            return true;
        }
    }
    // Función para validar el perfil
    function validarPerfil() {
        const radios = document.getElementsByName("perfil");
        let perfilSeleccionado = false;

        for (const radio of radios) {
            if (radio.checked) {
                perfilSeleccionado = true;
                break;
            }
        }

        if (!perfilSeleccionado) {
            mostrarError(radios[0], 'Debes seleccionar un perfil: Lector o Publicador');
            return false;
        } else {
            eliminarError(radios[0]);
            return true;
        }
    }
    // Función para validar el checkbox de términos y condiciones
    function validarTerminos() {
        const checkbox = document.getElementById('aceptoTerminos');
        if (!checkbox.checked) {
            mostrarError(checkbox, 'Debes aceptar los términos y condiciones');
            return false;
        } else {
            eliminarError(checkbox);
            return true;
        }
    }
    // --------------------------------------------------------------------------------
    // funcion para validar el formulario
    const validarFormulario = () => {
        let validar = true;

        // validar campo del nombre
        validar = validarNombre('nombre', 'El nombre no es valido') && validar;
        // validar campo email
        validar = validarEmail('email', 'El correo electronico no es valido') && validar;
        // validar contraseña
        validar = validarContraseña('password', 'La contraseña debe tener al menos una mayúscula, una minúscula, un caracter especial y un número.') && validar;
        // validar perfil
        validar = validarPerfil() && validar;
        // validar checkbox de terminos y condiciones
        validar = validarTerminos("aceptoTerminos", "Debes aceptar los términos y condiciones") && validar;
        return validar;
    }
    // -------------------------------------------------------------------------------------
    // agregar un evento de escucha para cuando el valor del campo de nombre cambia
    document.getElementById('nombre').addEventListener('change', () => {
        validarNombre('nombre', 'El nombre es obligatorio');
    });
    // -------------------------------------------------------------------------------------
    // agregar un evento de escucha para cuando se envia el formulario
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        if (!validarFormulario()) {
            // mensaje no valido
            event.preventDefault()//evita que el formulario se envie
            console.log("El formulario no es valido");
        } else {
            event.preventDefault();
            console.log("El fomrulario es valido...");
        }
    })
})



