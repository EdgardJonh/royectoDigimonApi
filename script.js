
function cargarDigimon() {
    let se = document.getElementById('seleccioneDigimon').value
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${se}`)
    .then(documento => documento.json())
    .then(dato => {
        console.log(dato)
        // for (let i = 0; i < dato.length; i++) {
        //     let elementos = dato[i];
           
        // console.log(elementos.name)
           
            
        // }
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

