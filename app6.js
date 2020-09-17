var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Dni = prompt("ingrese el numero del DNi: ");
letraDni = prompt("ingrese la letra que se encentra en su DNi: ");

factorial = (Dni % 23);

if((Dni > 0) && (Dni < 99999999)){
    console.log("La letra del DNI correspondiente es: " + letras[factorial]);
}
if(letraDni!==(letras[factorial])){
    console.log('la letra ingresada "'+letraDni + '", no corresponde con la proporcionada por el programa: "' + (letras[factorial]) +'"')
}