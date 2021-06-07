function middlecharacter(palabra){
    var separacion = palabra.split("")
    for(var i = 0; i <= separacion.length; i++){

    }
    if(separacion.length % 2 === 1){
    var divicion = (i / 2) - 1
    var letra = palabra[divicion]
    console.log(letra)
    }else{ 
        var i = separacion.length
        var divicion = (i / 2) - 1
        var letraDos = separacion[divicion]
        var suma = divicion + 1
        var letraTres = separacion[suma]
        console.log(letraDos + letraTres)
    }
}

middlecharacter("mayonesa")