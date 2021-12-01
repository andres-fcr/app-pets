//document.getElementById('idElementoAOcultar').style.display = 'none'

let btnPerros = document.getElementById('btn-perros')
let btnGatos = document.getElementById('btn-gatos')



const getElements = async (url) => {
    let showElements = document.querySelector('.grid-elementos')
    showElements.innerHTML = ''

    const resp = await fetch(url)
    const data = await resp.json()

    data.forEach(element => {
        const { nombre, raza, id, imagen } = element
        showElements.innerHTML += `
        <div class="col elementos elemento-url">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay" id=${id}>
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                    </div>
                </div>
            </a>
        </div>
        `

    });
}


btnPerros.addEventListener('click', () => {
    getElements('http://localhost:4002/perros/')
})

btnGatos.addEventListener('click', () => {
    getElements('http://localhost:4001/gatos/')
})


//Guardar enn loclalStorage los elementos para desplegar en detalles



/* const insertDetail = document.querySelector('.grid-elementos')


        insertDetail.addEventListener('click', async(e) => {
            const clickImg = e.target.classList.contains('card-img-overlay');
            const id = e.target.id;
        
            if(clickImg) {
                const listar = await getElements(urlPerros);
                console.log(listar)
                const findID = listar.find(list => list.id === Number(id))
                localStorage.setItem("Detail",JSON.stringify(findID));
                window.location.href = "detail.html"
            }
        })*/

const endpoint = 'http://localhost:4002/perros';

const getData = async (url) => {

    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}




const element = document.querySelector('.grid-elementos');

element.addEventListener('click', async (e) => {

    const id = e.target.id;
    const btnDetail = e.target.classList.contains('card-img-overlay');//hasta AQUI VA BIEN

    if (btnDetail) {
        const lista = await getData(endpoint);
        const objeto = lista.find(list => list.id === Number(id))
        localStorage.setItem("Detail", JSON.stringify(objeto));
        window.location.href = "detailPets.html"
    }

})

const endpointone = 'http://localhost:4001/gatos';

const getDataGato = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}



const elementGato = document.querySelector('.grid-elementos');

elementGato.addEventListener('click', async (e) => {
    const id = e.target.id;
    const btnDetail = e.target.classList.contains('card-img-overlay');//hasta AQUI VA BIEN
    if (btnDetail) {
        const lista = await getDataGato(endpointone);
        const objeto = lista.find(list => list.id === Number(id))
        localStorage.setItem("Detail", JSON.stringify(objeto));
        window.location.href = "detailPets.html"
    }

})


