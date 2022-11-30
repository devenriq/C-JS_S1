/**4.	Leer una cadena de texto a través de un formulario y al presionar un botón generar y mostrar los siguientes resultados: 
o	Número de palabras
o	primera palabra
o	última palabra
o	las palabras colocadas en orden inverso
o	las palabras ordenadas de la “a” la “z” y 
o	las palabras ordenadas de la “z” a la “a”.
o	Imprimir la cadena reemplazando: “a” por “@”, “e” por “#”, “i” por “!”, “o” por “0” y “u” por “?”.
 */

/** Función Calcular */
function Calcular(){

    let cadena = document.getElementById("txtcadena").value;

    /**Realizamos las Operaciones con las Variables */
    let tamaño = cadena.length;
    let cadenaArray = cadena.split(' ')
    let primeraPalabra = cadenaArray[0];
    let ultimaPalabra = cadenaArray[cadenaArray.length - 1];
    let inverso = cadenaArray.reverse().join(" ");
    let ordenAscendente = cadenaArray.sort().join(" ");
    let ordenDescendente = cadenaArray.sort().reverse().join(" ");
    let reeamplazarTexto = buscar(cadena);

    function buscar(texto){

        for (let index = 0; index < texto.length; index++) {
            if(texto[index] == 'a'){
                texto = texto.replace('a','@');
            }else{
                if(texto[index] == 'e'){
                    texto = texto.replace('e','#');
                }else{
                    if(texto[index] == 'i'){
                        texto = texto.replace('i','!');
                    }else{
                        if(texto[index] == 'o'){
                            texto = texto.replace('o','0');
                        }else{
                            texto = texto.replace('u','?');
                        }
                    }
                }
            }
            
        }
        return texto;
    }

    document.getElementById("resultado").innerHTML = `1. El Tamaño de la Palabra: <strong>${tamaño}</strong> <br/>\
                                                        2. Primera Palabra: <strong>${primeraPalabra}</strong> <br/>\
                                                        3. Ultima Palabra: <strong>${ultimaPalabra}</strong> <br/>\
                                                        4. Las palabras colocadas en orden inverso: <strong>${inverso}</strong> <br/>\
                                                        5. Las palabras ordenadas de la “a” la “z”: <strong>${ordenAscendente}</strong> <br/>\
                                                        5. Las palabras ordenadas de la “z” a la “a”: <strong>${ordenDescendente}</strong> <br/>\
                                                        6. Imprimir la cadena reemplazando: “a” por “@”, “e” por “#”, “i” por “!”, “o” por “0” y “u” por “?” <br/> \
                                                        Palabra Reemplazada : <strong>${reeamplazarTexto}</strong>`;


}