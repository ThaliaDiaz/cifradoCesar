# CIFRADO DEL CESAR

Este es el README de mi programa de CIFRADO DEL CESAR, que nos solicita lo siguiente:

## PROBLEMA

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el
mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de
desplazamiento de 33 espacios hacia la derecha.

### Por ejemplo:

- Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
- Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

## RESTRICCIONES

1.Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26

2.Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher

3.El usuario no debe poder ingresar un campo vacío o que contenga números

## PSEUDOCODIGO

Algoritmo CifradoCesar
	Escribir Ingrese una una frase;
	Leer phrase;
	Funcion newPhrase <- Cipher ( phrase )
		Leer var codAscii;
		Leer var cipCesar;
		Leer var newPhrase='';

		Para i<-0 Hasta phrase.length Con i+1  Hacer
			codAscci=phrase.charCodeAt(i);
			Si phrase.toUpperCase()==phrase Entonces
				cipCesar=(codAscii-65+33)%26+65;
			SiNo
				cipCesar=(codAscii-97+33)%26+65;
			Fin Si
			var cad=String.fromCharCode(cipCesar);
			newPhrase=newPhrase.concat(cad);
		Fin Para

	Fin Funcion
	Funcion  descipherPhrase<- decipher( newPhrase )
		Leer var acum;
		Leer var values;
		Leer var descipherPhrase='';
		Para i<-0 Hasta newPhrase.length Con i+1  Hacer
			acum=phrase.charCodeAt(i);
			Si newPhrase.toUpperCase()==newPhrase Entonces
				values=(codAscii-65+33)%26;
			SiNo
				values=(codAscii-97+33)%26;
			Fin Si
			var str=String.fromCharCode(cipCesar);
			descipherPhrase=newPhrase.concat(str);
		Fin Para

	Fin Funcion

FinAlgoritmo
