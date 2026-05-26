function mostrarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    const grupo = document.getElementById('grupo').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const ciudad = document.getElementById('ciudad').value;
    const materia = document.getElementById('materia').value;
    const comentario = document.getElementById('comentario').value;

    const resultado = document.getElementById('resultado');

    if (nombre && edad && correo && grupo && telefono && fecha && ciudad && materia) {
        resultado.innerHTML = `
            <strong>✅ Datos Registrados:</strong><br><br>
            <strong>Nombre:</strong> ${nombre}<br>
            <strong>Edad:</strong> ${edad} años<br>
            <strong>Correo:</strong> ${correo}<br>
            <strong>Grupo:</strong> ${grupo}<br>
            <strong>Teléfono:</strong> ${telefono}<br>
            <strong>Fecha:</strong> ${fecha}<br>
            <strong>Ciudad:</strong> ${ciudad}<br>
            <strong>Materia Favorita:</strong> ${materia}<br>
            <strong>Comentario:</strong> ${comentario}
        `;
        resultado.style.color = "#ffffff";
    } else {
        resultado.innerHTML = "⚠️ Por favor, llena todos los campos obligatorios.";
        resultado.style.color = "#ff6e40";
    }
}
