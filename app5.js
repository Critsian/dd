var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(Math.sign(numero2)==1) {
  console.log("numero2 es positivo");
}
if(Math.sign(numero1)==-1) {
  console.log("numero1 es negativo o distinto de cero");
}
if((numero1++)<=numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2\n" + "numero1 despues de aumentar en 1 unidad: " + numero1);
}