const cadena = prompt("Ingrese una cadena de texto.");

function info() {

    var resultado = "La cadena \""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }

  //let dd = info();
  //console.log(dd);
  
  console.log(info());

  /*
		otra forma de hacerlo

function info2() {

    var resultado = "La cadena \""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    (cadena == cadena.toUpperCase()? resultado += " está formada sólo por mayúsculas":(cadena == cadena.toLowerCase())?resultado += " está formada sólo por minúsculas":resultado += " está formada por mayúsculas y minúsculas") 
    
    return resultado;
  }
  console.log(info2());
  */