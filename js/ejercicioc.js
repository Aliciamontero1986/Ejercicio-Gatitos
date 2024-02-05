

//EJERCICIO C 

console.log('------------ EJERCICIO C -------------')



var gato= '🐈'
var cuadrado= '⬛'

var cantidadDePasos= 4
var cantidadDeGatos = 10



for( var i=0; i<cantidadDeGatos; i++){
    var pintar ='Gato #' + (i+1) + ': ' + gato 
    if (i%2 != 0) {
        pintar += cuadrado
    }
           for(var j=0; j<cantidadDePasos; j++){
            pintar += '🐾'
            }

        console.log(pintar)
}
