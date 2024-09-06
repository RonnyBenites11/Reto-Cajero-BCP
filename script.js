let cuentas = [
    {usuario: "user1", password: "1234", nombre: "Mali", saldo: 200, dni: 44788834 },
    {usuario: "user2", password: "5678", nombre: "Gera", saldo: 150, dni: 10247439 },
    {usuario: "user3", password: "9102", nombre: "Sabi", saldo: 60, dni: 98005362 }
];

let cuentaSeleccionada = null;

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    cuentaSeleccionada = cuentas.find(cuenta => cuenta.usuario === usuario && cuenta.password === contrasena);

    if (cuentaSeleccionada) {
        document.getElementById('loginPrincipal').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('nombreCuenta').innerText = cuentaSeleccionada.nombre;
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
function regresarOpraciones() {
    document.getElementById('resultado1').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}


function consultarSaldo() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('resultado1').style.display = 'block';
    document.getElementById('resultado').innerText = `Tu saldo actual es: ${cuentaSeleccionada.saldo} soles.`;
}

function ingresarMonto() {
    const monto = prompt("¿Cuánto deseas ingresar?");
    if (monto && !isNaN(monto)) {
        cuentaSeleccionada.saldo += parseFloat(monto);
        document.getElementById('menu').style.display = 'none';
        document.getElementById('resultado1').style.display = 'block';
        document.getElementById('resultado').innerText = `Has ingresado ${monto} soles. Tu nuevo saldo es: ${cuentaSeleccionada.saldo} soles.`;
    } else {
        alert("Por favor ingresa un monto válido.");
    }
}

function retirarMonto() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('retirar').style.display = 'block';
    const monto = 0;
    if (monto && !isNaN(monto)) {
        if (cuentaSeleccionada.saldo - monto >= 0) {
            cuentaSeleccionada.saldo -= parseFloat(monto);
            document.getElementById('resultado').innerText = `Has retirado ${monto} soles. Tu nuevo saldo es: ${cuentaSeleccionada.saldo} soles.`;
        } 
    }
}

function confirmarRetiro() {
    const monto = parseFloat(document.getElementById('monto').value.replace('S/', '').trim());
    if (!isNaN(monto) && monto > 0) {
        if (cuentaSeleccionada.saldo - monto >= 0) {
            cuentaSeleccionada.saldo -= monto;
            document.getElementById('retirar').style.display = 'none';
            document.getElementById('resultado1').style.display = 'block';
            document.getElementById('resultado').innerText = `Has retirado ${monto} soles. Tu nuevo saldo es: ${cuentaSeleccionada.saldo} soles.`;
        } else {
            alert("Fondos insuficientes.");
        }
    } else {
        alert("Por favor ingresa un monto válido.");
    }
}

function seleccionarMonto(monto) {
    document.getElementById('monto').value = `S/ ${monto}`;
}

function volverAlMenu() {
    document.getElementById('retirar').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function cerrarSesion() {
    cuentaSeleccionada = null;
    document.getElementById('loginPrincipal').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('resultado').innerText = '';
    document.getElementById('usuario').value = '';
    document.getElementById('contrasena').value = '';
}
function verSaldo() {
    
    
    document.getElementById('versaldo').innerText = `${cuentaSeleccionada.saldo}`;
}
