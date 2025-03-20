let numero_cuadros = 0;
let contenedor=document.getElementById("contenedor");

let Consoladores=["Succionador de clítoris", "Dildo silicona líquida", "Bolas Kegel con control remoto y Estimulador ibiza negro", "Dildo con vibración 23cm", "Bomba para el pene Hydromax7 Wide Boy Rojo", "Vibrador con dildos alternantes y bola percutora 4 motores", "Vibrador con doble bola estumuladora", "Plug anal con vibración", "Masturbador streetgirl 5", "Vibrador con punto G con pulsación 3 motores", "Dildo Roma 22cm", "Dildo Another World rosa y morado 22,4cm", "Baile vibrador transparente color rosa", "Scaled Swamp Monster Dildo 9,4cm", "Monstropus Monster dildo de tentáculo silicona 8,5cm", "Ravanger Rippled dildo de tentáculo 8cm"]

let Imagenes=["https://www.sexplayers.es/51045-home_default/succionador-de-clitoris-pret-a-porter.jpg", "https://www.sexplayers.es/67964-home_default/gorgantua-dildo-silicona-liquida-22-cm.jpg", "https://www.sexplayers.es/71055-home_default/bolas-kegel-con-control-remoto-y-estimulador-ibiza-negro.jpg", "https://www.sexplayers.es/79536-small_default/quintus-dildo-con-vibracion-thrusting-y-waving-360-9-23-cm.jpg", "https://www.sexplayers.es/78433-home_default/bomba-para-el-pene-hydromax7-wide-boy-rojo.jpg", "https://www.sexplayers.es/79546-home_default/nico-vibrador-con-dildos-alternantes-y-bola-percutora-4-motores.jpg", "https://www.sexplayers.es/79485-home_default/rollie-vibrador-con-doble-bola-estimuladora.jpg", "https://www.sexplayers.es/79284-home_default/plug-anal-con-vibracion-king-sized-7-negro.jpg", "https://www.sexplayers.es/79204-home_default/masturbador-streetgirls-5.jpg", "https://www.sexplayers.es/79130-home_default/beat3-vibrador-con-punto-g-con-pulsacion-3-motores.jpg", "https://www.sexplayers.es/78743-home_default/dildo-roma-22-cm.jpg", "https://www.sexplayers.es/78586-home_default/dildo-another-world-rosa-y-purpura-224-cm-88.jpg", "https://www.sexplayers.es/78234-home_default/baile-vibrador-transparente-color-rosa.jpg", "https://www.sexplayers.es/78528-home_default/scaled-swamp-monster-dildo-94.jpg", "https://www.sexplayers.es/78519-home_default/monstropus-monster-dildo-de-tentaculo-silicona-85.jpg", "https://www.sexplayers.es/78513-home_default/ravager-rippled-dildo-de-tentaculo-8.jpg"]

function sumarCuadro(){
    let nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("tarjeta")

    let nuevoImg = document.createElement("img");
    nuevoImg.src = Imagenes[numero_cuadros];
    nuevaTarjeta.append(nuevoImg);

    let nuevoDiv = document.createElement("div");
    nuevoDiv.textContent=Consoladores [numero_cuadros];
    nuevoDiv.classList.add("cuadro")
    nuevaTarjeta.append(nuevoDiv);

    nuevaTarjeta.addEventListener("click", añadirProducto);
    contenedor.appendChild(nuevaTarjeta);
    numero_cuadros++;

}

for(let contador=0;contador < 16;contador = contador + 1){
    sumarCuadro();
}

let contenedor2=document.getElementById("contenedor2");

function añadirProducto(){
    let nuevoDiv = document.createElement("div");

    nuevoDiv.textContent="nuevo div" + numero_cuadros;
    nuevoDiv.classList.add("cuadro2")

    contenedor2.appendChild(nuevoDiv);
}