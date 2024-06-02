//Codigos para manejar el blog
// Cargar completamente el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Verificar el tipo de usuario
    const userType = getUserType(); // Función para obtener el tipo de usuario (visitante, lector, publicador)

    // Mostrar u ocultar elementos según el tipo de usuario
    handleUserPermissions(userType);

    // Cargar la entrada destacada
    cargarEntradaDestacada();

    // Cargar todas las entradas del blog
    cargarEntradas();
});

// Obtener la información del usuario desde localStorage
function getUserType() {
    const user = JSON.parse(localStorage.getItem('user'));
    // Si no hay usuario, es un visitante
    if (!user) {
        return 'visitante';
    }
    // Retornar el rol del usuario ('lector' o 'publicador')
    return user.role;
}

// Manejo de vistas por perfil
function handleUserPermissions(userType) {
    const newEntryLink = document.querySelector('.linkNuevaEntrada');
    const myEntriesLink = document.querySelector('.linkMisEntradas');
    const commentSection = document.querySelector('.commentSection');
    const notificaciones = document.querySelector("notificaciones");
    const miPerfil = document.querySelector("miPerfil");

    if (userType === 'visitante') {
        // Visitante: ocultar enlaces de nueva entrada, mis entradas, notificaciones y mi perfil
        if (newEntryLink) newEntryLink.style.display = 'none';
        if (myEntriesLink) myEntriesLink.style.display = 'none';
        if (commentSection) commentSection.style.display = 'none';
        if (notificaciones) notificaciones.style.display = "none";
        if (miPerfil) miPerfil.style.display = "none";
        if (seguidores) seguidores.style.display = "none";
    } else if (userType === 'lector') {
        // Lector: ocultar enlace de nueva entrada, de mis entradas, seguidores, notificaciones y mi perfil
        if (newEntryLink) newEntryLink.style.display = 'none';
        if (myEntriesLink) myEntriesLink.style.display = "none";
        if (seguidores) seguidores.style.display = "none";
        if (notificaciones) notificaciones.style.display = "none";
        if (miPerfil) miPerfil.style.display = "none";
        if (commentSection) commentSection.style.display = 'block'; // Mostrar sección de comentarios
    } else if (userType === 'publicador') {
        // Publicador: mostrar todos los enlaces
        if (newEntryLink) newEntryLink.style.display = 'block';
        if (myEntriesLink) myEntriesLink.style.display = 'block';
        if (commentSection) commentSection.style.display = 'block';
        if (notificaciones) notificaciones.style.display = "block";
        if (miPerfil) miPerfil.style.display = "block";
        if (seguidores) seguidores.style.display = "block";
    }
}

// Carga de la entrada destacada
function cargarEntradaDestacada() {
    // Suponiendo que hay una función para obtener la entrada destacada del backend
    const entradaDestacada = obtenerEntradaDestacada();

    // Actualizar el contenido de la entrada destacada
    document.getElementById('imagenDestacada').src = entradaDestacada.imagen;
    document.getElementById('resumenDestacada').textContent = entradaDestacada.resumen;

    // Agregar evento al botón "Ver más"
    document.getElementById('verMasDestacada').addEventListener('click', () => {
        window.location.href = entradaDestacada.url;
    });
}
// Ejemplo de datos de una entrada destacada (normalmente vendría del backend)
function obtenerEntradaDestacada() {
    return {
        imagen: 'img/entradaDestacada.png', // Ruta de la imagen
        resumen: 'Este es un resumen de la entrada destacada...', // Resumen de la entrada
        url: 'entrada.html?id=1' // URL a la entrada completa
    };
}

// Carga de las entradas para la columna 2 de la tercer fila
function cargarEntradas() {
    // Simulación de datos de entradas
    const entradas = [
        {
            id: 1,
            titulo: 'Entrada Reciente 1',
            resumen: 'Resumen de la entrada reciente 1...',
            fecha: '2024-05-30T10:00:00'
        },
        {
            id: 2,
            titulo: 'Entrada Reciente 2',
            resumen: 'Resumen de la entrada reciente 2...',
            fecha: '2024-05-29T10:00:00'
        },
        {
            id: 3,
            titulo: 'Entrada Reciente 3',
            resumen: 'Resumen de la entrada reciente 3...',
            fecha: '2024-05-28T10:00:00'
        }
    ];

    // Ordenar las entradas por fecha de publicación (más reciente primero)
    entradas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    const contenedorEntradas = document.getElementById('contenedorEntradas');

    // Limpiar el contenedor antes de insertar nuevas entradas
    contenedorEntradas.innerHTML = '';

    // Insertar las entradas en el contenedor
    entradas.forEach(entrada => {
        const entradaElemento = document.createElement('div');
        entradaElemento.classList.add('entrada');

        entradaElemento.innerHTML = `
            <h3>${entrada.titulo}</h3>
            <p>${entrada.resumen}</p>
            <button onclick="verEntrada(${entrada.id})">Leer más</button>
        `;

        contenedorEntradas.appendChild(entradaElemento);
    });
}

function verEntrada(id) {
    // Redireccionar a la página de la entrada con el ID correspondiente
    window.location.href = `entrada.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Obtener la URL de la página actual
    const currentPageUrl = window.location.href;

    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.listaMenu .linkNav');

    // Iterar sobre cada enlace del menú
    menuLinks.forEach(link => {
        // Obtener la URL de cada enlace del menú
        const linkUrl = link.href;

        // Verificar si la URL del enlace coincide con la URL de la página actual
        if (currentPageUrl === linkUrl) {
            // Agregar una clase "active-link" al enlace del menú actual
            link.classList.add('active-link');
            // Remover el estilo text-decoration: none
            link.style.textDecoration = 'underline';
        } else {
            // Agregar el estilo text-decoration: none para los enlaces que no están activos
            link.style.textDecoration = 'none';
        }
    });
});
