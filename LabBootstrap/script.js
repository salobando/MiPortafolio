document.getElementById("btnagregar").addEventListener('click', function () {
    const texto = document.getElementById("newtarea").value;

    if (texto) {
        const li = document.createElement('li');
        li.className = "list-group-item";
        // Crear el checkbox
        const check = document.createElement('input');
        check.type = "checkbox";
        check.className = "form-check-input me-2";
        const span = document.createElement('span');
        span.textContent = texto;
        li.appendChild(check);
        li.appendChild(span);
        document.getElementById('lista-tareas').append(li);
        document.getElementById("newtarea").value = "";
    }
})

document.getElementById("btneliminar").addEventListener('click', function () {
    //items seleccionados
    const items = document.querySelectorAll("#lista-tareas li");
    items.forEach(item => {
        const check = item.querySelector("input[type='checkbox']");
        if (check && check.checked) {
            item.remove();
        }
    });
})



