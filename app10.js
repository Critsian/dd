var texto = prompt("Ingrese una cadena de texto.");

var resultado = "La cadena \""+texto+"\" ";

function info() {

    texto = texto.toLowerCase();
    let alReves = texto.split("").reverse().join("");

    (texto === alReves.toLowerCase()? resultado += "\n Este texto es un palindromo \""+alReves+"\" texto original \""+texto+"\"": resultado +="\n No es un palindromo \""+alReves+"\" texto original \""+texto+"\""); 
    
    return resultado;
}

console.log(info());