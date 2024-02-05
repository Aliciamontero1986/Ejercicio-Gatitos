
//EJERCICIO A

var gatos=['😺', '😸', '😹']

var cantidadDeGatos= 10


for( var i=0; i<cantidadDeGatos; i++){
    var pintar ='Gato #' + (i+1) +': ' + gatos[i%3]
    console.log(pintar)
}











