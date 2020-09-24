let listaSuma = []
var a = b = c = d = e = f = g = h = i = j = k = l =  0;

function info() {

    for (let z = 1; z <= 1000; z++) {
        var x = Math.floor(Math.random()*6+1);
        var y = Math.floor(Math.random()*6+1);
        suma = (x + y);
        listaSuma [z] = suma;

        switch(suma){
            case 1:
                a++;
                break;
            case 2:
                b++;
                break;
            case 3:
                c++;
                break;
            case 4:
                d++;
                break;
            case 5:
                e++;
                break;
            case 6:
                f++;
                break;
            case 7:
                g++;
                break;
            case 8:
                h++;
                break;
            case 9:
                i++;
                break;
            case 10:
                j++;
                break;
            case 11:
                k++;
                break;
            case 12:
                l++;
                break;
        }
    }
    console.log("Dado numero 1: " + x);
    console.log("Dado numero 2: " + y);
    console.log("Suma de los dos dados: " +suma);
}

console.log(info()); 

document.write("El 1 ha salido: " +  a + " veces<br>");
document.write("El 2 ha salido: " +  b + " veces<br>");
document.write("El 3 ha salido: " +  c + " veces<br>");
document.write("El 4 ha salido: " +  d + " veces<br>");
document.write("El 5 ha salido: " +  e + " veces<br>");
document.write("El 6 ha salido: " +  f + " veces<br>");
document.write("El 7 ha salido: " +  g + " veces<br>");
document.write("El 8 ha salido: " +  h + " veces<br>");
document.write("El 9 ha salido: " +  i + " veces<br>");
document.write("El 10 ha salido: " +  j + " veces<br>");
document.write("El 11 ha salido: " +  k + " veces<br>");
document.write("El 12 ha salido: " +  l + " veces<br>");