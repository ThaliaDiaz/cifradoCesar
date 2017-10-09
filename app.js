var phrase=prompt('Ingrese una frase');

var acum;
var val;
var str="";
for(var i=0; i<phrase.length; i++){
  val=phrase.charCodeAt(i);
  acum=(val-65+33)%26+65
  var cad=String.fromCharCode(acum);
 str=str.concat(cad);
}
 document.write(str);

//var phrase='ABC'

/* //phrase.length;
 phrase.charCodeAt(0);
 var val=(65-65+33)%26+65;
 String.fromCharCode(val);
*/
