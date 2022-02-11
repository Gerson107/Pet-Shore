
let arrayArticulos = []
let arrayJuguetes = []
async function getDatos() {
    await fetch("https://apipetshop.herokuapp.com/api/articulos")
    .then((response) => response.json())
    .then((dato) => {
        arrayArticulos.push(...dato.response)
        arrayJuguetes = arrayArticulos.filter( juguete => juguete.tipo === "Juguete" )
       console.log(arrayArticulos)
       console.log(arrayJuguetes)
       showProduct(arrayJuguetes)
      
})
}
getDatos()
function showProduct(arrayJuguetes) {
    let product = ""
    let arrayJuguetesShow = []
    arrayJuguetesShow.push(...arrayJuguetes)
    console.log(arrayJuguetesShow)

    arrayJuguetesShow.map((producto) => {

            product += `
            <div class="  col">
              <div class="card shadow-sm">
                <h5 class="card-title">${producto.nombre} </h5>
                <img src="${producto.imagen}"> </img>
                <div class="card-body">
                  <p class="card-text">${producto.descripcion}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-lg btn-outline-secondary">Agregar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg></button> 
                    </div>
                    <small class="text-muted">Stock: ${producto.stock} </small>
                  </div>
                </div>
              </div>
            </div>
            ` 
            console.log(product)
       })
   document.querySelector(".productos").innerHTML = product
}
