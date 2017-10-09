//Solicito una frase que será mi paramtero de entrada.
var phrase=prompt('Ingrese una frase');
//Valido que si no ingresa ninguna cadena me vuelva a pedir
while(phrase=''){
  var phrase=prompt('Ingrese una frase');
}
//Creando mi función cifrado
var cipher=function(phrase){

  //declaro las variables que utilizaré para almacenar mis valores
  var codAscii;
  var cipCesar;
  var newPhrase="";

  //Bucle que me sirve para obtener convertir mi frase y cifrarla.
  for(var i=0; i<phrase.length; i++){
    //Obtengo el código ascii de la letra en su posición i
    codAscii=phrase.charCodeAt(i);
    //Verifico si la frase ingresada está escrita en mayúscula
    if(phrase.toUpperCase()==phrase){
    // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las mayúsculas
     cipCesar=(codAscii-65+33)%26+65;
   }else{
    //Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las minúsculas
     cipCesar=(codAscii-97+33)%26+65;
   }

   //Convierte el codigo ASCII a una letra
    var cad=String.fromCharCode(cipCesar);
  //Concatena las letras que van llegando en cada iteración y lo almacena en mi variable
    newPhrase=newPhrase.concat(cad);
  }
  //Retorna la cadena total de todas las letras convertidas
  return newPhrase;
}

//Creando mi función descifrar;
var decipher=function(newPhrase) {
  var acum;
  var valor;
  var descipherPhrase='';
//Bucle que me sirve para obtener convertir mi frase y descifrarla.
  for(var i=0; i<newPhrase.length; i++){
    //Obtengo el código ascii de la letra en su posición i
    acum=phrase.charCodeAt(i);
    //Verifico si la frase ingresada está escrita en mayúscula
    if(newPhrase.toUpperCase()==newPhrase){
      // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las mayúsculas
      val=(acum-65+33)%26;
    }else{
      // Me convierte la letra que tenia en ascii a cifrado de cesar; esta formula se utiliza para las minúsculas
      val=(acum-97+33)%26;
    }

    //Convierte el codigo ASCII a una letra
    var str=String.fromCharCode(val);
    //Concatena las letras que van llegando en cada iteración y lo almacena en mi variable
    descipherPhrase=descipherPhrase.concat(str);
  }
  //Retorna la frase descifrada
  return descipherPhrase;
}
