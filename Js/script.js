
/* Confirmar login */
const confirmLog = localStorage.getItem("usuarioLogueado") || false;
if (confirmLog === false){
    window.location.href = "index.html";
}

/* Cerrar sesión */
const cerrarSesion = document.getElementById("btnCerrarSesion");
cerrarSesion.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "index.html";
});

/* Mostrar nombre de usuario */
const usuarioInvisible = localStorage.getItem("usuarioLogueado");
if (usuarioInvisible !== "") {
    const usuarios = JSON.parse(usuarioInvisible);
    const usuarioVisible = usuarios.usuario;
    document.getElementById("nombreUsuario").textContent = usuarioVisible;
}

/* Mostrar saldo actual */
function mostrarSaldo(){
    const saldoInvisible = localStorage.getItem("usuarioLogueado");
    if (saldoInvisible !== null){
        const saldoGet = JSON.parse(saldoInvisible);
        const saldoVisible = saldoGet.saldo;
        document.getElementById("saldo").textContent = "$" + saldoVisible;
    }
}
mostrarSaldo();

/* Preparar usuario */
const usuario = localStorage.getItem("usuarios");
const usuarioCompararLocal = JSON.parse(usuario);
let usuarioLog = localStorage.getItem("usuarioLogueado");
let usuarioComparaLog = JSON.parse(usuarioLog);

const usuarioActualizado = usuarioCompararLocal.find(u => u.usuario === usuarioComparaLog.usuario);

/* Saldo interactivo */
const inputDeposito = document.getElementById("depositoCantidad");
inputDeposito.addEventListener("input", function(){
    const monto = Number(inputDeposito.value) || 0;
    const saldoInteractivo = usuarioActualizado.saldo + monto;
    document.getElementById("visorSpanDepositar").textContent = saldoInteractivo;
});

/* Modal de confirmación */
const botonDepositar = document.querySelector(`[data-bs-target="#modal-deposit-confirm"]`);
botonDepositar.addEventListener("click",function(){
    const montoModal = Number(inputDeposito.value) || 0;
    document.getElementById("montoConfirmarDepositoModal").textContent = `¿Estás seguro de depositar $${montoModal}?`;
});

/* Confirmar depósito */
document.getElementById("btnConfirmarDeposito").addEventListener("click", function(){
    const monto = Number(inputDeposito.value) || 0;
    if (monto >= 1000){
        usuarioActualizado.saldo += monto;
        usuarioComparaLog.saldo = usuarioActualizado.saldo;

        localStorage.setItem("usuarios", JSON.stringify(usuarioCompararLocal));
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioComparaLog));

        document.getElementById("depositoMensaje").innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                El depósito ha sido efectuado correctamente.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        mostrarSaldo();
    } else {
        document.getElementById("depositoMensaje").innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                El monto del depósito debe ser mayor a $1000 pesos.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }
});















    const lista = document.getElementById("listaMovimientos");

    if (!usuarioLog.movimientos) {
        usuarioLog.movimientos = [];
    }

    lista.innerHTML = "";

    const usuarioLog = JSON.parse(localStorage.getItem("usuarioLogueado"));
    if (usuarioLog.movimientos && usuarioLog.movimientos.length > 0) {
        usuarioLog.movimientos.forEach(mov => {
            const item = document.createElement("li");
            item.classList.add("list-group-item");
            item.textContent = `${mov.tipo}: $${mov.monto} (${mov.fecha})`;
            lista.appendChild(item);
        });
    } else {
        const item = document.createElement("li");
        item.classList.add("list-group-item");
        item.textContent = "No hay movimientos registrados.";
        lista.appendChild(item);
    }























/* FUNCIONES GENERALES */
/* const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const usuario = document.getElementById("nombreUsuario").value;
const saldo = document.getElementById("saldo").value;
const buscaContacto = document.getElementById("buscadorContactos").value;
const montoTransferencia = document.getElementById("numTransferencia").value;
const restoTransferencia = document.getElementById("visorSpanTransfer").value;
const movimientoTransferir = document.getElementById("btnTransferir").value;
const nuevoNombre = document.getElementById("nombreContacto").value;
const nuevoEmail = document.getElementById("emailContacto").value;
const nuevoContacto = document.getElementById("btnNvoContacto").value;
const alertaSinFondos = document.getElementById("alertaFondos").value;
const nuevaListaContactos = document.getElementById("listaContactos").value;
const nuevoDeposito = document.getElementById("depositoCantidad").value;
const nuevoSaldoDeposito = document.getElementById("visorSpanDepositar").value;
const alertaDepositoExito = document.getElementById("depositoExitoso").value;
const confirmarDepositoModal = document.getElementById("montoConfirmarDepositoModal").value;
const depositoModalEjecutar = document.getElementById("btnConfirmarDeposito").value;
const historialMovimientos = document.getElementById("listaMovimientos").value;

const usuarios = JSON.parse(localStorage.getItem("usuarioLogueado"));

document.getElementById("nombreUsuario").textContent = usuarios.nombre */

/* 
let usuario = JSON.parse(localStorage.getItem(usuarios)) || [];

function guardarStorage(){
    localStorage.setItem(usuarios.JSON.stringify(usuarios));
}

btnRegistro.addEventListener("click",function(){
    const nombre = inputNombre.value.trim();

    if (nombre === ""){
        alert("Debe ingresar un nombre")
        return;
    }

    usuarios.push({
        nombre = nombre
    })

    guardarStorage();
    renderUsuarios();

    inputNombre.value = "";
    inputNombre.focus();
})


function renderUsuarios(){
    listaUsuarios.innerHTML = "";

    usuario.forEach((usuarios,index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const btnEliminar = document.createElement("button");

        span.textContent = inputUsuario;
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn btn-danger");

        li.appendChild(span);
        li.appendChild(btnEliminar);

        listaUsuarios.appendChild(li);

        btnEliminar.addEventListener("click",function(){
            usuario.splice(index,1)
            guardarStorage();
            renderUsuarios();
        })


    });
} */