function area_triangulo (base, altura){
    let resultado = (base*altura)/2;
    return resultado;
}

function area_rectangulo (base, altura){
    let resultado = base * altura;
    return resultado;
}

function area_circulo(radio){
    let resultado = 3.1416 * radio * radio;
    return resultado;
}

function celsiusToFarenheit(grados){
    let resultado = (grados * 9 / 5) + 32;
    return resultado;
}

function verPar(num){
    if (num % 2 === 0){
        console.log("El número " + num + " es par");
    }
    else {
        console.log("El número"+ num + " NO es par");
    }
}


console.log(area_triangulo(5,2));
console.log(area_rectangulo(5,2));
console.log(area_circulo(1));
console.log(celsiusToFarenheit(20));
console.log(verPar(8));

let operacion = 2;

switch (operacion){
    case 1: 
        console.log(area_triangulo(5,2));
        break;
    case 2:
        console.log(area_rectangulo(5,2));
        break;
}