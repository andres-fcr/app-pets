const obj = document.querySelector('.grid-elementos');

const localFavs = () => {
    const detalle = JSON.parse(localStorage.getItem("Favs"));
    const { imagen, nombre, id, raza } = detalle;
    obj.innerHTML += `
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
}

document.addEventListener('DOMContentLoaded', localFavs)