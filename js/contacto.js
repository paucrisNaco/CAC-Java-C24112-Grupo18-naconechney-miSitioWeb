// Código JS para validar los campos del formulario de contacto

function validarFormulario() {
    // Obtener los valores de los campos por ID
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const asunto = document.querySelector('#asunto').value;
    const mensaje = document.querySelector('#mensaje').value;
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      // Mostrar mensaje de error
      alert("Todos los campos son obligatorios.");
      return false; // Evitar el envío del formulario
    }
  
    // Si todos los campos están completos, devolver true para permitir el envío
    return true;
  }
  
// Mensajes de error cuando los campos no estan completos
function validarFormulario() {
  // Obtener los valores de los campos por ID
  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const asunto = document.querySelector('#asunto').value;
  const mensaje = document.querySelector('#mensaje').value;
  
  // Validar que los campos no estén vacíos
  let valido = true;
  if (nombre === "") {
    document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
    valido = false;
  } else{
    document.getElementById("errorNombre").textContent="";
  }
  if (email===""){
    document.getElementById("errorEmail").textContent="El correo electrónico es obligatorio.";
    valido=false;
  } else {
    document.getElementById("errorEmail").textContent="";
  }
  if (asunto===""){
    document.getElementById("errorAsunto").textContent="El asunto es obligatorio.";
    valido=false;
  } else {
    document.getElementById("errorAsunto").textContent="";
  }
  if (mensaje===""){
    document.getElementById("errorMensaje").textContent="El mensaje es obligatorio.";
    valido=false;
  } else {
    document.getElementById("errorMensaje").textContent="";
  }
  
  // Si todos los campos están completos, devolver true para permitir el envío
  return valido;
}
  
// Mensaje de confirmación
function enviarFormulario() {
  // ... (Código para enviar el formulario)
  
  // Si el formulario se envía correctamente, mostrar mensaje de confirmación
  const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
  mensajeConfirmacion.textContent = '¡Tus pensamientos, consultas o sugerencias fueron enviadas con éxito!';
  mensajeConfirmacion.style.display = 'block'; // Mostrar el mensaje
  
  // Vaciar el formulario
  formulario.reset();
}

// Actualizar el contador de caracteres en tiempo real
document.addEventListener("DOMContentLoaded", function() {
  const mensaje = document.getElementById('mensaje');
  const caracteresRestantes = document.getElementById('caracteresRestantes');
  const maxCaracteres = mensaje.getAttribute('maxlength');

  mensaje.addEventListener('input', function() {
      const caracteresUsados = mensaje.value.length;
      const caracteresDisponibles = maxCaracteres - caracteresUsados;
      caracteresRestantes.textContent = `${caracteresDisponibles} caracteres restantes`;
  });
});

