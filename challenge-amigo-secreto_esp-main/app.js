// Lógica de amigo secreto

// Creamos una lista para almacenar los nombres a sortear
let listaAmigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    const nombre = amigo.trim();

    if (nombre === "") {
        alert("Error no colocaste un nombre");
        return;
    }

    listaAmigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Función para actualizar la lista visual en el HTML
function actualizarLista() {
    const Lista = document.getElementById("listaAmigos");
    Lista.innerHTML = ""; 

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("list-group-item", "list-group-item-action", "list-group-item-secondary", "text-center");
        Lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpia resultado anterior

    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const sorteo = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[sorteo];

    const li = document.createElement("li");
    li.textContent = `amigo secreto: ${amigoSeleccionado}`;
    li.classList.add("list-group-item", "list-group-item-success", "text-center");
    resultado.appendChild(li);
}