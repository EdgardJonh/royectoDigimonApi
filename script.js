
function cargarDigimon() {
    let se = document.getElementById('seleccioneDigimon').value
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${se}`)
    .then(documento => documento.json())
    .then(dato => {
        console.log(dato)
        
     

        /// TAREA PARA MA;ANA agregar los nombres de los digimon en el select HTML...


        let img1 = dato[0].img   
        let nombre = dato[0].name
        let nivel = dato[0].level   


        let imagen = document.getElementById('img')
        imagen.src = img1

        let nom = document.getElementById('nombre')
        nom.innerHTML = nombre

        let niv = document.getElementById('nivel')
        niv.innerHTML = nivel
    })
}
function carga() {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then(documento => documento.json())
    .then(dato=>{
        let cargamos = document.getElementById('seleccioneDigimon')
        dato.forEach(element => {
           let opciones = document.createElement('option')
           opciones.text = element.name
            cargamos.add(opciones)
           //console.log(element.name)
        });

    })
  
}
document.addEventListener('DOMContentLoaded', carga)

