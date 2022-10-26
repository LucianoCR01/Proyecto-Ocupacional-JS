let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('tabla').appendChild(table);
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Nodo";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "AP";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Tecnologia";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Registrados";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Disponibilidad";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Service Max";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
thead.appendChild(row_1);

async function datosJson(){
    const respuesta = await fetch("http://127.0.0.1:5500/libreria/objetosComodoro.json");
    const json = await respuesta.json();
    for (const ele of json) {
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('td');
        heading_1.innerHTML = ele.nodo;
        let heading_2 = document.createElement('td');
        heading_2.innerHTML = ele.AP;
        let heading_3 = document.createElement('td');
        heading_3.innerHTML = ele.tecnologia;
        let heading_4 = document.createElement('td');
        heading_4.innerHTML = ele.registrados;
        let heading_5 = document.createElement('td');
        heading_5.innerHTML = ele.disponibilidad;
        let heading_6 = document.createElement('td');
        heading_6.innerHTML = ele.service;
        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        row_1.appendChild(heading_4);
        row_1.appendChild(heading_5);
        row_1.appendChild(heading_6);
        thead.appendChild(row_1);
    }
}
datosJson()
//-----------------------------------------------------------------------------------------------------//
let tableBuscador = document.createElement('table');
let theadBuscador = document.createElement('thead');
let tbodyBuscador = document.createElement('tbody');
let c=0
function botonBusqueda() {
    ++c
    var infoBusq = document.getElementById("buscador").value;
    document.querySelector(".tablaa").style.display="none"
    if (c===1){
    tableBuscador.appendChild(theadBuscador);
    tableBuscador.appendChild(tbodyBuscador);
    document.getElementById('tablaBuscador').appendChild(tableBuscador);
    let rowbus = document.createElement('tr');
    let headingBus_1 = document.createElement('th');
    headingBus_1.innerHTML = "Nodo";
    let headingBus_2 = document.createElement('th');
    headingBus_2.innerHTML = "AP";
    let headingBus_3 = document.createElement('th');
    headingBus_3.innerHTML = "Tecnologia";
    let headingBus_4 = document.createElement('th');
    headingBus_4.innerHTML = "Registrados";
    let headingBus_5 = document.createElement('th');
    headingBus_5.innerHTML = "Disponibilidad";
    let headingBus_6 = document.createElement('th');
    headingBus_6.innerHTML = "Service Max";
    rowbus.appendChild(headingBus_1);
    rowbus.appendChild(headingBus_2);
    rowbus.appendChild(headingBus_3);
    rowbus.appendChild(headingBus_4);
    rowbus.appendChild(headingBus_5);
    rowbus.appendChild(headingBus_6);
    theadBuscador.appendChild(rowbus);

    async function datosJsonBuscador(){
        const respuestaBuscador = await fetch("http://127.0.0.1:5500/libreria/objetosComodoro.json");
        const jsonBuscador = await respuestaBuscador.json();
        function buscador (objBusqueda){
            return objBusqueda.tecnologia === infoBusq;
        }
        let fltroBuscador = jsonBuscador.filter(buscador)
        for (const eleBuscador of fltroBuscador) {
            let row_1Buscador = document.createElement('tr');
            let heading_1Buscador = document.createElement('td');
            heading_1Buscador.innerHTML = eleBuscador.nodo;
            let heading_2Buscador = document.createElement('td');
            heading_2Buscador.innerHTML = eleBuscador.AP;
            let heading_3Buscador = document.createElement('td');
            heading_3Buscador.innerHTML = eleBuscador.tecnologia;
            let heading_4Buscador = document.createElement('td');
            heading_4Buscador.innerHTML = eleBuscador.registrados;
            let heading_5Buscador = document.createElement('td');
            heading_5.innerHTMLBuscador = eleBuscador.disponibilidad;
            let heading_6Buscador = document.createElement('td');
            heading_6Buscador.innerHTML = eleBuscador.service;
            row_1Buscador.appendChild(heading_1Buscador);
            row_1Buscador.appendChild(heading_2Buscador);
            row_1Buscador.appendChild(heading_3Buscador);
            row_1Buscador.appendChild(heading_4Buscador);
            row_1Buscador.appendChild(heading_5Buscador);
            row_1Buscador.appendChild(heading_6Buscador);
            theadBuscador.appendChild(row_1Buscador);
        }
    }
    datosJsonBuscador()
    }
    else {
        window.location.reload() 
    }
}