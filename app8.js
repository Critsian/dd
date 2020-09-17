numero = prompt("Ingrese un numero: ");

if(numero%2 == 0){
    document.write("El numero ingresado es par:" + numero);
}else{
    document.write("El numero ingresado no es par:" + numero);
}

/*		otra forma de hacerlo

numero = prompt("Ingrese un numero: ");

(numero%2==0? document.write("El numero ingresado es par:" + numero): document.write("El numero ingresado no es par:" + numero));

*/