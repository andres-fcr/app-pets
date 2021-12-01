document.getElementById('inputId').style.display = 'none';

const dbUser = ' http://localhost:4000/users/';


const capturarDatos = () => {
    const nombre = document.getElementById('InputName').value;
    const apellido = document.getElementById('InputLastName').value;
    const email = document.getElementById('InputEmail').value;

    const user = {
        nombre,
        apellido,
        email
    }
    return user;
}

//guardar usuario

const formulario = document.querySelector('.form-group');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturarDatos();

    await fetch(dbUser, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

})

// Busqueda por correo 

const btnCorreo = document.getElementById('btnCorreo');

btnCorreo.addEventListener('click', async() => {

    const input = document.getElementById('InputEmail').value;
    const resp = await fetch(dbUser);
    const lista = await resp.json()
    const buscado = lista.find(u => u.email.toLocaleLowerCase() === input.toLocaleLowerCase())
    if (buscado !== undefined) {
        const { nombre, apellido, id } = buscado;
        document.getElementById('InputName').value = nombre;
        document.getElementById('InputLastName').value = apellido;
        document.getElementById('inputId').value = id;
    } else {
        alert('Correo no encontrado')
    }
})

// Modificar datos despues de busqueda

const btnModificar = document.getElementById('btnModificar');

btnModificar.addEventListener('click', async () => {

    const ModificarData = capturarDatos();
    const { nombre, apellido, email } = ModificarData;

    if (nombre === "", apellido === "", email === "") {
        alert('Llenar todos los campos')
    }
    else {
        const id = document.getElementById('inputId').value;
        console.log(ModificarData)
        await fetch(dbUser + id, {
            method: 'PUT',
            body: JSON.stringify(ModificarData),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }

})