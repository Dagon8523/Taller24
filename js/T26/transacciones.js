

var cuenta ={
    titular:"Alex",
    saldo:"",  
}

let saldoingreso=prompt('digite saldo a ingresar');

function ingresar(saldoingreso){
    cuenta.saldo=cuenta.saldo+saldoingreso;
    console.log("su saldo es $"+cuenta.saldo);
    alert("su saldo actual es  $"+cuenta.saldo);
     
}
ingresar(saldoingreso)