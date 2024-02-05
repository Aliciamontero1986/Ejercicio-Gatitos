//EJERCICIO B

console.log('------------ EJERCICIO B -------------')

var gato= '🐈'

var cantidadDePasos= 5
var cantidadDeGatos = 3



for( var i=0; i<cantidadDeGatos; i++){
    var pintar ='Gato #' + (i+1) + ': ' + gato 
    
        for(var j=0; j<cantidadDePasos; j++){
            pintar += '🐾'
        }

        console.log(pintar)
}
