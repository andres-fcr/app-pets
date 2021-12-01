const desp = document.querySelector('.list-group');

const getLocalStorage = (e) => {
    e.preventDefault();
    const det = JSON.parse(localStorage.getItem("Detail"));
    const { imagen, nombre, historia, imgusuario, id, genero, edad, ubicacion, usuario } = det;
    desp.innerHTML += `
    <div>
    <img id="imgC" width="480px" src=${imagen} class=" position-relative start-50 translate-middle img-fluid pt-3"
        alt="...">

    <li id='textC' class="card container py-3" style="width: 30rem;">

        <div id="">
            <a id="backBtn" class='btnBack' href="detailPets.html">
                    <img id="" width="40px"
                        src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638313833/appmascotas/back_tbbfoy.png"
                        alt="">
            </a>
            <a id="${id}" class='favBtn' href="detailPets.html">
            <img id=""
                src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638329902/appmascotas/Guardar_qzzpno.png"
                alt="">
    </a>
        </div>
        <div class="card-b container-fluid cardB mt-4">
            <div>
                <img class="mini" id="" src="${genero}" alt="">
                <div class="py-3">
                    <h4 class="card-tite fw-bold col">${nombre}</h4>
                </div>
                <div>
                    <img class="mini" id=""
                        src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638323584/appmascotas/edad_qc7aox.png"
                        alt="">
                    <div class="py-3">
                        <h5 class="card-tite col">${edad}</h5>
                    </div>
                    <div>
                        <img class="mini" id=""
                            src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638324043/appmascotas/Component_1_bv84qh.png"
                            alt="">
                        <div class="py-3">
                            <h5 class="card-tite col">${ubicacion}</h5>
                        </div>
                    </div>
                    <div class="py-3">
                        <h5 class="card-tite fw-bold col">Personalidad</h5>
                        <div clas="row">
                            <img class="" id=""
                                src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638324415/appmascotas/Frame_6_oaairq.png"
                                alt="">
                            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638324415/appmascotas/Frame_7_kmwhmy.png"
                                alt="">
                            <img src="https://res.cloudinary.com/dbyw7mbt6/image/upload/v1638324415/appmascotas/Frame_8_ktmooj.png"
                                alt="">
                        </div>
                    </div>

                    <div class="">
                        <h5 class=" py-3 card-tite fw-bold col">Historia de ${nombre}</h5>
                        <p class="card-tet">${historia}</p>
                    </div>
                    <div class="row container-fluid">
                        <img class="col" id="contacto" src="${imgusuario}" alt="">
                        <div class="col mx-1">
                            <h5 id="pfor">Publicado por</h5>
                            <h5 id="pusuario" class="fw-bold">${usuario}</h5>
                        </div>
                        <div class=" mx-2 col ">
                            <a href="#" class="col btn botonC">Contactar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</div>

    `

    
}

    document.addEventListener('DOMContentLoaded', getLocalStorage)



desp.addEventListener('click', (e) => {

    if(e.target.classList.contains('btnBack')){
        window.location.href = "index.html";
    }
 
})




desp.addEventListener('click', (e) => {

    const btnFavs = e.target.classList.contains('favBtn');
    const id = e.target.id;


    if(btnFavs){
         const lista = getData(endpoint);
         const objeto = lista.find(list => list.id === Number(id))
         localStorage.setItem("Favs",JSON.stringify(objeto));
    }

    
    
})