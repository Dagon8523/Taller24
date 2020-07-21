let peso = prompt('digite su peso');
let estatura = prompt('digite su estatura');
let Imc=0;

function calcularImc(peso,estatura){

     Imc= peso/(estatura^2);

    alert("Su indice de masa corporal es"+Imc)
}

calcularImc(peso,estatura)