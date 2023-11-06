const listaSpesa = ["castagne" , "zucca" , "riso" , "alloro" , "parmiggiano"];

const container = document.getElementById("listaEffettiva");

i=0;
while(i<listaSpesa.length) {
    const indexLista = listaSpesa[i];
    console.log(indexLista);
    const elHtml = document.createElement("li");
    elHtml.innerHTML = indexLista;
    container.append(elHtml);
    i++;
}