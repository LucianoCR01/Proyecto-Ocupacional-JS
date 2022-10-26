let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

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
    const respuesta = await fetch("http://127.0.0.1:5500/libreria/objetosCutralCo.json");
    const json = await respuesta .json();
    localStorage.setItem("infor",JSON.stringify(json));
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